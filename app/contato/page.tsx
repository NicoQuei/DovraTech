import type { Metadata } from "next";
import { MessageCircle, Mail, Clock, ShieldCheck, Rocket, Lock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FAQ } from "@/components/ui/FAQ";
import { ProjectConfigurator } from "@/components/sections/contact/ProjectConfigurator";
import { site, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Monte seu projeto no configurador e receba uma estimativa de escopo, prazo e investimento. Ou fale direto no WhatsApp. Primeira conversa sem compromisso.",
};

const nextSteps = [
  {
    title: "Você envia o resumo",
    body: "Pelo configurador ao lado ou direto no WhatsApp. Não precisa ter tudo definido — uma ideia já basta.",
  },
  {
    title: "Respondemos em até 1 dia útil",
    body: "Com as próximas perguntas e uma proposta de escopo, prazo e investimento — em português claro.",
  },
  {
    title: "Alinhamos e começamos",
    body: "Fechado o escopo, entramos na etapa 01 do processo. Sem caixa-preta, do briefing ao deploy.",
  },
];

const guarantees = [
  {
    icon: Clock,
    text: "Resposta em até 1 dia útil.",
  },
  {
    icon: Rocket,
    text: "Landing no ar em até 72h · projeto completo em até 1 mês.",
  },
  {
    icon: Lock,
    text: "Você é dono do código, da documentação e do domínio.",
  },
  {
    icon: ShieldCheck,
    text: "Primeira conversa sem compromisso — e sem juridiquês.",
  },
];

const contactFaq = [
  {
    q: "Quanto custa um projeto?",
    a: "Depende do escopo. O configurador acima já te dá uma faixa inicial na hora; o número fechado sai depois da primeira conversa — sem compromisso.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Uma landing page vai ao ar em até 72 horas; mesmo o projeto mais completo fica pronto em até 1 mês. O prazo exato sai junto com o escopo.",
  },
  {
    q: "E se eu só tenho uma ideia, ainda sem escopo?",
    a: "Perfeito. A primeira conversa serve justamente para transformar a ideia em escopo claro — você não precisa chegar com tudo definido.",
  },
  {
    q: "O código fica comigo mesmo?",
    a: "Sempre. Você recebe o repositório, a documentação e o domínio. Sem caixa-preta e sem dependência de fornecedor.",
  },
  {
    q: "Vocês somem depois de entregar?",
    a: "Não. Oferecemos manutenção e evolução contínuas — mas sem amarras: o produto é seu e funciona sozinho se você preferir tocar daqui.",
  },
  {
    q: "Prefiro WhatsApp ou e-mail?",
    a: "Como for melhor pra você. O configurador monta o resumo e abre nos dois; ou fale direto pelos canais ao lado.",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Vamos transformar a sua ideia{" "}
            <span className="text-gradient-brand">em produto.</span>
          </>
        }
        intro="Use o configurador para montar o escopo e ver uma estimativa na hora — ou pule direto para o WhatsApp. Primeira conversa sem compromisso, resposta em até 1 dia útil."
      />

      <Section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <ProjectConfigurator />
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-8 lg:sticky lg:top-28">
                {/* Canais diretos */}
                <div>
                  <p className="eyebrow mb-5">
                    <span className="inline-block h-px w-6 bg-brand/60" />
                    Canais diretos
                  </p>
                  <div className="space-y-3">
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-line bg-ink-800 p-4 transition-colors hover:border-brand/40"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-brand">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-fg">
                          WhatsApp
                        </span>
                        <span className="block text-xs text-fg-muted">
                          {site.phoneDisplay}
                        </span>
                      </span>
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-3 rounded-2xl border border-line bg-ink-800 p-4 transition-colors hover:border-brand/40"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-brand">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-fg">
                          E-mail
                        </span>
                        <span className="block text-xs text-fg-muted">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {socials.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* O que acontece depois */}
                <div className="rounded-2xl border border-line bg-ink-800 p-6">
                  <p className="eyebrow mb-5">
                    <span className="inline-block h-px w-6 bg-brand/60" />
                    O que acontece depois
                  </p>
                  <ol className="space-y-5">
                    {nextSteps.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 font-mono text-xs text-brand">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-fg">
                            {step.title}
                          </p>
                          <p className="mt-1 text-sm text-fg-muted">
                            {step.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Garantias */}
                <ul className="space-y-4 border-t border-line pt-6">
                  {guarantees.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <p className="text-sm text-fg-muted">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">
                <span className="inline-block h-px w-6 bg-brand/60" />
                Antes de você perguntar
              </p>
              <h2 className="font-display text-3xl font-semibold text-fg">
                As dúvidas que todo mundo tem.
              </h2>
              <p className="mt-5 text-fg-muted">
                Sem letra miúda. Se ficou faltando alguma, é só chamar no
                WhatsApp.
              </p>
            </div>
            <div className="lg:col-span-8">
              <FAQ items={contactFaq} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
