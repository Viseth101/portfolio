"use client";

/**
 * Projects section:
 * - Reads project data from fallback portfolio data.
 * - Highlights ThreatWatch as featured, WC Map as course, and remaining entries as coming soon.
 * - Uses a responsive card grid with consistent visual treatment across light/dark themes.
 */
import { projects } from "@/data/portfolio-data";

type ProjectKind = "featured" | "course" | "coming-soon";

function getProjectKind(projectId: string): ProjectKind {
  if (projectId === "threatwatch") return "featured";
  if (projectId === "silapakorn-wc-map") return "course";
  return "coming-soon";
}

function badgeClass(kind: ProjectKind): string {
  if (kind === "featured") {
    return "border border-violet-300 bg-violet-100 text-violet-800 dark:border-violet-400/35 dark:bg-violet-500/10 dark:text-violet-300";
  }

  if (kind === "course") {
    return "border border-sky-300 bg-sky-100 text-sky-800 dark:border-sky-400/35 dark:bg-sky-500/10 dark:text-sky-300";
  }

  return "border border-amber-300 bg-amber-100 text-amber-800 dark:border-amber-400/35 dark:bg-amber-500/10 dark:text-amber-300";
}

function badgeLabel(kind: ProjectKind): string {
  if (kind === "featured") return "Featured";
  if (kind === "course") return "Course";
  return "Coming Soon";
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-slate-200 px-6 py-20 dark:border-border/60 sm:px-8 lg:px-0">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-text-muted">
          Projects
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-text-primary sm:text-4xl">
          What I&apos;ve Built
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700 dark:text-text-secondary">
          Selected projects focused on full-stack engineering, AI integration, and practical problem solving.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => {
            const kind = getProjectKind(project.id);
            const isComingSoon = kind === "coming-soon";

            return (
              <article
                key={project.id}
                className={[
                  "rounded-2xl border bg-white p-5 transition-shadow duration-300 dark:bg-background-card",
                  isComingSoon
                    ? "border-dashed border-slate-300/80 opacity-90 dark:border-border/70"
                    : "border-slate-200 dark:border-border/85",
                ].join(" ")}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-text-primary">{project.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass(kind)}`}>
                    {badgeLabel(kind)}
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-700 dark:text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-full border border-slate-300 px-2.5 py-1 text-xs text-slate-700 dark:border-border dark:text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
