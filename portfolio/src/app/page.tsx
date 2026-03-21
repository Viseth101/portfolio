"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />

      <section
        id="projects"
        className="flex min-h-screen items-center justify-center border-b border-border/60 px-6"
      >
        <h2 className="text-4xl font-bold tracking-tight text-accent-primary">Projects Section</h2>
      </section>

      <section
        id="experience"
        className="flex min-h-screen items-center justify-center border-b border-border/60 px-6"
      >
        <h2 className="text-4xl font-bold tracking-tight text-accent-primary">Experience Section</h2>
      </section>

      <section id="contact" className="flex min-h-screen items-center justify-center px-6">
        <h2 className="text-4xl font-bold tracking-tight text-accent-primary">Contact Section</h2>
      </section>
    </div>
  );
}
