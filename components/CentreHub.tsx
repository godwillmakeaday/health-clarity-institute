// components/CentreHub.tsx
import * as React from "react";
import Link from "next/link";
import type { Centre } from "@/data/centres";
import { getRelatedCentres } from "@/data/centres";
import { getGuides, isPublished } from "@/data/guides";
import { Container, Eyebrow } from "./ui";
import { GuideCard } from "./GuideCard";
import { PatientPathwayBlock } from "./PatientPathwayBlock";
import { NigerianContextBlock } from "./NigerianContextBlock";
import { GenericTrustPanel } from "./trust";
import { institutionalSupportModes } from "@/lib/institutional";
import {
  HeartIcon,
  DropletIcon,
  MaternalIcon,
  BrainIcon,
  ShieldIcon,
  PulseIcon,
  ClipboardIcon,
  AlertIcon,
  ArrowRightIcon,
  HospitalIcon,
  CheckIcon,
} from "./icons";

type IconProps = { size?: number; className?: string };
const iconByKey: Record<string, (p: IconProps) => React.JSX.Element> = {
  heart: HeartIcon,
  droplet: DropletIcon,
  maternal: MaternalIcon,
  kidney: DropletIcon,
  brain: BrainIcon,
  shield: ShieldIcon,
  pulse: PulseIcon,
};

