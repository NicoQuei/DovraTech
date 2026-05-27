"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCover } from "./ProjectCover";
import { projects, projectTypes, type ProjectType } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

type Filter = "Todos" | ProjectType;
const filters: Filter[] = ["Todos", ...projectTypes];

export function WorkGallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Filter>("Todos");

  const visible = useMemo(
    () => (active === "Todos" ? projects : projects.filter((p) => p.type === active)),
    [active],
  );

  return (
    <Container className="py-16 sm:py-20">
      {/* Filter */}
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por tipo">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
              active === f
                ? "border-brand bg-brand/10 text-brand"
                : "border-line text-fg-muted hover:border-line-strong hover:text-fg",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout={!reduce} className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/trabalhos/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-line">
                  <ProjectCover
                    project={project}
                    className="aspect-[4/3] transition-transform duration-500 ease-expo group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
                        {project.type} · {project.year}
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink/40 text-fg backdrop-blur transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="font-display text-3xl font-semibold text-brand text-glow">
                      {project.headline.value}
                      <span className="ml-2 align-middle font-mono text-xs uppercase tracking-wide text-fg-faint">
                        {project.headline.label}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-xl font-medium text-fg transition-colors group-hover:text-brand">
                    {project.name}
                  </h2>
                </div>
                <p className="mt-1 text-sm text-fg-muted">{project.summary}</p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
}
