import type { IconName } from "@/components/ui/Icon";

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 80, suffix: "+", label: "Projetos entregues" },
  { value: 40, suffix: "+", label: "Clientes atendidos" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Uptime médio" },
  { value: 96, label: "Lighthouse médio" },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "A Dovra entregou um produto rápido e sólido — e o melhor: documentado e nosso. Trocar de fornecedor deixou de ser um medo.",
    author: "Rafael Tavares",
    role: "CEO, Fluxo",
  },
  {
    quote:
      "Design e engenharia no mesmo time mudou tudo. Acabou a briga entre 'o que foi desenhado' e 'o que dá pra fazer'.",
    author: "Marina Alves",
    role: "Fundadora, Norte",
  },
  {
    quote:
      "Performance virou diferencial de marca pra gente. O site é tão rápido que os clientes comentam.",
    author: "Camila Reis",
    role: "Head de Marketing, Atlas",
  },
  {
    quote:
      "Profissionalismo raro. Prazo cumprido, comunicação clara e um padrão de código que o nosso novo time agradeceu.",
    author: "Diego Nunes",
    role: "Produto, Órbita",
  },
];

/** Client logos rendered as wordmarks in the marquee (placeholders). */
export const clientLogos: string[] = [
  "Norte",
  "Fluxo",
  "Atlas",
  "Órbita",
  "Vértice",
  "Lumen",
  "Praxis",
  "Quanta",
  "Meridian",
  "Cortex",
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
    title: "Deploy com CI/CD",
    body: "Integração e entrega contínuas, com preview a cada alteração e deploy sem susto.",
    icon: "GitBranch",
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
    group: "Infra & DevOps",
    items: ["Vercel", "AWS", "Cloudflare", "Docker", "GitHub Actions"],
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
