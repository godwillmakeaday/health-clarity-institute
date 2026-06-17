import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import {
  HospitalIcon,
  StethoscopeIcon,
  BookIcon,
  ClipboardIcon,
  CheckIcon,
  ShieldIcon,
  PulseIcon,
  MaternalIcon,
  PillIcon,
  AlertIcon,
  ArrowRightIcon,
  type IconProps,
} from "@/components/icons";
import { InstitutionalEnquiryForm } from "@/components/InstitutionalEnquiryForm";
import { site } from "@/lib/site";
import {
  institutionalProblems,
  institutionalOfferings,
  clinicModels,
  servicePackages,
  institutionalUseCases,
  institutionalCompliance,
} from "@/lib/institutional";

export const metadata: Metadata = {
  title: "For Hospitals, Clinics & Health Institutions",
  description:
    "Patient education systems, specialist clinic pages, preventive health campaigns and premium digital infrastructure for Nigerian health institutions — from Health Clarity Institute Nigeria.",
  alternates: { canonical: "/for-hospitals-institutions" },
};

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  hospital: HospitalIcon,
  stethoscope: StethoscopeIcon,
  book: BookIcon,
  clipboard: ClipboardIcon,
  check: CheckIcon,
  shield: ShieldIcon,
  pulse: PulseIcon,
  maternal: MaternalIcon,
  pill: PillIcon,
};

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-sm font-semibold text-clinical-blue">{n}</span>
      <Eyebrow>{children}</Eyebrow>
    </div>
  );
}

