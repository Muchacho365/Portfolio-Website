"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  Send,
  Terminal,
  User,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

const SUGGESTED_PROMPTS = [
  "What is Simon's core tech stack?",
  "Tell me about his hardware internship",
  "What projects has Simon built?",
  "Why hire Simon for a remote role?",
  "Can I download his resume?",
];

function formatTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I am PortfolioGPT, Simon Mezampeh's personal AI assistant powered by Google Gemini 3.8 Flash. I have full knowledge of Simon's technical skills, education at Takoradi Technical University, projects, and work experience. How can I help you today?",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom whenever messages change or loading state toggles
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (textToSend) => {
    const promptText = (textToSend || input).trim();
    if (!promptText || isLoading) return;

    setErrorMessage(null);
    const userMsg = {
      id: `user-${Date.now()}`,
      role: "user",
      content: promptText,
      time: formatTime(),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Send conversation to Next.js route handler
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to receive a response from AI.");
      }

      const botMsg = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.message || "I apologize, but I could not formulate a response. Please try again.",
        time: formatTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("AI Assistant chat error:", err);
      setErrorMessage(err.message || "Something went wrong. Please check your network and try again.");
    } finally {
      setIsLoading(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Chat reset! Ask me anything about Simon's skills, software projects, or remote engineering availability.",
        time: formatTime(),
      },
    ]);
    setErrorMessage(null);
  };

  return (
    <section id="ai-assistant" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 uppercase tracking-widest shadow-sm shadow-emerald-500/10">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive AI Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Ask Simon&apos;s AI Assistant
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Directly query Simon&apos;s background, tech stack, codebase architectures, and readiness for remote software engineering roles.
          </p>
        </div>

        {/* Chat Card Shell */}
        <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800/80 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-zinc-950/80 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-500/40 bg-zinc-800 flex-shrink-0">
                <Image
                  src="/images/avatar2.png"
                  alt="PortfolioGPT Avatar"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-zinc-100">
                    PortfolioGPT
                  </span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 block">
                  gemini-3.8-flash • Native Serverless API
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetChat}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/70 border border-zinc-800 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Suggested Prompts Strip */}
          <div className="px-4 sm:px-6 py-3 bg-zinc-950/40 border-b border-zinc-800/60 overflow-x-auto">
            <div className="flex items-center gap-2 w-max">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1 mr-1">
                <HelpCircle className="w-3 h-3" />
                <span>Suggested:</span>
              </span>
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  disabled={isLoading}
                  className="px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-zinc-800/60 hover:bg-zinc-800 hover:text-emerald-400 border border-zinc-700/60 hover:border-emerald-500/40 transition-all duration-200 whitespace-nowrap active:scale-95 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 max-h-[460px] min-h-[350px] bg-zinc-950/30"
          >
            {messages.map((msg) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[88%] sm:max-w-[80%] ${
                    isAssistant ? "mr-auto" : "ml-auto flex-row-reverse"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                      isAssistant
                        ? "bg-zinc-900 border border-emerald-500/40 text-emerald-400 overflow-hidden relative"
                        : "bg-emerald-500 text-zinc-950"
                    }`}
                  >
                    {isAssistant ? (
                      <Image
                        src="/images/avatar2.png"
                        alt="Simon AI"
                        width={32}
                        height={32}
                        className="object-cover object-top"
                      />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className="space-y-1">
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        isAssistant
                          ? "bg-zinc-900/90 text-zinc-200 border border-zinc-800/90 shadow-sm whitespace-pre-wrap"
                          : "bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-medium shadow-md shadow-emerald-500/10"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <span
                      className={`text-[10px] font-mono text-zinc-500 block ${
                        isAssistant ? "text-left pl-1" : "text-right pr-1"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-3 mr-auto max-w-[80%] items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-900 border border-emerald-500/40 flex-shrink-0 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-4 h-4 animate-spin text-emerald-400" />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            {/* Error Banner */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{errorMessage}</p>
                  <p className="text-[11px] text-rose-400 mt-0.5">
                    Make sure GEMINI_API_KEY is configured or try again in a few moments.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Input Form Bar */}
          <form
            onSubmit={handleSubmit}
            className="p-3 sm:p-4 bg-zinc-950/80 border-t border-zinc-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Simon's background, stack, or projects..."
              disabled={isLoading}
              className="flex-1 bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 text-zinc-950 disabled:text-zinc-600 font-medium transition-all duration-200 active:scale-95 flex items-center justify-center flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
