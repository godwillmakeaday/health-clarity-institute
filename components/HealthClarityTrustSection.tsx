import Link from "next/link";

const trustCards = [
  {
    title: "Public education, not diagnosis",
    description: "The platform helps visitors understand health issues and questions to ask. It does not diagnose or treat.",
  },
  {
    title: "Plain-language health clarity",
    description: "Content is written to support ordinary patients, families, and institutions without unnecessary technical language.",
  },
  {
    title: "Nigerian context",
    description: "Guides consider Nigerian realities: hospital access, family decision-making, records, cost, insurance, and trust.",
  },
  {
    title: "Professional review pathway",
    description: "Health-sensitive pages should be reviewed, labelled, updated, and improved as professional contributors join.",
  },
  {
    title: "Responsible disclaimers",
    description: "Clear boundaries protect users from mistaking public education for emergency care or professional consultation.",
  },
  {
    title: "Corrections and updates",
    description: "The platform should welcome corrections and improve content as evidence, local realities, and institutional needs evolve.",
  },
];

const links = [
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Medical Review Policy", href: "/medical-review-policy" },
  { label: "Public Education Disclaimer", href: "/disclaimer" },
  { label: "Contributors & Reviewers", href: "/contributors" },
];

export function HealthClarityTrustSection() {
  return (
    <section className="border-t border-slate-200 bg-[#f7f5ef]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#1f6c99]">
            Governance and trust
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0b3551] sm:text-5xl">
            How Health Clarity Protects Public Trust
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Authority is built not only by publishing content, but by making the platform’s boundaries,
            review standards, update process, and public education mission visible.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-2xl text-[#0b3551]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0b3551] transition hover:border-[#1f6c99] hover:text-[#1f6c99]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HealthClarityTrustSection;