function ListBlock({
  items,
  tone = "blue",
}: {
  items: string[];
  tone?: "blue" | "amber" | "green";
}) {
  const dot =
    tone === "amber"
      ? "bg-clinical-amber"
      : tone === "green"
      ? "bg-clinical-green"
      : "bg-clinical-blue";
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink/90">
          <span
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`}
            aria-hidden="true"
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function CentreHub({ centre }: { centre: Centre }) {
  const Icon = iconByKey[centre.iconSlug] ?? PulseIcon;
  const featured = getGuides(centre.featuredGuideSlugs);
  const anyPublished = featured.some((g) => isPublished(g));
  const related = getRelatedCentres(centre.relatedCentres);

  return (
    <>
      {/* ── Hero band */}
      <section className="border-b border-line bg-offwhite">
        <Container className="py-9 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-slate-soft">
              <li>
                <Link href="/" className="link-quiet">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/centres" className="link-quiet">
                  Specialist Centres
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy">{centre.title}</li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-clinical-blue/25 bg-clinical-blueSoft text-clinical-blueDark">
                  <Icon size={24} />
                </span>
                <Eyebrow muted>{centre.categoryLabel}</Eyebrow>
              </div>
              <h1 className="mt-5 max-w-2xl text-h1">{centre.title}</h1>
              <p className="mt-4 max-w-2xl text-[1.12rem] leading-relaxed text-slate">
                {centre.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <span className="text-slate-soft">
                  Educational information — not a diagnosis or treatment.
                </span>
                {centre.emergencyGuide && (
                  <Link
                    href={centre.emergencyGuide.href}
                    className="group inline-flex items-center gap-1.5 font-medium text-clinical-red no-underline"
                  >
                    <AlertIcon size={15} />
                    {centre.emergencyGuide.label}
                    <ArrowRightIcon
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:pt-1">
              <GenericTrustPanel />
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-12 py-10 md:space-y-16 md:py-16">
        {/* ── Featured guides */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <Eyebrow>Guides in this centre</Eyebrow>
              <h2 className="mt-3 text-h2">Featured guides</h2>
            </div>
            <Link
              href="/conditions"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clinical-blueDark no-underline hover:text-clinical-blue"
            >
              All conditions A–Z
              <ArrowRightIcon size={15} />
            </Link>
          </div>

          {!anyPublished && (
            <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-dashed border-clinical-amber/40 bg-clinical-amberSoft/50 px-5 py-4">
              <AlertIcon size={18} className="mt-0.5 shrink-0 text-clinical-amber" />
              <p className="text-[0.95rem] leading-relaxed text-ink/90">
                Priority guides are being prepared for medical review. The topics below show
                what this centre will cover.
              </p>
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>

        {/* ── Symptoms & warning signs */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-white p-6 shadow-card">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blueDark">
                <PulseIcon size={18} />
              </span>
              <h2 className="font-serif text-xl text-navy">Symptoms to understand</h2>
            </div>
            <p className="mt-2 text-sm text-slate">
              Common signs in this area. They have many causes — use them to ask better
              questions, not to self-diagnose.
            </p>
            <div className="mt-4">
              <ListBlock items={centre.symptoms} tone="blue" />
            </div>
          </div>

          <div className="rounded-lg border border-clinical-amber/30 bg-clinical-amberSoft/40 p-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clinical-amberSoft text-clinical-amber">
                <AlertIcon size={18} />
              </span>
              <h2 className="font-serif text-xl text-clinical-amber">Warning signs</h2>
            </div>
            <p className="mt-2 text-sm text-ink/80">
              Signs that warrant prompt or urgent care. If in doubt, seek qualified medical
              help.
            </p>
            <div className="mt-4">
              <ListBlock items={centre.warningSigns} tone="amber" />
            </div>
          </div>
        </section>

        {/* ── Tests & checks */}
        <section>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blueDark">
              <ClipboardIcon size={18} />
            </span>
            <h2 className="text-h2">Tests & checks</h2>
          </div>
          <p className="mt-3 max-w-prose text-[0.99rem] leading-relaxed text-slate">
            The checks a clinician may use in this area. Results are interpreted together by
            a qualified clinician — knowing what to expect makes a visit calmer and your
            questions clearer.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {centre.tests.map((t, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-line bg-white p-4 shadow-card"
              >
                <CheckIcon size={17} strokeWidth={2} className="mt-0.5 shrink-0 text-clinical-green" />
                <span className="text-[0.95rem] leading-relaxed text-ink/90">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Patient navigation */}
        <PatientPathwayBlock
          intro={centre.patientPathway.intro}
          steps={centre.patientPathway.steps}
          variant={centre.patientPathway.variant}
        />

        {/* ── Nigerian context */}
        <NigerianContextBlock items={centre.nigerianContext} />

        {/* ── Institutional angle */}
        <section className="overflow-hidden rounded-lg bg-navy">
          <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10 md:p-9">
            <div>
              <div className="flex items-center gap-2.5">
                <HospitalIcon size={20} className="text-clinical-blueSoft" />
                <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-clinical-blueSoft">
                  For institutions
                </p>
              </div>
              <p className="mt-3 max-w-xl text-[1.02rem] leading-relaxed text-white/85">
                {centre.institutionalAngle}
              </p>
              {centre.institutionalServices?.length ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {centre.institutionalServices.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.82rem] text-white/85"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/55">
                  How this centre can support an institution
                </p>
                <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                  {institutionalSupportModes.map((m) => (
                    <li key={m} className="flex gap-2 text-[0.85rem] leading-snug text-white/85">
                      <CheckIcon size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-clinical-greenSoft" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href="/for-hospitals-institutions"
              className="group inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy no-underline transition-transform hover:-translate-y-0.5"
            >
              Institutional services
              <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* ── Related centres */}
        {related.length > 0 && (
          <section>
            <Eyebrow>Related centres</Eyebrow>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((rc) => {
                const RIcon = iconByKey[rc.iconSlug] ?? PulseIcon;
                return (
                  <Link
                    key={rc.slug}
                    href={`/centres/${rc.slug}`}
                    className="group flex items-center gap-3 rounded-lg border border-line bg-white p-5 no-underline shadow-card transition-all hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-clinical-green/25 bg-clinical-greenSoft text-clinical-green">
                      <RIcon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-serif text-base text-navy group-hover:text-clinical-blue">
                        {rc.title}
                      </span>
                      <span className="block font-mono text-[0.6rem] uppercase tracking-[0.1em] text-slate-soft">
                        {rc.categoryLabel}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
