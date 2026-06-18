import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.dek };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-offwhite">
        <Container className="py-12 md:py-16">
          <Eyebrow>Briefing</Eyebrow>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Pill tone="gold">{article.category}</Pill>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-charcoal-soft">
              {article.readTime}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-h1">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal-soft">{article.dek}</p>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="prose-desk max-w-prose">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            {more.length > 0 && (
              <div>
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-charcoal-soft/80">
                  More on {article.category}
                </p>
                <ul className="mt-3 space-y-3">
                  {more.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/briefings/${a.slug}`}
                        className="flex items-center justify-between gap-2 rounded border border-line bg-white px-3.5 py-3 text-[0.85rem] font-medium text-navy no-underline hover:border-gold/50 hover:text-gold-dark"
                      >
                        {a.title}
                        <ArrowIcon size={12} className="shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href="/briefings"
              className="mt-6 flex items-center gap-1.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.08em] text-navy no-underline hover:text-gold-dark"
            >
              ← Back to briefings
            </Link>
          </aside>
        </div>
      </Container>
    </>
  );
}
