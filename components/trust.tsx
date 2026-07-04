// components/trust.tsx
// Medical review & trust architecture — small, composable, institutional pieces.
// Designed to read as credible and editorially responsible without feeling heavy
// or bureaucratic: quiet borders, small badges, clear labels, mobile-first.
import * as React from "react";
import Link from "next/link";
import type { MedicalReviewer, ReviewStatus, Source } from "@/lib/types";
import { CheckIcon, AlertIcon, ShieldIcon, BookIcon, ClipboardIcon } from "./icons";

export const EDITORIAL_TEAM = "Health Clarity Editorial Team";

export function formatReviewDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ─────────────────────────────────────────────────────────────────────────
 * StatusBadge — Draft | In Review | Reviewed | Needs Update
 * ────────────────────────────────────────────────────────────────────────*/
const statusStyles: Record<ReviewStatus, { box: string; dot: string }> = {
  Reviewed: {
    box: "border-clinical-green/30 bg-clinical-greenSoft text-clinical-green",
    dot: "bg-clinical-green",
  },
  "In Review": {
    box: "border-clinical-amber/30 bg-clinical-amberSoft text-clinical-amber",
    dot: "bg-clinical-amber",
  },
  Draft: {
    box: "border-line bg-offwhite text-slate",
    dot: "bg-slate-soft",
  },
  "Needs Update": {
    box: "border-clinical-red/30 bg-clinical-redSoft text-clinical-red",
    dot: "bg-clinical-red",
  },
};

export function StatusBadge({
  status,
  className = "",
}: {
  status: ReviewStatus;
  className?: string;
}) {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] ${s.box} ${className}`}
    >
      {status === "Reviewed" ? (
        <CheckIcon size={11} strokeWidth={2} />
      ) : (
        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      )}
      {status}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * LastReviewedBadge — quiet date pill
 * ────────────────────────────────────────────────────────────────────────*/
export function LastReviewedBadge({
  date,
  className = "",
}: {
  date: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-slate ${className}`}
    >
      <span className="text-slate-soft">Last reviewed</span>
      <span className="text-navy">{formatReviewDate(date)}</span>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ArticleByline — Educational guide · written by · medically reviewed by
 * ────────────────────────────────────────────────────────────────────────*/
