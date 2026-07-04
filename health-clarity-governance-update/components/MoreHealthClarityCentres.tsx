const centres = [
  ["Informed Consent Clarity", "/informed-consent-clarity", "Before signing, agreeing, refusing, delaying, or asking further questions."],
  ["Medical Law & Patient Rights", "/medical-law-patient-rights", "Rights, records, dignity, privacy, consent, and documentation issues."],
  ["Mental Health Clarity", "/mental-health-clarity", "Emotional distress, family support, stigma, and professional pathways."],
  ["Health Technology & Breakthroughs", "/health-technology-breakthroughs", "AI tools, diagnostics, devices, innovation, and breakthrough claims without hype."],
  ["Health Finance & Insurance", "/health-finance-insurance", "Bills, HMOs, insurance, receipts, estimates, and health cost questions."],
  ["Governance & Review", "/editorial-policy", "Editorial standards, review policies, disclaimers, contributors, and roadmap."],
];

export default function MoreHealthClarityCentres() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">More Health Clarity Centres</p>
          <h2 className="mt-4 font-serif text-3xl text-slate-950 md:text-5xl">A broader public health clarity institution.</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Explore major centres for patient understanding, medical communication, rights, finance, technology, mental health, and institutional trust.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {centres.map(([title, href, text]) => (
            <a key={title} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md">
              <h3 className="font-semibold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              <p className="mt-4 text-sm font-semibold text-sky-800">Explore →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
