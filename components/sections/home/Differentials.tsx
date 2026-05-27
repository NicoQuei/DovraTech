import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { differentials } from "@/lib/content/site-data";

export function Differentials() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">
            <span className="inline-block h-px w-6 bg-brand/60" />
            O que vem junto
          </p>
          <h2 className="font-display text-display-md font-semibold text-fg">
            Padrões que a gente não negocia.
          </h2>
          <p className="mt-5 text-lg text-fg-muted">
            Não são opcionais nem cobrados à parte. É o jeito Dovra de entregar —
            em todo projeto.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.06}>
              <div className="group h-full bg-ink-800 p-7 transition-colors duration-300 hover:bg-ink-700">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-brand transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/5">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-fg">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
