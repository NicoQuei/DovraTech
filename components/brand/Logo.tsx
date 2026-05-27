import { cn } from "@/lib/utils";

/** DOVRA mark — a terminal-prompt chevron in a rounded module + wordmark. */
export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0"
        role="img"
        aria-label="Dovra"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="8.5"
          fill="rgba(25,229,125,0.06)"
          stroke="currentColor"
          className="text-line-strong"
          strokeWidth="1.5"
        />
        <path
          d="M11 9.5 L18.5 16 L11 22.5"
          fill="none"
          stroke="#19E57D"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="18.5"
          y1="22.5"
          x2="23"
          y2="22.5"
          stroke="#19E57D"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span className="font-display text-lg font-semibold leading-none tracking-tight text-fg">
          Dovra<span className="text-brand">.</span>
        </span>
      )}
    </span>
  );
}
