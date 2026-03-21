"use client";

/**
 * Navbar component structure:
 * 1) Brand + desktop nav links + internship status + actions (resume/theme) in a fixed top bar.
 * 2) Mobile actions with hamburger trigger.
 * 3) Full-height mobile drawer for section links and quick actions.
 *
 * Why this design:
 * - Backdrop blur improves readability while preserving background context when scrolling.
 * - IntersectionObserver highlights the active section efficiently without heavy scroll handlers.
 * - localStorage persists theme preference so users keep their chosen mode across visits.
 */
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const darkPreferred = savedTheme ? savedTheme === "dark" : true;

    document.documentElement.classList.toggle("dark", darkPreferred);
    setIsDark(darkPreferred);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  const linkClass = (id: string) =>
    cn(
      "text-sm font-medium transition-colors hover:text-accent-primary",
      activeSection === id
        ? "text-accent-primary"
        : isScrolled
          ? "text-slate-700 dark:text-text-secondary"
          : "text-white/85"
    );

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
          isScrolled &&
            "border-border/70 bg-slate-100/75 backdrop-blur-lg dark:bg-background-secondary/65"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#about" className="text-base tracking-tight">
            <span className={cn("font-bold", isScrolled ? "text-slate-900 dark:text-text-primary" : "text-white")}>
              Udtarakviseth
            </span>{" "}
            <span className="font-medium text-accent-primary">Lay</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Desktop navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
              <span className="status-dot h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-300">
                Open to internships
              </span>
            </div>

            <a
              href="/resume.pdf"
              download
              aria-label="Download resume"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:bg-background-card dark:text-text-primary dark:hover:bg-background-secondary"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:bg-background-card dark:text-text-primary dark:hover:bg-background-secondary"
              aria-label="Toggle dark mode"
            >
              {isMounted && isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:bg-background-card dark:text-text-primary dark:hover:bg-background-secondary"
              aria-label="Toggle dark mode"
            >
              {isMounted && isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:bg-background-card dark:text-text-primary dark:hover:bg-background-secondary"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[60] flex h-screen w-[84%] max-w-sm flex-col border-l border-border bg-slate-100 p-6 dark:bg-background-secondary md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900 dark:text-text-primary">Menu</p>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-slate-700 dark:bg-background-card dark:text-text-primary"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium transition-colors",
                      activeSection === item.id
                        ? "bg-accent-primary/10 text-accent-primary"
                        : "text-slate-700 hover:bg-slate-200 dark:text-text-secondary dark:hover:bg-background-card"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-2">
                  <span className="status-dot h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-300">
                    Open to internships
                  </span>
                </div>

                <a
                  href="/resume.pdf"
                  download
                  aria-label="Download resume"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200 dark:bg-background-card dark:text-text-primary dark:hover:bg-background-card/80"
                  onClick={() => setMenuOpen(false)}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
