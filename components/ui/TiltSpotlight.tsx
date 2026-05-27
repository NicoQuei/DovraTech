"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Card wrapper with a subtle 3D tilt + lift on hover.
 * Disables all motion under prefers-reduced-motion.
 */
export function TiltSpotlight({
  children,
  className,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useSpring(0, { stiffness: 150, damping: 18 });
  const rotY = useSpring(0, { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotY.set((px - 0.5) * max * 2);
    rotX.set((0.5 - py) * max * 2);
  };
  const onLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
      whileHover={reduce ? undefined : { scale: 1.015 }}
      className={cn(
        "group relative [transform-style:preserve-3d] transition-[border-color,box-shadow] duration-300",
        className,
      )}
    >
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
