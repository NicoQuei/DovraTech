import type { IconName } from "@/components/ui/Icon";

export type Frente = "construimos" | "desenhamos" | "crescemos";

export const frentes: Record<
  Frente,
  { key: Frente; label: string; title: string; tagline: string; description: string }
> = {
  construimos: {
    key: "construimos",
    label: "Construímos",
    title: "Construímos",
    tagline: "Produtos digitais que funcionam de verdade",
    description:
      "Da landing page ao sistema de missão crítica. Código limpo, rápido e seu — entregue com documentação e propriedade total.",
  },
  desenhamos: {
    key: "desenhamos",
    label: "Desenhamos",
    title: "Desenhamos",
    tagline: "Interface e marca sob o mesmo teto",
    description:
      "Design não é enfeite: é a forma como o produto comunica e converte. Desenhamos pensando em código, e codamos pensando em design.",
  },
  crescemos: {
    key: "crescemos",
    label: "Crescemos",
    title: "Crescemos",
    tagline: "Depois do deploy, o trabalho continua",
    description:
      "Performance, visibilidade e estabilidade contínuas. Um produto no ar é o começo — não o fim.",
  },
};

export type Service = {
  slug: string;
  frente: Frente;
  title: string;
  /** one-liner for cards */
  short: string;
  /** hero promise */
  promise: string;
  /** the client's pain */
  problem: string;
  /** technical depth — "como fazemos" */
  how: { title: string; body: string }[];
  stack: string[];
  miniCase: { title: string; body: string; metric?: string };
  faq: { q: string; a: string }[];
  icon: IconName;
};

