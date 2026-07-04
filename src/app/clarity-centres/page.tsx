import Link from "next/link";

const centreGroups = [
  {
    title: "Patient Understanding",
    description:
      "Core health library areas that help patients and families understand symptoms, conditions, care pathways, records, and hospital processes.",
    centres: [
      {
        title: "Conditions A–Z",
        href: "/conditions",
        status: "Published",
        description:
          "Plain-language explanations of common conditions, warning signs, questions to ask, and when care may be needed.",
      },
      {
        title: "Symptoms A–Z",
        href: "/symptoms",
        status: "Published",
        description:
          "A public guide to symptoms, possible meanings, urgency signals, and patient preparation before consultation.",
      },
      {
        title: "Specialist Centres",
        href: "/centres",
        status: "Published",
        description:
          "Organised health centres for clusters of related guides, specialist concerns, and patient navigation.",
      },
      {
        title: "Medical Records & Documentation",
        href: "/medical-records-documentation",
        status: "Coming Soon",
        description:
          "Guidance on prescriptions, test results, referrals, discharge summaries, receipts, and health documents to preserve.",
      },
      {
        title: "Hospital Navigation",
        href: "/hospital-navigation",
        status: "Coming Soon",
        description:
          "How patients and families can understand admission, referral, consultation, emergency care, and discharge pathways.",
      },
    ],
  },
  {
    title: "Patient Rights & Decisions",
    description:
      "Centres for understanding medical communication, consent, dignity, privacy, records, complaints, and rights-related health concerns.",
    centres: [
      {
        title: "Medical Law & Patient Rights",
        href: "/medical-law-patient-rights",
        status: "Published",
        description:
          "Public education on consent, privacy, dignity, medical records, complaints, negligence warning signs, and patient rights.",
      },
      {
        title: "Informed Consent Clarity Centre",
        href: "/informed-consent-clarity",
        status: "Published",
        description:
          "Helping patients and families understand medical explanations before they sign, agree, refuse, delay, or ask further questions.",
      },
      {
        title: "Public Education Disclaimer",
        href: "/disclaimer",
        status: "Published",
        description:
          "Clear boundaries explaining that the platform does not diagnose, treat, provide emergency instruction, or replace professionals.",
      },
    ],
  },
  {
    title: "Family & Community Support",
    description:
      "Public-facing health literacy for families, communities, schools, churches, and people making decisions under pressure.",
    centres: [
      {
        title: "Mental Health Clarity Centre",
        href: "/mental-health-clarity",
        status: "Published",
        description:
          "Understanding emotional distress, stigma, family support, care pathways, and when professional help may be needed.",
      },
      {
        title: "Nigerian Health Context",
        href: "/nigerian-health-context",
        status: "Published",
        description:
          "Health clarity shaped by Nigerian realities: cost, access, public/private hospitals, family decisions, records, and trust.",
      },
      {
        title: "Family Decision Support",
        href: "/family-decision-support",
        status: "Coming Soon",
        description:
          "A calm guide for families making health decisions during emergencies, admissions, consent conversations, or referrals.",
      },
      {
        title: "Community Health Literacy",
        href: "/community-health-literacy",
        status: "Coming Soon",
        description:
          "Resources for churches, schools, estates, associations, NGOs, and community leaders supporting health understanding.",
      },
    ],
  },
  {
    title: "Systems, Finance & Innovation",
    description:
      "Centres for the non-clinical systems that shape health decisions: technology, bills, insurance, institutional pathways, and partnerships.",
    centres: [
      {
        title: "Health Finance & Insurance",
        href: "/health-finance-insurance",
        status: "Published",
        description:
          "Understanding hospital bills, HMO approvals, insurance questions, estimates, receipts, deposits, and health cost documentation.",
      },
      {
        title: "Health Technology & Breakthroughs",
        href: "/health-technology-breakthroughs",
        status: "Published",
        description:
          "Explaining health technology, diagnostics, AI tools, medical devices, longevity claims, and breakthrough announcements without hype.",
      },
      {
        title: "For Institutions",
        href: "/for-institutions",
        status: "Published",
        description:
          "Support pathways for hospitals, clinics, schools, churches, NGOs, public health programmes, and institutional health literacy.",
      },
      {
        title: "For Partners",
        href: "/for-partners",
        status: "Published",
        description:
          "Partnership pathways for reviewers, contributors, advisory partners, sponsors, programme partners, and institutional collaborators.",
      },
    ],
  },
  {
    title: "Governance & Trust",
    description:
      "The standards that help the platform remain careful, transparent, educational, and professionally responsible.",
    centres: [
      {
        title: "Editorial Policy",
        href: "/editorial-policy",
        status: "Published",
        description:
          "How Health Clarity Institute creates plain-language, Nigerian-aware, evidence-conscious public health education.",
      },
      {
        title: "Medical Review Policy",
        href: "/medical-review-policy",
        status: "Published",
        description:
          "How health-sensitive content should be reviewed, labelled, updated, and kept within public education boundaries.",
      },
      {
        title: "Contributors & Reviewers",
        href: "/contributors",
        status: "Published",
        description:
          "How doctors, nurses, lawyers, public health professionals, writers, technologists, and institutions can contribute responsibly.",
      },
      {
        title: "Roadmap",
        href: "/roadmap",
        status: "Published",
        description:
          "What is available now, what is under development, what needs review, and where the platform is going next.",
      },
    ],
  },
];

const statusStyles: Record<string, string> = {
  Published: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Expanding: "border-blue-200 bg-blue-50 text-blue-800",
  "Review Needed": "border-amber-200 bg-amber-50 text-amber-800",
  "Coming Soon": "border-slate-200 bg-slate-50 text-slate-700",
};

export default function ClarityCentresPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#1f6c99]">
            Institutional map
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] text-[#0b3551] sm:text-6xl lg:text-7xl">
                Health Clarity Centres
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                A structured map of Health Clarity Institute’s public education centres for patients,
                families, communities, and institutions.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Public education boundary
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Health Clarity Institute helps people understand health issues, records, consent,
                rights, finance, technology, and care pathways. It does not diagnose, treat, provide
                emergency instruction, or replace qualified professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Public education",
            "Nigerian context",
            "Professional review pathway",
          ].map((label) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f6c99]">{label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Built to support responsible health understanding without replacing consultation,
                diagnosis, treatment, legal advice, emergency care, insurance advice, or professional judgment.
              </p>
            </div>
          ))}
        </div>
      </section>

      {centreGroups.map((group) => (
        <section key={group.title} className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1f6c99]">
                {group.title}
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">{group.description}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.centres.map((centre) => (
                <Link
                  key={centre.title}
                  href={centre.href}
                  className="group flex min-h-[220px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1f6c99]/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Centre
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        statusStyles[centre.status] || statusStyles.Published
                      }`}
                    >
                      {centre.status}
                    </span>
                  </div>
                  <h2 className="mt-5 font-serif text-2xl leading-tight text-[#0b3551] group-hover:text-[#1f6c99]">
                    {centre.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{centre.description}</p>
                  <div className="mt-6 text-sm font-semibold text-[#0b3551]">
                    Open centre <span aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-slate-200 bg-[#0b3551] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-100">
                Authority through clarity
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Not a hospital. Not a substitute. A public clarity layer.
              </h2>
            </div>
            <p className="text-base leading-8 text-blue-50">
              The platform is designed to help patients, families, institutions, and communities ask
              better questions, preserve better records, understand safer pathways, and approach health
              decisions with more clarity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
