"use client";

import * as React from "react";
import type { Article, ArticleCategory } from "@/lib/types";
import { ArticleCard } from "@/components/ArticleCard";

export function BriefingsExplorer({
  articles,
  categories,
}: {
  articles: Article[];
  categories: ArticleCategory[];
}) {
  const [active, setActive] = React.useState<ArticleCategory | "All">("All");

  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.06em] transition-colors ${
            active === "All"
              ? "border-navy bg-navy text-white"
              : "border-line bg-white text-charcoal-soft hover:border-gold/50 hover:text-navy"
          }`}
        >
          All categories
        </button>
        {categories.map((category) => {
          const count = articles.filter((a) => a.category === category).length;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.06em] transition-colors ${
                active === category
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-charcoal-soft hover:border-gold/50 hover:text-navy"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-line bg-grey-50 px-6 py-12 text-center text-charcoal-soft">
            No briefings published in this category yet. Check back as the desk's research continues.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
