"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type P = { x: number; y: number; vx: number; vy: number };

/**
 * Particle-mesh field rendered on a 2D canvas — the hero's "first proof".
 * Reactive to the cursor, dissolves as the page scrolls, pauses when off-screen
 * or when the tab is hidden, and renders a single static frame when the user
 * prefers reduced motion. No three.js — deliberately lightweight.
 */
export function HeroCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: P[] = [];
    let cfg = { count: 0, maxDist: 140, mouseRadius: 180 };
    const mouse = { x: -9999, y: -9999, active: false };
    let dissolve = 0;
    let raf = 0;
    let visible = true;
    let pageVisible = true;

    const computeCfg = () => {
      const area = width * height;
      const count = Math.min(120, Math.max(34, Math.floor(area / 17000)));
      return {
        count,
        maxDist: Math.min(170, Math.max(110, width / 11)),
        mouseRadius: 190,
      };
    };

    const init = () => {
      particles = Array.from({ length: cfg.count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cfg = computeCfg();
      init();
    };

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);
      const alpha = 1 - dissolve;
      if (alpha <= 0.02) return;

      const md = cfg.maxDist;
      const mr = cfg.mouseRadius;

      for (const p of particles) {
        if (animate) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < mr * mr) {
              const d = Math.sqrt(d2) || 1;
              const force = (1 - d / mr) * 0.7;
              p.x += (dx / d) * force;
              p.y += (dy / d) * force;
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < md * md) {
            const o = (1 - Math.sqrt(d2) / md) * 0.5 * alpha;
            ctx.strokeStyle = `rgba(25,229,125,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < mr * mr) {
            const o = (1 - Math.sqrt(d2) / mr) * 0.65 * alpha;
            ctx.strokeStyle = `rgba(84,255,166,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(84,255,166,${0.7 * alpha})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (visible && pageVisible) draw(true);
      raf = requestAnimationFrame(loop);
    };

    // ── reduced motion: one static frame, no loop, no listeners ──
    if (reduceMotion) {
      resize();
      draw(false);
      const onResizeStatic = () => {
        resize();
        draw(false);
      };
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };
    const onScroll = () => {
      dissolve = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.85)));
    };
    const onVisibility = () => {
      pageVisible = document.visibilityState === "visible";
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    resize();
    onScroll();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      role="presentation"
    />
  );
}
