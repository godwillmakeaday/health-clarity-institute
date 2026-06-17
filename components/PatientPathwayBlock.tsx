// components/PatientPathwayBlock.tsx
import * as React from "react";
import Link from "next/link";
import type { PatientPathwayStep } from "@/data/centres";
import { ArrowRightIcon } from "./icons";

interface PatientPathwayBlockProps {
  intro?: string;
  steps: PatientPathwayStep[];
  title?: string;
  /** "steps" = numbered sequence (default); "cards" = entry-point card grid. */
  variant?: "steps" | "cards";
  className?: string;
}

/** Renders a calm "what to do / where to start" pathway. Educational navigation
 *  only — it never diagnoses or prescribes. */
export function PatientPathwayBlock({
  intro,
  steps,
  title = "Patient navigation",
  variant = "steps",
  className = "",
}: PatientPathwayBlockProps) {
  if (!steps?.length) return null;

  return (
    <section className={className}>
      <h2 className="text-h2">{title}</h2>
      {intro && (
        <p className="mt-3 max-w-prose text-[0.99rem] leading-relaxed text-slate">
          {intro}
        </p>
      )}

      {variant === "cards" ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {steps.map((step, i) => {
            const inner = (
              <>
                <span className="block font-serif text-base text-navy group-hover:text-clinical-blue">
                  {step.title}
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-slate">
                  {step.description}
                </span>
                {step.href && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-clinical-blueDark">
                    Continue
                    <ArrowRightIcon
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                )}
              </>
            );

            const cls =
              "group block rounded-lg border border-line bg-white p-5 shadow-card transition-all";

            return step.href ? (
              <Link
                key={i}
                href={step.href}
                className={`${cls} no-underline hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover`}
              >
                {inner}
              </Link>
            ) : (
              <div key={i} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      ) : (
        <ol className="mt-5 space-y-3">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-lg border border-line bg-white p-5 shadow-card"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clinical-blueSoft font-mono text-sm font-semibold text-clinical-blueDark">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-base text-navy">{step.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate">
                  {step.description}
                </span>
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
