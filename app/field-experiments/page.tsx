import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { ExperimentCard } from "@/components/ExperimentCard";
import { experiments } from "@/data/experiments";

export const metadata: Metadata = {
  title: "Field Experiments",
  description:
    "Logged experiments testing income methods under real conditions — hypothesis, cost, time, what worked, what failed, and what we're testing next.",
};

export default function FieldExperimentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Field experiments"
        title="We test methods before we describe them to you."
        lede="Every experiment below states its hypothesis in advance, logs its real cost and time, and reports what worked and what failed without rounding either toward a better story. Some are complete, some are still running, and at least one has not started yet — that status is reported honestly too."
      />
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {experiments.map((experiment) => (
              <ExperimentCard key={experiment.slug} experiment={experiment} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
