import Link from "next/link";

const resourceCategories = [
  {
    title: "Patient Understanding Guides",
    description: "Plain-language guides that help patients and families understand health topics before and after care.",
    status: "Expanding",
    href: "/clarity-centres",
  },
  {
    title: "Informed Consent Checklists",
    description: "Questions and preparation guides for treatment conversations, consent forms, procedures, and referrals.",
    status: "Published",
    href: "/informed-consent-clarity",
  },
  {
    title: "Patient Rights & Medical Law",
    description: "Public education on dignity, privacy, records, consent, complaints, and patient responsibility.",
    status: "Published",
    href: "/medical-law-patient-rights",
  },
  {
    title: "Health Finance & Insurance",
    description: "Guides on hospital bills, HMO processes, receipts, estimates, and questions before payment.",
    status: "Published",
    href: "/health-finance-insurance",
  },
  {
    title: "Mental Health Literacy",
    description: "Careful, non-diagnostic education on emotional distress, stigma, support pathways, and family response.",
    status: "Published",
    href: "/mental-health-clarity",
  },
  {
    title: "Health Technology & Breakthroughs",
    description: "Public clarity on medical innovation, AI health tools, devices, diagnostics, and breakthrough claims.",
    status: "Published",
    href: "/health-technology-breakthroughs",
  },
  {
    title: "Hospital Navigation",
    description: "Guidance for understanding admission, referral, discharge, records, and hospital communication processes.",
    status: "Coming Soon",
    href: "/clarity-centres",
  },
  {
    title: "Medical Records & Documentation",
    description: "Resources on preserving prescriptions, test results, referral letters, receipts, and discharge summaries.",
    status: "Expanding",
    href: "/informed-consent-clarity",
  },
  {
    title: "Public Health Literacy",
    description: "Institutional explanation of why health understanding matters for patients, families, and communities.",
    status: "Published",
    href: "/public-health-literacy",
  },
  {
    title: "Institutional Partnership Resources",
    description: "Briefs and pathways for hospitals, government, NGOs, schools, churches, HMOs, and community programmes.",
    status: "Published",
    href: "/for-partners",
  },
  {
    title: "Community Health Programmes",
    description: "Materials and programme ideas for responsible health clarity in families, schools, churches, and communities.",
    status: "Published",
    href: "/community-health-programmes",
  },
  {
    title: "Governance & Review Policies",
    description: "How the platform protects public trust through editorial standards, disclaimers, and review pathways.",
    status: "Published",
    href: "/editorial-policy",
  },
];

const featuredResources = [
  {
    title: "Health Clarity Institute Concept Brief",
    description: "A concise institutional overview of Health Clarity Institute, its public value, centres, governance principles, and partnership possibilities.",
    href: "/partner-brief",
    status: "Published",
  },
  {
    title: "Public Health Literacy Overview",
    description: "Why health clarity matters for patients, families, communities, hospitals, and public health institutions.",
    href: "/public-health-literacy",
    status: "Published",
  },
  {
    title: "For Partners",
    description: "A public-interest partnership pathway for institutions, reviewers, sponsors, and programme collaborators.",
    href: "/for-partners",
    status: "Published",
  },
  {
    title: "Government Health Partnerships",
    description: "How public health agencies and programmes can use health literacy resources responsibly.",
    href: "/government-health-partnerships",
    status: "Published",
  },
  {
    title: "Hospital Partnerships",
    description: "How hospitals and clinics can use patient education, consent explainers, and documentation resources.",
    href: "/hospital-partnerships",
    status: "Published",
  },
  {
    title: "Community Health Programmes",
    description: "How families, schools, churches, workplaces, and community groups can use health clarity resources.",
    href: "/community-health-programmes",
    status: "Published",
  },
  {
    title: "Editorial Policy",
    description: "The principles that guide clear, careful, public-facing health education on the platform.",
    href: "/editorial-policy",
    status: "Published",
  },
  {
    title: "Medical Review Policy",
    description: "How health-sensitive content should be reviewed, labelled, updated, and corrected responsibly.",
    href: "/medical-review-policy",
    status: "Published",
  },
  {
    title: "Public Education Disclaimer",
    description: "The platform boundaries: education only, not diagnosis, treatment, emergency care, legal advice, or insurance advice.",
    href: "/disclaimer",
    status: "Published",
  },
];

