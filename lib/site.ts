/** Global site configuration — single source of truth for nav, contact, SEO. */
export const site = {
  name: "Dovra",
  fullName: "Dovra Tech",
  domain: "dovratech.com.br",
  url: "https://dovratech.com.br",
  tagline: "Engenharia digital sob medida",
  description:
    "Estúdio de engenharia digital. Unimos design e código sob o mesmo teto para construir produtos rápidos, sólidos e com propriedade total do cliente.",
  locale: "pt-BR",
  // Placeholders — substitua pelos dados reais da Dovra.
  email: "contato@dovratech.com.br",
  phoneDisplay: "+55 (11) 9 9999-9999",
  whatsapp: "https://wa.me/5511999999999",
  cnpj: "00.000.000/0001-00",
  address: "São Paulo · Brasil · Remoto",
  responseTime: "Resposta em até 1 dia útil",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Serviços", href: "/servicos" },
  { label: "Trabalhos", href: "/trabalhos" },
  { label: "Estúdio", href: "/estudio" },
  { label: "Processo", href: "/processo" },
  { label: "Contato", href: "/contato" },
];

export const socials: NavItem[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export const primaryCta = { label: "Iniciar projeto", href: "/contato" } as const;
