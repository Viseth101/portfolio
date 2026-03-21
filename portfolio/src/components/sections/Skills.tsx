"use client";

/**
 * Skills section structure:
 * 1) Section heading + intro label.
 * 2) Skills grouped by category in a fixed display order.
 * 3) Animated category blocks and animated skill pills.
 *
 * Data is read from fallback portfolio data, so this section reflects
 * the same source currently used elsewhere in the app.
 */
import { motion } from "framer-motion";
import { useMemo } from "react";

import { skills } from "@/data/portfolio-data";

type CategoryName = "Frontend" | "Backend" | "AI/ML" | "Security" | "Tools & DevOps";

type SkillWithProficiency = {
  name: string;
  category: string;
  proficiency?: "proficient" | "learning";
};

const categoryOrder: CategoryName[] = ["Frontend", "Backend", "AI/ML", "Security", "Tools & DevOps"];

export default function Skills() {
  const groupedSkills = useMemo(() => {
    const source = skills as SkillWithProficiency[];

    return categoryOrder.map((category) => ({
      category,
      items: source.filter((skill) => skill.category === category),
    }));
  }, []);

  return (
    <section
      id="skills"
      className="border-b border-slate-200 px-6 py-20 dark:border-border/60 sm:px-8 lg:px-0"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-text-muted">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-text-primary sm:text-4xl">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="mt-10 space-y-8">
          {groupedSkills.map((group, categoryIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.4, delay: 0.1 * (categoryIndex + 1), ease: "easeOut" }}
            >
              <h3 className="mb-3 text-sm font-semibold text-slate-500 dark:text-text-muted">{group.category}</h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.items.map((skill, skillIndex) => {
                  const isLearning = skill.proficiency === "learning";

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.1 * (categoryIndex + 1) + 0.05 * skillIndex,
                        ease: "easeOut",
                      }}
                      className={[
                        "inline-flex items-center rounded-full border bg-white px-3 py-1.5 text-xs transition duration-200 hover:scale-105 hover:border-accent-primary dark:bg-background-card sm:px-4 sm:py-2 sm:text-sm",
                        isLearning
                          ? "border-amber-300/70 text-amber-700 dark:border-border/70 dark:text-text-secondary"
                          : "border-slate-300 text-slate-800 dark:border-border dark:text-text-primary",
                      ].join(" ")}
                    >
                      {skill.name}
                      {isLearning ? (
                        <span className="ml-1 text-amber-600 dark:text-text-muted">(learning)</span>
                      ) : null}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
