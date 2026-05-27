import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { POST_SLUGS, getPost, formatPostDate } from "@/lib/content/posts";

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-36 sm:pt-44">
        <Container>
          <div className="mx-auto max-w-prose">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="h-4 w-4" /> Insights
            </Link>

            <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">
              <span className="text-brand">{post.category}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-fg-muted">{post.excerpt}</p>
            <p className="mt-6 border-t border-line pt-4 text-sm text-fg-faint">
              Por {post.author}
            </p>
          </div>
        </Container>
      </article>

      <Container>
        <div className="mx-auto mt-12 max-w-prose">
          {post.body.map((block, i) => (
            <Reveal key={i} delay={0} className="mb-8">
              {block.h && (
                <h2 className="mb-4 font-display text-2xl font-semibold text-fg">
                  {block.h}
                </h2>
              )}
              <div className="space-y-4">
                {block.p.map((para, j) => (
                  <p key={j} className="text-lg leading-relaxed text-fg-muted">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <CtaBanner
        title="Curtiu? Vamos aplicar ao seu produto."
        subtitle="Da ideia ao deploy, com o mesmo cuidado que você acabou de ler."
      />
    </>
  );
}
