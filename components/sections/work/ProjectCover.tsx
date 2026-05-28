import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content/projects";

/**
 * Project cover. Renders the real platform image when `project.image` is set
 * (with a dark scrim so overlaid brand text stays legible); otherwise falls
 * back to the generated dark "case" cover — colored glow + ghost wordmark.
 */
export function ProjectCover({
  project,
  className,
  ghostSize = "text-[22vw] sm:text-[12vw]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  project: Project;
  className?: string;
  ghostSize?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-ink-800", className)}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(70% 80% at 78% 18%, ${project.accent}33, transparent 60%), radial-gradient(60% 70% at 8% 92%, ${project.accentTo}26, transparent 60%)`,
        }}
      />

      {project.image ? (
        <>
          <Image
            src={project.image}
            alt={`${project.name} — ${project.summary}`}
            fill
            sizes={sizes}
            priority={priority}
            // Covers are pre-sized, lightweight screenshots served directly:
            // skip the on-demand optimizer (painfully slow for AVIF in dev).
            unoptimized
            className="object-cover object-top"
          />
          {/* Scrim keeps overlaid metrics/labels readable over the screenshot */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10"
          />
        </>
      ) : (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 flex items-center justify-center font-display font-bold leading-none tracking-tighter text-fg/[0.05]",
            ghostSize,
          )}
        >
          {project.name}
        </span>
      )}
    </div>
  );
}
