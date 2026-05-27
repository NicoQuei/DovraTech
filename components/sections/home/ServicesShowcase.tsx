import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { frentes, servicesByFrente, type Frente } from "@/lib/content/services";

const order: Frente[] = ["construimos", "desenhamos", "crescemos"];

export function ServicesShowcase() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">
              <span className="inline-block h-px w-6 bg-brand/60" />
              Serviços
            </p>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-fg">
              Três frentes, um só padrão de qualidade.
            </h2>
          </div>
          <div className="shrink-0">
            <Button href="/servicos" variant="secondary" arrow="up-right">
              Todos os serviços
            </Button>
          </div>
        </div>

        <div className="mt-14">
          {order.map((key, i) => {
            const frente = frentes[key];
            const items = servicesByFrente(key);
            return (
              <Reveal key={key} delay={0} className="border-t border-line">
                <div className="grid gap-8 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
                  <div className="lg:col-span-4">
                    <p className="font-mono text-xs text-fg-faint">
                      0{i + 1} / 03
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-brand">
                      {frente.label}
                    </h3>
                    <p className="mt-2 text-fg">{frente.tagline}</p>
                    <p className="mt-3 max-w-xs text-sm text-fg-muted">
                      {frente.description}
                    </p>
                  </div>

                  <ul className="lg:col-span-8">
                    {items.map((s) => (
                      <li key={s.slug} className="border-t border-line first:border-t-0">
                        <Link
                          href={`/servicos/${s.slug}`}
                          className="group flex items-start gap-4 py-5"
                        >
                          <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-fg-muted transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/5 group-hover:text-brand">
                            <Icon name={s.icon} className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-4">
                              <h4 className="font-display text-xl font-medium text-fg transition-colors duration-200 group-hover:text-brand">
                                {s.title}
                              </h4>
                              <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-fg-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-brand group-hover:opacity-100" />
                            </div>
                            <p className="mt-1 text-sm text-fg-muted">{s.short}</p>
                            <div className="grid grid-rows-[0fr] transition-all duration-500 ease-expo group-hover:grid-rows-[1fr]">
                              <div className="overflow-hidden">
                                <p className="pt-3 text-sm text-fg-faint">
                                  <span className="font-mono text-xs text-brand">
                                    como fazemos ·{" "}
                                  </span>
                                  {s.how[0].title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
