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
    duration: "3 a 5 dias",
  },
  {
    n: "02",
    title: "Design & UX",
    icon: "PenTool",
    what: "Desenhamos a arquitetura de informação, os fluxos e a interface em um design system — pensando em conversão e já em código.",
    deliverable: "Protótipo navegável no Figma e design system aprovado.",
    duration: "1 a 3 semanas",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    icon: "Code2",
    what: "Construímos em ciclos curtos com entregas revisáveis. Código limpo, versionado e com preview a cada alteração.",
    deliverable: "Acesso ao ambiente de staging, atualizado continuamente.",
    duration: "2 a 12 semanas",
  },
  {
    n: "04",
    title: "Testes & QA",
    icon: "TestTube",
    what: "Validamos em dispositivos reais, navegadores, acessibilidade e performance. Nada vai ao ar sem passar pelo crivo.",
    deliverable: "Relatório de QA, Core Web Vitals e checklist de acessibilidade.",
    duration: "3 a 7 dias",
  },
  {
    n: "05",
    title: "Deploy",
    icon: "Rocket",
    what: "Colocamos no ar com CI/CD, domínio, SSL, monitoramento e backups configurados. Deploy seguro, sem susto.",
    deliverable: "Produto no ar + repositório e documentação entregues a você.",
    duration: "1 a 2 dias",
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
