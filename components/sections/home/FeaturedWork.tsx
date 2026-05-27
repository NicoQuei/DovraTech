"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects, type Project } from "@/lib/content/projects";

function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Scroll parallax for the cover + ghost wordmark.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const ghostY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  // 3D tilt on hover.
  const rotX = useSpring(0, { stiffness: 150, damping: 18 });
  const rotY = useSpring(0, { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotY.set((px - 0.5) * 8);
    rotX.set((0.5 - py) * 8);
  };
  const onLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
      whileHover={reduce ? undefined : { scale: 1.01 }}
      className="[transform-style:preserve-3d]"
    >
      <Link
        href={`/trabalhos/${project.slug}`}
        className="group relative block overflow-hidden rounded-3xl border border-line bg-ink-800 transition-[border-color,box-shadow] duration-300 hover:border-brand/40 hover:shadow-glow"
      >
        <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">
          {/* Colored glow cover (parallax) */}
          <motion.div
            aria-hidden
            style={{
              y: reduce ? 0 : y,
              background: `radial-gradient(70% 80% at 78% 18%, ${project.accent}33, transparent 60%), radial-gradient(60% 70% at 8% 92%, ${project.accentTo}26, transparent 60%)`,
            }}
            className="absolute inset-[-10%]"
          />

          {/* Ghost wordmark (parallax) */}
          <motion.span
            aria-hidden
            style={{ y: reduce ? 0 : ghostY }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[28vw] font-bold leading-none tracking-tighter text-fg/[0.04] transition-colors duration-300 group-hover:text-fg/[0.06] sm:text-[18vw]"
          >
            {project.name}
          </motion.span>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
                {String(index + 1).padStart(2, "0")} · {project.type} · {project.year}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink/40 text-fg backdrop-blur transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-md">
                <h3 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-fg-muted">{project.summary}</p>
              </div>
              <div className="shrink-0 sm:text-right">
                <div className="font-display text-4xl font-semibold text-brand text-glow sm:text-5xl">
                  {project.headline.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wide text-fg-faint">
                  {project.headline.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <section id="trabalhos" className="relative py-24 sm:py-32">
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

        <div className="mt-14 flex flex-col gap-8 sm:gap-12">
          {projects.map((project, i) => (
            <Reveal key={project.slug} animation="up">
              <ProjectFeature project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
