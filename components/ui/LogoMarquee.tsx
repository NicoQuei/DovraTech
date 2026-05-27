import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee (pure CSS). The track is duplicated and shifted
 * -50%, so the loop is seamless. Edges fade via the `mask-x` utility.
 * Reduced-motion users get a near-static row (animation neutralised globally).
 */
export function LogoMarquee({
  items,
  duration = 40,
  className,
}: {
  items: string[];
  duration?: number;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("mask-x overflow-hidden", className)}>
      <ul
        className="flex w-max animate-marquee-x items-center gap-12"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="select-none whitespace-nowrap font-display text-xl font-medium tracking-tight text-fg-muted/70 transition-colors hover:text-fg"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
