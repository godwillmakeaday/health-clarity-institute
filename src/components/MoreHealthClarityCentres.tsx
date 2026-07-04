import Link from "next/link";

const centres = [
  { title: "Informed Consent Clarity Centre", href: "/informed-consent-clarity", description: "Prepare for treatment explanations, consent forms, procedures, and family decisions." },
  { title: "Medical Law & Patient Rights", href: "/medical-law-patient-rights", description: "Understand rights, records, consent, dignity, confidentiality, and complaints." },
  { title: "Mental Health Clarity Centre", href: "/mental-health-clarity", description: "Understand emotional distress, family support, stigma, and care pathways." },
  { title: "Health Technology & Breakthroughs", href: "/health-technology-breakthroughs", description: "Understand medical innovation, AI tools, devices, diagnostics, and breakthrough claims." },
  { title: "Health Finance & Insurance", href: "/health-finance-insurance", description: "Understand hospital bills, HMO approvals, insurance, receipts, and health finance questions." },
  { title: "Nigerian Health Context", href: "/nigerian-health-context", description: "Understand care access, family decisions, referrals, and health literacy in Nigeria." },
];

export default function MoreHealthClarityCentres() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">More health clarity centres</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Major centres for patient understanding and institutional health literacy.</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">Use these centres to explore the non-emergency questions that often surround health decisions.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {centres.map((centre) => (
          <Link key={centre.href} href={centre.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-950 group-hover:text-sky-900">{centre.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{centre.description}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-sky-900">Open centre →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
