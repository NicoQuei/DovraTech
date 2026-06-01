export type ProjectType = "Landing Page" | "Site" | "E-commerce" | "SaaS" | "App";

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
  /** gradient accent for the generated cover (fallback when `image` is absent) */
  accent: string;
  accentTo: string;
  /** real cover image (path under /public, e.g. "/work/eugenius.png") */
  image?: string;
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
    slug: "eugenius",
    name: "Eugenius",
    client: "Eugenius — cursinho online para o ENEM",
    type: "SaaS",
    year: "2026",
    summary:
      "Cursinho online para o ENEM, gamificado: videoaulas, simulados e trilha de estudos com XP e conquistas, com assinaturas e pagamento integrado.",
    headline: { value: "500+", label: "alunos aprovados no ENEM" },
    accent: "#19E57D",
    accentTo: "#00D9C0",
    image: "/work/eugenius.jpg",
    tags: ["SaaS", "Educação", "Gamificação", "Pagamentos"],
    challenge:
      "O Eugenius queria reunir num só produto a preparação completa para o ENEM — videoaulas, simulados, correção de redação e uma trilha de estudos que se adapta ao aluno — com o engajamento de um app de hábitos e a cobrança de uma assinatura confiável, sem depender de uma colcha de retalhos de ferramentas.",
    solution: [
      {
        title: "Preparação completa em trilha adaptativa",
        body: "Videoaulas, simulados ilimitados e correção de redação por especialistas, organizados numa trilha de estudos que se adapta ao ritmo de cada aluno até o dia da prova.",
      },
      {
        title: "Engajamento que vira hábito",
        body: "Dashboard do aluno com XP, conquistas e progresso visível, transformando cada aula e simulado em recompensa para sustentar a rotina de estudos.",
      },
      {
        title: "Assinaturas e pagamentos seguros",
        body: "Cobrança via AbacatePay com webhooks validados por HMAC: cada pagamento é verificado antes de liberar acesso, mantendo assinatura e permissões sempre em sincronia.",
      },
    ],
    results: [
      { value: "500+", label: "alunos aprovados" },
      { value: "120+", label: "videoaulas na plataforma" },
      { value: "30+", label: "simulados" },
      { value: "100%", label: "satisfação dos alunos" },
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "AbacatePay"],
    liveUrl: "https://cursinhoeugenius.com.br",
  },
  {
    slug: "grao-e-alma",
    name: "Grão & Alma",
    client: "Grão & Alma — cafeteria (conceito)",
    type: "Landing Page",
    year: "2026",
    summary:
      "Landing page conceitual para uma cafeteria de café de origem única: design escuro e elegante, totalmente responsivo, com narrativa de torra artesanal, cardápio e reservas.",
    headline: { value: "Conceito", label: "landing page de café de origem única" },
    accent: "#F5B544",
    accentTo: "#E0683C",
    image: "/work/cafeteria.jpg",
    tags: ["Landing Page", "Responsivo", "Front-end"],
    challenge:
      "Uma cafeteria de café de origem única precisa transmitir a obsessão pela qualidade já na primeira tela — a história da torra, dos produtores e do método — de forma envolvente, elegante e impecável no celular, onde a maioria das pessoas descobre um café.",
    solution: [
      {
        title: "Narrativa de origem e torra",
        body: "Seções como A Torra, Produtores, Processo e Manifesto contam a história do grão e criam desejo antes mesmo do cardápio.",
      },
      {
        title: "Estética escura e sofisticada",
        body: "Paleta escura com tons quentes de café, tipografia editorial e fotografia que colocam o produto no centro da experiência.",
      },
      {
        title: "Responsiva e leve, do mobile ao desktop",
        body: "Construída com HTML, CSS e JavaScript sobre Vite — rápida, fluida e impecável em qualquer tela, sem peso desnecessário.",
      },
    ],
    results: [
      { value: "Origem única", label: "narrativa de torra artesanal" },
      { value: "Mobile-first", label: "responsivo em qualquer tela" },
      { value: "Editorial", label: "estética escura e sofisticada" },
      { value: "Leve", label: "HTML/CSS/JS sobre Vite" },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Vite"],
    liveUrl: "https://cafeteria-mocha-ten.vercel.app/",
  },
  {
    slug: "asfalto",
    name: "Asfalto®",
    client: "ASFALTO® — streetwear urbano (conceito)",
    type: "E-commerce",
    year: "2026",
    summary:
      "E-commerce conceitual de streetwear com modelo de drops limitados: estética industrial e cyberpunk, lookbook editorial e catálogo numerado de tênis, roupas e acessórios.",
    headline: { value: "Drop 01", label: "coleção SS26 em peças numeradas e limitadas" },
    accent: "#FF1744",
    accentTo: "#B0001F",
    image: "/work/asfalto.png",
    tags: ["E-commerce", "Streetwear", "Front-end", "Motion"],
    challenge:
      "Uma marca de streetwear que vive de drops limitados precisa transformar a loja num evento: criar desejo e urgência a cada lançamento, com uma identidade visual radical que se sustenta da primeira tela ao checkout, sem perder fluidez nem desempenho.",
    solution: [
      {
        title: "Modelo de drops numerados",
        body: "Lançamentos limitados e numerados (Drop 01/SS26), sem reposição, com catálogo organizado por tênis, vestuário e acessórios — cada peça com seu código e narrativa própria.",
      },
      {
        title: "Identidade industrial e cyberpunk",
        body: "Preto carbono, off-white e o magenta da marca, com tipografia de impacto, lookbook editorial e mood board que constroem a atmosfera futurista da rua.",
      },
      {
        title: "Experiência fluida e animada",
        body: "Scroll suave com Lenis e animações em Framer Motion e GSAP que dão peso cinematográfico à navegação, mantendo a loja rápida e responsiva em qualquer tela.",
      },
    ],
    results: [
      { value: "Drop 01", label: "coleção SS26 lançada" },
      { value: "30", label: "peças numeradas por drop" },
      { value: "Editorial", label: "lookbook e mood board da marca" },
      { value: "Fluida", label: "scroll suave e animações cinematográficas" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://asfalto-one.vercel.app",
  },
  {
    slug: "marinheiros",
    name: "Marinheiro's",
    client: "Marinheiro's Burger House — hamburgueria artesanal (conceito)",
    type: "Landing Page",
    year: "2026",
    summary:
      "Landing page conceitual para uma hamburgueria artesanal de temática náutica: paleta quente e retrô, cardápio em destaque e pedido direto pelo WhatsApp.",
    headline: { value: "Conceito", label: "landing page de hamburgueria temática" },
    accent: "#F26B2B",
    accentTo: "#8B3A1E",
    image: "/work/marinheiros.png",
    tags: ["Landing Page", "Responsivo", "Front-end"],
    challenge:
      "Uma hamburgueria de bairro precisa virar destino logo na primeira tela: passar a identidade náutica e o capricho do burger artesanal, abrir o apetite e levar o cliente ao pedido pelo WhatsApp sem fricção, impecável no celular, onde a maioria decide onde comer.",
    solution: [
      {
        title: "Identidade náutica e apetite na primeira tela",
        body: "Hero com o burger em destaque, brasão da casa e a promessa \"o melhor burger do porto\", em paleta quente e tipografia retrô que constroem a personalidade da marca de cara.",
      },
      {
        title: "Do cardápio ao pedido pelo WhatsApp",
        body: "Seções de cardápio, diferenciais, a casa, ambiente e localização guiam o cliente até um CTA de pedido direto no WhatsApp, encurtando o caminho entre desejo e compra.",
      },
      {
        title: "Responsiva e leve, do mobile ao desktop",
        body: "Construída com HTML, CSS e JavaScript sobre Vite — rápida e fluida em qualquer tela, sem peso desnecessário.",
      },
    ],
    results: [
      { value: "Náutica", label: "identidade temática da marca" },
      { value: "1 toque", label: "pedido direto pelo WhatsApp" },
      { value: "Mobile-first", label: "responsivo em qualquer tela" },
      { value: "Leve", label: "HTML/CSS/JS sobre Vite" },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Vite"],
    liveUrl: "https://marinheiros-gnw4.vercel.app/",
  },
];

export const PROJECT_SLUGS = projects.map((p) => p.slug);

/** Project types actually present in the portfolio (powers the gallery filter). */
export const projectTypes: ProjectType[] = Array.from(
  new Set(projects.map((p) => p.type)),
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Returns the next project (wraps around) for case-study navigation. */
export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
