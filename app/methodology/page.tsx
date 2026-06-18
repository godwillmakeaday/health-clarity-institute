import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How The Verified Income Desk researches, tests, scores, and corrects the income models, experiments, and briefings it publishes.",
};

const steps: { title: string; body: string }[] = [
  {
    title: "We start from a falsifiable claim",
    body: "Every income model begins as a specific, testable claim about a mechanism: what is sold, to whom, through which channel, for roughly how much. Claims too vague to test — \"make money online with this one trick\" — are not published as methods.",
  },
  {
    title: "We research realistic accounts, not outliers",
    body: "Time-to-result ranges and earning paths are built from a range of realistic, verifiable accounts and our own field experiments — not from the single best-case story we could find. Where outcomes vary widely, we report the range and explain what drives the variation.",
  },
  {
    title: "We run field experiments where we can",
    body: "Where practical, we test a method ourselves under real conditions — real cost, real time, real outreach — and publish the result on the Field Experiments page regardless of whether it worked. Methods we have not yet tested directly are described from documented, cross-checked sources instead.",
  },
  {
    title: "We score consistently, not impressionistically",
    body: "Difficulty, risk, and time-before-results use the same three-tier scale across every method, applied by the same criteria: required prior skill for difficulty, capital and reputational exposure for risk, and realistic median timelines for time-to-results.",
  },
  {
    title: "We name failure points deliberately",
    body: "Every method page documents how it commonly fails and who it does not fit, sourced from the same research used to build the upside case — not added as an afterthought or legal cover.",
  },
  {
    title: "We correct and update published pages",
    body: "Platforms, payout structures, and regulations referenced in our methods change over time. When we learn that a page is materially outdated or incorrect, we update it and note the change, rather than leaving the original claim standing for the sake of consistency.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Methodology"
        lede="The standards behind every income model, field experiment, and briefing on this desk — how claims are sourced, tested, scored, and corrected."
      />
      <Container className="py-12 md:py-16">
        <SectionHeading
          eyebrow="Process"
          title="From claim to published page."
          intro="Six steps govern how a method moves from an unverified claim to a fully scored page on this desk."
          className="max-w-2xl"
        />
        <div className="mt-10 max-w-prose space-y-8">
          {steps.map((step, i) => (
            <div key={step.title} className="border-t border-lineSoft pt-7 first:border-0 first:pt-0">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-semibold text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-[1.3rem] text-navy">{step.title}</h2>
              </div>
              <p className="prose-desk mt-3">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
