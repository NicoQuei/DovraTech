export type PostBlock = { h?: string; p: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date */
  date: string;
  category: string;
  readingTime: string;
  author: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "performance-e-decisao-de-negocio",
    title: "Por que performance é uma decisão de negócio",
    excerpt:
      "Velocidade não é um detalhe técnico para o time de engenharia resolver depois. É conversão, SEO e percepção de marca — medível em receita.",
    date: "2026-05-12",
    category: "Performance",
    readingTime: "5 min",
    author: "Equipe Dovra",
    body: [
      {
        p: [
          "Existe uma crença confortável de que performance é um problema técnico: algo que o time de engenharia 'otimiza no final'. Na prática, é uma das poucas variáveis de produto que afeta receita, custo de aquisição e marca ao mesmo tempo.",
          "Cada 100ms a mais de carregamento derruba conversão. Cada ponto a menos nos Core Web Vitals afeta o ranking no Google e, com ele, o custo do seu tráfego. Performance não é um detalhe — é uma alavanca de negócio.",
        ],
      },
      {
        h: "O que o usuário sente antes de pensar",
        p: [
          "Ninguém lê um número de milissegundos. Mas todo mundo sente uma página que trava ao rolar, um botão que demora a responder, uma imagem que pula o layout. Essa sensação vira desconfiança — e desconfiança não converte.",
          "Por isso tratamos performance como um requisito desde a primeira linha de código, não como uma fase de polimento.",
        ],
      },
      {
        h: "Como medimos",
        p: [
          "Core Web Vitals (LCP, INP, CLS) em campo, não só em laboratório. Lighthouse no CI. Orçamento de performance que falha o build se for estourado. Se não dá para medir, não dá para garantir.",
        ],
      },
    ],
  },
  {
    slug: "propriedade-do-codigo",
    title: "Propriedade do código: exija o seu",
    excerpt:
      "Muito software é entregue como caixa-preta: você paga, usa, mas não é dono. Explicamos por que isso é um risco — e como deveria ser.",
    date: "2026-04-03",
    category: "Engenharia",
    readingTime: "4 min",
    author: "Equipe Dovra",
    body: [
      {
        p: [
          "Há uma diferença enorme entre contratar um produto e contratar um refém. Boa parte do mercado entrega software como caixa-preta: o cliente usa, paga a mensalidade, mas não tem o código, a documentação nem a liberdade de trocar de fornecedor.",
          "Acreditamos no contrário. O que construímos é seu: repositório, documentação e conhecimento incluídos.",
        ],
      },
      {
        h: "Por que isso importa",
        p: [
          "Propriedade do código é o que separa um ativo de um aluguel. Com ele, você pode auditar, evoluir, levar para outro time ou internalizar quando crescer. Sem ele, qualquer reajuste ou descontinuação vira uma crise.",
        ],
      },
      {
        h: "O que 'entregue de verdade' significa",
        p: [
          "Repositório versionado e seu. Documentação de arquitetura e de como rodar o projeto. Variáveis de ambiente e infraestrutura descritas. Onboarding para o seu time quando quiser assumir. Sem amarras.",
        ],
      },
    ],
  },
  {
    slug: "multi-tenant-na-pratica",
    title: "Multi-tenant na prática: o que muda ao escalar",
    excerpt:
      "Quando o seu SaaS sai do primeiro cliente para muitos, a arquitetura decide se você cresce ou reescreve tudo. Um panorama direto.",
    date: "2026-02-20",
    category: "SaaS",
    readingTime: "6 min",
    author: "Equipe Dovra",
    body: [
      {
        p: [
          "Todo SaaS começa simples: um banco, alguns usuários, telas que funcionam. O problema aparece quando o segundo, o décimo e o centésimo cliente chegam — e os dados de um não podem, em hipótese alguma, vazar para o outro.",
          "É aí que a arquitetura multi-tenant deixa de ser teoria e vira a diferença entre escalar e reescrever.",
        ],
      },
      {
        h: "Isolamento de dados",
        p: [
          "Há um espectro de estratégias: do banco por tenant (isolamento máximo, custo operacional alto) ao schema compartilhado com row-level security (eficiente, exige disciplina). A escolha depende de regulação, volume e perfil de cliente.",
          "O erro comum é não escolher — deixar o isolamento 'implícito' na aplicação. É assim que vazamentos de dados acontecem.",
        ],
      },
      {
        h: "Cobrança, limites e papéis",
        p: [
          "Multi-tenant de verdade carrega planos, limites de uso, organizações com vários usuários e papéis (RBAC). Tudo isso precisa estar na fundação, porque é caríssimo de adicionar depois que o produto já está no ar.",
        ],
      },
      {
        h: "A boa notícia",
        p: [
          "Feita certo desde o MVP, a fundação multi-tenant sustenta o produto por anos. Vimos plataformas saírem de zero a milhares de usuários pagantes sem reescrever a base. Esse é o objetivo.",
        ],
      },
    ],
  },
];

export const POST_SLUGS = posts.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
