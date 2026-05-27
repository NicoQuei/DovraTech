import type { Metadata } from "next";
import { MessageCircle, Mail, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectConfigurator } from "@/components/sections/contact/ProjectConfigurator";
import { site, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Monte seu projeto no configurador e receba uma estimativa de escopo, prazo e investimento. Ou fale direto no WhatsApp. Primeira conversa sem compromisso.",
};

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
        intro="Use o configurador para montar o escopo e ver uma estimativa na hora — ou pule direto para o WhatsApp. Como preferir."
      />

      <Section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <ProjectConfigurator />
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
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

                <div className="mt-8 space-y-4 border-t border-line pt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <p className="text-sm text-fg-muted">{site.responseTime}.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <p className="text-sm text-fg-muted">
                      Primeira conversa sem compromisso — e sem juridiquês.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
