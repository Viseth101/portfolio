/**
 * Clipboard hook pattern:
 * - Exposes `copy(text)` and a `copied` boolean for UI feedback.
 * - Sets `copied` to true after successful write, then auto-resets.
 * - Encapsulates timer cleanup so components stay simple.
 */
import { useEffect, useRef, useState } from "react";

export function useClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setCopied(false);
      }, resetDelay);

      return true;
    } catch {
      setCopied(false);
      return false;
    }
  };

  return { copied, copy };
}
