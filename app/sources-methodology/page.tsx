import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { DisclaimerBlock } from "@/components/trust";
import { CheckIcon, AlertIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sources & Methodology",
  description:
    "What sources Health Clarity Institute draws on — recognised health institutions, clinical guidelines, public-health agencies, peer-reviewed literature and Nigerian health authorities — and the standards our content holds to.",
  alternates: { canonical: "/sources-methodology" },
};

const sourceTypes: string[] = [
  "Recognised health institutions",
  "Clinical guidelines",
  "Public-health agencies",
  "Peer-reviewed literature",
  "Nigerian health authorities, where available",
];

const standards: string[] = [
  "We avoid exaggeration and sensational framing.",
  "We do not make miracle or cure claims.",
  "We do not make unsupported treatment claims.",
  "We describe how conditions are managed without acting as a prescription.",
  "We say so plainly where evidence is uncertain or a decision belongs to a clinician.",
];

const sections: { heading: string; paras: string[] }[] = [
  {
    heading: "Where our information comes from",
    paras: [
      "Our guides are evidence-informed. They draw on reputable, recognised sources rather than opinion, and each published guide lists the references it relies on at the foot of the page.",
    ],
  },
  {
    heading: "How we use Nigerian context",
    paras: [
      "Where Nigerian guidance, data or context exists, we prioritise it — so that a guide reflects not only what is clinically true, but how care actually works here: cost, access, late diagnosis, self-medication and the realities of getting to a facility.",
    ],
  },
  {
    heading: "How sources appear on a guide",
    paras: [
      "Sources are listed at the bottom of each guide page, numbered, with the publisher and year where available. The trust panel at the top of every guide points readers to that list.",
    ],
  },
  {
    heading: "Keeping sources current",
    paras: [
      "Guidance changes. When we re-review a guide, we check that its sources still reflect current consensus, and update both the content and the references where needed. A guide flagged as needing an update is re-checked sooner.",
    ],
  },
];

export default function SourcesMethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Sources & Methodology"
        lede="What we base our guides on, how we handle Nigerian context, and the standards that keep our content honest."
      />
      <Container className="py-12 md:py-16">
        <div className="max-w-prose">
          {/* Source types + standards cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-5 shadow-card">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
                Sources may include
              </p>
              <ul className="mt-3 space-y-2.5">
                {sourceTypes.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
                    <CheckIcon size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-clinical-green" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-white p-5 shadow-card">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
                What we avoid
              </p>
              <ul className="mt-3 space-y-2.5">
                {standards.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
                    <AlertIcon size={16} className="mt-0.5 shrink-0 text-clinical-amber" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <section key={s.heading} className="border-t border-line pt-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-clinical-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl text-navy">{s.heading}</h2>
                </div>
                <div className="prose-clinical mt-3">
                  {s.paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <DisclaimerBlock />
          </div>

          <div className="mt-6 rounded-lg border border-line bg-offwhite p-6 text-sm leading-relaxed text-slate">
            See also our{" "}
            <Link href="/editorial-policy" className="link-quiet">Editorial Policy</Link> and{" "}
            <Link href="/medical-review-policy" className="link-quiet">Medical Review Policy</Link>.
          </div>
        </div>
      </Container>
    </>
  );
}
