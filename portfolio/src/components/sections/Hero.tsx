"use client";

/**
 * Hero structure overview:
 * 1) Full-height section with layered visuals (dot-grid + cursor spotlight).
 * 2) Centered content stack (badge, name, typewriter, bio, CTAs, socials).
 * 3) Bottom scroll cue to guide users toward the next section.
 *
 * The spotlight is mouse-driven for desktop pointers only, and disabled on touch devices.
 */
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

import { useTypewriter } from "@/hooks/useTypewriter";

const roles = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "Cybersecurity Enthusiast",
  "Open Source Builder",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { text } = useTypewriter({ words: roles });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (coarsePointer) return;

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      section.style.setProperty("--spot-x", `${x}px`);
      section.style.setProperty("--spot-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background-primary px-6 sm:px-8 lg:px-0"
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "40%",
        } as React.CSSProperties
      }
    >
      <div className="hero-dot-grid absolute inset-0 opacity-[0.15]" aria-hidden />
      <div className="hero-spotlight absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center py-16 text-center">
        {/* Stagger sequence: each block uses the same motion curve with +0.1s incremental delays for a smooth reveal rhythm. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-6 inline-flex min-h-11 items-center rounded-full border border-border/80 bg-background-card/70 px-4 py-2 text-sm font-medium text-text-secondary"
        >
          👋 CS Student @ Silapakorn University
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
        >
          Udtarakviseth <span className="gradient-text">Lay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-5 min-h-11 text-xl font-medium text-accent-secondary sm:text-2xl"
        >
          {text}
          <span className="typewriter-cursor ml-1 inline-block" aria-hidden>
            |
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg"
        >
          I build full-stack applications at the intersection of AI and security. Currently
          seeking Summer 2026 internship opportunities in software engineering, AI, or
          cybersecurity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-glow sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary sm:w-auto"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com/Viseth101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/udtarakviseth-lay-774858373/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:udtarakvisethlay@gmail.com"
            aria-label="Send email"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hero-chevron absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-text-secondary hover:text-accent-primary"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}