"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORD = "DOVRA".split("");
const EASE = [0.16, 1, 0.3, 1] as const;
const CURTAIN_EASE = [0.76, 0, 0.24, 1] as const;

/**
 * First-load intro overlay (wordmark + green sweep). Rendered on top of the
 * dark page on mount so there's no flash of content; on the very first visit of
 * a session it plays the reveal, then the dark panel slides up — its glowing
 * green bottom edge sweeping the viewport — to uncover the page. Returning
 * visitors (or `prefers-reduced-motion`) just get an instant fade-out.
 *
 * Render is deterministic for SSR + first client render (visible, no content),
 * so there's no hydration mismatch; the decision happens in an effect.
 */
export function PageLoader() {
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Play on every full page load (not on SPA navigations, since the layout
    // persists). Skipped only under prefers-reduced-motion.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShow(false);
      return;
    }
    setAnimate(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 1350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink"
          initial={false}
          exit={animate ? { y: "-100%" } : { opacity: 0 }}
          transition={
            animate
              ? { duration: 0.75, ease: CURTAIN_EASE }
              : { duration: 0.25, ease: "easeOut" }
          }
        >
          {animate && (
            <div className="relative flex flex-col items-center">
              <div className="flex items-end font-display text-5xl font-bold leading-none tracking-[0.22em] text-fg sm:text-7xl">
                {WORD.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: "0.5em" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.08, duration: 0.5, ease: EASE }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  className="text-brand text-glow"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.12 + WORD.length * 0.08,
                    type: "spring",
                    stiffness: 320,
                    damping: 14,
                  }}
                >
                  .
                </motion.span>
              </div>

              {/* Green sweep line under the wordmark */}
              <motion.span
                className="mt-5 block h-px w-44 origin-left bg-brand sm:w-64"
                style={{ boxShadow: "0 0 16px 1px rgba(25,229,125,0.65)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
              />
            </div>
          )}

          {/* Glowing green leading edge — sweeps up the viewport as the curtain exits */}
          {animate && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-brand"
              style={{ boxShadow: "0 0 24px 3px rgba(25,229,125,0.6)" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
