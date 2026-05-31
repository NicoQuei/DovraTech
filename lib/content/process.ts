import type { IconName } from "@/components/ui/Icon";

export type ProcessStep = {
  n: string;
  title: string;
  icon: IconName;
  /** o que acontece nesta etapa */
  what: string;
  /** o que o cliente recebe */
  deliverable: string;
  /** quanto tempo leva */
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Briefing & Estratégia",
    icon: "Compass",
    what: "Mergulhamos no seu negócio, objetivos e usuários. Definimos escopo, prioridades e métricas de sucesso antes de qualquer linha de código.",
    deliverable: "Documento de escopo, arquitetura e proposta com prazo e investimento.",
    duration: "algumas horas a 1 dia",
  },
  {
    n: "02",
    title: "Design & UX",
    icon: "PenTool",
    what: "Desenhamos a arquitetura de informação, os fluxos e a interface em um design system — pensando em conversão e já em código.",
    deliverable: "Protótipo navegável no Figma e design system aprovado.",
    duration: "1 a 4 dias",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    icon: "Code2",
    what: "Construímos em ciclos curtos com entregas revisáveis. Código limpo, versionado e com preview a cada alteração.",
    deliverable: "Acesso ao ambiente de staging, atualizado continuamente.",
    duration: "1 dia a 3 semanas",
  },
  {
    n: "04",
    title: "Testes & QA",
    icon: "TestTube",
    what: "Validamos em dispositivos reais, navegadores, acessibilidade e performance. Nada vai ao ar sem passar pelo crivo.",
    deliverable: "Relatório de QA, Core Web Vitals e checklist de acessibilidade.",
    duration: "algumas horas a 2 dias",
  },
  {
    n: "05",
    title: "Publicação",
    icon: "Rocket",
    what: "Publicamos o seu site com domínio, certificado de segurança (SSL) e backups configurados. Tudo no ar, testado e funcionando — sem susto.",
    deliverable: "Produto no ar + repositório e documentação entregues a você.",
    duration: "no mesmo dia",
  },
  {
    n: "06",
    title: "Suporte Contínuo",
    icon: "LifeBuoy",
    what: "Acompanhamos, atualizamos e evoluímos. Um produto no ar é o começo da relação — não o fim do projeto.",
    deliverable: "SLA de suporte, manutenção e melhorias mensais.",
    duration: "contínuo",
  },
];
