import * as React from "react";
import Link from "next/link";
import type { IncomeMethod } from "@/lib/types";
import { DifficultyBadge, RiskBadge } from "./ui";

export function ComparisonTable({ methods }: { methods: IncomeMethod[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full min-w-[760px] border-collapse text-left text-[0.85rem]">
        <thead>
          <tr className="border-b border-line bg-grey-50">
            <th className="px-4 py-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.1em] text-charcoal-soft">
              Model
            </th>
            <th className="px-4 py-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.1em] text-charcoal-soft">
              Difficulty
            </th>
            <th className="px-4 py-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.1em] text-charcoal-soft">
              Risk
            </th>
            <th className="px-4 py-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.1em] text-charcoal-soft">
              Time before results
            </th>
            <th className="px-4 py-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.1em] text-charcoal-soft">
              Verdict
            </th>
          </tr>
        </thead>
        <tbody>
          {methods.map((m, i) => (
            <tr
              key={m.slug}
              className={`border-b border-lineSoft last:border-0 ${i % 2 === 1 ? "bg-grey-50/60" : "bg-white"}`}
            >
              <td className="px-4 py-3 font-medium text-navy">
                <Link href={`/income-models/${m.slug}`} className="no-underline hover:text-gold-dark">
                  {m.name}
                </Link>
              </td>
              <td className="px-4 py-3"><DifficultyBadge level={m.difficulty} /></td>
              <td className="px-4 py-3"><RiskBadge level={m.riskLevel} /></td>
              <td className="px-4 py-3 text-ink/75">{m.timeBeforeResults.split(".")[0]}.</td>
              <td className="px-4 py-3 text-ink/75">{m.verdict}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