export default function ForHospitalsInstitutionsPage() {
  return (
    <>
      {/* ── 1. Hero */}
      <section className="border-b border-line bg-offwhite">
        <Container className="py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blue">
                <HospitalIcon size={18} />
              </span>
              <Eyebrow>For institutions</Eyebrow>
            </div>
            <h1 className="mt-5 text-h1">
              For Hospitals, Clinics &amp; Health Institutions
            </h1>
            <p className="mt-5 text-[1.15rem] leading-relaxed text-slate">
              Patient education systems, specialist clinic pages, preventive health campaigns,
              and premium digital infrastructure for Nigerian health institutions.
            </p>
            <p className="mt-4 max-w-2xl text-[1.0rem] leading-relaxed text-slate">
              We are a health communication and institutional clarity partner — not a generic web
              studio. We help institutions present their care with credibility, and help patients
              leave with understanding.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#enquiry"
                className="group inline-flex items-center gap-1.5 rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700"
              >
                Request an institutional consultation
                <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
              >
                View service areas
              </Link>
              <Link
                href="/health-library"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
              >
                Explore health library model
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. The problem */}
      <Container className="py-12 md:py-16">
        <SectionLabel n="01">The problem</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-serif text-2xl text-navy md:text-3xl">
          Good care is too often let down by unclear communication.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {institutionalProblems.map((p) => (
            <div key={p.title} className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h3 className="font-serif text-lg text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ── 3. What we help build */}
      <section id="services" className="scroll-mt-24 border-y border-line bg-offwhite">
        <Container className="py-12 md:py-16">
          <SectionLabel n="02">What we help build</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-2xl text-navy md:text-3xl">
            Structured systems, not scattered posts.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {institutionalOfferings.map((s) => {
              const Icon = iconMap[s.iconSlug] ?? CheckIcon;
              return (
                <div key={s.title} className="rounded-lg border border-line bg-white p-6 shadow-card">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-clinical-blue/20 bg-clinical-blueSoft text-clinical-blueDark">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3.5 font-serif text-lg text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{s.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 4. Specialist centre model */}
      <Container className="py-12 md:py-16">
        <SectionLabel n="03">Specialist centre model</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-serif text-2xl text-navy md:text-3xl">
          Organise your services around clear clinical centres.
        </h2>
        <p className="mt-4 max-w-2xl text-[1.0rem] leading-relaxed text-slate">
          The same centre model that organises our health library can structure a hospital&rsquo;s
          services — so patients, referrers and staff always know where to look. Each centre below
          is a working example you can explore.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clinicModels.map((c) => (
            <Link
              key={c.clinic}
              href={`/centres/${c.centreSlug}`}
              className="group flex flex-col rounded-lg border border-line bg-white p-6 no-underline shadow-card transition-all hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover"
            >
              <h3 className="font-serif text-lg text-navy group-hover:text-clinical-blue">
                {c.clinic}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{c.body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-clinical-blueDark">
                View the centre
                <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>

      {/* ── 5. Patient education packages */}
      <section className="border-y border-line bg-offwhite">
        <Container className="py-12 md:py-16">
          <SectionLabel n="04">Patient education packages</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-2xl text-navy md:text-3xl">
            A clear path, whatever your starting point.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePackages.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-lg border border-line bg-white p-6 shadow-card"
              >
                <h3 className="font-serif text-lg text-navy">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.forWhom}</p>
                <ul className="mt-4 space-y-2 border-t border-lineSoft pt-4">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
                      <CheckIcon size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-clinical-green" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-soft">
            Packages are starting points, shaped to your institution after a consultation. We scope
            honestly and recommend only what serves your patients.
          </p>
        </Container>
      </section>

      {/* ── 6. Use cases */}
      <Container className="py-12 md:py-16">
        <SectionLabel n="05">Who we work with</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-serif text-2xl text-navy md:text-3xl">
          Built for the range of Nigerian health institutions.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {institutionalUseCases.map((u) => {
            const Icon = iconMap[u.iconSlug] ?? HospitalIcon;
            return (
              <div key={u.audience} className="rounded-lg border border-line bg-white p-5 shadow-card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blueDark">
                  <Icon size={18} />
                </span>
                <h3 className="mt-3 font-serif text-base text-navy">{u.audience}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{u.body}</p>
              </div>
            );
          })}
        </div>
      </Container>

      {/* ── 7. Trust & compliance */}
      <section className="border-y border-line bg-offwhite">
        <Container className="py-12 md:py-16">
          <SectionLabel n="06">Trust &amp; compliance</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-2xl text-navy md:text-3xl">
            Health communication held to a clinical standard.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {institutionalCompliance.map((c) => (
              <div key={c.title} className="rounded-lg border border-line bg-white p-6 shadow-card">
                <ShieldIcon size={20} className="text-clinical-green" />
                <h3 className="mt-3 font-serif text-lg text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate">
            See our{" "}
            <Link href="/editorial-policy" className="link-quiet font-medium">editorial</Link>,{" "}
            <Link href="/medical-review-policy" className="link-quiet font-medium">medical review</Link>{" "}
            and{" "}
            <Link href="/sources-methodology" className="link-quiet font-medium">sources</Link>{" "}
            policies for the standards behind everything we produce.
          </p>
        </Container>
      </section>

      {/* ── 8. Contact / enquiry */}
      <section id="enquiry" className="scroll-mt-24">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <SectionLabel n="07">Institutional enquiry</SectionLabel>
              <h2 className="mt-4 font-serif text-2xl text-navy md:text-3xl">
                Start an institutional consultation.
              </h2>
              <p className="mt-4 text-[1.0rem] leading-relaxed text-slate">
                Tell us about your institution and what you would like to build. We respond with a
                considered, honest assessment — and recommend only what genuinely serves your
                patients.
              </p>

              <div className="mt-6 rounded-lg border border-clinical-red/30 bg-clinical-redSoft p-5">
                <div className="flex items-center gap-2.5">
                  <AlertIcon size={18} className="text-clinical-red" />
                  <h3 className="font-serif text-base text-clinical-red">Not for emergencies</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/90">
                  This form is for institutional partnerships only. {site.emergencyNote}
                </p>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-slate-soft">
                    Email
                  </dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${site.email}`} className="font-medium text-navy">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-slate-soft">
                    Response time
                  </dt>
                  <dd className="mt-0.5 text-navy">
                    We aim to reply to institutional enquiries within a few working days.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg border border-line bg-white p-6 shadow-card md:p-8">
              <InstitutionalEnquiryForm email={site.email} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
