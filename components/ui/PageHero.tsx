import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Standard hero for inner pages — clears the fixed header and sets the tone. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative border-b border-line pb-16 pt-36 sm:pb-20 sm:pt-44">
      <Container>
        <Reveal>
          <p className="eyebrow">
            <span className="inline-block h-px w-6 bg-brand/60" />
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-display-lg font-semibold text-fg">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
