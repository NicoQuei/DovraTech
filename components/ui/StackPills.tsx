import { cn } from "@/lib/utils";

/** Monospace pill list for tech stacks / tags. */
export function StackPills({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-ink-800 px-3.5 py-1.5 font-mono text-xs text-fg-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
