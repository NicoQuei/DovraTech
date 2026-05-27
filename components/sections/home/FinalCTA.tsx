"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { site } from "@/lib/site";

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-32 sm:py-44">
      {/* Ambient background — an echo of the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 bg-brand-radial blur-2xl"
          animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        />
        <div
          className="absolute right-[12%] top-[18%] h-[22rem] w-[22rem] rounded-full opacity-[0.16] blur-3xl"
          style={{ background: "radial-gradient(closest-side, #00D9C0, transparent)" }}
        />
      </div>
      <div aria-hidden className="absolute inset-x-0 top-0 hairline" />

      <Container className="relative z-10 text-center">
        <p className="eyebrow mx-auto mb-6 w-fit">{"// vamos lá"}</p>
        <h2 className="mx-auto max-w-3xl font-display text-display-lg font-semibold text-fg">
          Tem uma ideia?{" "}
          <span className="text-gradient-brand">Vamos construir algo.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-fg-muted">
          A primeira conversa é sem compromisso. Conte o desafio — devolvemos uma
          visão clara de caminho, prazo e investimento.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Magnetic>
            <Button href="/contato" size="lg">
              Iniciar projeto
            </Button>
          </Magnetic>
          <Button href={site.whatsapp} external variant="secondary" size="lg" arrow={false}>
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </Button>
        </div>
        <p className="mt-6 font-mono text-xs text-fg-faint">
          {site.responseTime}
        </p>
      </Container>
    </section>
  );
}
