import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, UrgencyPill, Pill } from "@/components/ui";
import {
  EmergencyCallout,
  NigerianContextBlock,
} from "@/components/callouts";
import { CheckIcon, ArrowRightIcon, AlertIcon, ClipboardIcon } from "@/components/icons";
import { MedicalTrustPanel } from "@/components/MedicalTrustPanel";
import {
  ReviewerCard,
  EditorialNotice,
  DisclaimerBlock,
  SourceList,
  SourcesHeading,
} from "@/components/trust";
import {
  getConditionBySlug,
  getConditionSlugs,
  getAllConditions,
} from "@/lib/conditions";
import { getCentreBySlug } from "@/lib/site";

export function generateStaticParams() {
  return getConditionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getConditionBySlug(params.slug);
  if (!article) return { title: "Condition not found" };
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/conditions/${article.slug}` },
    openGraph: {
      title: `${article.title} · Health Clarity Institute`,
      description: article.metaDescription,
      type: "article",
    },
  };
}

/** A standard prose section with a serif heading and id anchor. */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-line pt-9">
      <h2 className="text-h2">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ProseList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 prose-clinical">
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-blue"
            aria-hidden="true"
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Quick facts box near the top of the page. */
function QuickFacts({ facts }: { facts: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-white shadow-card">
      <div className="flex items-center gap-2.5 border-b border-line px-5 py-3">
        <ClipboardIcon size={18} className="text-clinical-blueDark" />
        <h2 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy">
          Quick facts
        </h2>
      </div>
      <ul className="space-y-2.5 px-5 py-4">
        {facts.map((f, i) => (
          <li key={i} className="flex gap-2.5 text-[0.9rem] leading-snug text-ink/90">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clinical-blueSoft text-clinical-blueDark">
              <CheckIcon size={12} strokeWidth={2} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "What to do next" patient-navigation box. */
function WhatToDoNext({
  data,
}: {
  data: NonNullable<ReturnType<typeof getConditionBySlug>>["whatToDoNext"];
}) {
  if (!data) return null;
  const rows: { label: string; value: string; tone: "calm" | "warn" | "alert" }[] = [
    { label: "If symptoms are mild", value: data.mild, tone: "calm" },
    { label: "If symptoms are worsening", value: data.worsening, tone: "warn" },
    {
      label: "If pregnant, elderly, a child, or another illness",
      value: data.higherRisk,
      tone: "warn",
    },
    { label: "What to ask at the clinic", value: data.atClinic, tone: "calm" },
    { label: "What not to delay", value: data.doNotDelay, tone: "alert" },
  ];
  const dot = {
    calm: "bg-clinical-blue",
    warn: "bg-clinical-amber",
    alert: "bg-clinical-red",
  };
  return (
    <section id="what-next" className="scroll-mt-32 border-t border-line pt-9">
      <h2 className="text-h2">What to do next</h2>
      <p className="mt-3 text-[0.99rem] leading-relaxed text-slate">
        A simple guide to acting on this — matched to how serious things are right now.
      </p>
      <div className="mt-5 overflow-hidden rounded-lg border border-line">
        <dl className="divide-y divide-line">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] sm:gap-6">
              <dt className="flex items-start gap-2.5 font-medium text-navy">
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot[r.tone]}`}
                  aria-hidden="true"
                />
                {r.label}
              </dt>
              <dd className="text-[0.95rem] leading-relaxed text-slate sm:pt-0">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function ConditionPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getConditionBySlug(params.slug);
  if (!article) notFound();

  const centre = article.specialtyCentre
    ? getCentreBySlug(article.specialtyCentre)
    : undefined;

  const related = getAllConditions()
    .filter((c) => c.slug !== article.slug)
    .filter((c) =>
      centre ? c.specialtyCentre === article.specialtyCentre : true
    )
    .slice(0, 3);

  // Build the table of contents from the sections that have content.
  const toc: { id: string; label: string; urgent?: boolean }[] = [];
  if (article.urgentCare?.length) toc.push({ id: "urgent", label: "When it is urgent", urgent: true });
  toc.push({ id: "overview", label: "Overview" });
  if (article.symptoms) toc.push({ id: "symptoms", label: "Symptoms" });
  if (article.causes?.length) toc.push({ id: "causes", label: "Causes" });
  if (article.riskFactors?.length) toc.push({ id: "risk-factors", label: "Risk factors" });
  if (article.diagnosis?.length) toc.push({ id: "diagnosis", label: "Diagnosis" });
  if (article.treatment) toc.push({ id: "treatment", label: "Treatment" });
  if (article.prevention?.length) toc.push({ id: "prevention", label: "Prevention" });
  if (article.complications?.length) toc.push({ id: "complications", label: "Complications" });
  toc.push({ id: "nigerian-context", label: "Nigerian context" });
  if (article.whatToDoNext) toc.push({ id: "what-next", label: "What to do next" });
  if (article.questionsForDoctor?.length) toc.push({ id: "questions", label: "Questions for your doctor" });
  if (article.faqs?.length) toc.push({ id: "faqs", label: "FAQs" });
  toc.push({ id: "sources", label: "Sources" });

  return (
    <>
      {/* ── Header band (hero summary) */}
      <section className="border-b border-line bg-offwhite">
        <Container className="py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-slate-soft">
              <li>
                <Link href="/" className="link-quiet">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/conditions" className="link-quiet">
                  Conditions
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy">{article.title}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <UrgencyPill level={article.urgency} />
            {centre && (
              <Link href={`/specialist-centres#${centre.slug}`} className="no-underline">
                <Pill tone="navy">{centre.name}</Pill>
              </Link>
            )}
          </div>

          <h1 className="mt-5 max-w-3xl text-h1">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-[1.15rem] leading-relaxed text-slate">
            {article.summary}
          </p>
        </Container>
      </section>

      {/* ── Top matter: Quick Facts + Trust panel + Urgent care (near the top) */}
      <Container className="py-10 md:py-12">
        <div className="grid gap-5 lg:grid-cols-2">
          {article.quickFacts?.length ? <QuickFacts facts={article.quickFacts} /> : <div />}
          <MedicalTrustPanel
            reviewer={article.reviewer}
            status={article.reviewStatus ?? "Reviewed"}
            lastReviewed={article.lastReviewed}
            emergencyHref={article.urgentCare?.length ? "#urgent" : "/disclaimer#emergency"}
          />
        </div>

        {article.urgentCare?.length ? (
          <div id="urgent" className="mt-5 scroll-mt-32">
            <EmergencyCallout items={article.urgentCare} />
          </div>
        ) : null}
      </Container>

      {/* ── Body: TOC + article */}
      <Container className="grid gap-10 pb-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14 lg:pb-16">
        {/* TOC */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
            On this page
          </p>
          <nav className="mt-3 border-l border-line">
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm no-underline transition-colors ${
                  t.urgent
                    ? "border-transparent text-clinical-red hover:border-clinical-red"
                    : "border-transparent text-slate hover:border-clinical-blue hover:text-clinical-blue"
                }`}
              >
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Article */}
        <article className="min-w-0 max-w-prose">
          <div className="space-y-9">
            {/* Overview (no top border) */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-h2">Overview</h2>
              <div className="prose-clinical mt-4">
                {article.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {article.symptoms && (
              <Section id="symptoms" title="Symptoms">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg text-navy">Common symptoms</h3>
                    <div className="mt-3">
                      <ProseList items={article.symptoms.common} />
                    </div>
                  </div>
                  {article.symptoms.warning.length > 0 && (
                    <div className="rounded-lg border border-clinical-amber/30 bg-clinical-amberSoft/60 p-5">
                      <div className="flex items-center gap-2">
                        <AlertIcon size={18} className="text-clinical-amber" />
                        <h3 className="font-serif text-lg text-clinical-amber">
                          Warning symptoms — do not ignore
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-2.5">
                        {article.symptoms.warning.map((it, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/90"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-amber"
                              aria-hidden="true"
                            />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Section>
            )}

            {article.causes?.length ? (
              <Section id="causes" title="Causes">
                <ProseList items={article.causes} />
              </Section>
            ) : null}

            {article.riskFactors?.length ? (
              <Section id="risk-factors" title="Risk factors">
                <ProseList items={article.riskFactors} />
              </Section>
            ) : null}

            {article.diagnosis?.length ? (
              <Section id="diagnosis" title="Diagnosis">
                <ProseList items={article.diagnosis} />
              </Section>
            ) : null}

            {article.treatment && (
              <Section id="treatment" title="Treatment">
                <div className="space-y-6">
                  {article.treatment.lifestyle.length > 0 && (
                    <div>
                      <h3 className="font-serif text-lg text-navy">
                        Lifestyle and self-care
                      </h3>
                      <div className="mt-3">
                        <ProseList items={article.treatment.lifestyle} />
                      </div>
                    </div>
                  )}
                  {article.treatment.medical.length > 0 && (
                    <div>
                      <h3 className="font-serif text-lg text-navy">
                        Medical treatment
                      </h3>
                      <div className="mt-3">
                        <ProseList items={article.treatment.medical} />
                      </div>
                    </div>
                  )}
                </div>
              </Section>
            )}

            {article.prevention?.length ? (
              <Section id="prevention" title="Prevention">
                <ProseList items={article.prevention} />
              </Section>
            ) : null}

            {article.complications?.length ? (
              <Section id="complications" title="Complications">
                <ProseList items={article.complications} />
              </Section>
            ) : null}

            {/* Nigerian context — signature block */}
            <div className="scroll-mt-32 border-t border-line pt-9">
              <NigerianContextBlock items={article.nigerianContext} />
            </div>

            {/* What to do next — patient navigation */}
            <WhatToDoNext data={article.whatToDoNext} />

            {article.questionsForDoctor?.length ? (
              <Section id="questions" title="Questions to ask your doctor">
                <ul className="space-y-3">
                  {article.questionsForDoctor.map((q, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-lg border border-line bg-white p-4 prose-clinical shadow-card"
                    >
                      <CheckIcon size={18} className="mt-0.5 shrink-0 text-clinical-green" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}

            {article.faqs?.length ? (
              <Section id="faqs" title="Frequently asked questions">
                <div className="divide-y divide-line">
                  {article.faqs.map((f, i) => (
                    <div key={i} className="py-4 first:pt-0">
                      <h3 className="font-serif text-lg text-navy">{f.question}</h3>
                      <p className="mt-2 prose-clinical">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </Section>
            ) : null}

            {/* Sources */}
            <section id="sources" className="scroll-mt-32 border-t border-line pt-9">
              <SourcesHeading />
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate">
                Guides draw on recognised health institutions, clinical guidelines, public-health
                agencies, peer-reviewed literature, and Nigerian health authorities where available.
                See our{" "}
                <Link href="/sources-methodology" className="link-quiet font-medium">
                  sources &amp; methodology
                </Link>
                .
              </p>
              <div className="mt-4">
                <SourceList sources={article.sources} />
              </div>
            </section>

            {/* Trust footer: reviewer · editorial note · update policy · disclaimer */}
            <div className="space-y-5 border-t border-line pt-9">
              <ReviewerCard
                reviewer={article.reviewer}
                status={article.reviewStatus ?? "Reviewed"}
                lastReviewed={article.lastReviewed}
                nextReview={article.nextReview}
              />
              <EditorialNotice />
              <DisclaimerBlock withReviewerNote />
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14 border-t border-line pt-9">
              <h2 className="font-serif text-xl text-navy">Related guides</h2>
              <ul className="mt-5 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/conditions/${r.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-white p-4 no-underline shadow-card transition-all hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover"
                    >
                      <span>
                        <span className="block font-medium text-navy group-hover:text-clinical-blue">
                          {r.title}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate">{r.summary}</span>
                      </span>
                      <ArrowRightIcon
                        size={18}
                        className="shrink-0 text-slate-soft transition-transform group-hover:translate-x-0.5 group-hover:text-clinical-blue"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </Container>
    </>
  );
}
