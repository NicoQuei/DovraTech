import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content/projects";

/** Generated dark "case" cover — colored glow + ghost wordmark. */
export function ProjectCover({
  project,
  className,
  ghostSize = "text-[22vw] sm:text-[12vw]",
}: {
  project: Project;
  className?: string;
  ghostSize?: string;
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
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center font-display font-bold leading-none tracking-tighter text-fg/[0.05]",
          ghostSize,
        )}
      >
        {project.name}
      </span>
    </div>
  );
}
