"use client";

/**
 * Project case study modal:
 * - Handles open/close interactions (backdrop, Escape, close button).
 * - Moves focus to close button on mount and keeps keyboard focus inside modal.
 * - Renders project-specific narrative sections and optional architecture diagram.
 */
import { motion } from "framer-motion";
import { Check, ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Project } from "@/types";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMounted, onClose]);

  const problemStatement =
    project.id === "threatwatch"
      ? "Security teams need fast, readable threat intelligence. Most tools are either too expensive or too complex for small teams."
      : project.id === "silapakorn-wc-map"
        ? "Students and visitors at Silapakorn University had no easy way to locate restroom facilities across the large Sanam Chan campus."
        : project.description;

  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== "#");
  const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#");

  const handleLetsTalk = () => {
    onClose();
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[130] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm md:items-center md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study details`}
        className="h-screen w-full overflow-y-auto border border-slate-200 bg-white md:h-auto md:max-h-[90vh] md:max-w-3xl md:rounded-2xl dark:border-border/80 dark:bg-background-primary"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur dark:border-border/70 dark:bg-background-primary/95">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-text-primary">{project.title}</h3>
              {project.status === "live" ? (
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                  Live
                </p>
              ) : null}
            </div>

            <div className="flex items-center gap-2">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-colors hover:border-accent-primary hover:text-accent-secondary dark:border-border dark:bg-background-secondary dark:text-text-secondary"
                aria-label="Close project details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <div className="space-y-8 px-5 py-6 sm:px-6">
          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-text-muted">The Problem</h4>
            <p className="mt-3 text-base leading-8 text-slate-700 dark:text-text-secondary">{problemStatement}</p>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-text-muted">What I Built</h4>
            <p className="mt-3 text-base leading-8 text-slate-700 dark:text-text-secondary">{project.longDescription}</p>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-text-muted">Key Features</h4>
            <div className="mt-4 space-y-2">
              {project.features.map((feature, featureIndex) => (
                <div key={`${project.id}-feature-${featureIndex}`} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-border/70 dark:bg-background-secondary/50">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-secondary" />
                  <p className="text-sm leading-7 text-slate-700 dark:text-text-secondary">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-text-muted">Tech Stack</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={`${project.id}-${tech}`}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-border dark:bg-background-secondary dark:text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {project.id === "threatwatch" ? (
            <section>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-text-muted">Architecture</h4>
              <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
                <div className="rounded-xl border border-accent-primary/40 bg-slate-50 px-4 py-3 text-center text-sm text-slate-900 dark:bg-background-secondary dark:text-text-primary">
                  Next.js / Vercel
                </div>
                <span className="text-center text-accent-secondary md:hidden" aria-hidden>
                  ↓
                </span>
                <span className="hidden text-accent-secondary md:block" aria-hidden>
                  →
                </span>
                <div className="rounded-xl border border-accent-primary/40 bg-slate-50 px-4 py-3 text-center text-sm text-slate-900 dark:bg-background-secondary dark:text-text-primary">
                  FastAPI / Render
                </div>
                <span className="text-center text-accent-secondary md:hidden" aria-hidden>
                  ↓
                </span>
                <span className="hidden text-accent-secondary md:block" aria-hidden>
                  →
                </span>
                <div className="rounded-xl border border-accent-primary/40 bg-slate-50 px-4 py-3 text-center text-sm text-slate-900 dark:bg-background-secondary dark:text-text-primary">
                  PostgreSQL + Gemini
                </div>
              </div>
            </section>
          ) : null}

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-text-muted">Challenges & Learnings</h4>
            <blockquote className="mt-4 border-l-4 border-accent-primary bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 dark:bg-background-secondary/60 dark:text-text-secondary">
              {project.challenges || "Add specific challenges and learnings for this project"}
            </blockquote>
          </section>
        </div>

        <footer className="border-t border-slate-200 px-5 py-4 sm:px-6 dark:border-border/70">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {hasGithub ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-colors hover:border-accent-primary hover:text-accent-secondary dark:border-border dark:bg-background-secondary dark:text-text-secondary"
                  aria-label="View project source on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : null}
              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-colors hover:border-accent-primary hover:text-accent-secondary dark:border-border dark:bg-background-secondary dark:text-text-secondary"
                  aria-label="Open live project"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
            <button
              type="button"
              onClick={handleLetsTalk}
              className="ml-auto inline-flex min-h-11 items-center justify-center rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-glow"
            >
              Let&apos;s Talk →
            </button>
          </div>
        </footer>
      </motion.div>
    </motion.div>,
    document.body
  );
}
