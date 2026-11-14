"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Monitor,
  Smartphone,
  Github,
  Layers,
  Sparkles,
  AlertCircle,
  Code2,
} from "lucide-react";

export default function ProjectPreviewModal({ project, isOpen, onClose }) {
  const [viewportMode, setViewportMode] = useState("desktop");
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Close on Escape key press and lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset state on project change
  useEffect(() => {
    if (project) {
      setIframeError(false);
      setIsLoading(true);
      setViewportMode("desktop");
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const isLiveUrlValid = project.liveUrl && project.liveUrl !== "#";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden text-zinc-100 animate-in zoom-in-95 duration-200">
        {/* Top Browser Chrome Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
          {/* Traffic Light Dots & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-zinc-800">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <h2
                id="modal-project-title"
                className="text-xs sm:text-sm font-medium text-zinc-200 truncate max-w-[200px] md:max-w-xs font-mono"
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Center Viewport Toggles & URL Pill */}
          <div className="flex items-center gap-2">
            {/* Viewport Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs">
              <button
                type="button"
                onClick={() => setViewportMode("desktop")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                  viewportMode === "desktop"
                    ? "bg-zinc-800 text-emerald-400 font-medium shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                title="Desktop View (100%)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode("mobile")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                  viewportMode === "mobile"
                    ? "bg-zinc-800 text-emerald-400 font-medium shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">375px</span>
              </button>
            </div>

            {/* URL Display Indicator */}
            <div className="hidden lg:flex items-center px-3 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-zinc-400 max-w-xs truncate">
              {isLiveUrlValid ? project.liveUrl : "localhost / internal demo"}
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {isLiveUrlValid && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-emerald-500/40 transition-colors"
                title="Open in New Tab"
              >
                <span className="hidden sm:inline">New Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Workspace */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Interactive Preview Canvas */}
          <div className="flex justify-center items-center min-h-[360px] sm:min-h-[460px] lg:min-h-[500px] w-full rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-2 sm:p-4 overflow-hidden relative">
            {isLiveUrlValid && !iframeError ? (
              <div
                className={`transition-all duration-300 relative ${
                  viewportMode === "desktop"
                    ? "w-full h-[520px] rounded-lg overflow-hidden border border-zinc-800"
                    : "w-[375px] max-w-full h-[620px] rounded-[2.5rem] border-8 border-zinc-800 shadow-2xl overflow-hidden bg-black"
                }`}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 z-10 text-zinc-400 space-y-2">
                    <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-mono">Loading live preview...</span>
                  </div>
                )}
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} Live Preview`}
                  className="w-full h-full bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIframeError(true)}
                />
              </div>
            ) : (
              /* Fallback Preview when liveUrl is "#" or iframe embedding is blocked */
              <div className="w-full max-w-3xl flex flex-col items-center text-center p-6 space-y-4">
                <div className="relative w-full aspect-video max-w-xl rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-lg">
                  <Image
                    src={project.previewImage || "/images/nextjs.png"}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-4 text-left">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded-full w-max">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-100 mt-1">{project.title}</h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {!isLiveUrlValid
                      ? "Stand-alone backend/prototype (Local deployment & source available on GitHub)"
                      : "External site restricts direct iframe embedding. Open via 'New Tab' button above."}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Project Architecture & Engineering Notes Panel */}
          <div className="rounded-xl p-4 sm:p-5 bg-zinc-900/70 border border-zinc-800/90 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono">
                  Architecture &amp; Engineering Details
                </h3>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Code</span>
              </a>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.architecture}
            </p>

            <div className="pt-2 border-t border-zinc-800/60 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 mr-1">Stack:</span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
