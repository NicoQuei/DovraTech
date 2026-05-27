import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { posts, formatPostDate } from "@/lib/content/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideias sobre engenharia, design e performance digital. Provamos que pensamos — não só executamos.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            A gente pensa —{" "}
            <span className="text-gradient-brand">não só executa.</span>
          </>
        }
        intro="Notas sobre engenharia, design e performance. Sem hype, com opinião técnica."
      />

      <Section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 2) * 0.06} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-ink-800/60 p-7 transition-colors duration-300 hover:border-brand/40 hover:bg-ink-700"
                >
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">
                    <span className="text-brand">{post.category}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-medium text-fg transition-colors group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-fg-muted">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-fg-faint">
                      {formatPostDate(post.date)}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-fg-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Gostou de como pensamos?"
        subtitle="Imagine isso aplicado ao seu produto. Vamos conversar."
      />
    </>
  );
}
