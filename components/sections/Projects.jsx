"use client";

import { useState } from "react";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectPreviewModal from "@/components/ui/ProjectPreviewModal";

const CATEGORIES = ["All", "Full-Stack", "Frontend", "Systems"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleOpenPreview = (project) => {
    setSelectedProject(project);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Featured Software Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Production-ready web applications, secure backends, and award-winning system prototypes. Explore architecture specs, source code, and interactive previews.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/80 border border-zinc-800/80 overflow-x-auto max-w-full">
            {CATEGORIES.map((category) => {
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-zinc-800 text-emerald-400 font-semibold shadow-sm border border-zinc-700/80"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                      isActive
                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
                        : "bg-zinc-950/80 text-zinc-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug || project.title}
              project={project}
              onPreview={handleOpenPreview}
              isLarge={project.featured && idx === 0}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 p-8 space-y-2">
            <Filter className="w-8 h-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-semibold text-zinc-300">No projects found</h3>
            <p className="text-xs text-zinc-500">
              There are currently no projects matching category &ldquo;{activeCategory}&rdquo;.
            </p>
          </div>
        )}
      </div>

      {/* Interactive Live Preview Modal */}
      <ProjectPreviewModal
        project={selectedProject}
        isOpen={isPreviewOpen}
        onClose={handleClosePreview}
      />
    </section>
  );
}
