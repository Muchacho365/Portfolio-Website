import Image from "next/image";
import {
  Sparkles,
  FileText,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Award,
  Terminal,
  MapPin,
} from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 translate-x-1/2 w-[450px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio, Headline, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Animated Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs sm:text-sm font-medium text-emerald-400 shadow-sm shadow-emerald-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{profile.availability}</span>
            </div>

            {/* Developer Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-300 tracking-tight">
                {profile.headline}
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Ask My AI */}
              <a
                href="#ai-assistant"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Ask My AI</span>
              </a>

              {/* Download Resume */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-600 transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-4 pt-2 text-zinc-400">
              <span className="text-xs uppercase tracking-wider font-mono text-zinc-500">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all duration-200 active:scale-90"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-cyan-400 hover:text-cyan-300 hover:border-zinc-700 transition-all duration-200 active:scale-90"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={profile.socialLinks.email}
                  className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all duration-200 active:scale-90"
                  aria-label="Email Simon Mezampeh"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 border-l border-zinc-800 pl-4">
                <MapPin className="w-3.5 h-3.5 text-emerald-500/80" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Framed Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-purple-500/10 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Framed Card Shell */}
              <div className="relative rounded-[2rem] p-3 sm:p-4 bg-gradient-to-b from-zinc-800/80 via-zinc-900/90 to-zinc-950 border border-zinc-700/60 shadow-2xl backdrop-blur-xl">
                {/* Image Frame */}
                <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center group">
                  <Image
                    src={profile.avatar}
                    alt={`${profile.name} - ${profile.title}`}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Inner Status Chip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md text-xs text-zinc-200">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-mono font-medium">{profile.handle}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono">BTech SE</span>
                  </div>
                </div>

                {/* Card Sub-Banner: Achievement Pill */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-zinc-200">
                      5th-Place Hackathon Award
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Takoradi Technical University
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
