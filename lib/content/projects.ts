export type ProjectType = "E-commerce" | "SaaS" | "Site" | "App";

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  client: string;
  type: ProjectType;
  year: string;
  /** card + hero one-liner */
  summary: string;
  /** headline metric shown on the card */
  headline: Metric;
  /** gradient accent for the generated cover */
  accent: string;
  accentTo: string;
  tags: string[];
  challenge: string;
  solution: { title: string; body: string }[];
  results: Metric[];
  stack: string[];
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "norte-commerce",
    name: "Norte",
    client: "Norte — moda autoral",
    type: "E-commerce",
    year: "2025",
    summary:
      "Loja headless de uma marca de moda direct-to-consumer, do catálogo ao checkout em Pix.",
    headline: { value: "-27%", label: "abandono de carrinho" },
    accent: "#19E57D",
    accentTo: "#00D9C0",
    tags: ["E-commerce", "Headless", "Performance"],
    challenge:
      "A Norte vendia numa plataforma pronta que cobrava caro por transação, travava a customização do checkout e ficava lenta justamente nas campanhas. A marca queria uma experiência à altura do seu produto, sem perder venda na última etapa.",
    solution: [
      {
        title: "Front-end headless sob medida",
        body: "Mantivemos o back-end de catálogo e pedidos e construímos um front-end próprio em Next.js, com catálogo estático regenerado sob demanda (ISR) e busca instantânea.",
      },
      {
        title: "Checkout transparente com Pix",
        body: "Checkout em uma página com Pix, cartão e parcelamento, otimizado contra abandono e instrumentado para medir cada etapa do funil.",
      },
      {
        title: "Performance como diferencial",
        body: "Imagens em AVIF, cache de borda e zero JavaScript supérfluo. O catálogo passou a carregar abaixo de 1s mesmo em pico de campanha.",
      },
    ],
    results: [
      { value: "-27%", label: "abandono de carrinho" },
      { value: "0,9s", label: "carregamento do catálogo" },
      { value: "+34%", label: "conversão mobile" },
      { value: "98", label: "Lighthouse performance" },
    ],
    stack: ["Next.js", "Medusa", "Stripe", "Mercado Pago", "Vercel"],
    testimonial: {
      quote:
        "A loja ficou rápida de um jeito que a gente sente. E o checkout parou de perder venda no Pix.",
      author: "Marina Alves",
      role: "Fundadora, Norte",
    },
    liveUrl: "https://example.com",
  },
  {
    slug: "fluxo-saas",
    name: "Fluxo",
    client: "Fluxo — gestão para serviços",
    type: "SaaS",
    year: "2025",
    summary:
      "Plataforma SaaS multi-tenant de gestão, do MVP à cobrança por assento em escala.",
    headline: { value: "99,98%", label: "uptime" },
    accent: "#00D9C0",
    accentTo: "#4DA8FF",
    tags: ["SaaS", "Multi-tenant", "Billing"],
    challenge:
      "O Fluxo precisava sair de uma planilha compartilhada para um produto de verdade — multi-tenant, com cobrança recorrente e permissões — sem construir um MVP que virasse dívida técnica assim que os primeiros clientes chegassem.",
    solution: [
      {
        title: "Arquitetura multi-tenant desde a base",
        body: "Isolamento de dados por organização com row-level security, papéis (RBAC) e convites de equipe — pronto para crescer sem reescrever a fundação.",
      },
      {
        title: "Cobrança por assento com Stripe Billing",
        body: "Trials, upgrades, downgrades e cobrança por assento sincronizados via webhooks, mantendo o estado de assinatura sempre consistente.",
      },
      {
        title: "Observabilidade e jobs em background",
        body: "Filas para tarefas pesadas, logs estruturados, métricas e alertas — para escalar com previsibilidade e dormir tranquilo.",
      },
    ],
    results: [
      { value: "99,98%", label: "uptime em 12 meses" },
      { value: "0 → milhares", label: "usuários pagantes" },
      { value: "6 sem.", label: "do início ao MVP no ar" },
      { value: "<200ms", label: "resposta média da API" },
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Stripe Billing", "Redis", "AWS"],
    testimonial: {
      quote:
        "Entregaram um MVP rápido que, dois anos depois, ainda é a mesma base. Isso diz tudo.",
      author: "Rafael Tavares",
      role: "CEO, Fluxo",
    },
    liveUrl: "https://example.com",
  },
  {
    slug: "atlas-institucional",
    name: "Atlas",
    client: "Atlas Consultoria",
    type: "Site",
    year: "2024",
    summary:
      "Rebrand e site institucional headless, com o time de marketing publicando sozinho.",
    headline: { value: "100/100", label: "SEO" },
    accent: "#54FFA6",
    accentTo: "#19E57D",
    tags: ["Site", "Headless CMS", "SEO"],
    challenge:
      "O site da Atlas era pesado, difícil de atualizar e invisível no Google. Cada mudança de conteúdo dependia de um desenvolvedor, e o ranking despencava por causa da performance.",
    solution: [
      {
        title: "CMS headless para autonomia",
        body: "Modelamos o conteúdo em um CMS headless para o time de marketing publicar com segurança, sem quebrar o layout nem depender de dev.",
      },
      {
        title: "Migração sem perder ranking",
        body: "Migração de conteúdo com redirecionamentos 301 e dados estruturados, preservando — e ampliando — a autoridade já conquistada.",
      },
      {
        title: "Performance e acessibilidade",
        body: "Renderização estática e otimização de imagens levaram o site ao verde nos Core Web Vitals e à conformidade com WCAG.",
      },
    ],
    results: [
      { value: "100/100", label: "SEO (Lighthouse)" },
      { value: "+62%", label: "tráfego orgânico (6 meses)" },
      { value: "autônomo", label: "marketing publica sozinho" },
      { value: "1,1s", label: "Largest Contentful Paint" },
    ],
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    testimonial: {
      quote:
        "Hoje publicamos um artigo em minutos. E o telefone passou a tocar por causa do Google.",
      author: "Camila Reis",
      role: "Head de Marketing, Atlas",
    },
    liveUrl: "https://example.com",
  },
  {
    slug: "orbita-app",
    name: "Órbita",
    client: "Órbita — fidelidade",
    type: "App",
    year: "2024",
    summary:
      "App de fidelidade híbrido para iOS e Android a partir de uma base de código única.",
    headline: { value: "4,8★", label: "nas lojas" },
    accent: "#4DA8FF",
    accentTo: "#00D9C0",
    tags: ["App", "React Native", "Mobile"],
    challenge:
      "A Órbita queria um app de fidelidade nas duas lojas sem o custo de manter duas bases de código nativas, e com a capacidade de iterar rápido a partir do feedback dos usuários.",
    solution: [
      {
        title: "Uma base, duas plataformas",
        body: "React Native com Expo entregando experiência fluida em iOS e Android a partir de uma única base, com gestos e navegação nativos.",
      },
      {
        title: "Atualizações over-the-air",
        body: "Correções e melhorias publicadas via OTA, sem esperar a revisão das lojas a cada ajuste pequeno.",
      },
      {
        title: "Back-end compartilhado com a web",
        body: "API única atendendo app e painel web, com push notifications e programa de pontos em tempo real.",
      },
    ],
    results: [
      { value: "4,8★", label: "média nas lojas" },
      { value: "1 base", label: "iOS + Android" },
      { value: "OTA", label: "atualização sem nova submissão" },
      { value: "+45%", label: "recompra de clientes ativos" },
    ],
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "Push Notifications"],
    testimonial: {
      quote:
        "Lançamos nas duas lojas no mesmo dia e conseguimos corrigir e melhorar quase em tempo real.",
      author: "Diego Nunes",
      role: "Produto, Órbita",
    },
    liveUrl: "https://example.com",
  },
];

export const PROJECT_SLUGS = projects.map((p) => p.slug);

export const projectTypes: ProjectType[] = ["E-commerce", "SaaS", "Site", "App"];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Returns the next project (wraps around) for case-study navigation. */
export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
