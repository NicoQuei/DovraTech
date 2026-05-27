import { cn } from "@/lib/utils";

/** Monospace section label. Optionally prefixed with an index like "01 /". */
export function Eyebrow({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow", className)}>
      <span className="inline-block h-px w-6 bg-brand/60" aria-hidden />
      {index && <span className="text-fg-faint">{index}</span>}
      {children}
    </span>
  );
}
