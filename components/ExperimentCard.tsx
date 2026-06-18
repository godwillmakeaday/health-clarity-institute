import * as React from "react";
import type { Experiment, ExperimentStatus } from "@/lib/types";
import { Card, Pill } from "./ui";

const statusTone: Record<ExperimentStatus, "trust" | "gold" | "neutral" | "navy"> = {
  Running: "gold",
  Completed: "trust",
  Paused: "neutral",
  Planned: "navy",
};

function List({ heading, items, empty }: { heading: string; items: string[]; empty?: string }) {
  return (
    <div>
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-charcoal-soft/80">{heading}</p>
      {items.length > 0 ? (
        <ul className="mt-2 space-y-1.5 text-[0.88rem] leading-relaxed text-ink/85">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-charcoal-soft/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-[0.88rem] italic text-charcoal-soft/70">{empty ?? "Not yet recorded."}</p>
      )}
    </div>
  );
}

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <Card className="p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-[1.25rem] font-semibold leading-snug text-navy">
          {experiment.title}
        </h3>
        <Pill tone={statusTone[experiment.status]}>{experiment.status}</Pill>
      </div>

      <p className="mt-3 border-l-2 border-gold/50 pl-3 text-[0.95rem] italic leading-relaxed text-charcoal-soft">
        Hypothesis: {experiment.hypothesis}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-y border-lineSoft py-3 text-[0.82rem] text-ink/80">
        <span><strong className="font-medium text-navy">Tools:</strong> {experiment.tools.join(", ")}</span>
        <span><strong className="font-medium text-navy">Cost:</strong> {experiment.cost}</span>
        <span><strong className="font-medium text-navy">Time:</strong> {experiment.timeRequired}</span>
      </div>

      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        <List heading="What worked" items={experiment.whatWorked} empty="Not yet running." />
        <List heading="What failed" items={experiment.whatFailed} empty="Not yet running." />
      </div>

      <div className="mt-5">
        <List heading="Lessons" items={experiment.lessons} />
      </div>

      <p className="mt-5 rounded border border-line bg-grey-50 px-4 py-3 text-[0.85rem] text-ink/80">
        <strong className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-gold-dark">Next test — </strong>{" "}
        {experiment.nextTest}
      </p>
    </Card>
  );
}
