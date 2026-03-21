"use client";

/**
 * GitHub stats section:
 * - Renders 3 dynamic GitHub stat cards in a responsive grid.
 * - Uses Next Image with unoptimized mode for external generated images.
 * - Shows a shimmer skeleton until each image finishes loading.
 */
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type StatCardData = {
  title: string;
  src: string;
  fallbackSrc: string;
  alt: string;
};

function buildStatCards(isDark: boolean): StatCardData[] {
  const statsBg = isDark ? "161a29" : "f8fafc";
  const statsText = isDark ? "94a3b8" : "334155";
  const streakNums = isDark ? "f8fafc" : "0f172a";

  return [
    {
      title: "GitHub Stats",
      src: `https://github-readme-stats.vercel.app/api?username=Viseth101&show_icons=true&hide_border=true&bg_color=${statsBg}&title_color=7c3aed&icon_color=a78bfa&text_color=${statsText}&ring_color=7c3aed`,
      fallbackSrc:
        "https://github-readme-stats.vercel.app/api?username=Viseth101&show_icons=true&hide_border=true",
      alt: "Viseth101 GitHub overall statistics",
    },
    {
      title: "Top Languages",
      src: `https://github-readme-stats.vercel.app/api/top-langs/?username=Viseth101&layout=compact&hide_border=true&bg_color=${statsBg}&title_color=7c3aed&text_color=${statsText}`,
      fallbackSrc:
        "https://github-readme-stats.vercel.app/api/top-langs/?username=Viseth101&layout=compact&hide_border=true",
      alt: "Viseth101 top programming languages",
    },
    {
      title: "GitHub Streak",
      src: `https://github-readme-streak-stats.herokuapp.com?user=Viseth101&hide_border=true&background=${statsBg}&ring=7c3aed&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=${statsText}&dates=${statsText}&sideNums=${streakNums}&currStreakNum=${streakNums}`,
      fallbackSrc: `https://streak-stats.demolab.com?user=Viseth101&hide_border=true&background=${statsBg}&ring=7c3aed&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=${statsText}&dates=${statsText}&sideNums=${streakNums}&currStreakNum=${streakNums}`,
      alt: "Viseth101 GitHub contribution streak",
    },
  ];
}

function GitHubStatCard({ card, isDark }: { card: StatCardData; isDark: boolean }) {
  const [imageSrc, setImageSrc] = useState(card.src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setImageSrc(card.src);
    setIsLoaded(false);
  }, [card.src]);

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(124,58,237,0.16)]",
        isDark
          ? "border-border/80 bg-background-card"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <p className={[
        "mb-3 text-sm font-semibold",
        isDark ? "text-text-secondary" : "text-slate-600",
      ].join(" ")}>{card.title}</p>

      <div
        className={[
          "relative overflow-hidden rounded-xl border",
          isDark
            ? "border-border/70 bg-background-secondary"
            : "border-slate-200 bg-slate-50",
        ].join(" ")}
      >
        {!isLoaded ? (
          <div
            className={[
              "absolute inset-0 animate-pulse bg-[length:200%_100%] [animation:shimmer_1.5s_linear_infinite]",
              isDark
                ? "bg-[linear-gradient(110deg,rgba(124,58,237,0.08)_8%,rgba(167,139,250,0.18)_28%,rgba(124,58,237,0.08)_48%)]"
                : "bg-[linear-gradient(110deg,rgba(124,58,237,0.05)_8%,rgba(167,139,250,0.14)_28%,rgba(124,58,237,0.05)_48%)]",
            ].join(" ")}
          />
        ) : null}

        <Image
          src={imageSrc}
          alt={card.alt}
          width={760}
          height={340}
          unoptimized
          onLoadingComplete={() => setIsLoaded(true)}
          onError={() => {
            if (imageSrc !== card.fallbackSrc) {
              setImageSrc(card.fallbackSrc);
              return;
            }

            setIsLoaded(true);
          }}
          className={[
            "h-auto w-full transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      </div>
    </article>
  );
}

export default function GitHubStats() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDark(root.classList.contains("dark"));

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const statCards = useMemo(() => buildStatCards(isDark), [isDark]);

  return (
    <section id="github" className="border-b border-slate-200 px-6 py-20 dark:border-border/60 sm:px-8 lg:px-0">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-text-muted">
          GitHub
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-text-primary sm:text-4xl">
          Code activity
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {statCards.map((card) => (
            <GitHubStatCard key={`${card.title}-${isDark ? "dark" : "light"}`} card={card} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
