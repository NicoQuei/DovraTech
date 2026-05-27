import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/** Reusable mid/bottom CTA used across inner pages. */
export function CtaBanner({
  title = "Vamos construir algo?",
  subtitle = "A primeira conversa é sem compromisso. Conte o desafio e devolvemos um caminho claro.",
  primaryLabel = "Iniciar projeto",
  primaryHref = "/contato",
  showWhatsapp = true,
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  showWhatsapp?: boolean;
}) {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-800 px-7 py-14 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-brand-radial opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full opacity-[0.18] blur-3xl"
            style={{ background: "radial-gradient(closest-side, #00D9C0, transparent)" }}
          />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl font-display text-display-md font-semibold text-fg">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-fg-muted">{subtitle}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              {showWhatsapp && (
                <Button
                  href={site.whatsapp}
                  external
                  variant="secondary"
                  size="lg"
                  arrow={false}
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
