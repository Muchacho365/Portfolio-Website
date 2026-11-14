import Image from "next/image";
import { Sparkles, Code2, Database, Server, Layers, Cpu, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";

function getFallbackIcon(type, name) {
  if (name.includes("AI") || name.includes("Gemini")) {
    return <Sparkles className="w-5 h-5 text-cyan-400" />;
  }
  if (type === "Database" || name.includes("SQL") || name.includes("phpMyAdmin")) {
    return <Database className="w-5 h-5 text-emerald-400" />;
  }
  if (type === "Runtime" || type === "Backend") {
    return <Server className="w-5 h-5 text-emerald-400" />;
  }
  if (type === "Language") {
    return <Code2 className="w-5 h-5 text-cyan-400" />;
  }
  if (type === "Build Tool" || type === "IDE") {
    return <Wrench className="w-5 h-5 text-zinc-400" />;
  }
  return <Layers className="w-5 h-5 text-zinc-400" />;
}

export default function TechMarquee() {
  // Duplicate arrays to create continuous infinite marquee tracks
  const row1Items = [...skills.marqueeRow1, ...skills.marqueeRow1];
  const row2Items = [...skills.marqueeRow2, ...skills.marqueeRow2];

  return (
    <section className="py-12 sm:py-16 bg-zinc-950/80 border-y border-zinc-800/60 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-28 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Technologies &amp; Frameworks I Build With
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-xl mx-auto">
          Modern languages, frameworks, cloud tooling, and relational databases powering scalable full-stack applications.
        </p>
      </div>

      {/* Marquee Container with Edge Fading Mask */}
      <div className="mask-marquee relative w-full overflow-hidden space-y-4">
        {/* Row 1: Leftward Infinite Marquee */}
        <div className="flex w-max animate-marquee-left">
          {row1Items.map((tech, idx) => (
            <div
              key={`row1-${tech.name}-${idx}`}
              className="mx-2 sm:mx-3 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-900/70 hover:bg-zinc-800/90 border border-zinc-800/80 hover:border-zinc-700/80 backdrop-blur-md shadow-sm transition-all duration-300 group select-none cursor-default"
            >
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                {tech.icon ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                ) : (
                  getFallbackIcon(tech.type, tech.name)
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950/60 px-2 py-0.5 rounded-md border border-zinc-800/60">
                  {tech.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div className="flex w-max animate-marquee-right">
          {row2Items.map((tech, idx) => (
            <div
              key={`row2-${tech.name}-${idx}`}
              className="mx-2 sm:mx-3 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-900/70 hover:bg-zinc-800/90 border border-zinc-800/80 hover:border-zinc-700/80 backdrop-blur-md shadow-sm transition-all duration-300 group select-none cursor-default"
            >
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                {tech.icon ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                ) : (
                  getFallbackIcon(tech.type, tech.name)
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-200 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950/60 px-2 py-0.5 rounded-md border border-zinc-800/60">
                  {tech.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
