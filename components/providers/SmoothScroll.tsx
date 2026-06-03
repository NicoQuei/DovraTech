"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useReducedMotion } from "framer-motion";

/**
 * Resets the scroll position to the top on every route change.
 * Drives the Lenis instance when present, falling back to native scroll.
 */
function ScrollToTop({ lenisRef }: { lenisRef: React.RefObject<LenisRef | null> }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisRef]);

  return null;
}

/**
 * Lenis smooth scroll, mounted at the document root.
 * Disabled entirely when the user prefers reduced motion — native scroll wins.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const lenisRef = useRef<LenisRef | null>(null);

  if (reduceMotion) {
    return (
      <>
        <ScrollToTop lenisRef={lenisRef} />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.1,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      <ScrollToTop lenisRef={lenisRef} />
      {children}
    </ReactLenis>
  );
}
