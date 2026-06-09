/** Global site configuration — single source of truth for nav, contact, SEO. */
export const site = {
  name: "Dovra",
  fullName: "Dovra Tech",
  domain: "dovratech.com",
  url: "https://dovratech.com",
  tagline: "Engenharia digital sob medida",
  description:
    "Estúdio de engenharia digital. Unimos design e código sob o mesmo teto para construir produtos rápidos, sólidos e com propriedade total do cliente.",
  locale: "pt-BR",
  email: "contato@dovratech.com",
  phoneDisplay: "+55 (85) 99694-1119",
  phoneE164: "+5585996941119",
  whatsapp: "https://wa.me/5585996941119",
  // Local SEO signals (LocalBusiness schema).
  city: "Fortaleza",
  region: "CE",
  regionName: "Ceará",
  country: "BR",
  address: "Fortaleza · CE · Brasil · Remoto",
  responseTime: "Resposta em até 1 dia útil",
  foundingYear: "2025",
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
  // TODO: confirme o @ real do Instagram (usei o provável a partir do domínio).
  { label: "Instagram", href: "https://instagram.com/dovratech" },
];

export const primaryCta = { label: "Iniciar projeto", href: "/contato" } as const;
