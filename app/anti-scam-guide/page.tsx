import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { WarningCard } from "@/components/WarningCard";
import { ProofSignalCard } from "@/components/ProofSignalCard";
import { CalloutBox } from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Anti-Scam Guide",
  description:
    "Red flags, green flags, and a practical checklist for evaluating any online income course, mentor, or opportunity before you pay for it.",
};

const redFlags: { title: string; body: string }[] = [
  { title: "Income claims with no visible method", body: "A specific dollar figure is shown, but no one explains what was actually sold, to whom, or how it was distributed." },
  { title: "Manufactured urgency", body: "\"Doors close tonight,\" countdown timers, or claims that the opportunity will stop working if you wait — pressure designed to prevent comparison shopping." },
  { title: "Rented-lifestyle imagery", body: "Cars, properties, or watches presented as proof of income, with no connection shown between the image and the method being sold." },
  { title: "Screenshots as the only evidence", body: "An account balance shown without the time spent, money spent acquiring it, refunds processed, or months of zero income that preceded it." },
  { title: "Vague, unfalsifiable claims", body: "\"This works for everyone\" or \"no skill required\" — claims broad enough that they can never be tested or disproven." },
  { title: "Refusal to explain the downside", body: "No mention of who the method does not fit, what it costs in time or money, or where it commonly fails." },
  { title: "Pressure to recruit others", body: "Earnings depend more on enrolling new buyers into the same course than on selling a real product or service to outside customers." },
  { title: "Anonymous or unverifiable instructors", body: "No real name, no history that predates the current offer, and no way to verify any claimed past result." },
];

const greenFlags: { title: string; body: string }[] = [
  { title: "A specific, falsifiable method", body: "The exact offer, audience, and distribution channel are named clearly enough that you could test the same claim yourself." },
  { title: "Stated failure points", body: "The person is willing to describe what did not work, who the method does not fit, and where it tends to break down." },
  { title: "Realistic timelines", body: "Time-to-result estimates are described in months, with ranges, rather than days or guaranteed figures." },
  { title: "Verifiable history", body: "A real name, a history of work predating the current offer, and a way to check claims against an independent source." },
  { title: "Transparent economics", body: "Costs, fees, and the instructor's own incentive for selling the course or recommendation are stated plainly." },
  { title: "Evidence beyond a screenshot", body: "Process documentation — drafts, time logs, client conversations, or a visible body of work — accompanies any income claim." },
];

const checklist: string[] = [
  "Does the seller name the exact method, audience, and distribution channel — or only the result?",
  "Is there a real name and a history of work that predates this specific offer?",
  "Are failure points and who-it-does-not-fit cases mentioned anywhere in the pitch?",
  "Is the timeline described in a realistic range (weeks to months), not days?",
  "Is evidence shown beyond a single screenshot — time logs, drafts, client messages, a visible portfolio?",
  "Does income depend on selling to real outside customers, or mainly on recruiting new buyers into the same course?",
  "Is the price, refund policy, and total cost (including any upsells) stated clearly before payment?",
  "Would the offer still seem reasonable without a countdown timer, urgency language, or social proof of others buying right now?",
  "Can you find any independent mention of this seller or course outside of channels they control?",
  "Are you being asked to decide today, or are you free to take a week to compare it against alternatives?",
];

export default function AntiScamGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Anti-scam guide"
        title="Most online income scams are recognizable before you pay."
        lede="Scams in this space rarely rely on outright lies that can be disproven in a sentence. They rely on a specific set of patterns — manufactured urgency, unverifiable proof, and vague claims that can never quite be tested. This guide names those patterns directly."
      />

      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="Why this matters"
            title="Recognizing the pattern is more useful than recognizing the lie."
            intro="Individual claims are easy to make convincing. The underlying pattern — urgency, unverifiable proof, recruitment-based income, and a refusal to name a real method — repeats across almost every fraudulent offer in this space, regardless of the specific story used to dress it up."
            className="max-w-2xl"
          />
        </Container>
      </section>

      <section id="flags" className="border-t border-line bg-grey-50/60 py-16 md:py-20">
        <Container>
          <Eyebrow>Red flags</Eyebrow>
          <h2 className="mt-3 text-h2">Signs an offer is built to perform, not to deliver.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {redFlags.map((f) => (
              <WarningCard key={f.title} title={f.title}>{f.body}</WarningCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <Eyebrow>Green flags</Eyebrow>
          <h2 className="mt-3 text-h2">Signs an offer can survive scrutiny.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {greenFlags.map((f) => (
              <ProofSignalCard key={f.title} title={f.title}>{f.body}</ProofSignalCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="How manufactured urgency works"
            title="Urgency is a tool for preventing comparison, not a sign of genuine scarcity."
            intro="Countdown timers, limited-seat claims, and 'this closes tonight' language exist to shorten the time between seeing an offer and paying for it — because that time is exactly when most people would otherwise check claims, compare alternatives, or simply sleep on the decision. A method that is genuinely sound does not lose its value if you wait a week to evaluate it."
            className="max-w-2xl"
          />
        </Container>
      </section>

      <section className="border-t border-line bg-grey-50/60 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="How to verify a claim"
            title="Before you pay, try to break the claim, not confirm it."
            intro="Search for the seller's name alongside words like 'review' or 'refund' on a platform they don't control. Ask what specifically is sold, to whom, and how. Ask to see one piece of process evidence — a draft, a client message, a time log — rather than a result alone. A claim that survives these questions is far more likely to be real."
            className="max-w-2xl"
          />
        </Container>
      </section>

      <section id="checklist" className="py-16 md:py-20">
        <Container>
          <Eyebrow>Before you buy</Eyebrow>
          <h2 className="mt-3 text-h2">The course-buying checklist.</h2>
          <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal-soft">
            Run through these ten questions before paying for any course, mentorship, or paid community.
            If more than two or three answers are unclear or unfavorable, treat that as sufficient reason to wait.
          </p>
          <div className="mt-8 max-w-2xl rounded-lg border border-line bg-white p-6 shadow-card">
            <ul className="space-y-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-line font-mono text-[0.66rem] text-charcoal-soft">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <CalloutBox type="failure-point" title="If you've already been scammed">
              <p>
                Document everything — payment records, messages, and the original offer — and report it to your
                payment provider and the platform it was sold through. Most recovery routes depend on acting
                quickly and keeping a clear paper trail.
              </p>
            </CalloutBox>
            <CalloutBox type="first-test">
              <p>
                None of this means every paid course is a scam. It means the burden of proof sits with the
                seller. Compare any offer against the methods documented on this desk before paying for it.
              </p>
              <Link href="/income-models" className="mt-2 inline-block font-medium text-navy hover:text-gold-dark">
                Browse verified income models →
              </Link>
            </CalloutBox>
          </div>
        </Container>
      </section>
    </>
  );
}
