import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/content/site-data";

export function StatsBand() {
  return (
    <section className="relative py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-800 p-7 sm:p-9">
              <div className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                <AnimatedCounter
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wide text-fg-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
