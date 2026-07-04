import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, Card, Pill } from "@/components/ui";
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  ClipboardIcon,
  HospitalIcon,
  ShieldIcon,
  StethoscopeIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Medical Law & Patient Rights Clarity",
  description:
    "Public health-law education for Nigerian patients and families on patient rights, consent, records, hospital disputes, documentation and complaint pathways.",
  alternates: { canonical: "/medical-law-patient-rights" },
};

const patientRights = [
  {
    title: "Clear explanation",
    body: "A patient should be helped to understand the health concern, proposed treatment, likely benefits, possible risks, costs where known, and available alternatives in language they can follow.",
  },
  {
    title: "Informed consent",
    body: "Before non-emergency treatment, especially surgery or invasive procedures, a patient should be given enough information to make a meaningful decision.",
  },
  {
    title: "Dignity and respectful care",
    body: "Illness does not remove a person’s dignity. Communication, examination, admission and discharge should be handled respectfully and without unnecessary humiliation.",
  },
  {
    title: "Privacy and confidentiality",
    body: "Health information should be handled carefully. Discussions, test results and records should not be casually exposed to people who do not need to know.",
  },
  {
    title: "Access to relevant records",
    body: "Patients and families may need hospital cards, test results, prescriptions, discharge notes, bills and referral letters to understand care or seek a second opinion.",
  },
  {
    title: "The right to ask questions",
    body: "Questions are not disrespect. A patient or family may ask what is being treated, what medicine is being given, what to watch for, and when to return.",
  },
];

const warningSigns = [
  {
    title: "Treatment without proper explanation",
    why: "It may become hard to know what was agreed, what risks were explained, and whether the patient understood the decision.",
    preserve: "Consent forms, prescriptions, bills, names of staff, appointment dates, and any messages discussing the treatment.",
    avoid: "Do not sign unclear documents under pressure without asking what they mean, unless urgent care makes delay unsafe.",
    contact: "The treating clinician, hospital management, a second medical professional, or legal counsel if rights or injury are disputed.",
    urgency: "Prompt clarification",
  },
  {
    title: "Sudden deterioration without clear communication",
    why: "A major change in condition may require urgent medical review, clearer family updates, and careful documentation of what happened.",
    preserve: "Time of deterioration, ward or unit, test results, medication list, nursing notes if released, and names of attending staff where available.",
    avoid: "Do not rely only on verbal explanations where records may later be needed. Ask for written summaries where appropriate.",
    contact: "Senior medical staff, hospital management, a second medical professional, and legal counsel where serious harm is alleged.",
    urgency: "Often urgent",
  },
  {
    title: "Refusal to release medical records",
    why: "Records may be needed for continuity of care, referral, second opinion, insurance, family understanding, or later review.",
    preserve: "Written requests, replies from the hospital, payment receipts, discharge documents, referral notes, and proof of identity or authority to request records.",
    avoid: "Do not seize records, threaten staff, or create a confrontation. Make a calm written request and keep copies.",
    contact: "Records department, hospital administrator, patient relations desk, professional regulator, or legal counsel where access is disputed.",
    urgency: "Documentation priority",
  },
  {
    title: "Missing test results or prescriptions",
    why: "Missing documents may affect diagnosis, treatment decisions, referral, billing disputes, and reconstruction of the care timeline.",
    preserve: "Lab receipts, scan booking slips, pharmacy receipts, medicine packs, photos of labels, and any result printouts or WhatsApp messages.",
    avoid: "Do not guess the result or continue medicines without understanding what was prescribed and why.",
    contact: "Laboratory, pharmacy, treating clinician, records unit, or a second medical professional where treatment must continue.",
    urgency: "Prompt follow-up",
  },
  {
    title: "Unexpected death or injury after treatment",
    why: "Serious outcomes may require medical explanation, record preservation, family meetings, and professional legal or regulatory guidance.",
    preserve: "Admission records, treatment notes if released, death certificate where applicable, bills, medication list, consent forms, referral letters, and witness names.",
    avoid: "Do not make public accusations before facts are reviewed. Do not allow key documents to disappear without taking lawful copies where available.",
    contact: "Hospital management, senior clinician, medical regulator where appropriate, and legal counsel for situation-specific advice.",
    urgency: "High urgency",
  },
  {
    title: "Altered bills or unclear charges",
    why: "Billing confusion can become a dispute about what care was given, what was agreed, and whether a patient is being unfairly charged.",
    preserve: "Original bills, revised bills, receipts, payment transfers, admission forms, treatment plan, and names of staff who explained charges.",
    avoid: "Do not pay disputed charges without requesting a breakdown where the amount is unclear, unless payment is needed to avoid immediate harm.",
    contact: "Billing unit, hospital administrator, patient relations desk, insurer or sponsor, and legal counsel for serious detention or rights concerns.",
    urgency: "Resolve early",
  },
  {
    title: "Pressure to abandon a complaint",
    why: "Pressure may prevent proper review of what happened and may discourage a family from preserving documents or seeking professional guidance.",
    preserve: "Messages, call logs, meeting notes, names of people present, complaint letters, responses, records and receipts.",
    avoid: "Do not sign a settlement, apology letter, waiver or withdrawal under pressure without understanding the effect.",
    contact: "A trusted senior hospital officer, professional regulator, mediator where appropriate, or legal counsel before signing anything consequential.",
    urgency: "Seek advice before signing",
  },
];

