import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { ArrowIcon } from "@/components/icons";
import { pathways } from "@/data/pathways";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Six pathways into The Verified Income Desk, sorted by what you already have — a smartphone, a writing habit, a willingness to sell, or professional knowledge.",
};

export default function StartHerePage() {
  return (
    <>
      <PageHero
        eyebrow="Start here"
        title="Start from what you already have, not from a method you've heard about."
        lede="Most people arrive at online income content already attached to a specific method — usually whichever one they saw most recently. These six pathways start from the other direction: your starting resources, constraints, and risk tolerance, sorted into the methods most likely to fit."
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="rounded-lg border border-line bg-white p-6 shadow-card md:p-7">
                <h2 className="font-serif text-[1.25rem] font-semibold leading-snug text-navy">{pathway.title}</h2>
                <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-charcoal-soft/80">
                  {pathway.audience}
                </p>
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-charcoal-soft">{pathway.description}</p>

                <ol className="mt-5 space-y-2.5 border-t border-lineSoft pt-5">
                  {pathway.steps.map((step, i) => (
                    <li key={step.href}>
                      <Link
                        href={step.href}
                        className="flex items-center justify-between gap-3 rounded border border-line bg-grey-50/60 px-3.5 py-2.5 text-[0.88rem] font-medium text-navy no-underline transition-colors hover:border-gold/50 hover:text-gold-dark"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="font-mono text-[0.7rem] text-gold-dark">{i + 1}</span>
                          {step.label}
                        </span>
                        <ArrowIcon size={12} className="shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
