import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { site, socials } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundFX } from "@/components/layout/BackgroundFX";
import { PageLoader } from "@/components/layout/PageLoader";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.tagline}`,
    template: `%s — ${site.fullName}`,
  },
  description: site.description,
  applicationName: site.fullName,
  category: "technology",
  keywords: [
    "engenharia digital",
    "desenvolvimento de software",
    "criação de sites",
    "desenvolvimento web",
    "Next.js",
    "React",
    "e-commerce",
    "loja virtual",
    "SaaS",
    "aplicativos",
    "aplicativo mobile",
    "UI/UX design",
    "design de produto",
    "SEO",
    "performance web",
    "Core Web Vitals",
    "estúdio de tecnologia",
    "fábrica de software",
    "desenvolvimento de sites em Fortaleza",
    "agência digital Fortaleza",
    "Fortaleza",
    "Ceará",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.fullName,
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
    creator: "@dovratech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/**
 * Structured data graph — gives Google an explicit, machine-readable model of
 * the business. Organization + ProfessionalService (local SEO, Fortaleza-CE)
 * + WebSite, all cross-linked by @id so they're understood as one entity.
 */
const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
const sameAs = socials.map((s) => s.href);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: site.fullName,
      alternateName: site.name,
      url: site.url,
      description: site.description,
      slogan: site.tagline,
      email: site.email,
      telephone: site.phoneE164,
      foundingDate: site.foundingYear,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon.svg`,
      },
      image: `${site.url}/opengraph-image`,
      priceRange: "$$",
      areaServed: { "@type": "Country", name: "Brasil" },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.phoneE164,
        email: site.email,
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
      knowsAbout: [
        "Desenvolvimento web",
        "Next.js",
        "React",
        "E-commerce",
        "SaaS",
        "UI/UX Design",
        "SEO",
        "Performance web",
      ],
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: site.url,
      name: site.fullName,
      description: site.description,
      inLanguage: "pt-BR",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#06070A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn(display.variable, sans.variable, mono.variable)}
    >
      <body className="min-h-screen bg-ink font-sans text-fg antialiased">
        <PageLoader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
          >
            Pular para o conteúdo
          </a>
          <BackgroundFX />
          <Header />
          <main id="conteudo" className="relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
