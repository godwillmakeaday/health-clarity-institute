"use client";

import * as React from "react";
import type { FilterDef, FilterTag } from "@/lib/types";

export function FilterBar({
  filters,
  active,
  onToggle,
  onClear,
}: {
  filters: FilterDef[];
  active: FilterTag[];
  onToggle: (tag: FilterTag) => void;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((f) => {
        const isActive = active.includes(f.tag);
        return (
          <button
            key={f.tag}
            type="button"
            onClick={() => onToggle(f.tag)}
            aria-pressed={isActive}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.06em] transition-colors ${
              isActive
                ? "border-navy bg-navy text-white"
                : "border-line bg-white text-charcoal-soft hover:border-gold/50 hover:text-navy"
            }`}
          >
            {f.label}
          </button>
        );
      })}
      {active.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.06em] text-charcoal-soft underline hover:text-warn"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
