"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { testimonials, clientLogos } from "@/lib/content/site-data";
import { cn } from "@/lib/utils";

export function SocialProof() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(
      () => setI((p) => (p + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(id);
  }, [reduce, paused]);

  const t = testimonials[i];

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <p className="eyebrow mb-5">
          <span className="inline-block h-px w-6 bg-brand/60" />
          Prova social
        </p>

        <div
          className="relative min-h-[16rem] max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="h-10 w-10 text-brand/40" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5"
            >
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
                {t.quote}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="font-medium text-fg">{t.author}</span>
                <span className="h-1 w-1 rounded-full bg-fg-faint" aria-hidden />
                <span className="text-sm text-fg-muted">{t.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex gap-2" role="tablist" aria-label="Depoimentos">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Depoimento ${idx + 1}`}
                onClick={() => setI(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === i
                    ? "w-8 bg-brand"
                    : "w-1.5 bg-line-strong hover:bg-fg-faint",
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.22em] text-fg-faint">
            Marcas que confiam
          </p>
          <LogoMarquee items={clientLogos} />
        </div>
      </Container>
    </section>
  );
}
