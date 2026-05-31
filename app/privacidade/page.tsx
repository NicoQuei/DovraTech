import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidade & LGPD",
  description:
    "Política de Privacidade da Dovra Tech: quais dados coletamos, para quê, e quais são os seus direitos conforme a LGPD.",
};

type Block = { h: string; p?: string[]; list?: string[] };

const sections: Block[] = [
  {
    h: "1. Quem somos",
    p: [
      `Esta política descreve como a ${site.fullName} trata os dados pessoais coletados através deste site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).`,
    ],
  },
  {
    h: "2. Dados que coletamos",
    p: ["Coletamos apenas o necessário, e somente quando você nos fornece:"],
    list: [
      "Dados de contato (nome, e-mail, empresa e mensagem) informados no configurador de projeto ou nos canais de contato.",
      "Informações do projeto que você descreve (tipo, escopo e funcionalidades desejadas).",
      "Dados de navegação anônimos (páginas visitadas, dispositivo) via ferramentas de analytics, quando habilitadas.",
    ],
  },
  {
    h: "3. Para que usamos",
    list: [
      "Responder ao seu contato e elaborar propostas.",
      "Estimar escopo, prazo e investimento do seu projeto.",
      "Melhorar a experiência e o desempenho do site.",
    ],
  },
  {
    h: "4. Base legal",
    p: [
      "Tratamos seus dados com base no seu consentimento e no legítimo interesse de responder a solicitações comerciais e executar os passos prévios a um eventual contrato, conforme o art. 7º da LGPD.",
    ],
  },
  {
    h: "5. Compartilhamento",
    p: [
      "Não vendemos seus dados. Podemos utilizar operadores (como provedores de e-mail, hospedagem e analytics) que tratam dados em nosso nome, sob obrigações de confidencialidade e segurança.",
    ],
  },
  {
    h: "6. Seus direitos",
    p: [
      "A qualquer momento, você pode exercer os direitos previstos no art. 18 da LGPD, entre eles:",
    ],
    list: [
      "Confirmar a existência de tratamento e acessar seus dados.",
      "Corrigir dados incompletos, inexatos ou desatualizados.",
      "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.",
      "Revogar o consentimento e solicitar a eliminação dos dados tratados com base nele.",
    ],
  },
  {
    h: "7. Retenção e segurança",
    p: [
      "Mantemos os dados apenas pelo tempo necessário às finalidades acima ou conforme exigência legal. Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração.",
    ],
  },
  {
    h: "8. Contato do encarregado",
    p: [
      `Para exercer seus direitos ou tirar dúvidas sobre esta política, fale com o nosso encarregado de dados pelo e-mail ${site.email}.`,
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacidade & LGPD"
        intro="Transparência também é engenharia. Aqui está, em português claro, como tratamos seus dados."
      />

      <Container>
        <div className="mx-auto max-w-prose py-16 sm:py-20">
          <p className="mb-12 font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
            Última atualização · 26 de maio de 2026
          </p>

          {sections.map((s) => (
            <section key={s.h} className="mb-10">
              <h2 className="mb-4 font-display text-2xl font-semibold text-fg">
                {s.h}
              </h2>
              {s.p?.map((para, i) => (
                <p key={i} className="mb-4 text-lg leading-relaxed text-fg-muted">
                  {para}
                </p>
              ))}
              {s.list && (
                <ul className="mt-2 space-y-2">
                  {s.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-fg-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
