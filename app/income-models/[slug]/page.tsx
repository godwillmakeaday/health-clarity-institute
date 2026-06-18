import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { methods, getMethodBySlug } from "@/data/methods";
import { filterDefs } from "@/lib/site";
import { Container, Eyebrow, DifficultyBadge, RiskBadge, VerdictBadge, ScoreBadge, Pill } from "@/components/ui";
import { CalloutBox } from "@/components/CalloutBox";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return methods.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const method = getMethodBySlug(params.slug);
  if (!method) return {};
  return { title: method.name, description: method.dek };
}

function List({ items, tone = "ink" }: { items: string[]; tone?: "ink" | "trust" | "warn" }) {
  const dot = tone === "trust" ? "bg-trust" : tone === "warn" ? "bg-warn" : "bg-charcoal-soft/60";
  return (
    <ul className="space-y-2.5 text-[0.94rem] leading-relaxed text-ink/85">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5 text-[0.94rem] leading-relaxed text-ink/85">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-0.5 shrink-0 font-mono text-[0.74rem] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-lineSoft py-9 first:border-0 first:pt-0">
      <h2 className="text-h2">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function MethodPage({ params }: { params: { slug: string } }) {
  const method = getMethodBySlug(params.slug);
  if (!method) notFound();

  const related = methods
    .filter((m) => m.slug !== method.slug && m.tags.some((t) => method.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-offwhite">
        <Container className="py-12 md:py-16">
          <Eyebrow>Income model</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-h1">{method.pageTitle}</h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal-soft">{method.dek}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <DifficultyBadge level={method.difficulty} />
            <RiskBadge level={method.riskLevel} />
            <VerdictBadge verdict={method.verdict} />
          </div>

          <div className="mt-8 grid gap-5 border-t border-lineSoft pt-6 sm:grid-cols-3">
            <ScoreBadge label="Difficulty" value={method.difficulty} tone="navy" />
            <ScoreBadge label="Risk level" value={method.riskLevel} tone="warn" />
            <ScoreBadge label="Time before results" value={method.timeBeforeResults.split(".")[0]} tone="gold" />
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <Section title="Plain Explanation">
              <p className="prose-desk">{method.whatItIs}</p>
            </Section>

            <Section title="Who This Fits">
              <List items={method.whoFits} tone="trust" />
            </Section>

            <Section title="Who This Does Not Fit">
              <List items={method.whoDoesNotFit} tone="warn" />
            </Section>

            <Section title="Required Skills and Tools">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-charcoal-soft/80">Skills</p>
                  <div className="mt-3"><List items={method.requiredSkills} /></div>
                </div>
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-charcoal-soft/80">Tools</p>
                  <div className="mt-3"><List items={method.requiredTools} /></div>
                </div>
              </div>
            </Section>

            <Section title="Common Lies About This Method">
              <CalloutBox type="reality-check">
                <ul className="space-y-2">
                  {method.commonLies.map((lie, i) => (
                    <li key={i} className="italic">{lie}</li>
                  ))}
                </ul>
              </CalloutBox>
            </Section>

            <Section title="Your First 7 Days">
              <OrderedList items={method.first7Days} />
            </Section>

            <Section title="Your First 30 Days">
              <OrderedList items={method.first30Days} />
            </Section>

            <Section title="Realistic Earning Path">
              <p className="prose-desk">{method.realisticEarningPath}</p>
              <CalloutBox type="first-test" title="The First Realistic Step" className="mt-5">
                <p>{method.firstRealisticStep}</p>
              </CalloutBox>
            </Section>

            <Section title="Failure Points">
              <CalloutBox type="failure-point">
                <List items={method.failurePoints} tone="warn" />
              </CalloutBox>
            </Section>

            <Section title="Proof Signals">
              <CalloutBox type="proof-signal">
                <List items={method.proofSignals} tone="trust" />
              </CalloutBox>
            </Section>

            <Section title="Ethical Boundary">
              <p className="prose-desk">{method.ethicalBoundary}</p>
            </Section>

            <Section title="Verdict">
              <div className="flex flex-wrap items-center gap-3">
                <VerdictBadge verdict={method.verdict} />
                <p className="text-[0.95rem] text-ink/85">{method.verdictNote}</p>
              </div>
            </Section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-line bg-grey-50 p-5">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-charcoal-soft/80">Tags</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {method.tags.map((tag) => {
                  const def = filterDefs.find((f) => f.tag === tag);
                  return <Pill key={tag} tone="neutral">{def?.label ?? tag}</Pill>;
                })}
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-6">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-charcoal-soft/80">Related methods</p>
                <ul className="mt-3 space-y-3">
                  {related.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={`/income-models/${m.slug}`}
                        className="flex items-center justify-between gap-2 rounded border border-line bg-white px-3.5 py-3 text-[0.85rem] font-medium text-navy no-underline hover:border-gold/50 hover:text-gold-dark"
                      >
                        {m.name}
                        <ArrowIcon size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href="/income-models"
              className="mt-6 flex items-center gap-1.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.08em] text-navy no-underline hover:text-gold-dark"
            >
              ← Back to the library
            </Link>
          </aside>
        </div>
      </Container>
    </>
  );
}
