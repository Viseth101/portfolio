"use client";

/**
 * Experience section:
 * - Renders a vertical timeline with hardcoded education/project/work entries.
 * - Uses per-entry useInView so each item reveals independently with staggered delays.
 * - Adapts timeline/date layout for mobile vs desktop.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TimelineType = "education" | "work" | "project";

type TimelineItemData = {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: TimelineType;
  isPlaceholder?: boolean;
};

const timelineItems: TimelineItemData[] = [
  {
    title: "Bachelor of Science in Computer Science",
    organization: "Silapakorn University",
    date: "2024 — Present",
    description:
      "Studying core CS fundamentals including data structures, algorithms, computer networks, and software engineering. Maintaining strong academic standing while building real projects outside coursework.",
    type: "education",
  },
  {
    title: "Silapakorn Sanam Chan WC Map",
    organization: "Course Project — Silapakorn University",
    date: "2026",
    description:
      "Built an interactive campus map with Node.js, Express, Google Maps API, and MySQL. Deployed live with Cloudinary for image storage.",
    type: "project",
  },
  {
    title: "ThreatWatch — AI Threat Intelligence Dashboard",
    organization: "Personal Project",
    date: "2026",
    description:
      "Built a full-stack cybersecurity platform with Next.js, FastAPI, and Google Gemini API. Features live CVE data, AI-generated threat summaries, and JWT authentication.",
    type: "project",
  },
  {
    title: "Internship — Coming Soon",
    organization: "Open to opportunities",
    date: "Summer 2026",
    description:
      "Actively seeking internship roles in software engineering, AI, or cybersecurity.",
    type: "work",
    isPlaceholder: true,
  },
];

function badgeClass(type: TimelineType): string {
  if (type === "education") {
    return "border border-blue-300 bg-blue-100 text-blue-800 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300";
  }

  if (type === "work") {
    return "border border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-300";
  }

  return "border border-violet-300 bg-violet-100 text-violet-800 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-300";
}

function badgeLabel(type: TimelineType): string {
  if (type === "education") return "Education";
  if (type === "work") return "Work";
  return "Project";
}

function TimelineEntry({ item, index }: { item: TimelineItemData; index: number }) {
  const entryRef = useRef<HTMLDivElement | null>(null);

  // Per-entry observation pattern: each item owns its own ref/inView state,
  // so animations trigger independently and replay when the item re-enters view.
  const isInView = useInView(entryRef, { amount: 0.35, once: false });

  return (
    <div
      ref={entryRef}
      className="relative pl-6 md:grid md:grid-cols-[180px,24px,1fr] md:gap-6 md:pl-0"
    >
      <p className="mb-3 text-xs font-semibold tracking-wide text-slate-500 dark:text-text-muted md:mb-0 md:pt-2 md:text-right md:text-sm">
        {item.date}
      </p>

      <span className="absolute left-0 top-10 z-10 h-3.5 w-3.5 -translate-x-[6px] rounded-full bg-accent-primary shadow-[0_0_0_4px_rgba(124,58,237,0.2)] md:left-[192px] md:top-2.5" />

      <motion.article
        initial={{ opacity: 0, x: 38 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 38 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.15 }}
        className={[
          "relative rounded-2xl border bg-white p-5 backdrop-blur-sm md:col-start-3 dark:bg-background-card/85",
          item.isPlaceholder
            ? "border-dashed border-slate-300/90 opacity-85 dark:border-border/80"
            : "border-slate-200 dark:border-border/90",
        ].join(" ")}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-text-primary">{item.title}</h3>
            <p className="mt-1 text-sm font-semibold text-accent-secondary">{item.organization}</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass(item.type)}`}>
            {badgeLabel(item.type)}
          </span>
        </div>

        <p className="mb-3 text-xs text-slate-500 dark:text-text-muted md:hidden">{item.date}</p>
        <p className="text-sm leading-7 text-slate-700 dark:text-text-secondary">{item.description}</p>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-slate-200 px-6 py-20 dark:border-border/60 sm:px-8 lg:px-0">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-text-muted">
          Experience
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-text-primary sm:text-4xl">
          Education and project timeline
        </h2>

        <div className="relative mt-10 space-y-7">
          <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-accent-primary via-accent-primary/60 to-transparent md:left-[192px]" />

          {timelineItems.map((item, index) => (
            <TimelineEntry key={`${item.title}-${item.date}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
