import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "The mission behind The Verified Income Desk and the editorial code that governs every method, experiment, and briefing we publish.",
};

const code: { title: string; body: string }[] = [
  {
    title: "We do not promise income.",
    body: "Every method on this desk is described in terms of probability, range, and condition — never as a guaranteed or fixed result.",
  },
  {
    title: "We name failure points, not only upside.",
    body: "Every method page includes how it commonly fails and who it does not fit, given the same weight as who it fits and why it might work.",
  },
  {
    title: "We disclose real costs, tools, and time.",
    body: "Where a method requires money, specific tools, or a meaningful time investment before paying off, that is stated plainly, not minimized to make the method sound more accessible than it is.",
  },
  {
    title: "We test methods ourselves before publishing them.",
    body: "Field Experiments exist because describing a method secondhand is not the same as running it. Where we have not yet tested something, we say so.",
  },
  {
    title: "We do not use manufactured proof.",
    body: "No rented lifestyle imagery, no unverifiable screenshots presented as evidence, and no urgency tactics designed to shorten the time you spend deciding.",
  },
  {
    title: "We correct claims that don't hold up.",
    body: "Income methods and platforms change. When a method's realistic outlook shifts, we update the page rather than leaving outdated claims standing for the sake of consistency.",
  },
  {
    title: "We separate sponsorship from judgment.",
    body: "Any affiliate or sponsored relationship is disclosed clearly, and it does not change how honestly a method's risks and limits are described.",
  },
  {
    title: "We write for the decision, not the click.",
    body: "Every page is written for someone deciding whether to spend their limited time and money on a method — not optimized for engagement, watch time, or shareability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the desk"
        title="An income literacy desk built on the same standards as a briefing desk."
        lede="The Verified Income Desk exists because most online income content is optimized to perform well in a feed, not to help someone make a sound decision. We apply editorial standards — sourcing, disclosure, correction, and proof — to a category of content that has mostly operated without them."
      />

      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="Mission"
            title="Separate the income model from the performance built around it."
            intro="Every method, experiment, and briefing on this desk is written to survive scrutiny: a named mechanism, a realistic timeline, disclosed risk, and an honest account of who it does not fit. We are not selling a course, a mentorship, or a community — there is nothing here to upsell, which is part of why the standard can stay this plain."
            className="max-w-2xl"
          />
        </Container>
      </section>

      <section className="border-t border-line bg-grey-50/60 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our code"
            title="Eight commitments that govern everything we publish."
            className="max-w-2xl"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {code.map((item, i) => (
              <div key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-card">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-[1.05rem] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-charcoal-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
