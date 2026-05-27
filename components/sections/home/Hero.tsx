"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCanvas } from "./HeroCanvas";

const EASE = [0.16, 1, 0.3, 1] as const;

function HeadlineLine({
  children,
  index,
  reduce,
}: {
  children: React.ReactNode;
  index: number;
  reduce: boolean | null;
}) {
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: EASE, delay: 0.15 + index * 0.12 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Canvas field */}
      <HeroCanvas className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Overlays — vignette + dissolve into the page below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_30%,transparent_40%,rgba(6,7,10,0.55)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink"
      />

      <Container className="relative z-10 pt-24">
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
          <HeadlineLine index={0} reduce={reduce}>
            Engenharia digital
          </HeadlineLine>
          <HeadlineLine index={1} reduce={reduce}>
            <span className="text-gradient-brand">sob medida.</span>
          </HeadlineLine>
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
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
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
