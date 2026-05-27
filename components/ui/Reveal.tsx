"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fade, scaleIn, viewport } from "@/lib/motion";

type Animation = "up" | "fade" | "scale";

const variantMap = { up: fadeUp, fade, scale: scaleIn };

/**
 * Scroll-reveal wrapper. Renders children statically (no transform) when the
 * user prefers reduced motion, so nothing is ever hidden behind an animation.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  animation = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: Animation;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={variantMap[animation]}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
