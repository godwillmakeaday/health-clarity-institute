// components/MedicalTrustPanel.tsx
import * as React from "react";
import Link from "next/link";
import type { MedicalReviewer, ReviewStatus } from "@/lib/types";
import { CheckIcon } from "./icons";
import {
  ArticleByline,
  StatusBadge,
  LastReviewedBadge,
  EmergencyNotice,
} from "./trust";

interface MedicalTrustPanelProps {
  reviewer: MedicalReviewer;
  status: ReviewStatus;
  /** ISO date string. */
  lastReviewed: string;
  /** Link for the emergency notice — usually "#urgent" or "/disclaimer#emergency". */
  emergencyHref?: string;
  /** Anchor to the sources section. */
  sourcesHref?: string;
  className?: string;
}

const assurances = [
  "Evidence-informed and written in plain language",
  "Intended for review by qualified health professionals",
  "Not a substitute for professional medical advice",
];

/** Compact, visible trust panel for the top of every health guide. Establishes
 *  authorship, review status, review date, sources and emergency guidance. */
export function MedicalTrustPanel({
  reviewer,
  status,
  lastReviewed,
  emergencyHref = "/disclaimer#emergency",
  sourcesHref = "#sources",
  className = "",
}: MedicalTrustPanelProps) {
  return (
    <div className={`rounded-lg border border-line bg-white p-5 shadow-card ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <ArticleByline reviewer={reviewer} />
        <StatusBadge status={status} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <LastReviewedBadge date={lastReviewed} />
        <Link
          href={sourcesHref}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-slate no-underline hover:text-clinical-blue"
        >
          <span className="text-slate-soft">Sources</span>
          <span className="text-navy">listed below</span>
        </Link>
      </div>

      <ul className="mt-4 space-y-2 border-t border-lineSoft pt-3">
        {assurances.map((a) => (
          <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
            <CheckIcon size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-clinical-green" />
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <EmergencyNotice href={emergencyHref} className="mt-4 w-full" />
    </div>
  );
}
