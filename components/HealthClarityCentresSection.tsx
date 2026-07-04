import Link from "next/link";

const clarityCentres = [
  {
    title: "Conditions A–Z",
    href: "/conditions",
    category: "Health library",
    description: "Plain-language health condition guides for patients and families.",
  },
  {
    title: "Symptoms A–Z",
    href: "/symptoms",
    category: "Health library",
    description: "A careful guide to symptoms, urgency signals, and preparation before consultation.",
  },
  {
    title: "Specialist Centres",
    href: "/centres",
    category: "Care areas",
    description: "Condition clusters organised by area of care, specialist concern, and patient navigation.",
  },
  {
    title: "Medical Law & Patient Rights",
    href: "/medical-law-patient-rights",
    category: "Rights & records",
    description: "Consent, privacy, dignity, records, complaints, and patient-rights clarity.",
  },
  {
    title: "Informed Consent Clarity Centre",
    href: "/informed-consent-clarity",
    category: "Medical decisions",
    description: "Understanding explanations before signing, agreeing, refusing, delaying, or asking further questions.",
  },
  {
    title: "Mental Health Clarity Centre",
    href: "/mental-health-clarity",
    category: "Family support",
    description: "Emotional distress, stigma, support pathways, and when professional help may be needed.",
  },
  {
    title: "Health Technology & Breakthroughs",
    href: "/health-technology-breakthroughs",
    category: "Innovation",
    description: "AI tools, diagnostics, devices, telemedicine, longevity claims, and breakthrough announcements without hype.",
  },
  {
    title: "Health Finance & Insurance",
    href: "/health-finance-insurance",
    category: "Costs & cover",
    description: "Hospital bills, insurance, HMO approvals, deposits, receipts, and financial documentation around care.",
  },
  {
    title: "Nigerian Health Context",
    href: "/nigerian-health-context",
    category: "Local context",
    description: "Health clarity shaped by Nigerian realities: access, family decisions, cost, trust, and documentation.",
  },
  {
    title: "For Institutions",
    href: "/for-institutions",
    category: "Institutional support",
    description: "Public health literacy support for hospitals, clinics, schools, churches, NGOs, and health programmes.",
  },
];

export function HealthClarityCentresSection() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#1f6c99]">
              Organised public health clarity
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0b3551] sm:text-5xl">
              Health Clarity Centres
            </h2>
          </div>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Health problems are not only medical. They can involve symptoms, records, consent,
            family decisions, hospital processes, mental wellbeing, cost, insurance, technology,
            rights, and institutional pathways. Health Clarity Institute organises these issues into
            public education centres.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clarityCentres.map((centre) => (
            <Link
              key={centre.title}
              href={centre.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1f6c99]/40 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {centre.category}
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0b3551] group-hover:text-[#1f6c99]">
                {centre.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{centre.description}</p>
              <p className="mt-5 text-sm font-semibold text-[#0b3551]">Explore <span aria-hidden="true">→</span></p>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/clarity-centres"
            className="inline-flex rounded-full bg-[#0b3551] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#092c43]"
          >
            View all Health Clarity Centres
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HealthClarityCentresSection;