const consentPoints = [
  {
    title: "Informed consent",
    body: "Consent is strongest when the patient understands the proposed treatment, the reason for it, material risks, alternatives and what may happen if treatment is refused or delayed.",
  },
  {
    title: "Surgery consent",
    body: "For surgery, the form should not be treated as mere paperwork. The patient should understand the procedure, anaesthesia, risks, expected recovery and follow-up.",
  },
  {
    title: "Emergency treatment",
    body: "In emergencies, clinicians may need to act quickly to protect life or prevent serious harm. Records should still show the reason urgent action was taken.",
  },
  {
    title: "Family involvement",
    body: "Families often help with decisions and payment, but the patient’s dignity, privacy and voice should remain central wherever the patient can participate.",
  },
  {
    title: "Refusal of treatment",
    body: "When a patient refuses treatment, the risks and alternatives should be explained and documented carefully, especially where refusal may be dangerous.",
  },
  {
    title: "Documentation of consent",
    body: "Dates, signatures, names of witnesses, procedure details and the explanation given may become important if the decision is later questioned.",
  },
];

const evidenceChecklist = [
  "Hospital card",
  "Test results",
  "Scans",
  "Prescriptions",
  "Referral letters",
  "Discharge summaries",
  "Bills and receipts",
  "Messages with hospital staff",
  "Photos only where appropriate and lawful",
  "Names of attending staff where available",
];

const hospitalDisputes = [
  {
    title: "Refusal to release records",
    body: "A calm written request may help identify what is available, who can receive it, and what steps the hospital requires before release.",
  },
  {
    title: "Unclear billing",
    body: "Ask for an itemised breakdown. Keep both old and new bills so changes can be understood rather than argued from memory.",
  },
  {
    title: "Alleged mistreatment",
    body: "Record dates, names, locations and what was said or done. Avoid abusive confrontation, which may distract from the underlying concern.",
  },
  {
    title: "Delayed treatment",
    body: "Where delay may have caused harm, preserve the timeline: arrival, triage, payment request, test request, review time and referral time.",
  },
  {
    title: "Detention over unpaid bills",
    body: "This may raise legal and ethical concerns. Preserve bills, communications and attempts to resolve payment, then seek professional advice promptly.",
  },
  {
    title: "Confidentiality breaches",
    body: "Save evidence of disclosure, identify who received the information, and avoid spreading the same private information further.",
  },
  {
    title: "Abandonment of patient",
    body: "If a patient is left without clear care, referral or discharge instructions, ask for senior review and written guidance immediately.",
  },
];

const complaintPathway = [
  "Speak calmly to hospital management or the patient relations desk where available.",
  "Request relevant medical records, bills, discharge summaries or referral letters in writing.",
  "Preserve documents, receipts, messages, names, dates and a clear timeline of events.",
  "Seek a medical second opinion where treatment, diagnosis or continuing care is unclear.",
  "Seek legal advice where rights, injury, death, detention, confidentiality or records are disputed.",
  "Contact professional or regulatory bodies where necessary and where the facts support escalation.",
];

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-slate-soft">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-slate">{children}</dd>
    </div>
  );
}

