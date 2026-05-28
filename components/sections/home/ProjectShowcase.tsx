"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCover } from "@/components/sections/work/ProjectCover";
import { projects } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

/**
 * List-based projects section with a cursor-following preview, adapted on-brand
 * from the 21st.dev "project-showcase" component (jatin-yadav05). Each project
 * is a row; hovering one dims the rest, draws a green underline, slides the
 * arrow in and floats a live preview (the generated ProjectCover) under the
 * cursor. The floating preview is disabled under prefers-reduced-motion.
 */
export function ProjectShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  // Keep the last hovered index so the preview keeps the right cover while it
  // fades out (active goes null on leave).
  const lastIndex = useRef(0);
  if (active !== null) lastIndex.current = active;

  // Cursor-following preview: track the raw pointer, trail it with a spring,
  // and add a touch of velocity-based rotation for life.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { stiffness: 280, damping: 32, mass: 0.5 };
  const x = useSpring(mouseX, spring);
  const y = useSpring(mouseY, spring);
  const xVelocity = useVelocity(x);
  const rotate = useSpring(
    useTransform(xVelocity, [-1200, 1200], [-9, 9], { clamp: true }),
    { stiffness: 140, damping: 20 },
  );

  // Snap the trailing springs to the cursor on the first move so the preview
  // never slides in from the corner.
  const primed = useRef(false);
  const onMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!primed.current) {
      x.jump(e.clientX);
      y.jump(e.clientY);
      primed.current = true;
    }
  };

  const preview = projects[active ?? lastIndex.current];

  return (
    <section id="trabalhos" className="relative py-24 sm:py-32">
      {/* Soft brand glow anchoring the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[60%] bg-brand-radial opacity-50"
      />

      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">
              <span className="inline-block h-px w-6 bg-brand/60" />
              Trabalhos em destaque
            </p>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-fg">
              Resultados — não só telas bonitas.
            </h2>
          </div>
          <div className="shrink-0">
            <Button href="/trabalhos" variant="secondary" arrow="up-right">
              Ver portfólio
            </Button>
          </div>
        </div>

        <Reveal animation="up" className="mt-14">
          <ul onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
            {projects.map((project, i) => {
              const isActive = active === i;
              const dimmed = active !== null && !isActive;
              return (
                <li key={project.slug} onMouseEnter={() => setActive(i)}>
                  <Link
                    href={`/trabalhos/${project.slug}`}
                    className={cn(
                      "group relative flex items-center gap-5 border-t border-line py-7 transition-opacity duration-300 sm:gap-8 sm:py-9",
                      i === projects.length - 1 && "border-b",
                      dimmed && "opacity-35",
                    )}
                  >
                    <span className="w-7 shrink-0 font-mono text-xs text-fg-faint sm:w-10 sm:text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={cn(
                          "inline-block font-display text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl lg:text-5xl",
                          isActive ? "text-brand" : "text-fg",
                        )}
                      >
                        {project.name}
                        {/* Animated underline */}
                        <span
                          className={cn(
                            "block h-px origin-left bg-brand transition-transform duration-500 ease-expo",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </h3>
                      <p className="mt-2 max-w-xl truncate text-sm text-fg-muted sm:text-base">
                        {project.summary}
                      </p>
                    </div>

                    <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-fg-faint md:inline">
                      {project.type} · {project.year}
                    </span>

                    <span
                      className={cn(
                        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-ink/40 backdrop-blur transition-all duration-300",
                        isActive
                          ? "border-brand text-brand"
                          : "border-line text-fg-muted",
                      )}
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>

      {/* Cursor-following preview */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
          style={{ x, y, rotate }}
        >
          <motion.div
            className="-translate-x-1/2 -translate-y-1/2 will-change-transform"
            initial={false}
            animate={{
              opacity: active !== null ? 1 : 0,
              scale: active !== null ? 1 : 0.82,
            }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-80 overflow-hidden rounded-2xl border border-line shadow-glow">
              <ProjectCover
                project={preview}
                className="aspect-[4/3]"
                ghostSize="text-[6rem]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/90 to-transparent p-4">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-fg-muted">
                  {preview.type} · {preview.year}
                </span>
                <span className="font-display text-lg font-semibold text-brand text-glow">
                  {preview.headline.value}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
