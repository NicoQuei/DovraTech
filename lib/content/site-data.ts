import type { IconName } from "@/components/ui/Icon";

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 72, suffix: "h", label: "Para uma landing no ar" },
  { value: 30, suffix: " dias", label: "Projeto completo, no máx." },
  { value: 100, suffix: "%", label: "Propriedade do código" },
  { value: 96, label: "Lighthouse alvo" },
];

export type Differential = {
  title: string;
  body: string;
  icon: IconName;
};

/** Diferenciais distribuídos pelo site. */
export const differentials: Differential[] = [
  {
    title: "Código documentado e entregue",
    body: "Você recebe o repositório, a documentação e o conhecimento. Sem caixa-preta.",
    icon: "FileCode2",
  },
  {
    title: "Propriedade total do código",
    body: "O que construímos é seu — para sempre, sem amarras nem dependência de fornecedor.",
    icon: "Lock",
  },
  {
    title: "Garantia de performance",
    body: "Compromisso com Core Web Vitals no verde. Velocidade não é opcional.",
    icon: "Gauge",
  },
  {
    title: "Hospedagem incluída",
    body: "Colocamos o seu site no ar e mantemos ele rodando — domínio, SSL e backups, sem você se preocupar.",
    icon: "Cloud",
  },
  {
    title: "SLA de suporte",
    body: "Tempo de resposta acordado e canal direto. Quando é crítico, é prioridade.",
    icon: "Headphones",
  },
  {
    title: "Design e engenharia sob o mesmo teto",
    body: "Uma equipe só, do pixel ao deploy. Coerência do começo ao fim.",
    icon: "Boxes",
  },
];

/** Tech stack the studio masters — shown with pride on the Estúdio page. */
export const techStack: { group: string; items: string[] }[] = [
  {
    group: "Front-end",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Back-end",
    items: ["Node.js", "PostgreSQL", "Prisma", "GraphQL", "Redis"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    group: "Hospedagem",
    items: ["Vercel", "Domínio & SSL", "Backups"],
  },
  {
    group: "Design",
    items: ["Figma", "Design Tokens", "Storybook"],
  },
  {
    group: "Pagamentos & Dados",
    items: ["Stripe", "Mercado Pago", "GA4", "Sentry"],
  },
];

/** Studio values shown on the Estúdio page. */
export const values: { title: string; body: string }[] = [
  {
    title: "O site é a prova",
    body: "Não falamos que somos bons em performance — mostramos. Cada projeto é um portfólio vivo.",
  },
  {
    title: "Sem caixa-preta",
    body: "Código limpo, comentado e documentado. Você entende — e é dono — do que tem nas mãos.",
  },
  {
    title: "Decisão com porquê",
    body: "Toda escolha de design e engenharia tem uma razão que conseguimos explicar em português claro.",
  },
  {
    title: "Rápido por padrão",
    body: "Performance não é uma fase do projeto. É um requisito desde a primeira linha.",
  },
];
