import Link from "next/link";

const centres = [
  {
    title: "Informed Consent Clarity Centre",
    href: "/informed-consent-clarity",
    description: "Patient education before treatment conversations, consent forms, procedures, investigations, surgery, referrals, and emergency decisions.",
    label: "Patient communication",
  },
  {
    title: "Medical Law & Patient Rights",
    href: "/medical-law-patient-rights",
    description: "Public clarity on patient rights, dignity, records, consent, confidentiality, complaints, and medical-law issues.",
    label: "Rights & documentation",
  },
  {
    title: "Mental Health Clarity Centre",
    href: "/mental-health-clarity",
    description: "Understanding emotional distress, family support, stigma, care pathways, and when professional help may be needed.",
    label: "Mental wellbeing",
  },
  {
    title: "Health Technology & Breakthroughs",
    href: "/health-technology-breakthroughs",
    description: "Plain-language clarity on medical innovation, diagnostics, AI tools, devices, preventive health, and breakthrough claims.",
    label: "Innovation literacy",
  },
  {
    title: "Health Finance & Insurance",
    href: "/health-finance-insurance",
    description: "Understanding hospital bills, HMO approvals, insurance, receipts, estimates, deposits, and health finance documents.",
    label: "Finance & insurance",
  },
  {
    title: "Medical Records & Documentation",
    href: "/medical-records-documentation",
    description: "Guidance on preserving test results, prescriptions, discharge summaries, referral notes, receipts, and complaint records.",
    label: "Records culture",
  },
  {
    title: "Nigerian Health Context",
    href: "/nigerian-health-context",
    description: "A Nigerian-aware guide to health access, referrals, public/private facilities, family decisions, and health literacy gaps.",
    label: "Nigerian context",
  },
  {
    title: "For Institutions",
    href: "/for-institutions",
    description: "Support resources for hospitals, clinics, NGOs, churches, schools, patient groups, and public health programmes.",
    label: "Institutional support",
  },
];

const principles = [
  "Public education, not diagnosis",
  "Patient navigation, not emergency care",
  "Communication support, not replacement of professionals",
  "Documentation awareness, not legal advice",
  "Nigerian-aware health literacy",
  "Calm, protective, non-sensational language",
];

export default function CentresDirectoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-800">Health Clarity Institute · Centres directory</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Health Clarity Centres</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">A unified directory of public health understanding, patient navigation, medical communication, rights-awareness, and institutional health literacy centres for Nigerians.</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">Each centre helps patients, families, and institutions ask better questions before health decisions become confusing, expensive, delayed, disputed, or poorly documented.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Institutional boundary</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">Health Clarity Institute is not a hospital, clinic, diagnostic tool, therapy platform, insurance company, law firm, or emergency service. It provides public education and clarity only.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {centres.map((centre) => (
            <Link key={centre.href} href={centre.href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900 ring-1 ring-sky-100">{centre.label}</span>
              <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-sky-900">{centre.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{centre.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-sky-900">Open centre →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">How the centres stay safe</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight">The site can grow widely because its boundaries are clear.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            <strong>Disclaimer:</strong> These centres provide public health education and patient communication guidance. They do not diagnose, treat, prescribe, provide emergency medical instruction, sell insurance, provide legal advice, or replace qualified professionals.
          </div>
        </div>
      </section>
    </main>
  );
}
