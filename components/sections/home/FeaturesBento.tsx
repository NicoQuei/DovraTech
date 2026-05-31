"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { TiltSpotlight } from "@/components/ui/TiltSpotlight";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const card =
  "h-full overflow-hidden rounded-3xl border border-line bg-ink-800 p-7 hover:border-brand/40 hover:shadow-glow";

/**
 * Bento "capabilities" grid — inspired by 21st.dev's Tailark features-8/9, but
 * rebuilt on-brand with the site's tokens, lightweight SVG/CSS visuals (no
 * recharts/dotted-map) and the TiltSpotlight interaction. Uses real copy from
 * `differentials` + `stats`. Supersedes the plain Differentials grid.
 */
export function FeaturesBento() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">
            <span className="inline-block h-px w-6 bg-brand/60" />
            Capacidades
          </p>
          <h2 className="font-display text-display-md font-semibold text-fg">
            Engenharia que se prova em números.
          </h2>
          <p className="mt-5 text-lg text-fg-muted">
            Não são opcionais nem cobrados à parte — é o padrão Dovra em todo
            projeto, do pixel ao deploy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {/* A — Performance + area chart */}
          <Reveal className="sm:col-span-2 lg:col-span-4" animation="up">
            <TiltSpotlight className={cn(card, "flex flex-col")}>
              <CardHead icon="Gauge" label="Garantia de performance" />
              <p className="mt-4 max-w-md text-fg-muted">
                Compromisso com Core Web Vitals no verde. Velocidade não é
                opcional — é requisito desde a primeira linha.
              </p>
              <div className="mt-auto pt-8">
                <AreaChart />
              </div>
            </TiltSpotlight>
          </Reveal>

          {/* B — Lighthouse gauge */}
          <Reveal className="sm:col-span-1 lg:col-span-2" animation="up">
            <TiltSpotlight className={cn(card, "flex flex-col items-center justify-center text-center")}>
              <GaugeRing />
              <p className="mt-4 text-sm text-fg-muted">Lighthouse médio</p>
            </TiltSpotlight>
          </Reveal>

          {/* C — Uptime */}
          <Reveal className="sm:col-span-1 lg:col-span-2" animation="up">
            <TiltSpotlight className={cn(card, "flex flex-col justify-between")}>
              <CardHead icon="TrendingUp" label="Disponibilidade" />
              <div>
                <AnimatedCounter
                  value={99.9}
                  decimals={1}
                  suffix="%"
                  className="font-display text-5xl font-semibold text-brand text-glow"
                />
                <p className="mt-1 text-sm text-fg-muted">Uptime médio</p>
                <Sparkbars />
              </div>
            </TiltSpotlight>
          </Reveal>

          {/* D — Propriedade do código */}
          <Reveal className="sm:col-span-1 lg:col-span-2" animation="up">
            <TiltSpotlight className={cn(card, "flex flex-col")}>
              <CardHead icon="Lock" label="Propriedade total do código" />
              <p className="mt-4 text-sm text-fg-muted">
                O que construímos é seu — para sempre, sem amarras nem dependência
                de fornecedor.
              </p>
            </TiltSpotlight>
          </Reveal>

          {/* E — Hospedagem */}
          <Reveal className="sm:col-span-1 lg:col-span-2" animation="up">
            <TiltSpotlight className={cn(card, "flex flex-col justify-between")}>
              <CardHead icon="Cloud" label="Hospedagem incluída" />
              <p className="mt-4 text-sm text-fg-muted">
                Colocamos o seu site no ar e mantemos ele rodando — domínio, SSL
                e backups.
              </p>
              <Pipeline />
            </TiltSpotlight>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── Card header (icon chip + label) ─────────────────────────────── */
function CardHead({ icon, label }: { icon: IconName; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-brand transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/5">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="font-display text-lg font-medium text-fg">{label}</h3>
    </div>
  );
}

/* ── Mini area chart (rising performance) ────────────────────────── */
function AreaChart() {
  const reduce = useReducedMotion();
  const line =
    "M0,82 C40,72 60,54 92,58 C126,62 146,38 178,40 C214,42 240,18 272,16 L300,12";
  const area = `${line} L300,100 L0,100 Z`;
  return (
    <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="h-24 w-full">
      <defs>
        <linearGradient id="bento-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#19E57D" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#19E57D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#bento-area)" />
      <motion.path
        d={line}
        fill="none"
        stroke="#54FFA6"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 6px rgba(25,229,125,0.5))" }}
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.6, ease: EASE }}
      />
    </svg>
  );
}

/* ── Lighthouse gauge ring ───────────────────────────────────────── */
function GaugeRing() {
  const reduce = useReducedMotion();
  const r = 42;
  const C = 2 * Math.PI * r;
  const offset = C * (1 - 0.96);
  return (
    <div className="relative flex h-36 w-36 items-center justify-center">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#19E57D"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={C}
          style={{ filter: "drop-shadow(0 0 6px rgba(25,229,125,0.5))" }}
          initial={reduce ? { strokeDashoffset: offset } : { strokeDashoffset: C }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.5, ease: EASE }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <AnimatedCounter value={96} className="font-display text-4xl font-semibold text-fg" />
      </div>
    </div>
  );
}

/* ── Uptime sparkbars ────────────────────────────────────────────── */
function Sparkbars() {
  const heights = [40, 55, 48, 70, 60, 82, 76, 95];
  return (
    <div className="mt-5 flex h-10 items-end gap-1">
      {heights.map((h, i) => (
        <span
          key={i}
          className={cn(
            "w-full rounded-sm",
            i === heights.length - 1 ? "bg-brand" : "bg-brand/25",
          )}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

/* ── "no ar" status indicator ────────────────────────────────────── */
function Pipeline() {
  return (
    <div className="mt-6 flex items-center">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex flex-1 items-center last:flex-none">
          <span
            className={cn(
              "relative flex h-3 w-3 items-center justify-center rounded-full",
              i === 2 ? "bg-brand" : "bg-brand/40",
            )}
          >
            {i === 2 && (
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand/60" />
            )}
          </span>
          {i < 2 && <span className="h-px flex-1 bg-gradient-to-r from-brand/40 to-brand/40" />}
        </div>
      ))}
    </div>
  );
}