export function ArticleByline({
  reviewer,
  className = "",
}: {
  reviewer: MedicalReviewer;
  className?: string;
}) {
  return (
    <div className={`text-sm leading-relaxed ${className}`}>
      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
        Educational guide
      </p>
      <p className="mt-1.5 text-slate">
        Written by{" "}
        <span className="font-medium text-navy">{EDITORIAL_TEAM}</span>
      </p>
      <p className="text-slate">
        Medically reviewed by{" "}
        <span className="font-medium text-navy">
          {reviewer.name} · {reviewer.credentials}
        </span>
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * EmergencyNotice — conservative, practical emergency guidance/link
 * ────────────────────────────────────────────────────────────────────────*/
export function EmergencyNotice({
  href = "/disclaimer#emergency",
  variant = "inline",
  className = "",
}: {
  href?: string;
  variant?: "inline" | "block";
  className?: string;
}) {
  if (variant === "block") {
    return (
      <aside
        className={`rounded-lg border border-clinical-red/30 bg-clinical-redSoft p-5 ${className}`}
        role="note"
        aria-label="Emergency guidance"
      >
        <div className="flex items-start gap-2.5">
          <AlertIcon size={18} className="mt-0.5 shrink-0 text-clinical-red" />
          <p className="text-sm leading-relaxed text-clinical-red">
            <span className="font-semibold">In an emergency,</span> do not wait. Go to the
            nearest hospital or emergency care provider, or call your local emergency number.
            This page cannot diagnose or treat.
          </p>
        </div>
      </aside>
    );
  }
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 rounded-md bg-clinical-redSoft px-3 py-2 text-xs font-medium leading-relaxed text-clinical-red no-underline ${className}`}
    >
      <AlertIcon size={14} className="shrink-0" />
      <span>In an emergency, go to the nearest hospital — read emergency guidance</span>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * SourceList — references at the foot of a guide
 * ────────────────────────────────────────────────────────────────────────*/
export function SourceList({ sources }: { sources: Source[] }) {
  if (!sources?.length) return null;
  return (
    <ol className="space-y-3">
      {sources.map((s, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate">
          <span className="font-mono text-[0.72rem] text-slate-soft">{i + 1}.</span>
          <span>
            <span className="font-medium text-navy">{s.label}.</span> {s.publisher}
            {s.year ? `, ${s.year}` : ""}.
            {s.url && (
              <>
                {" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words"
                >
                  {s.url}
                </a>
              </>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ReviewerCard — who reviewed this, status, and review dates
 * ────────────────────────────────────────────────────────────────────────*/
export function ReviewerCard({
  reviewer,
  status,
  lastReviewed,
  nextReview,
  className = "",
}: {
  reviewer: MedicalReviewer;
  status: ReviewStatus;
  lastReviewed: string;
  nextReview: string;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-line bg-white p-5 shadow-card ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldIcon size={16} className="text-clinical-blueDark" />
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
            Medical reviewer
          </p>
        </div>
        <StatusBadge status={status} />
      </div>

      <p className="mt-3 font-serif text-lg text-navy">{reviewer.name}</p>
      <p className="text-sm text-slate">
        {reviewer.credentials} · {reviewer.specialty}
        {reviewer.institution ? ` · ${reviewer.institution}` : ""}
      </p>

      <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-lineSoft pt-3 font-mono text-[0.68rem]">
        <div>
          <dt className="text-slate-soft">Last reviewed</dt>
          <dd className="mt-0.5 text-navy">{formatReviewDate(lastReviewed)}</dd>
        </div>
        <div>
          <dt className="text-slate-soft">Next review</dt>
          <dd className="mt-0.5 text-navy">{formatReviewDate(nextReview)}</dd>
        </div>
      </dl>

      <p className="mt-3 font-mono text-[0.64rem] leading-relaxed text-slate-soft">
        Reviewer name and review dates on this page are placeholders pending clinical sign-off.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * EditorialNotice — editorial note + update policy
 * ────────────────────────────────────────────────────────────────────────*/
export function EditorialNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg border border-line bg-offwhite p-5 text-sm leading-relaxed text-slate ${className}`}
    >
      <div className="flex items-center gap-2">
        <ClipboardIcon size={16} className="text-clinical-blueDark" />
        <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
          Editorial note
        </p>
      </div>
      <p className="mt-3">
        This guide is written and maintained by the{" "}
        <span className="font-medium text-navy">{EDITORIAL_TEAM}</span> in plain language, and is
        intended to be reviewed by qualified health professionals before final publication. We
        include Nigerian context where it is relevant.
      </p>
      <p className="mt-2">
        <span className="font-medium text-navy">Update policy:</span> guides are reviewed
        periodically and updated as guidance and evidence change. The review status and dates above
        show where each guide stands.
      </p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.66rem] uppercase tracking-[0.06em]">
        <Link href="/editorial-policy" className="link-quiet">
          Editorial policy
        </Link>
        <Link href="/medical-review-policy" className="link-quiet">
          Medical review policy
        </Link>
        <Link href="/sources-methodology" className="link-quiet">
          Sources & methodology
        </Link>
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * DisclaimerBlock — educational disclaimer
 * ────────────────────────────────────────────────────────────────────────*/
export function DisclaimerBlock({
  withReviewerNote = false,
  className = "",
}: {
  withReviewerNote?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-line bg-white p-5 text-sm leading-relaxed text-slate ${className}`}
    >
      <p>
        <span className="font-medium text-navy">Educational information only.</span> This guide is
        written to help you understand your health. It does not provide a diagnosis, does not
        prescribe treatment, and is not a substitute for assessment by a qualified health
        professional. Always seek personal medical advice for your own situation, and get urgent
        care in an emergency.{" "}
        <Link href="/disclaimer" className="link-quiet font-medium">
          Read the full disclaimer
        </Link>
        .
      </p>
      {withReviewerNote && (
        <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-slate-soft">
          Reviewer and review dates shown on this page are placeholders pending clinical sign-off.
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ArticleTrustFooter — composes the foot-of-guide trust block
 * Sources · Medical reviewer · Editorial note · Update policy · Disclaimer
 * ────────────────────────────────────────────────────────────────────────*/
export function SourcesHeading() {
  return (
    <div className="flex items-center gap-2">
      <BookIcon size={18} className="text-clinical-blueDark" />
      <h2 className="text-h2">Sources</h2>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * GenericTrustPanel — for hubs and listing pages that are not a single guide
 * ────────────────────────────────────────────────────────────────────────*/
export function GenericTrustPanel({ className = "" }: { className?: string }) {
  const points = [
    "Educational information, written in plain language",
    "Guides are reviewed by qualified health professionals",
    "Sources listed on each published guide",
    "Not a substitute for professional medical advice",
  ];
  return (
    <div className={`rounded-lg border border-line bg-white p-5 shadow-card ${className}`}>
      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
        How to use this information
      </p>
      <ul className="mt-3 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
            <CheckIcon size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-clinical-green" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <EmergencyNotice className="mt-4 w-full" />
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.64rem] uppercase tracking-[0.06em]">
        <Link href="/medical-review-policy" className="link-quiet">
          Review policy
        </Link>
        <Link href="/sources-methodology" className="link-quiet">
          Sources &amp; methodology
        </Link>
      </p>
    </div>
  );
}
