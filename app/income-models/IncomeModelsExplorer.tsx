"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { IncomeMethod, FilterTag } from "@/lib/types";
import { filterDefs } from "@/lib/site";
import { FilterBar } from "@/components/FilterBar";
import { MethodCard } from "@/components/MethodCard";
import { ComparisonTable } from "@/components/ComparisonTable";

export function IncomeModelsExplorer({ methods }: { methods: IncomeMethod[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [view, setView] = React.useState<"cards" | "table">("cards");

  const active = React.useMemo<FilterTag[]>(() => {
    const raw = searchParams.get("tags");
    if (!raw) return [];
    return raw.split(",").filter(Boolean) as FilterTag[];
  }, [searchParams]);

  const setTags = (tags: FilterTag[]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tags.length > 0) {
      params.set("tags", tags.join(","));
    } else {
      params.delete("tags");
    }
    router.replace(`/income-models${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  };

  const onToggle = (tag: FilterTag) => {
    setTags(active.includes(tag) ? active.filter((t) => t !== tag) : [...active, tag]);
  };

  const filtered = active.length === 0
    ? methods
    : methods.filter((m) => active.every((tag) => m.tags.includes(tag)));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <FilterBar filters={filterDefs} active={active} onToggle={onToggle} onClear={() => setTags([])} />
        <div className="flex shrink-0 items-center gap-1 rounded-full border border-line bg-white p-1">
          <button
            type="button"
            onClick={() => setView("cards")}
            className={`rounded-full px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.06em] ${
              view === "cards" ? "bg-navy text-white" : "text-charcoal-soft"
            }`}
          >
            Cards
          </button>
          <button
            type="button"
            onClick={() => setView("table")}
            className={`rounded-full px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.06em] ${
              view === "table" ? "bg-navy text-white" : "text-charcoal-soft"
            }`}
          >
            Compare table
          </button>
        </div>
      </div>

      <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-charcoal-soft/80">
        Showing {filtered.length} of {methods.length} methods
      </p>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-line bg-grey-50 px-6 py-12 text-center text-charcoal-soft">
            No methods match every selected filter. Try removing one.
          </div>
        ) : view === "cards" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((method) => (
              <MethodCard key={method.slug} method={method} />
            ))}
          </div>
        ) : (
          <ComparisonTable methods={filtered} />
        )}
      </div>
    </div>
  );
}
