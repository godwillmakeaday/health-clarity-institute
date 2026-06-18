// components/GuideCard.tsx
import * as React from "react";
import Link from "next/link";
import type { Guide, GuideUrgency, GuideStatus } from "@/data/guides";
import { isPublished } from "@/data/guides";
import { ArrowRightIcon } from "./icons";

const urgencyStyles: Record<GuideUrgency, string> = {
  Routine: "bg-clinical-greenSoft text-clinical-green",
  Soon: "bg-clinical-blueSoft text-clinical-blueDark",
  Urgent: "bg-clinical-amberSoft text-clinical-amber",
  Emergency: "bg-clinical-redSoft text-clinical-red",
};

const statusStyles: Record<GuideStatus, string> = {
  Published: "text-clinical-green",
  "In Review": "text-clinical-amber",
  Draft: "text-slate-soft",
};

function UrgencyTag({ level }: { level: GuideUrgency }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] ${urgencyStyles[level]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {level}
    </span>
  );
}

/** A single guide as a card. Published guides link out; others are shown
 *  honestly as being prepared for medical review, never as dead links. */
export function GuideCard({ guide }: { guide: Guide }) {
  const live = isPublished(guide);

  const inner = (
    <>
      <div className="flex items-center justify-between gap-3">
        <UrgencyTag level={guide.urgency} />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-slate-soft">
          {guide.category}
        </span>
      </div>

      <h3
        className={`mt-3 font-serif text-lg ${
          live ? "text-navy group-hover:text-clinical-blue" : "text-navy/80"
        }`}
      >
        {guide.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate">{guide.summary}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        {live ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-clinical-blueDark">
            Read the guide
            <ArrowRightIcon
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </span>
        ) : (
          <span className={`text-xs font-medium ${statusStyles[guide.status]}`}>
            {guide.status === "In Review" ? "In review" : "In development"} — being prepared
            for medical review
          </span>
        )}
      </div>
    </>
  );

  const base =
    "block rounded-lg border border-line bg-white p-5 shadow-card transition-all";

  if (live) {
    return (
      <Link
        href={guide.link}
        className={`group ${base} no-underline hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={`${base} border-dashed bg-offwhite/60`} aria-disabled="true">
      {inner}
    </div>
  );
}
