import * as React from "react";
import Link from "next/link";
import type { DifficultyLevel, RiskLevel, Verdict } from "@/lib/types";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container-base ${className}`}>{children}</div>;
}

export function Eyebrow({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return <p className={muted ? "eyebrow-muted" : "eyebrow"}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-prose ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-h2">{title}</h2>
      {intro && <p className="mt-3 text-[1.05rem] leading-relaxed text-charcoal-soft">{intro}</p>}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-line bg-white shadow-card transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function LinkCard({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group block rounded-lg border border-line bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-cardHover no-underline ${className}`}
    >
      {children}
    </Link>
  );
}

export function Pill({
  children,
  tone = "navy",
}: {
  children: React.ReactNode;
  tone?: "navy" | "gold" | "trust" | "warn" | "neutral";
}) {
  const tones: Record<string, string> = {
    navy: "bg-navy/[0.07] text-navy",
    gold: "bg-gold-soft text-gold-dark",
    trust: "bg-trust-soft text-trust",
    warn: "bg-warn-soft text-warn",
    neutral: "bg-grey-100 text-charcoal-soft",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.66rem] font-medium uppercase tracking-[0.08em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

const difficultyTone: Record<DifficultyLevel, "trust" | "gold" | "navy"> = {
  Beginner: "trust",
  Intermediate: "gold",
  Advanced: "navy",
};

export function DifficultyBadge({ level }: { level: DifficultyLevel }) {
  return <Pill tone={difficultyTone[level]}>{level}</Pill>;
}

const riskTone: Record<RiskLevel, "trust" | "gold" | "warn"> = {
  Low: "trust",
  Moderate: "gold",
  High: "warn",
};

export function RiskBadge({ level }: { level: RiskLevel }) {
  return <Pill tone={riskTone[level]}>{level} risk</Pill>;
}

const verdictTone: Record<Verdict, "trust" | "gold" | "navy" | "warn"> = {
  "Worth testing": "trust",
  "Requires skill first": "gold",
  "Long-term asset": "navy",
  "High-risk": "warn",
  "Not beginner-friendly": "warn",
  "Avoid unless experienced": "warn",
};

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  return <Pill tone={verdictTone[verdict]}>{verdict}</Pill>;
}

export function ScoreBadge({
  label,
  value,
  tone = "navy",
}: {
  label: string;
  value: string;
  tone?: "navy" | "gold" | "trust" | "warn" | "neutral";
}) {
  return (
    <div className="flex flex-col gap-1 border-l border-line pl-3 first:border-l-0 first:pl-0">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-charcoal-soft">{label}</span>
      <Pill tone={tone}>{value}</Pill>
    </div>
  );
}
