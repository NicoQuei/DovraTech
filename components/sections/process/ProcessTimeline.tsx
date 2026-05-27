"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { processSteps } from "@/lib/content/process";

export function ProcessTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.35", "end 0.65"],
  });

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div ref={ref} className="relative">
          {/* track + animated fill */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[19px] top-0 w-px bg-line sm:left-[27px]"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : scrollYProgress }}
            className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-brand sm:left-[27px]"
          />

          <ol>
            {processSteps.map((step, i) => (
              <li
                key={step.n}
                className="relative grid grid-cols-[40px_1fr] gap-6 pb-16 last:pb-0 sm:grid-cols-[56px_1fr] sm:gap-10 sm:pb-24"
              >
                <div className="relative z-10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-brand sm:h-14 sm:w-14">
                    <Icon name={step.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                </div>

                <Reveal delay={0} className="min-w-0">
                  <div className="pt-0.5 sm:pt-2">
                    <span className="font-mono text-sm text-fg-faint">
                      {step.n}
                    </span>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg text-fg-muted">
                      {step.what}
                    </p>

                    <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                      <div className="bg-ink-800 p-5">
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                          O que você recebe
                        </p>
                        <p className="mt-2 text-sm text-fg">
                          {step.deliverable}
                        </p>
                      </div>
                      <div className="bg-ink-800 p-5">
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
                          Tempo estimado
                        </p>
                        <p className="mt-2 text-sm text-fg">{step.duration}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