export const services: Service[] = [
  // ───────────────────────────── CONSTRUÍMOS ─────────────────────────────
  {
    slug: "landing-pages",
    frente: "construimos",
    title: "Landing Pages",
    short: "Páginas de alta conversão que carregam num piscar.",
    promise:
      "Uma página feita para uma coisa só: converter — e provar isso com números.",
    problem:
      "Campanhas caras levam tráfego para páginas lentas e genéricas que não vendem. Cada segundo de carregamento derruba a conversão, e construtores no-code engessam o que você pode medir e otimizar.",
    how: [
      {
        title: "Performance como princípio",
        body: "SSG/edge rendering, imagens em AVIF/WebP, fontes otimizadas e zero JavaScript desnecessário. Mirando 90+ no Lighthouse e Core Web Vitals no verde.",
      },
      {
        title: "Copy e estrutura de conversão",
        body: "Hierarquia clara, prova social, CTA único e objeções respondidas antes de surgirem. A estrutura segue o que de fato move a métrica.",
      },
      {
        title: "Medição de verdade",
        body: "Eventos, funis e testes A/B instrumentados desde o dia um, integrados ao seu analytics e ao pixel das campanhas.",
      },
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel Edge", "GA4", "Meta Pixel"],
    miniCase: {
      title: "Landing de alta conversão",
      body: "Numa landing focada, miramos carregamento abaixo de 1s, estrutura de conversão clara — do hero ao CTA único — e medição instrumentada desde o dia um.",
      metric: "90+ Lighthouse",
    },
    faq: [
      {
        q: "Em quanto tempo fica pronta?",
        a: "Uma landing focada vai ao ar em até 72 horas, do briefing ao deploy, dependendo do volume de conteúdo e integrações.",
      },
      {
        q: "Vocês escrevem o texto?",
        a: "Trabalhamos a copy de conversão junto com você. Você traz o contexto do negócio; estruturamos a narrativa que vende.",
      },
      {
        q: "Consigo editar depois?",
        a: "Sim. Entregamos com CMS opcional e documentação para a sua equipe editar conteúdo sem depender de dev.",
      },
    ],
    icon: "MousePointerClick",
  },
  {
    slug: "sites-institucionais",
    frente: "construimos",
    title: "Sites Institucionais",
    short: "Presença digital sólida, rápida e fácil de manter.",
    promise:
      "O site que representa a sua marca com a mesma seriedade que ela merece — e que o Google adora.",
    problem:
      "Sites institucionais envelhecem rápido, ficam lentos e viram um pesadelo de manutenção. Times de marketing ficam reféns de dev para trocar uma vírgula.",
    how: [
      {
        title: "Arquitetura de conteúdo",
        body: "Estrutura pensada para SEO e para escalar: rotas semânticas, CMS headless e modelos de conteúdo reutilizáveis.",
      },
      {
        title: "Autonomia para o seu time",
        body: "CMS headless (Sanity, Contentful ou similar) para a equipe publicar com segurança, sem quebrar o layout.",
      },
      {
        title: "Performance e acessibilidade",
        body: "Renderização estática, otimização de imagens e conformidade com WCAG — rápido para o usuário e indexável para buscadores.",
      },
    ],
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    miniCase: {
      title: "Site institucional headless",
      body: "Arquitetura headless com CMS para o seu time publicar sozinho, rotas semânticas e renderização estática — feito para indexar bem e durar sem virar pesadelo de manutenção.",
      metric: "100/100 SEO",
    },
    faq: [
      {
        q: "Migram o conteúdo do site antigo?",
        a: "Sim, fazemos a migração e os redirecionamentos 301 para preservar o ranking que você já conquistou.",
      },
      {
        q: "É multi-idioma?",
        a: "Suportamos i18n nativo do Next.js quando o projeto pede presença internacional.",
      },
      {
        q: "Quem hospeda?",
        a: "Recomendamos e configuramos a hospedagem (geralmente Vercel), mas o código e o domínio são sempre seus.",
      },
    ],
    icon: "Globe",
  },
  {
    slug: "e-commerce",
    frente: "construimos",
    title: "E-commerce",
    short: "Lojas rápidas, com checkout que não perde venda.",
    promise:
      "Uma loja onde cada milissegundo e cada clique são otimizados para faturar mais.",
    problem:
      "Plataformas prontas cobram caro por transação, travam customização e ficam lentas no pico de tráfego — exatamente quando você mais vende.",
    how: [
      {
        title: "Checkout e pagamentos",
        body: "Integração com Stripe, Mercado Pago ou Pagar.me, Pix, cartão e split de pagamento. Checkout transparente e otimizado contra abandono.",
      },
      {
        title: "Integração de estoque e ERP",
        body: "Sincronização com ERP/estoque via API e webhooks, evitando venda de produto esgotado e divergência de inventário.",
      },
      {
        title: "Performance em escala",
        body: "Catálogo com SSG/ISR, busca instantânea e cache de borda para aguentar pico de campanha sem cair.",
      },
      {
        title: "Headless quando faz sentido",
        body: "Front-end sob medida sobre Shopify, Medusa ou VTEX quando você quer a fundação de uma plataforma com a liberdade de um produto próprio.",
      },
    ],
    stack: ["Next.js", "Stripe", "Mercado Pago", "Medusa", "PostgreSQL"],
    miniCase: {
      title: "Loja com checkout otimizado",
      body: "Catálogo com SSG/ISR, busca instantânea e checkout transparente com Pix — pensado para aguentar pico de campanha e reduzir o abandono de carrinho.",
      metric: "<1s no catálogo",
    },
    faq: [
      {
        q: "Migram da Shopify/Nuvemshop?",
        a: "Sim. Podemos manter o back-end que já funciona e entregar um front-end headless mais rápido, ou migrar tudo.",
      },
      {
        q: "Aceita Pix e parcelamento?",
        a: "Sim, integramos os principais meios de pagamento do Brasil, incluindo Pix, boleto e parcelamento no cartão.",
      },
      {
        q: "E o frete?",
        a: "Integramos cálculo de frete (Correios, transportadoras, Melhor Envio) e regras de frete grátis por região ou valor.",
      },
    ],
    icon: "ShoppingCart",
  },
  {
    slug: "saas",
    frente: "construimos",
    title: "Plataformas SaaS",
    short: "Do MVP à escala, com fundação que não trava o crescimento.",
    promise:
      "Construímos o produto que você vai escalar por anos — não um protótipo que você vai jogar fora.",
    problem:
      "MVPs feitos às pressas viram dívida técnica. Quando os clientes chegam, a fundação não aguenta: autenticação frágil, cobrança manual e arquitetura que não isola dados.",
    how: [
      {
        title: "Arquitetura multi-tenant",
        body: "Isolamento de dados por tenant (schema ou row-level security), planos, limites de uso e organizações com múltiplos usuários desde a base.",
      },
      {
        title: "Autenticação e permissões",
        body: "Auth robusta (OAuth, SSO, magic link), RBAC, sessões seguras e auditoria — pronto para clientes enterprise exigentes.",
      },
      {
        title: "Cobrança e assinaturas",
        body: "Stripe Billing com trials, upgrades, downgrades, cobrança por uso (metered) e webhooks que mantêm o estado sempre consistente.",
      },
      {
        title: "Escalabilidade e observabilidade",
        body: "Filas, jobs em background, cache, e monitoramento (logs, métricas, alertas) para crescer sem surpresas em produção.",
      },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe Billing", "Redis"],
    miniCase: {
      title: "Plataforma multi-tenant",
      body: "Isolamento de dados por tenant, RBAC e cobrança recorrente com Stripe Billing — uma fundação pensada para escalar de zero a milhares de usuários sem reescrever a base.",
      metric: "Pronto para escalar",
    },
    faq: [
      {
        q: "Vocês tocam o MVP do zero?",
        a: "Sim. Ajudamos a definir o escopo do MVP para validar rápido, mas com uma fundação que não vira retrabalho depois.",
      },
      {
        q: "Como é a cobrança recorrente?",
        a: "Implementamos com Stripe Billing (ou equivalente), incluindo trials, planos, cobrança por uso e gestão de inadimplência.",
      },
      {
        q: "Conseguem atender requisitos enterprise?",
        a: "SSO, auditoria, isolamento de dados e SLA são parte do que construímos quando o seu cliente exige.",
      },
    ],
    icon: "Layers",
  },
  {
    slug: "aplicativos",
    frente: "construimos",
    title: "Aplicativos Mobile",
    short: "Apps nativos ou híbridos, publicados e mantidos.",
    promise:
      "Um app que parece nativo, atualiza rápido e chega nas lojas sem dor de cabeça.",
    problem:
      "Apps mobile costumam significar duas bases de código, ciclos de publicação lentos e a dúvida eterna: nativo ou híbrido? A escolha errada custa caro depois.",
    how: [
      {
        title: "Nativo vs. híbrido — a decisão certa",
        body: "Avaliamos performance, recursos de hardware e orçamento para indicar React Native/Expo (uma base, iOS + Android) ou nativo quando o caso exige.",
      },
      {
        title: "Experiência de verdade mobile",
        body: "Gestos, navegação fluida, offline-first, push notifications e integração com câmera, biometria e mapas.",
      },
      {
        title: "Publicação nas lojas",
        body: "Cuidamos do processo na App Store e Google Play: certificados, builds, revisão e atualizações over-the-air com Expo.",
      },
    ],
    stack: ["React Native", "Expo", "TypeScript", "App Store", "Google Play"],
    miniCase: {
      title: "App híbrido com Expo",
      body: "Uma base única em React Native/Expo para iOS e Android, com atualizações over-the-air e experiência fluida — sem o custo de manter dois aplicativos.",
      metric: "iOS + Android",
    },
    faq: [
      {
        q: "Híbrido fica bom mesmo?",
        a: "Para a maioria dos apps, React Native entrega experiência indistinguível do nativo com metade do custo de manutenção. Indicamos nativo quando o caso justifica.",
      },
      {
        q: "Vocês publicam nas lojas?",
        a: "Sim, cuidamos de todo o processo de publicação e das contas de desenvolvedor, ou orientamos o seu time.",
      },
      {
        q: "Dá para reaproveitar o back-end do site?",
        a: "Sim. Projetamos a API uma vez e atendemos web e mobile com o mesmo back-end.",
      },
    ],
    icon: "Smartphone",
  },
  {
    slug: "sistemas-web",
    frente: "construimos",
    title: "Sistemas Web",
    short: "Ferramentas internas e integrações que automatizam o negócio.",
    promise:
      "O sistema sob medida que substitui a planilha frágil e o processo manual que trava a operação.",
    problem:
      "Operações crescem sobre planilhas, gambiarras e softwares genéricos que não conversam entre si. O resultado é retrabalho, erro humano e dados espalhados.",
    how: [
      {
        title: "Mapeamento do processo",
        body: "Entendemos o fluxo real antes de codar. O sistema reflete a operação — não o contrário.",
      },
      {
        title: "Integrações e automação",
        body: "Conectamos ERPs, CRMs, APIs e webhooks para que os dados fluam sozinhos, com jobs agendados e automações que eliminam tarefa manual.",
      },
      {
        title: "Painéis e controle de acesso",
        body: "Dashboards com os números certos, relatórios exportáveis e permissões por papel para cada área ver só o que precisa.",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "REST/GraphQL"],
    miniCase: {
      title: "Sistema interno sob medida",
      body: "Um sistema que reflete o seu processo real, integrando pedidos, estoque e transportadoras — para substituir a colcha de planilhas e softwares desconectados.",
      metric: "Menos retrabalho",
    },
    faq: [
      {
        q: "Integra com o que já uso?",
        a: "Sim. Se a ferramenta tem API ou exporta dados, conseguimos integrar. Quando não tem, criamos a ponte.",
      },
      {
        q: "É melhor que um software pronto?",
        a: "Quando o seu processo é um diferencial competitivo, um sistema sob medida paga a si mesmo em eficiência.",
      },
      {
        q: "Funciona offline?",
        a: "Podemos projetar com suporte offline e sincronização quando a operação acontece em campo.",
      },
    ],
    icon: "Workflow",
  },
  // ───────────────────────────── DESENHAMOS ─────────────────────────────
  {
    slug: "ui-ux-design",
    frente: "desenhamos",
    title: "UI/UX Design",
    short: "Interfaces que as pessoas entendem na primeira vez.",
    promise:
      "Design que reduz atrito, aumenta conversão e já nasce pronto para virar código.",
    problem:
      "Interface bonita que ninguém entende não serve. E design que ignora as limitações do código vira briga eterna entre time de produto e de engenharia.",
    how: [
      {
        title: "Pesquisa e arquitetura de informação",
        body: "Entendemos usuário e objetivo de negócio, mapeamos jornadas e organizamos a informação antes de desenhar um pixel.",
      },
      {
        title: "Design system, não telas soltas",
        body: "Componentes, tokens e padrões consistentes no Figma — que viram código reutilizável, não retrabalho.",
      },
      {
        title: "Protótipo testável",
        body: "Protótipos interativos para validar fluxos com usuários reais antes de investir em desenvolvimento.",
      },
      {
        title: "Acessibilidade desde o design",
        body: "Contraste, foco, tamanho de toque e hierarquia pensados para WCAG — inclusão não é etapa final, é decisão de design.",
      },
    ],
    stack: ["Figma", "Design Tokens", "Storybook", "WCAG 2.2"],
    miniCase: {
      title: "Design system, não telas soltas",
      body: "Componentes e tokens consistentes no Figma que viram código reutilizável, com acessibilidade desde o desenho — uma interface que se explica sozinha e reduz tickets de dúvida.",
      metric: "0 inconsistência",
    },
    faq: [
      {
        q: "Entregam só o design ou implementam?",
        a: "Os dois. Como desenhamos pensando em código, a transição design → desenvolvimento é direta — geralmente feita por nós.",
      },
      {
        q: "Vocês fazem design system?",
        a: "Sim, e é o nosso jeito padrão de trabalhar: componentes e tokens consistentes em vez de telas isoladas.",
      },
      {
        q: "Testam com usuários?",
        a: "Quando o projeto comporta, rodamos testes de usabilidade com protótipos antes de codar.",
      },
    ],
    icon: "PenTool",
  },
  // ───────────────────────────── CRESCEMOS ─────────────────────────────
  {
    slug: "seo-trafego",
    frente: "crescemos",
    title: "SEO & Tráfego",
    short: "Técnica, conteúdo e campanhas que trazem o cliente certo.",
    promise:
      "Visibilidade que vira receita — com a base técnica que a maioria das agências ignora.",
    problem:
      "Investir em tráfego sobre um site lento e mal estruturado é jogar dinheiro fora. E SEO sem base técnica é só achismo e palavra-chave.",
    how: [
      {
        title: "SEO técnico",
        body: "Core Web Vitals, dados estruturados (Schema), sitemap, indexação, canonical e arquitetura de URLs — a fundação que faz o conteúdo ranquear.",
      },
      {
        title: "Conteúdo com intenção",
        body: "Estratégia de palavras-chave por intenção de busca e conteúdo que responde o que o seu cliente realmente procura.",
      },
      {
        title: "Campanhas que medem",
        body: "Google Ads e Meta Ads com rastreamento de conversão correto, para você saber exatamente o que cada real traz de volta.",
      },
    ],
    stack: ["Google Search Console", "GA4", "Google Ads", "Meta Ads", "Schema.org"],
    miniCase: {
      title: "Base técnica + conteúdo",
      body: "Core Web Vitals no verde, dados estruturados e conteúdo por intenção de busca, com campanhas que rastreiam conversão de verdade — visibilidade que vira receita, não achismo.",
      metric: "Tráfego que converte",
    },
    faq: [
      {
        q: "SEO ou tráfego pago?",
        a: "Os dois se complementam. Tráfego pago traz resultado imediato; SEO constrói um ativo que rende por anos.",
      },
      {
        q: "Em quanto tempo vejo resultado?",
        a: "Campanhas pagas, em dias. SEO é construção: ganhos consistentes costumam aparecer a partir de 3 a 6 meses.",
      },
      {
        q: "Vocês escrevem o conteúdo?",
        a: "Definimos a estratégia e podemos produzir ou orientar o conteúdo, sempre alinhado à intenção de busca.",
      },
    ],
    icon: "TrendingUp",
  },
  {
    slug: "manutencao",
    frente: "crescemos",
    title: "Manutenção & Suporte",
    short: "Seu produto sempre atualizado, seguro e no ar.",
    promise:
      "Um time de engenharia de plantão, sem o custo de montar um time interno.",
    problem:
      "Software não é estático: dependências envelhecem, brechas de segurança surgem e o que não é mantido vira risco. Mas contratar dev interno para isso é caro.",
    how: [
      {
        title: "Atualizações e segurança",
        body: "Dependências em dia, patches de segurança, backups testados e monitoramento ativo de vulnerabilidades.",
      },
      {
        title: "SLA de suporte",
        body: "Tempo de resposta acordado por severidade, canal direto e prioridade real quando algo crítico acontece.",
      },
      {
        title: "Evolução contínua",
        body: "Horas mensais para melhorias, novas features e otimizações — o produto melhora, não só sobrevive.",
      },
    ],
    stack: ["Atualizações de segurança", "Backups", "Monitoramento de uptime"],
    miniCase: {
      title: "Engenharia de plantão",
      body: "Dependências em dia, patches de segurança, backups testados e SLA por severidade — o seu produto seguro e no ar, sem o custo de montar um time interno.",
      metric: "SLA por severidade",
    },
    faq: [
      {
        q: "Mantêm projeto que não foi feito por vocês?",
        a: "Sim, após uma auditoria técnica para entender o estado do código e os riscos.",
      },
      {
        q: "Como funciona o SLA?",
        a: "Definimos tempos de resposta por severidade. Crítico tem prioridade e canal direto.",
      },
      {
        q: "É mensal?",
        a: "Sim, planos mensais com horas para manutenção e evolução, ajustáveis conforme o produto cresce.",
      },
    ],
    icon: "ShieldCheck",
  },
  {
    slug: "hospedagem",
    frente: "crescemos",
    title: "Hospedagem",
    short: "Seu site no ar, rápido e sempre disponível.",
    promise:
      "A gente coloca o seu site no ar e mantém ele funcionando — você não precisa entender nada de servidor.",
    problem:
      "Colocar um site no ar e mantê-lo funcionando assusta quem não é técnico: domínio, certificado de segurança, o site fora do ar sem ninguém perceber. Não precisa ser assim.",
    how: [
      {
        title: "Colocamos no ar pra você",
        body: "Cuidamos de toda a configuração para publicar o seu site: hospedagem, domínio e certificado de segurança (SSL) prontos, sem dor de cabeça.",
      },
      {
        title: "Rápido e estável",
        body: "Usamos uma hospedagem moderna e veloz, que aguenta picos de acesso e mantém o seu site no ar com boa disponibilidade.",
      },
      {
        title: "Backups e tranquilidade",
        body: "Mantemos cópias de segurança e acompanhamos o site — se algo acontecer, dá para voltar rápido ao normal.",
      },
    ],
    stack: ["Vercel", "Domínio & SSL", "Backups"],
    miniCase: {
      title: "Site no ar sem complicação",
      body: "Você cuida do seu negócio; a gente cuida de manter o site publicado, rápido e seguro — domínio e SSL incluídos.",
      metric: "No ar, sem susto",
    },
    faq: [
      {
        q: "Onde meu site fica hospedado?",
        a: "Em uma hospedagem moderna e rápida (geralmente Vercel). A conta e o controle podem ser seus — sem amarras.",
      },
      {
        q: "Preciso entender de servidor?",
        a: "Não. Essa é a ideia: você não precisa saber nada técnico. A gente configura e mantém tudo funcionando.",
      },
      {
        q: "E se o site sair do ar?",
        a: "Acompanhamos a disponibilidade e mantemos backups, para voltar ao normal o mais rápido possível.",
      },
    ],
    icon: "Cloud",
  },
];

export const SERVICE_SLUGS = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByFrente(frente: Frente): Service[] {
  return services.filter((s) => s.frente === frente);
}
