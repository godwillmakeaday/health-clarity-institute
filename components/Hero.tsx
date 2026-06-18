import * as React from "react";
import Link from "next/link";
import { Container, Eyebrow } from "./ui";

interface HeroCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  lede,
  ctas,
  trustStatement,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  lede?: string;
  ctas?: HeroCta[];
  trustStatement?: string;
}) {
  return (
    <section className="border-b border-line bg-offwhite">
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 text-display">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-[1.2rem] font-medium leading-snug text-charcoal">{subtitle}</p>
          )}
          {lede && <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-soft">{lede}</p>}
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "secondary"
                      ? "rounded border border-navy px-5 py-2.5 text-[0.9rem] font-medium text-navy no-underline transition-colors hover:bg-navy/5"
                      : "rounded border border-navy bg-navy px-5 py-2.5 text-[0.9rem] font-medium text-white no-underline transition-colors hover:bg-navy-700"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}
          {trustStatement && (
            <p className="mt-8 border-t border-lineSoft pt-5 text-[0.82rem] leading-relaxed text-charcoal-soft/90">
              {trustStatement}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
