import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { CalloutBox } from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "The Verified Income Desk provides educational information only. No income, results, or outcome is guaranteed by anything published here.",
};

const points: { heading: string; body: string }[] = [
  {
    heading: "Educational information only",
    body: "Everything on this site — income models, field experiments, briefings, and guides — is published for general education. It is not personalized advice for your specific financial, legal, or business situation.",
  },
  {
    heading: "No guaranteed income or results",
    body: "Every income model described on this desk involves real uncertainty, effort, and skill-building. Time-to-result ranges are drawn from realistic accounts and our own field experiments, not promises. Past results, including our own, do not guarantee future ones.",
  },
  {
    heading: "Not financial, tax, or legal advice",
    body: "Nothing on this site constitutes financial planning, tax guidance, or legal advice. Income earned through any method described here may carry tax or regulatory obligations specific to your country — consult a qualified professional before acting on anything that affects your finances or legal standing.",
  },
  {
    heading: "Risk is real and individual",
    body: "Risk levels assigned to each method (Low, Moderate, High) reflect our general assessment, not a prediction for your specific circumstances. Your capital, time, skills, and market conditions will affect your actual outcome, and may make a method riskier or safer for you than stated.",
  },
  {
    heading: "Affiliate and sponsored content",
    body: "Some pages may contain affiliate links or sponsored mentions. Where this is the case, it is disclosed clearly on the page. Any such relationship does not change how honestly we describe a method's risks, limits, or failure points.",
  },
  {
    heading: "Verify independently",
    body: "We encourage you to verify claims — ours included — against independent sources before committing time or money. Platforms, programs, and regulations referenced on this site change over time; we update pages when we become aware of material changes, but cannot guarantee every detail is current at the moment you read it.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Please read"
        title="Disclaimer"
        lede="The Verified Income Desk exists to help you evaluate online income methods soberly. It is educational, and there are important limits to what it can do."
      />
      <Container className="py-12 md:py-16">
        <div className="max-w-prose">
          <div className="space-y-10">
            {points.map((p, i) => (
              <section key={p.heading} className="border-t border-line pt-7 first:border-0 first:pt-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl text-navy">{p.heading}</h2>
                </div>
                <p className="prose-desk mt-3">{p.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <CalloutBox type="reality-check" title="The short version">
              <p>
                Educational information only. No guaranteed income, no financial advice, no promised results.
                Every income model involves risk, effort, skill-building, and uncertainty.
              </p>
            </CalloutBox>
          </div>

          <div className="mt-6 rounded-lg border border-line bg-offwhite p-6 text-sm leading-relaxed text-charcoal-soft">
            See how we research and rate methods in our{" "}
            <Link href="/methodology" className="link-quiet">Methodology</Link>, or read our{" "}
            <Link href="/privacy" className="link-quiet">Privacy</Link> policy.
          </div>
        </div>
      </Container>
    </>
  );
}
