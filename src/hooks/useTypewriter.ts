"use client";

import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
};

/**
 * Typewriter timing model:
 * 1) Typing phase: grow visible text one character at a time.
 * 2) Pause phase: keep the full word on screen so users can read it.
 * 3) Deleting phase: remove one character at a time.
 * 4) Advance phase: move to the next word and start typing again.
 *
 * We use a single timeout per step so speed can change by phase.
 * This keeps behavior predictable and avoids overlapping intervals.
 */
export function useTypewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 55,
  pauseDuration = 1200,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    // Pause once the full word is typed before starting deletion.
    if (!isDeleting && displayText === currentWord) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(pauseTimer);
    }

    // When deletion finishes, switch to the next word and type again.
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentWord.slice(0, Math.max(displayText.length - 1, 0)));
          return;
        }

        setDisplayText(currentWord.slice(0, displayText.length + 1));
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [deleteSpeed, displayText, isDeleting, pauseDuration, typeSpeed, wordIndex, words]);

  return {
    text: displayText,
  };
}