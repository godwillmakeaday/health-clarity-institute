import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReviewStatus } from "@/lib/types";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { StatusBadge, DisclaimerBlock } from "@/components/trust";

export const metadata: Metadata = {
  title: "Medical Review Policy",
  description:
    "How clinical content on Health Clarity Institute is reviewed by qualified professionals for clarity, safety, balance and accuracy — and what each review status means.",
  alternates: { canonical: "/medical-review-policy" },
};

const sections: { heading: string; paras: string[] }[] = [
  {
    heading: "Why we review",
    paras: [
      "Health content carries real consequences. A guide that is clear but wrong is more dangerous than one that is merely unclear. Clinical review is how we protect readers from confident error.",
    ],
  },
  {
    heading: "Who reviews",
    paras: [
      "Health guides are intended to be reviewed by qualified clinicians with relevant expertise — for example, a physician for a condition guide, with input from the appropriate specialty. Where possible we prioritise Nigerian health professionals so that context as well as clinical fact is checked.",
    ],
  },
  {
    heading: "What review checks",
    paras: [
      "Reviewers check each guide for clarity, safety, balance, and medical accuracy. That means confirming the clinical facts are correct and current; that symptoms, red flags and urgent-care guidance are complete and not misleading; that treatment descriptions inform without amounting to a prescription; and that the Nigerian context is realistic and responsible.",
    ],
  },
  {
    heading: "Emergency guidance",
    paras: [
      "Emergency guidance must be clear and conservative. Where a condition can become an emergency, the guide states the warning signs plainly and early and tells the reader to seek urgent care at the nearest hospital. When in doubt, we err on the side of caution.",
    ],
  },
  {
    heading: "Showing the reviewer",
    paras: [
      "On a finished guide, the reviewing clinician is displayed, along with the date it was last reviewed and the date it is next due. Readers should be able to see who stands behind the content, not just trust that someone does.",
    ],
  },
  {
    heading: "Dating and re-review",
    paras: [
      "Guides are re-reviewed on schedule, and sooner if evidence changes or a reader raises a concern. The review status and dates on each guide show exactly where it stands.",
    ],
  },
  {
    heading: "About the placeholders on this site",
    paras: [
      "This platform is in active development. Reviewer names, credentials and review dates currently shown on guides are placeholders, included to demonstrate the structure of a finished, signed-off guide. No guide should be treated as clinically signed off until a named reviewer and real dates appear and these placeholder notices are removed.",
    ],
  },
];

const statuses: { status: ReviewStatus; desc: string }[] = [
  { status: "Draft", desc: "Being written. Not yet ready for clinical review or publication." },
  { status: "In Review", desc: "With a qualified clinician for checking before final publication." },
  { status: "Reviewed", desc: "Checked and signed off by a reviewer, with review dates shown." },
  { status: "Needs Update", desc: "Flagged for re-review because guidance, evidence or context has changed." },
];

export default function MedicalReviewPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Medical Review Policy"
        lede="Clinical review is the backbone of a trustworthy health library. This is how it works at Health Clarity Institute — including an honest note on the placeholders you will currently see."
      />
      <Container className="py-12 md:py-16">
        <div className="max-w-prose">
          <div className="space-y-10">
            {sections.slice(0, 4).map((s, i) => (
              <section key={s.heading} className="border-t border-line pt-7 first:border-0 first:pt-0">
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

          {/* Review status legend */}
          <section className="mt-10 border-t border-line pt-7">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-semibold text-clinical-blue">05</span>
              <h2 className="font-serif text-2xl text-navy">Review status</h2>
            </div>
            <p className="prose-clinical mt-3">
              Every guide carries one of four status labels, shown as a small badge near the top and
              in its reviewer panel:
            </p>
            <ul className="mt-5 space-y-3">
              {statuses.map((s) => (
                <li
                  key={s.status}
                  className="flex flex-col gap-2 rounded-lg border border-line bg-white p-4 shadow-card sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="sm:w-32 sm:shrink-0">
                    <StatusBadge status={s.status} />
                  </span>
                  <span className="text-sm leading-relaxed text-slate">{s.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Remaining sections */}
          <div className="mt-10 space-y-10">
            {sections.slice(4).map((s, i) => (
              <section key={s.heading} className="border-t border-line pt-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-clinical-blue">
                    {String(i + 6).padStart(2, "0")}
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
            Read our <Link href="/editorial-policy" className="link-quiet">Editorial Policy</Link> for how
            guides are written, our{" "}
            <Link href="/sources-methodology" className="link-quiet">Sources &amp; Methodology</Link>, or{" "}
            <Link href="/contact" className="link-quiet">contact us</Link> to raise a clinical concern.
          </div>
        </div>
      </Container>
    </>
  );
}
