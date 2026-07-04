import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { EmergencyNotice, DisclaimerBlock } from "@/components/trust";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Health Clarity Institute provides educational health information only. It does not diagnose, prescribe, or replace a clinician. In an emergency, go to the nearest hospital.",
  alternates: { canonical: "/disclaimer" },
};

const points: { heading: string; body: string }[] = [
  {
    heading: "We do not provide a diagnosis",
    body: "Our guides explain conditions, symptoms, tests and prevention in general terms. They cannot tell you what is wrong with you. Only a qualified clinician who can assess you in person can diagnose your situation.",
  },
  {
    heading: "We do not prescribe treatment",
    body: "Where we describe how conditions are managed, this is for understanding only. It is not a prescription or a treatment plan, and it should never be used to start, stop or change any medicine. Decisions about treatment, including prescription medicines, belong with a qualified clinician who knows your circumstances.",
  },
  {
    heading: "We do not replace a clinician",
    body: "This platform is a starting point for understanding, not a substitute for professional care. It does not replace doctors, nurses, pharmacists, hospitals, laboratories or emergency services.",
  },
  {
    heading: "Consult a qualified health professional",
    body: "For diagnosis, treatment, and advice specific to you — including during pregnancy, for children, and for anyone with existing conditions — consult a qualified health professional. If you are unsure, it is always reasonable to seek care.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Please read"
        title="Disclaimer"
        lede="Health Clarity Institute exists to help you understand your health. It is educational, and there are important things it cannot do."
      />
      <Container className="py-12 md:py-16">
        <div className="max-w-prose">
          {/* Emergency first — conservative and practical */}
          <section id="emergency" className="scroll-mt-32">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-clinical-red">
              In an emergency
            </p>
            <div className="mt-3">
              <EmergencyNotice variant="block" />
            </div>
            <p className="prose-clinical mt-4">
              If you or someone else has emergency warning signs — such as severe chest pain,
              difficulty breathing, heavy bleeding, fits, sudden weakness or one-sided symptoms,
              or thoughts of self-harm — do not use this website to decide what to do. Go to the
              nearest hospital or emergency care provider, or call your local emergency number.
            </p>
          </section>

          <div className="mt-10 space-y-10">
            {points.map((p, i) => (
              <section key={p.heading} className="border-t border-line pt-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-clinical-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl text-navy">{p.heading}</h2>
                </div>
                <p className="prose-clinical mt-3">{p.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <DisclaimerBlock />
          </div>

          <div className="mt-6 rounded-lg border border-line bg-offwhite p-6 text-sm leading-relaxed text-slate">
            See how we work in our{" "}
            <Link href="/editorial-policy" className="link-quiet">Editorial Policy</Link>,{" "}
            <Link href="/medical-review-policy" className="link-quiet">Medical Review Policy</Link>, and{" "}
            <Link href="/sources-methodology" className="link-quiet">Sources &amp; Methodology</Link>.
          </div>
        </div>
      </Container>
    </>
  );
}
