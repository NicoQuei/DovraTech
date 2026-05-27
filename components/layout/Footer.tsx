import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { nav, site, socials } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ConsoleEasterEgg } from "@/components/brand/ConsoleEasterEgg";

const footerServices = [
  { label: "E-commerce", href: "/servicos/e-commerce" },
  { label: "Plataformas SaaS", href: "/servicos/saas" },
  { label: "UI/UX Design", href: "/servicos/ui-ux-design" },
  { label: "SEO & Tráfego", href: "/servicos/seo-trafego" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <ConsoleEasterEgg />

      <Container className="relative z-10 pb-10 pt-20 sm:pt-28">
        {/* Top: invitation + columns */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
              {"// vamos conversar"}
            </p>
            <Link
              href="/contato"
              className="group mt-5 inline-block font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl"
            >
              Vamos construir
              <br />
              algo?{" "}
              <ArrowUpRight className="inline h-8 w-8 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <p className="mt-6 max-w-sm text-fg-muted">
              {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title="Navegação">
              {nav.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Serviços">
              {footerServices.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
              <FooterLink href="/servicos">Ver todos →</FooterLink>
            </FooterCol>

            <FooterCol title="Contato">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <Mail className="h-4 w-4" /> E-mail
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {s.label}
                </a>
              ))}
            </FooterCol>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName} · CNPJ {site.cnpj}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacidade" className="transition-colors hover:text-fg-muted">
              Privacidade & LGPD
            </Link>
            <span className="font-mono text-fg-faint/80" title="Sim, é Next.js.">
              {"// feito com Next.js + ☕"}
            </span>
          </div>
        </div>
      </Container>

      {/* Oversized decorative wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none px-4 pb-2 text-center"
      >
        <span className="block bg-gradient-to-b from-fg/[0.05] to-transparent bg-clip-text font-display text-[18vw] font-bold leading-[0.8] tracking-tighter text-transparent">
          DOVRA
        </span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-fg-muted transition-colors hover:text-fg"
    >
      {children}
    </Link>
  );
}
