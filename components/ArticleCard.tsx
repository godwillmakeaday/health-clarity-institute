import * as React from "react";
import type { Article } from "@/lib/types";
import { LinkCard, Pill } from "./ui";
import { ArrowIcon } from "./icons";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <LinkCard href={`/briefings/${article.slug}`} className="flex h-full flex-col p-6">
      <Pill tone="gold">{article.category}</Pill>
      <h3 className="mt-3.5 font-serif text-[1.15rem] font-semibold leading-snug text-navy">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-charcoal-soft">{article.dek}</p>
      <div className="mt-4 flex items-center justify-between border-t border-lineSoft pt-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-charcoal-soft/80">
          {article.readTime}
        </span>
        <span className="flex items-center gap-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-navy">
          Read
          <ArrowIcon size={12} />
        </span>
      </div>
    </LinkCard>
  );
}