export default function MedicalLawPatientRightsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="border-b border-line bg-offwhite">
        <Container className="py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blueDark">
                <ShieldIcon size={18} />
              </span>
              <Eyebrow>Patient rights · records · consent · hospital responsibility</Eyebrow>
            </div>
            <h1 className="mt-5 text-h1">Medical Law &amp; Patient Rights Clarity</h1>
            <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-slate">
              Health problems sometimes become legal problems when consent, records,
              dignity, negligence, billing, confidentiality, or hospital responsibility are
              unclear.
            </p>
            <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-slate">
              This page helps ordinary people understand when a health situation may also
              require careful documentation, patient-rights awareness, hospital escalation,
              second opinion, regulatory attention or legal advice.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#warning-signs"
                className="group inline-flex items-center gap-1.5 rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700"
              >
                Review warning signs
                <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#records"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
              >
                Evidence checklist
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Patient rights */}
      <Container className="py-12 md:py-16">
        <SectionHeading
          eyebrow="Patient rights"
          title="Rights are practical safeguards, not arguments for conflict."
          intro="In simple terms, patient rights help people understand care, participate in decisions, preserve dignity, and keep the records needed for safe follow-up."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {patientRights.map((right) => (
            <Card key={right.title} className="p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded border border-clinical-green/25 bg-clinical-greenSoft text-clinical-green">
                <CheckIcon size={18} />
              </span>
              <h2 className="mt-4 font-serif text-lg text-navy">{right.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{right.body}</p>
            </Card>
          ))}
        </div>
      </Container>

      {/* 3. Medical Negligence Warning Signs */}
      <section id="warning-signs" className="border-y border-line bg-offwhite py-12 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="Medical negligence warning signs"
            title="Situations where delay, missing records or careless speech may harm clarity."
            intro="These signs do not automatically prove wrongdoing. They mean the situation may need calm documentation, professional review and timely advice."
          />
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {warningSigns.map((sign) => (
              <Card key={sign.title} className="overflow-hidden">
                <div className="border-l-4 border-clinical-amber bg-white p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-clinical-amberSoft text-clinical-amber">
                        <AlertIcon size={18} />
                      </span>
                      <h2 className="font-serif text-lg text-navy">{sign.title}</h2>
                    </div>
                    <Pill tone="neutral">{sign.urgency}</Pill>
                  </div>

                  <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    <DetailRow label="Why it matters">{sign.why}</DetailRow>
                    <DetailRow label="What to preserve">{sign.preserve}</DetailRow>
                    <DetailRow label="What not to do">{sign.avoid}</DetailRow>
                    <DetailRow label="Who may need contact">{sign.contact}</DetailRow>
                  </dl>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Consent & Treatment Decisions */}
      <Container className="py-12 md:py-16">
        <SectionHeading
          eyebrow="Consent & treatment decisions"
          title="Consent is a conversation before it is a form."
          intro="The clearer the treatment decision, the safer the patient, the stronger the record, and the lower the chance of avoidable dispute."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consentPoints.map((point) => (
            <Card key={point.title} className="p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded border border-clinical-blue/25 bg-clinical-blueSoft text-clinical-blueDark">
                <ClipboardIcon size={18} />
              </span>
              <h2 className="mt-4 font-serif text-lg text-navy">{point.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{point.body}</p>
            </Card>
          ))}
        </div>
      </Container>

      {/* 5. Medical Records & Evidence */}
      <section id="records" className="border-y border-line bg-offwhite py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Medical records & evidence"
                title="Preserve the quiet documents before they disappear."
                intro="Medical-law clarity often depends less on emotion and more on records: dates, tests, prescriptions, bills, messages and written summaries."
              />
              <p className="mt-5 text-sm leading-relaxed text-slate">
                Where possible, request records calmly and in writing. Keep copies in one
                folder. Do not alter documents. Do not publish private medical information
                online.
              </p>
            </div>
            <Card className="p-6 md:p-7">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded bg-white text-clinical-blueDark shadow-card">
                  <ClipboardIcon size={18} />
                </span>
                <h2 className="font-serif text-xl text-navy">Evidence checklist</h2>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {evidenceChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/90">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clinical-greenSoft text-clinical-green">
                      <CheckIcon size={12} strokeWidth={2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* 6. Hospital Disputes */}
      <Container className="py-12 md:py-16">
        <SectionHeading
          eyebrow="Hospital disputes"
          title="Common disputes should be handled with order, evidence and restraint."
          intro="A dispute may be emotional, but the response should be structured: identify the issue, preserve records, escalate calmly and seek professional advice where necessary."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hospitalDisputes.map((item) => (
            <Card key={item.title} className="p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-offwhite text-navy">
                <HospitalIcon size={18} />
              </span>
              <h2 className="mt-4 font-serif text-lg text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>

      {/* 7. Complaint Pathways */}
      <section className="border-y border-line bg-offwhite py-12 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="Complaint pathways"
            title="A simple pathway before escalation becomes disorder."
            intro="The aim is not to attack hospitals or doctors. The aim is to protect the patient, clarify the record and ensure the right people review the concern."
          />
          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            {complaintPathway.map((step, i) => (
              <div key={step} className="flex gap-4 rounded-lg border border-line bg-white p-5 shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-sm font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.98rem] leading-relaxed text-ink/90">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Disclaimer */}
      <Container className="py-12 md:py-16">
        <div className="rounded-lg border border-clinical-amber/30 bg-clinical-amberSoft p-6 md:p-8">
          <div className="flex items-start gap-3">
            <AlertIcon size={22} className="mt-0.5 shrink-0 text-clinical-amber" />
            <div>
              <h2 className="font-serif text-xl text-navy">Public education disclaimer</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/90">
                This page provides public health-law education only. It is not medical
                advice, diagnosis, or formal legal advice. People should consult qualified
                medical professionals, lawyers, hospitals, or regulators for their specific
                situation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/disclaimer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
                >
                  Read site disclaimer
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700"
                >
                  Contact Health Clarity Institute
                  <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="border-t border-line bg-white py-12">
        <Container>
          <div className="grid gap-4 rounded-lg border border-line bg-offwhite p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded border border-clinical-blue/25 bg-clinical-blueSoft text-clinical-blueDark">
              <StethoscopeIcon size={20} />
            </span>
            <div>
              <h2 className="font-serif text-xl text-navy">Still a health clarity platform</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                This section adds a rights and documentation layer to patient education. It
                does not turn the website into a law firm or replace medical consultation.
              </p>
            </div>
            <Link
              href="/health-library"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700"
            >
              Return to library
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
