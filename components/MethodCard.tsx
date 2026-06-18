import * as React from "react";
import type { IncomeMethod } from "@/lib/types";
import { LinkCard, DifficultyBadge, RiskBadge, Pill } from "./ui";
import { ArrowIcon } from "./icons";
import { filterDefs } from "@/lib/site";

export function MethodCard({ method }: { method: IncomeMethod }) {
  return (
    <LinkCard href={`/income-models/${method.slug}`} className="flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-2">
        <DifficultyBadge level={method.difficulty} />
        <RiskBadge level={method.riskLevel} />
      </div>
      <h3 className="mt-3.5 font-serif text-[1.2rem] font-semibold leading-snug text-navy">
        {method.name}
      </h3>
      <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-charcoal-soft">{method.summary}</p>

      <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-lineSoft pt-4 text-[0.8rem]">
        <div>
          <dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-charcoal-soft/80">Time to results</dt>
          <dd className="mt-1 text-ink/80">{method.timeBeforeResults.split(";")[0].split(".")[0]}</dd>
        </div>
        <div>
          <dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-charcoal-soft/80">First step</dt>
          <dd className="mt-1 line-clamp-2 text-ink/80">{method.firstRealisticStep}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {method.tags.slice(0, 3).map((tag) => {
          const def = filterDefs.find((f) => f.tag === tag);
          return (
            <Pill key={tag} tone="neutral">
              {def?.label ?? tag}
            </Pill>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-1.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.1em] text-navy">
        Read the full method
        <ArrowIcon size={13} className="transition-transform duration-150 group-hover:translate-x-0.5" />
      </div>
    </LinkCard>
  );
}
