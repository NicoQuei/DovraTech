import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StackPills } from "@/components/ui/StackPills";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ProjectCover } from "@/components/sections/work/ProjectCover";
import {
  PROJECT_SLUGS,
  getProject,
  getNextProject,
} from "@/lib/content/projects";

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.type}`,
    description: p.summary,
    openGraph: { title: `${p.name} — ${p.type}`, description: p.summary },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line pb-12 pt-36 sm:pt-44">
        <Container>
          <Reveal>
            <Link
              href="/trabalhos"
              className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="h-4 w-4" /> Trabalhos
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
              <span>{project.type}</span>
              <span className="text-fg-faint">·</span>
              <span>{project.year}</span>
              <span className="text-fg-faint">·</span>
              <span>{project.client}</span>
            </div>
            <h1 className="mt-5 font-display text-display-lg font-semibold text-fg">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-fg-muted sm:text-xl">
              {project.summary}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ProjectCover
              project={project}
              className="mt-10 aspect-[16/10] rounded-3xl border border-line sm:aspect-[16/9]"
              ghostSize="text-[26vw] sm:text-[14vw]"
            />
          </Reveal>

          {project.liveUrl && (
            <div className="mt-6">
              <Button href={project.liveUrl} external variant="secondary" arrow={false}>
                <ExternalLink className="h-4 w-4" />
                Ver projeto no ar
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* O desafio */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                <span className="inline-block h-px w-6 bg-brand/60" />
                O desafio
              </p>
            </div>
            <Reveal className="lg:col-span-8">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
                {project.challenge}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* A solução */}
      <Section className="border-y border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">
                <span className="inline-block h-px w-6 bg-brand/60" />
                A solução
              </p>
              <h2 className="font-display text-3xl font-semibold text-fg">
                Decisões de design e engenharia.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ol>
                {project.solution.map((s, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="flex gap-5 border-t border-line py-7 first:border-t-0 first:pt-0">
                      <span className="font-mono text-sm text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-medium text-fg">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-fg-muted">{s.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Resultados */}
      <Section className="py-20 sm:py-28">
        <Container>
          <p className="eyebrow mb-10">
            <span className="inline-block h-px w-6 bg-brand/60" />
            Resultados
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {project.results.map((m, i) => (
              <Reveal key={i} delay={i * 0.06} animation="scale">
                <div className="h-full bg-ink-800 p-7 sm:p-8">
                  <div className="font-display text-3xl font-semibold text-brand text-glow sm:text-4xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-sm text-fg-muted">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
              Stack
            </p>
            <StackPills items={project.stack} />
          </div>
        </Container>
      </Section>

      {/* Depoimento */}
      {project.testimonial && (
        <Section className="border-t border-line py-20 sm:py-28">
          <Container>
            <Reveal className="max-w-3xl">
              <Quote className="h-10 w-10 text-brand/40" aria-hidden />
              <blockquote className="mt-5">
                <p className="font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
                  {project.testimonial.quote}
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="font-medium text-fg">
                    {project.testimonial.author}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-fg-faint" aria-hidden />
                  <span className="text-sm text-fg-muted">
                    {project.testimonial.role}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* Próximo case */}
      <Section className="border-t border-line py-16 sm:py-20">
        <Container>
          <Link href={`/trabalhos/${next.slug}`} className="group block">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
                Próximo caso
              </span>
              <ArrowRight className="h-5 w-5 text-fg-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand" />
            </div>
            <div className="mt-4 grid gap-6 sm:grid-cols-3 sm:items-center">
              <ProjectCover
                project={next}
                className="aspect-[16/10] rounded-2xl border border-line"
                ghostSize="text-[18vw] sm:text-[7vw]"
              />
              <div className="sm:col-span-2">
                <h2 className="font-display text-3xl font-semibold text-fg transition-colors group-hover:text-brand sm:text-4xl">
                  {next.name}
                </h2>
                <p className="mt-2 text-fg-muted">{next.summary}</p>
              </div>
            </div>
          </Link>
        </Container>
      </Section>

      <CtaBanner title="Quer um resultado desses?" />
    </>
  );
}
