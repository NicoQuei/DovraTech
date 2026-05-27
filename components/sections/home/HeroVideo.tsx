"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Background video source — the spinning globe clip (Pexels 3129957), Full HD
 * to keep weight reasonable (~21 MB) vs. the 80 MB 4K original. For production,
 * drop your own optimized file at `public/hero.mp4` and set this to "/hero.mp4".
 */
const VIDEO_SRC =
  "https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4";

/** Words that cycle in the headline — tied to the brand promise below. */
const ROTATING = ["sob medida.", "rápida.", "sólida.", "sua."];

/**
 * Home hero — adapted from 21st.dev's video-background hero (DarkProjectHero).
 * Brand-green palette, pt-BR copy, the headline's last word cycles. Reuses the
 * site's Container/Button/tokens. Falls back to a brand gradient when the video
 * is unavailable or the user prefers reduced motion.
 */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const words = useMemo(() => ROTATING, []);

  useEffect(() => {
    if (reduce) return;
    const id = setTimeout(() => setIndex((n) => (n + 1) % words.length), 2200);
    return () => clearTimeout(id);
  }, [index, reduce, words.length]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* ── Background ── */}
      <div aria-hidden className="absolute inset-0 z-0">
        {/* Brand gradient fallback (also shows while the video buffers) */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_30%,rgba(25,229,125,0.12),transparent_70%)] bg-ink" />

        {!reduce && (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        )}

        {/* Legibility overlays + dissolve into the page below */}
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_35%,transparent_38%,rgba(6,7,10,0.7)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
      </div>

      {/* ── Content ── */}
      <Container className="relative z-20 pt-24">
        <motion.p
          className="eyebrow"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="inline-block h-px w-6 bg-brand/60" />
          Estúdio de engenharia digital
        </motion.p>

        <h1 className="mt-6 font-display text-display-xl font-semibold text-fg">
          <motion.span
            className="block"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            Engenharia digital
          </motion.span>

          {/* Rotating last line */}
          <span className="relative mt-1 flex h-[1.1em] w-full overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="absolute left-0 text-gradient-brand"
                initial={false}
                animate={
                  reduce
                    ? { y: i === 0 ? "0%" : "120%", opacity: i === 0 ? 1 : 0 }
                    : index === i
                      ? { y: "0%", opacity: 1 }
                      : { y: index > i ? "-120%" : "120%", opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 80, damping: 16 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className="mt-7 max-w-xl text-lg text-fg-muted sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
        >
          Unimos design e código sob o mesmo teto para construir produtos
          rápidos, sólidos e — acima de tudo — seus.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
        >
          <Button href="/contato" size="lg">
            Iniciar projeto
          </Button>
          <Button href="/trabalhos" variant="secondary" size="lg" arrow="up-right">
            Ver trabalhos
          </Button>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-2"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-faint">
          role
        </span>
        <span className="relative flex h-10 w-px overflow-hidden bg-line-strong">
          <span className="absolute inset-x-0 top-0 h-3 animate-scroll-cue bg-brand" />
        </span>
      </motion.div>
    </section>
  );
}
