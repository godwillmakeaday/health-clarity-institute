import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container, SectionHeading } from "@/components/ui";
import { PrincipleCard } from "@/components/PrincipleCard";
import { MethodCard } from "@/components/MethodCard";
import { ExperimentCard } from "@/components/ExperimentCard";
import { CalloutBox } from "@/components/CalloutBox";
import { ArrowIcon } from "@/components/icons";
import { principles } from "@/data/principles";
import { methods } from "@/data/methods";
import { experiments } from "@/data/experiments";

export default function HomePage() {
  const featuredMethods = methods.slice(0, 3);
  const featuredExperiment = experiments.find((e) => e.status === "Completed") ?? experiments[0];

  return (
    <>
      <Hero
        eyebrow="An income literacy desk, not a course"
        title="The Verified Income Desk"
        subtitle="A sober record of which internet income methods actually work, for whom, and at what cost."
        lede="We test income models the way a briefing desk tests a claim: state the method plainly, run it, document what happened, and report the failure points alongside the wins. No screenshots presented as proof, no rented lifestyles, no guaranteed outcomes."
        ctas={[
          { label: "Browse Income Models", href: "/income-models" },
          { label: "Start Here", href: "/start-here", variant: "secondary" },
        ]}
        trustStatement="Every method is rated for difficulty, risk, and realistic time to results. Every claim is written to survive scrutiny, not to perform well in a feed. This is educational information, not financial advice — see our Disclaimer for the full scope."
      />

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why this exists"
            title="Most online income content is built to perform, not to inform."
            intro="The Verified Income Desk exists to separate income models from the marketing performance built around them — and to document, in public, what actually happens when ordinary methods are tested under ordinary conditions."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((principle, i) => (
              <PrincipleCard key={principle.title} principle={principle} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-grey-50/60 py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Income models library"
              title="Sixteen methods, rated the same way every time."
              intro="Each model is scored on difficulty, risk, and time before results, then broken down into who it fits, what it actually requires, and how it tends to fail."
            />
            <Link
              href="/income-models"
              className="flex items-center gap-1.5 whitespace-nowrap font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] text-navy no-underline hover:text-gold-dark"
            >
              View full library
              <ArrowIcon size={13} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMethods.map((method) => (
              <MethodCard key={method.slug} method={method} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Field experiments"
                title="We run the methods ourselves before describing them to you."
                intro="Every experiment is logged with its hypothesis, its real cost and time, what worked, what failed, and what we are testing next."
              />
              <Link
                href="/field-experiments"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] text-navy no-underline hover:text-gold-dark"
              >
                Read all field experiments
                <ArrowIcon size={13} />
              </Link>
            </div>
            <ExperimentCard experiment={featuredExperiment} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <CalloutBox type="reality-check" title="Before you commit to anything">
              <p>
                No income model on this desk is fast, passive, or guaranteed. Every one requires a real
                skill, a real offer, and real time before it produces money you can rely on.
              </p>
            </CalloutBox>
            <CalloutBox type="first-test">
              <p>
                Not sure where to begin? The Start Here pathway sorts methods by what you already have —
                a smartphone, a writing habit, a willingness to sell, or professional knowledge.
              </p>
              <Link href="/start-here" className="mt-2 inline-block font-medium text-navy hover:text-gold-dark">
                Find your pathway →
              </Link>
            </CalloutBox>
          </div>
        </Container>
      </section>
    </>
  );
}
