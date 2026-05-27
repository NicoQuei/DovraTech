import { cn } from "@/lib/utils";

/** Centered max-width wrapper with responsive gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container-x", className)}>{children}</div>;
}
