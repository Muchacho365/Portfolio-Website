import {
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Code2,
  CheckCircle2,
  Quote,
  Cpu,
  Sparkles,
} from "lucide-react";
import { profile, experience, education } from "@/data/portfolio";

export default function ExperienceAndAbout() {
  const internExp = experience.find((e) => e.type === "Internship") || experience[0];
  const hackathonExp = experience.find((e) => e.type === "Award") || experience[1];
  const edu = education[0];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Target anchor for experience nav link */}
      <div id="experience" className="absolute -top-20" aria-hidden="true" />

      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Background &amp; Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Engineering Story, Education &amp; Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Bridging hardware diagnostics with modern full-stack web software and artificial intelligence.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Engineering Story & Education */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Engineering Narrative Card */}
            <div className="rounded-2xl p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/80 shadow-lg shadow-black/20 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                  The Engineering Journey
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                As a software engineering student at Takoradi Technical University, I discovered early on that true technical competence comes from relentless hands-on execution. I transitioned from consuming tutorials to building real-world applications—debugging low-level issues, architecting relational SQL schemas, and designing responsive frontends.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Inspired by world-class educators like David Malan (CS50), Mosh Hamedani, and Andrei Neagoie, I cultivated disciplined habits across multiple languages—mastering JavaScript and modern React/Next.js while maintaining solid foundations in Python, C++, Java, and PHP.
              </p>

              {/* Ronaldo Quote Callout */}
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 relative">
                <Quote className="w-6 h-6 text-emerald-500/30 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm text-zinc-300 italic pr-6 leading-relaxed">
                  &ldquo;{profile.quote.text}&rdquo;
                </p>
                <span className="block text-xs font-mono text-emerald-400 font-semibold mt-2">
                  — {profile.quote.author}
                </span>
              </div>
            </div>

            {/* Education Card */}
            {edu && (
              <div className="rounded-2xl p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/80 shadow-lg shadow-black/20 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                      Formal Education
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-zinc-100">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                    {edu.institution} • {edu.location}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    {edu.period}
                  </p>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {edu.description}
                </p>

                <div className="pt-3 border-t border-zinc-800/60">
                  <span className="text-xs font-mono text-zinc-500 block mb-2">
                    Key Academic Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-800/70 border border-zinc-700/60 text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Practical Experience Timeline & Hackathon Milestone */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Hardware Internship Card */}
            {internExp && (
              <div className="rounded-2xl p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/80 shadow-lg shadow-black/20 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                      Industry Internship
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                    {internExp.type}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-zinc-100">
                    {internExp.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                    {internExp.company} • {internExp.location}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    {internExp.period}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {internExp.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                  <span className="text-xs font-mono text-zinc-500 block mb-1">
                    Key Practical Deliverables:
                  </span>
                  {internExp.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hackathon Achievement Card */}
            {hackathonExp && (
              <div className="rounded-2xl p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/80 shadow-lg shadow-black/20 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-amber-400" />
                    <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                      Hackathon Award
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>5th Place</span>
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-zinc-100">
                    {hackathonExp.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                    {hackathonExp.company} • {hackathonExp.location}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    {hackathonExp.period}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {hackathonExp.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                  {hackathonExp.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
