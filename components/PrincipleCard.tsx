import * as React from "react";
import type { Principle } from "@/lib/types";

export function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  return (
    <div className="rounded-lg border border-line bg-white p-6 shadow-card">
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-gold-dark">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-serif text-[1.15rem] font-semibold text-navy">{principle.title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-charcoal-soft">{principle.body}</p>
    </div>
  );
}
