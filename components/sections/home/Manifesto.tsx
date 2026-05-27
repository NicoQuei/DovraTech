"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";

const TEXT =
  "O melhor software é invisível: rápido, claro e tão bem-feito que desaparece na experiência. Para nós, design e código não são etapas separadas — são a mesma conversa.";

const words = TEXT.split(" ");

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

export function Manifesto() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  return (
    <section className="relative py-28 sm:py-36 lg:py-44">
      <Container>
        <p className="eyebrow mb-8">
          <span className="inline-block h-px w-6 bg-brand/60" />
          Manifesto
        </p>
        <div ref={ref}>
          <p className="max-w-4xl font-display text-3xl font-medium leading-[1.25] tracking-tight text-fg sm:text-4xl lg:text-5xl">
            {reduce
              ? TEXT
              : words.map((word, i) => {
                  const start = i / words.length;
                  const end = (i + 1.5) / words.length;
                  return (
                    <Word
                      key={i}
                      progress={scrollYProgress}
                      range={[start, Math.min(end, 1)]}
                    >
                      {word}
                    </Word>
                  );
                })}
          </p>
        </div>
      </Container>
    </section>
  );
}
