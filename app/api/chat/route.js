import { NextResponse } from "next/server";
import { generateSystemPrompt } from "@/data/portfolio";

export const dynamic = "force-dynamic";

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

    // Google AI Studio gemini-3.8-flash REST endpoint
    const model = process.env.GEMINI_MODEL || "gemini-3.8-flash";
    const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

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

    const response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(geminiPayload),
    });

    if (!response.ok) {
      const status = response.status;
      let errorData = null;
      try {
        errorData = await response.json();
      } catch {
        // Response body was not JSON
      }

      if (status === 429) {
        return NextResponse.json(
          {
            error: "Gemini AI rate limit reached. Please wait a moment and try again.",
            code: "RATE_LIMIT_EXCEEDED",
          },
          { status: 429 }
        );
      }

      if (status === 401 || status === 403) {
        return NextResponse.json(
          {
            error: "Invalid or unauthorized Gemini API key.",
            code: "UNAUTHORIZED",
          },
          { status: 403 }
        );
      }

      if (status === 400) {
        return NextResponse.json(
          {
            error: errorData?.error?.message || "Invalid request to Gemini API.",
            code: "BAD_REQUEST",
          },
          { status: 400 }
        );
      }

      return NextResponse.json(
        {
          error: errorData?.error?.message || "Failed to communicate with Gemini API.",
          code: "AI_SERVICE_ERROR",
        },
        { status: status >= 500 ? 502 : status }
      );
    }

    const data = await response.json();
    const candidate = data?.candidates?.[0];

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
