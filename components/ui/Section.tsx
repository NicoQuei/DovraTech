import { cn } from "@/lib/utils";

/** Vertical rhythm wrapper for page sections. */
export function Section({
  id,
  className,
  children,
  as: Tag = "section",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div" | "footer";
}) {
  return (
    <Tag id={id} className={cn("relative py-20 sm:py-28 lg:py-36", className)}>
      {children}
    </Tag>
  );
}
