"use client";

/**
 * Progress bar:
 * - Shows a top loading bar on initial page mount.
 * - Animates width from 0% to 100% in 800ms, then fades out.
 */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 920);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[3px] bg-accent-primary"
      initial={{ width: "0%", opacity: 1 }}
      animate={{ width: "100%", opacity: isVisible ? 1 : 0 }}
      transition={{
        width: { duration: 0.8, ease: "easeOut" },
        opacity: { duration: 0.2, ease: "easeOut", delay: 0.8 },
      }}
      aria-hidden
    />
  );
}
