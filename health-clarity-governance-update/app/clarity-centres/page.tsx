const centreGroups = [
  {
    title: "Patient understanding centres",
    items: [
      ["Informed Consent Clarity", "/informed-consent-clarity", "Prepare for treatment conversations, consent forms, procedures, and emergency decisions."],
      ["Medical Law & Patient Rights", "/medical-law-patient-rights", "Understand rights, records, dignity, privacy, consent, and documentation issues."],
      ["Medical Records & Documentation", "#", "A future centre for test results, prescriptions, referrals, discharge summaries, and records culture."],
      ["Hospital Navigation", "#", "A future centre for admission, referrals, emergency care, discharge, and patient pathways."],
    ],
  },
  {
    title: "Special public health clarity centres",
    items: [
      ["Mental Health Clarity", "/mental-health-clarity", "Understand emotional distress, family support, stigma, care pathways, and when professional help may be needed."],
      ["Health Technology & Breakthroughs", "/health-technology-breakthroughs", "Understand medical innovation, AI health tools, diagnostics, devices, and breakthrough claims without hype."],
      ["Health Finance & Insurance", "/health-finance-insurance", "Understand bills, HMOs, insurance, estimates, receipts, payment questions, and health cost documentation."],
      ["Nigerian Health Context", "/nigerian-health-context", "Health realities shaped by access, family decisions, cost, records, institutions, and public/private care."],
    ],
  },
  {
    title: "Governance and trust",
    items: [
      ["Editorial Policy", "/editorial-policy", "How Health Clarity Institute creates public health clarity content."],
      ["Medical Review Policy", "/medical-review-policy", "How sensitive content should be reviewed and labelled."],
      ["Public Education Disclaimer", "/disclaimer", "What this platform does and does not provide."],
      ["Contributors & Reviewers", "/contributors", "How professionals, institutions, and contributors can support the platform responsibly."],
      ["For Partners", "/for-partners", "Public-interest partnership pathways for hospitals, NGOs, schools, HMOs, and health programmes."],
      ["Roadmap", "/roadmap", "Where the platform is going as a Nigerian and African health clarity institution."],
    ],
  },
];

export const metadata = {
  title: "Health Clarity Centres | Health Clarity Institute",
  description: "A central directory of Health Clarity Institute centres, governance pages, and institutional trust resources.",
};

export default function ClarityCentresPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Institutional map</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 md:text-6xl">Health Clarity Centres</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            A central map of the platform’s public health clarity centres, patient understanding resources, and governance pages.
          </p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
            Health Clarity Institute is not only a health library. It is a patient navigation, public health literacy, medical communication, rights-awareness, finance, technology, and institutional clarity platform for Nigeria and Africa.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8">
        {centreGroups.map((group) => (
          <section key={group.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-2xl text-slate-950 md:text-3xl">{group.title}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map(([title, href, text]) => (
                <a key={title} href={href} className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-sky-200 hover:bg-white hover:shadow-sm">
                  <h3 className="font-semibold text-slate-950 group-hover:text-sky-800">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  <p className="mt-4 text-sm font-semibold text-sky-800">Open centre →</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
