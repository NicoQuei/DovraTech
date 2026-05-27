import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StackPills } from "@/components/ui/StackPills";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { StatsBand } from "@/components/sections/home/StatsBand";
import { values, techStack } from "@/lib/content/site-data";

export const metadata: Metadata = {
  title: "Estúdio",
  description:
    "Quem é a Dovra: um estúdio onde design e engenharia vivem sob o mesmo teto. Nossa filosofia de trabalho e a stack que dominamos.",
};

export default function EstudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Estúdio"
        title={
          <>
            Design e engenharia,{" "}
            <span className="text-gradient-brand">sob o mesmo teto.</span>
          </>
        }
        intro="A Dovra nasceu de uma convicção simples: produto bom não é design bonito nem código limpo isoladamente — é os dois conversando desde o primeiro dia."
      />

      {/* História & propósito */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                <span className="inline-block h-px w-6 bg-brand/60" />
                Propósito
              </p>
            </div>
            <Reveal className="lg:col-span-8">
              <div className="space-y-6 text-lg text-fg-muted">
                <p>
                  Existimos para construir produtos digitais que as empresas
                  têm orgulho de mostrar — e que os usuários têm prazer de usar.
                  Sem caixa-preta, sem dependência, sem desculpa para lentidão.
                </p>
                <p>
                  Tratamos cada projeto como a nossa própria vitrine. É por isso
                  que este site existe: ele não fala que somos bons em
                  performance e detalhe — ele demonstra. A prova está na
                  experiência que você está tendo agora.
                </p>
                <p className="text-fg">
                  Quando você contrata a Dovra, contrata um time só — do pixel ao
                  deploy. E leva o código, a documentação e o conhecimento com
                  você.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <StatsBand />

      {/* Como pensamos */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">
              <span className="inline-block h-px w-6 bg-brand/60" />
              Como pensamos
            </p>
            <h2 className="font-display text-display-md font-semibold text-fg">
              O que valorizamos em código e design.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.06}>
                <div className="h-full bg-ink-800 p-8">
                  <span className="font-mono text-sm text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-fg">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-fg-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stack completa */}
      <Section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">
              <span className="inline-block h-px w-6 bg-brand/60" />
              Stack
            </p>
            <h2 className="font-display text-display-md font-semibold text-fg">
              As tecnologias que dominamos — exibidas com orgulho.
            </h2>
            <p className="mt-5 text-lg text-fg-muted">
              Escolhemos ferramentas por mérito técnico, não por moda. Cada uma
              ganhou o seu lugar resolvendo problema real em produção.
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group, i) => (
              <Reveal key={group.group} delay={(i % 3) * 0.05}>
                <div>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
                    {group.group}
                  </h3>
                  <StackPills items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner title="Topa construir com a gente?" />
    </>
  );
}
