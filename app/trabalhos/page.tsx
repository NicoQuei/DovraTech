import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { WorkGallery } from "@/components/sections/work/WorkGallery";

export const metadata: Metadata = {
  title: "Trabalhos",
  description:
    "Projetos da Dovra: e-commerce, plataformas SaaS, sites e apps. Resultados reais — performance, conversão e escala.",
};

export default function TrabalhosPage() {
  return (
    <>
      <PageHero
        eyebrow="Trabalhos"
        title={
          <>
            Casos onde o código{" "}
            <span className="text-gradient-brand">virou resultado.</span>
          </>
        }
        intro="Cada projeto é um portfólio vivo. Filtre por tipo e veja como design e engenharia juntos movem números de verdade."
      />
      <WorkGallery />
      <CtaBanner />
    </>
  );
}
