"use client";

/**
 * About section structure:
 * 1) Responsive two-column layout (profile visual + text content).
 * 2) In-view reveal animation for each column.
 * 3) Supporting stats and resume CTA.
 */
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-slate-200 px-6 py-20 dark:border-border/60 sm:px-8 lg:px-0"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[280px,1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto"
        >
          <div className="flex h-56 w-56 items-center justify-center rounded-[2rem] border border-accent-primary/50 bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/20">
            <span className="text-6xl font-extrabold tracking-tight text-white">UL</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-text-muted">
            About me
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-text-primary sm:text-4xl">
            Building at the intersection of AI and security
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-slate-700 dark:text-text-secondary">
            <p>
              I&apos;m a Computer Science sophomore at Silapakorn University, passionate about
              building full-stack applications that solve real problems.
            </p>
            <p>
              My work spans full-stack web development, AI/ML integration, and cybersecurity
              tooling - I like projects that combine more than one of these domains.
            </p>
            <p>
              I&apos;m actively seeking Summer 2026 internship opportunities in software engineering,
              AI, or security roles at companies that care about what they build.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center dark:border-border dark:bg-background-card">
              <p className="text-2xl font-bold text-accent-primary">2</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-text-muted sm:text-sm">Live Projects</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center dark:border-border dark:bg-background-card">
              <p className="text-2xl font-bold text-accent-primary">3</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-text-muted sm:text-sm">Tech Domains</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center dark:border-border dark:bg-background-card">
              <p className="text-2xl font-bold text-accent-primary">2026</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-text-muted sm:text-sm">Available From</p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-accent-primary hover:text-accent-primary dark:border-border dark:text-text-primary"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
