import { NextResponse } from "next/server";
import { generateSystemPrompt } from "@/data/portfolio";

export const dynamic = "force-dynamic";

/**
 * Ordered list of Gemini models to try.
 * The route will attempt each in sequence until one succeeds.
 */
const MODEL_CANDIDATES = [
  "gemini-3.8-flash",
  "gemini-flash-lite-latest",
];

/** Per-model request timeout in milliseconds. */
const REQUEST_TIMEOUT_MS = 15_000;

/**
 * Sanitizes and normalizes incoming client messages into the structure
 * expected by Google AI Studio's Gemini generateContent API.
 */
function sanitizeMessages(rawMessages) {
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return [];
  }

  const contents = [];

  for (const item of rawMessages) {
    if (!item || typeof item !== "object") continue;

    // Reject client-provided system role to prevent prompt injection overriding system instruction
    if (item.role === "system") continue;

    // Gemini contents use "user" and "model" roles
    const role = item.role === "assistant" || item.role === "model" ? "model" : "user";

    // Extract text from string content or parts
    let text = "";
    if (typeof item.content === "string") {
      text = item.content;
    } else if (typeof item.text === "string") {
      text = item.text;
    } else if (Array.isArray(item.parts)) {
      text = item.parts
        .map((p) => (typeof p === "string" ? p : p?.text || ""))
        .join(" ");
    }

    text = text.trim();
    if (!text) continue;

    // Bound maximum message length to avoid payload abuse
    if (text.length > 4000) {
      text = text.slice(0, 4000);
    }

    contents.push({
      role,
      parts: [{ text }],
    });
  }

  return contents;
}

/**
 * Attempt a single Gemini generateContent call with a timeout.
 * Returns { ok, data, status } or throws on network / timeout failure.
 */
async function callGemini(model, apiKey, payload) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timer);

    const data = await response.json();
    return { ok: response.ok, status: response.status, data };
  } catch (err) {
    clearTimeout(timer);
    // Re-throw so the caller can distinguish network / abort errors
    throw err;
  }
}

export async function POST(request) {
  try {
    const rawApiKey =
      process.env.GEMINI_API_KEY ||
      process.env["env GEMINI_API_KEY"] ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    const apiKey = typeof rawApiKey === "string" ? rawApiKey.trim() : "";

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Google Gemini API key is not configured.",
          code: "MISSING_API_KEY",
        },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error: "Invalid JSON in request body.",
          code: "INVALID_JSON",
        },
        { status: 400 }
      );
    }

    // Accept either { messages: [...] } or a single { message: "..." } / { prompt: "..." }
    let rawMessages = [];
    if (Array.isArray(body?.messages)) {
      rawMessages = body.messages;
    } else if (typeof body?.message === "string" && body.message.trim()) {
      rawMessages = [{ role: "user", content: body.message.trim() }];
    } else if (typeof body?.prompt === "string" && body.prompt.trim()) {
      rawMessages = [{ role: "user", content: body.prompt.trim() }];
    }

    const sanitizedContents = sanitizeMessages(rawMessages);

    if (sanitizedContents.length === 0) {
      return NextResponse.json(
        {
          error: "Valid message content is required.",
          code: "EMPTY_MESSAGES",
        },
        { status: 400 }
      );
    }

    const geminiPayload = {
      systemInstruction: {
        parts: [
          {
            text: generateSystemPrompt(),
          },
        ],
      },
      contents: sanitizedContents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    };

    // ------------------------------------------------------------------
    // Try each model in order until one succeeds
    // ------------------------------------------------------------------
    const models =
      process.env.GEMINI_MODEL
        ? [process.env.GEMINI_MODEL, ...MODEL_CANDIDATES]
        : MODEL_CANDIDATES;

    let lastError = null;
    let lastStatus = 500;

    for (const model of models) {
      try {
        const result = await callGemini(model, apiKey, geminiPayload);

        if (result.ok) {
          // --- Success path ---
          const candidate = result.data?.candidates?.[0];
          let replyText = "";
          if (candidate?.content?.parts && Array.isArray(candidate.content.parts)) {
            replyText = candidate.content.parts
              .map((p) => p?.text || "")
              .join("")
              .trim();
          }

          if (!replyText) {
            if (candidate?.finishReason === "SAFETY") {
              replyText =
                "I apologize, but I cannot answer that particular inquiry due to content safety guidelines. Feel free to ask about Simon's skills, projects, or background!";
            } else {
              replyText =
                "Hello! I am Simon's AI assistant. Feel free to ask any questions regarding Simon's software engineering background, projects, or technical skills.";
            }
          }

          return NextResponse.json({ message: replyText });
        }

        // Non-OK but got a response — decide whether to retry the next model
        const status = result.status;
        const errMsg = result.data?.error?.message || "";

        // 401/403 is an API key issue, don't retry with another model
        if (status === 401 || status === 403) {
          return NextResponse.json(
            {
              error: "Invalid or unauthorized Gemini API key.",
              code: "UNAUTHORIZED",
            },
            { status: 403 }
          );
        }

        // 429 / 503 / 404 — try next model
        lastError = errMsg || "Gemini API returned HTTP " + status;
        lastStatus = status;
        console.warn(`[chat] Model ${model} returned ${status}: ${errMsg.slice(0, 120)}. Trying next model.`);
        continue;
      } catch (err) {
        // Timeout or network failure — try next model
        const isTimeout = err.name === "AbortError";
        lastError = isTimeout
          ? `Model ${model} timed out after ${REQUEST_TIMEOUT_MS / 1000}s.`
          : err.message || "Network error";
        lastStatus = 504;
        console.warn(`[chat] Model ${model} failed: ${lastError}. Trying next model.`);
        continue;
      }
    }

    // All models exhausted
    return NextResponse.json(
      {
        error:
          "This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.",
        code: "AI_SERVICE_ERROR",
      },
      { status: lastStatus >= 500 ? 502 : lastStatus }
    );
  } catch (error) {
    console.error("Unhandled error in /api/chat route:", error);
    return NextResponse.json(
      {
        error: "An unexpected internal server error occurred.",
        code: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
