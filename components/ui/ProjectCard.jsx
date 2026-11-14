import Image from "next/image";
import { ExternalLink, Sparkles, Layers, Terminal } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

export default function ProjectCard({ project, onPreview, isLarge = false }) {
  return (
    <article
      className={`group relative rounded-2xl p-5 sm:p-6 bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20 backdrop-blur-md overflow-hidden ${
        isLarge ? "lg:col-span-2" : "col-span-1"
      }`}
    >
      {/* Ambient Hover Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/50 transition-all duration-500" />

      {/* Top Meta: Category & Featured Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Project Summary */}
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Architecture Highlight */}
        <div className="mt-3.5 p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-400 flex items-start gap-2">
          <Layers className="w-4 h-4 text-emerald-400/80 flex-shrink-0 mt-0.5" />
          <p className="line-clamp-2 leading-relaxed">
            <span className="font-mono text-zinc-300 font-semibold">Arch: </span>
            {project.architecture}
          </p>
        </div>
      </div>

      {/* Bottom Area: Tech Tags & Action Buttons */}
      <div className="mt-5 pt-4 border-t border-zinc-800/60 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono text-zinc-300 bg-zinc-800/60 border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-800/80 hover:bg-zinc-700/80 hover:text-zinc-100 border border-zinc-700/60 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Code</span>
          </a>

          <button
            type="button"
            onClick={() => onPreview(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-emerald-400 bg-emerald-950/50 hover:bg-emerald-900/60 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors active:scale-95"
          >
            <span>Live Preview</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </article>
  );
}