const downloadableResources = [
  {
    title: "Health Clarity Institute Concept Brief PDF",
    description: "A printable brief for institutional conversations with hospitals, public health officials, NGOs, HMOs, and community leaders.",
    audience: "Partners, reviewers, institutions",
  },
  {
    title: "Patient Questions Before Treatment Checklist",
    description: "A simple checklist to help patients and families prepare for treatment conversations.",
    audience: "Patients and families",
  },
  {
    title: "Informed Consent Preparation Checklist",
    description: "A printable guide for understanding what should be explained before signing or agreeing to treatment.",
    audience: "Patients, families, hospitals",
  },
  {
    title: "Hospital Visit Documentation Checklist",
    description: "A guide to help families preserve prescriptions, receipts, test results, referral letters, and discharge summaries.",
    audience: "Patients and caregivers",
  },
  {
    title: "Health Finance & Insurance Questions Guide",
    description: "Questions to ask about hospital bills, HMO approvals, deposits, receipts, and estimates.",
    audience: "Families, employers, HMOs",
  },
  {
    title: "Community Health Literacy Session Outline",
    description: "A session structure for schools, churches, NGOs, workplaces, and community health educators.",
    audience: "Community programmes",
  },
];

function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[#d8c79b]/70 bg-[#fbf7ed] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b5c16]">
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1d5f86]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl text-[#0a3149] md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{body}</p>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="border-b border-slate-200 bg-[#f7f5ef] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#1d5f86]">Resources desk</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#0a3149] md:text-6xl">
            Public Health Clarity Resources
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Guides, briefs, checklists, explainers, and institutional resources for patients, families, communities, health workers, hospitals, NGOs, schools, churches, HMOs, and public health partners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/partner-brief" className="rounded-full bg-[#0a3149] px-6 py-3 text-sm font-semibold text-white shadow-sm">
              View Partner Brief
            </Link>
            <Link href="/for-partners" className="rounded-full border border-[#0a3149]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0a3149]">
              Partnership Desk
            </Link>
            <Link href="/clarity-centres" className="rounded-full border border-[#0a3149]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0a3149]">
              Explore Centres
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Organised resources"
            title="Resource Categories"
            body="Health Clarity Institute organises its public education resources around real patient, family, hospital, community, and institutional questions."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0a3149]/30 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl text-[#0a3149]">{item.title}</h3>
                  <Badge>{item.status}</Badge>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                <p className="mt-6 text-sm font-semibold text-[#1d5f86] group-hover:text-[#0a3149]">Open resource →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8fafc] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Meeting-ready"
            title="Featured Resources"
            body="These pages help reviewers, institutions, and public health partners understand the platform’s purpose, boundaries, governance, and partnership possibilities quickly."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Badge>{item.status}</Badge>
                <h3 className="mt-5 font-serif text-2xl text-[#0a3149]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                <p className="mt-6 text-sm font-semibold text-[#1d5f86]">Read resource →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Print and share"
            title="Downloadable Resources"
            body="Downloadable PDFs and printable guides will be added as the platform develops. These materials are intended for public education, institutional discussion, community programmes, and professional review."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {downloadableResources.map((item) => (
              <article key={item.title} className="rounded-3xl border border-dashed border-[#0a3149]/25 bg-[#fbf7ed] p-6">
                <Badge>PDF coming soon</Badge>
                <h3 className="mt-5 font-serif text-xl text-[#0a3149]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{item.description}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Audience</p>
                <p className="mt-1 text-sm text-slate-700">{item.audience}</p>
                <button disabled className="mt-6 w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-400">
                  Coming soon
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#0a3149] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c79b]">Responsible use notice</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Public education, not professional replacement.</h2>
          <p className="mt-5 text-base leading-8 text-slate-200">
            These resources are for public education and institutional discussion. They do not diagnose, treat, provide emergency medical instruction, replace qualified healthcare professionals, replace legal advice, provide financial advice, or guarantee health, legal, insurance, or institutional outcomes.
          </p>
        </div>
      </section>
    </main>
  );
}
