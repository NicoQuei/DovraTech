import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-24">
      <Container className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-brand">
          erro · 404
        </p>
        <h1 className="mt-5 font-display text-display-lg font-semibold text-gradient-brand">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-fg-muted">
          O link pode ter mudado de lugar — ou nunca existiu. Acontece até no
          melhor código.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Voltar ao início</Button>
          <Button href="/contato" variant="secondary" arrow="up-right">
            Falar com a gente
          </Button>
        </div>
      </Container>
    </section>
  );
}
