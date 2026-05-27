import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink hover:bg-brand-bright shadow-glow-sm",
  secondary:
    "border border-line-strong text-fg hover:border-brand hover:text-brand bg-ink-800/40",
  ghost: "text-fg-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-base",
};

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Arrow icon: "right" (CTA) or "up-right" (external/secondary). */
  arrow?: "right" | "up-right" | false;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

const ArrowIcon = ({ kind }: { kind: "right" | "up-right" }) =>
  kind === "right" ? (
    <ArrowRight
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden
    />
  ) : (
    <ArrowUpRight
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden
    />
  );

/** Link-style button (default). Use a plain styled <button> for form actions. */
export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  arrow = "right",
}: ButtonAsLink) {
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon kind={arrow} />}
    </>
  );
  const classes = buttonClasses(variant, size, className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
