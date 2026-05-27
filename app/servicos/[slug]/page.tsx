import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StackPills } from "@/components/ui/StackPills";
import { FAQ } from "@/components/ui/FAQ";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  SERVICE_SLUGS,
  getService,
  frentes,
} from "@/lib/content/services";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.promise,
    openGraph: { title: service.title, description: service.promise },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const frente = frentes[service.frente];

  return (
    <>
      <PageHero
        eyebrow={frente.label}
        title={service.title}
        intro={service.promise}
      >
        <div className="flex flex-col gap-6">
          <StackPills items={service.stack} />
          <Link
            href="/servicos"
            className="inline-flex w-fit items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" /> Todos os serviços
          </Link>
        </div>
      </PageHero>

      {/* O problema que resolvemos */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                <span className="inline-block h-px w-6 bg-brand/60" />
                O problema
              </p>
            </div>
            <Reveal className="lg:col-span-8">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
                {service.problem}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Como fazemos */}
      <Section className="border-y border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">
                <span className="inline-block h-px w-6 bg-brand/60" />
                Como fazemos
              </p>
              <h2 className="font-display text-3xl font-semibold text-fg">
                Profundidade técnica, sem enrolação.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ol>
                {service.how.map((h, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="flex gap-5 border-t border-line py-7 first:border-t-0 first:pt-0">
                      <span className="font-mono text-sm text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-medium text-fg">
                          {h.title}
                        </h3>
                        <p className="mt-2 text-fg-muted">{h.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mini-case */}
      <Section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-800 p-8 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-brand-radial opacity-50"
              />
              <div className="relative z-10 grid gap-8 sm:grid-cols-3 sm:items-center">
                <div className="sm:col-span-2">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                    Exemplo relacionado
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-fg">
                    {service.miniCase.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-fg-muted">
                    {service.miniCase.body}
                  </p>
                </div>
                {service.miniCase.metric && (
                  <div className="sm:text-right">
                    <div className="font-display text-4xl font-semibold text-brand text-glow">
                      {service.miniCase.metric}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">
                <span className="inline-block h-px w-6 bg-brand/60" />
                Dúvidas frequentes
              </p>
              <h2 className="font-display text-3xl font-semibold text-fg">
                {service.title}, em detalhe.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <FAQ items={service.faq} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner
        title={
          <>
            Precisa de {service.title.toLowerCase()}?
          </>
        }
        subtitle="Conte o seu caso. Devolvemos um caminho técnico claro, com prazo e investimento."
      />
    </>
  );
}
