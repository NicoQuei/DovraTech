import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { processSteps } from "@/lib/content/process";

const preview = processSteps.slice(0, 4);

export function ProcessPreview() {
  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">
              <span className="inline-block h-px w-6 bg-brand/60" />
              Como trabalhamos
            </p>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-fg">
              Um processo que reduz a sua insegurança.
            </h2>
          </div>
          <div className="shrink-0">
            <Button href="/processo" variant="secondary" arrow="up-right">
              Processo completo
            </Button>
          </div>
        </div>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-brand/40 via-line-strong to-transparent md:block"
          />
          <ol className="grid gap-y-10 md:grid-cols-4 md:gap-x-8">
            {preview.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08} animation="up">
                <li className="relative">
                  <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink text-brand">
                    <Icon name={step.icon} className="h-5 w-5" />
                    {i === 0 && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-brand/30 animate-pulse-ring" />
                    )}
                  </span>
                  <div className="mt-5">
                    <span className="font-mono text-xs text-fg-faint">
                      {step.n}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-medium text-fg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-fg-muted">{step.what}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
