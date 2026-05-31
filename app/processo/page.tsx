import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ProcessTimeline } from "@/components/sections/process/ProcessTimeline";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Como a Dovra trabalha: briefing, design, desenvolvimento, QA, deploy e suporte. O que acontece, o que você recebe e quanto tempo leva em cada etapa.",
};

export default function ProcessoPage() {
  return (
    <>
      <PageHero
        eyebrow="Processo"
        title={
          <>
            Do briefing ao suporte —{" "}
            <span className="text-gradient-brand">sem caixa-preta.</span>
          </>
        }
        intro="Seis etapas claras e enxutas. Uma landing page vai ao ar em até 72 horas; mesmo o projeto mais completo fica pronto em até 1 mês. Em cada etapa você sabe exatamente o que acontece, o que recebe e quanto tempo leva — previsibilidade reduz risco, e velocidade é o nosso padrão."
      />
      <ProcessTimeline />
      <CtaBanner
        title="Pronto para a etapa 01?"
        subtitle="Comece pelo briefing. A primeira conversa é sem compromisso."
      />
    </>
  );
}
