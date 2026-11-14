"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  FileText,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-6 sm:p-10 md:p-12 bg-zinc-900/70 border border-zinc-800/80 shadow-2xl backdrop-blur-xl space-y-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/30 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              I am actively seeking remote software engineering internships and junior developer roles. Whether you have a position to discuss, questions about my projects, or an exciting project idea, my inbox is always open.
            </p>
          </div>

          {/* Interactive Email Bar with One-Click Copy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            {/* Clickable Mailto Link */}
            <a
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 text-zinc-100 font-mono text-sm sm:text-base transition-all group"
            >
              <Mail className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="truncate">{profile.email}</span>
            </a>

            {/* One-Click Copy Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                copied
                  ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20"
                  : "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700"
              }`}
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-emerald-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links & Resume Access Grid */}
          <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/50 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                <div className="text-left">
                  <span className="text-xs font-mono text-zinc-500 block">Codebase</span>
                  <span className="text-sm font-medium text-zinc-200">GitHub</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/50 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="text-left">
                  <span className="text-xs font-mono text-zinc-500 block">Network</span>
                  <span className="text-sm font-medium text-zinc-200">LinkedIn</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/50 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <div className="text-left">
                  <span className="text-xs font-mono text-zinc-500 block">Curriculum Vitae</span>
                  <span className="text-sm font-medium text-zinc-200">Download PDF</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Location & Remote Availability Footer */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-mono">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>GMT (+00:00) • Global Remote Readiness</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
