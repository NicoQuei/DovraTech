import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { frentes, servicesByFrente, type Frente } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Do pixel ao deploy: landing pages, sites, e-commerce, SaaS, apps e sistemas. Design, branding, SEO, manutenção e hospedagem — sob o mesmo teto.",
};

const order: Frente[] = ["construimos", "desenhamos", "crescemos"];

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Do pixel ao deploy —{" "}
            <span className="text-gradient-brand">tudo sob o mesmo teto.</span>
          </>
        }
        intro="Onze serviços organizados em três frentes. Cada um com profundidade técnica de verdade — não uma lista genérica de promessas."
      />

      {order.map((key) => {
        const frente = frentes[key];
        const items = servicesByFrente(key);
        return (
          <Section key={key} className="py-16 sm:py-20">
            <Container>
              <div className="mb-10 flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-3xl font-semibold text-brand">
                    {frente.label}
                  </h2>
                  <p className="mt-1 text-fg">{frente.tagline}</p>
                </div>
                <p className="max-w-md text-sm text-fg-muted">
                  {frente.description}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 0.06} className="h-full">
                    <Link
                      href={`/servicos/${s.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-line bg-ink-800/60 p-6 transition-colors duration-300 hover:border-brand/40 hover:bg-ink-700"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-brand transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/5">
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-medium text-fg">
                        {s.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-fg-muted">
                        {s.short}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-fg-faint transition-colors group-hover:text-brand">
                        ver serviço
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <CtaBanner
        title="Não sabe por onde começar?"
        subtitle="Use o configurador de projeto: responda algumas perguntas e devolvemos uma estimativa de escopo, prazo e investimento."
        primaryLabel="Abrir configurador"
      />
    </>
  );
}
