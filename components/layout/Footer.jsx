import Link from "next/link";
import { Github, Linkedin, Mail, FileText, Terminal, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Overview */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#top" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-semibold text-zinc-100 text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                {profile.handle}
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {profile.title} & undergraduate at Takoradi Technical University. Crafting robust web applications, clean APIs, and intelligent AI features.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{profile.availability}</span>
            </div>

            {/* Quote */}
            <div className="pt-2">
              <blockquote className="text-xs text-zinc-500 italic border-l-2 border-zinc-800 pl-3">
                &ldquo;{profile.quote.text}&rdquo;
                <span className="block not-italic text-zinc-400 font-medium mt-0.5">
                  — {profile.quote.author}
                </span>
              </blockquote>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Tech Stack & Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Experience & Awards
                </a>
              </li>
              <li>
                <a
                  href="#ai-assistant"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask Simon&apos;s AI</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Resources */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
              Connect & Resources
            </h3>
            <div className="flex flex-col space-y-2.5">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
                  <span>GitHub Repository</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
                  <span>Download Resume (PDF)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={profile.socialLinks.email}
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
                  <span>{profile.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} {profile.name} ({profile.handle}). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js 16, React 19, Tailwind CSS &amp; Google Gemini</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
