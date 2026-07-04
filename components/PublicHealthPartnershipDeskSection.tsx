import Link from "next/link";

const partnershipLinks = [
  { title: "Public Health Literacy", href: "/public-health-literacy", description: "Public education for patients, families, communities, and institutions.", status: "Published" },
  { title: "Concept Brief", href: "/concept-brief", description: "A concise institutional explanation of Health Clarity Institute’s public value.", status: "Published" },
  { title: "Government Health Partnerships", href: "/government-health-partnerships", description: "Possible public health communication and literacy support pathways.", status: "Developing" },
  { title: "Hospital Partnerships", href: "/hospital-partnerships", description: "Patient education, consent explainers, records awareness, and waiting-room resources.", status: "Partnership-ready" },
  { title: "Community Health Programmes", href: "/community-health-programmes", description: "Health clarity for schools, churches, families, workplaces, and community groups.", status: "Developing" },
  { title: "For Partners", href: "/for-partners", description: "Institutional pathways for reviewers, contributors, sponsors, and programme partners.", status: "Published" }
];

export default function PublicHealthPartnershipDeskSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-800">Institutional Desk</p>
      <div className="mt-3 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <h2 className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">Public Health Literacy & Partnerships</h2>
        <p className="text-base leading-7 text-slate-600">Health Clarity Institute can support public health literacy, patient education, hospital communication, informed consent awareness, health finance clarity, and community health programmes.</p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {partnershipLinks.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">{item.status}</span>
            <h3 className="mt-5 font-serif text-2xl text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-sky-900">Open page →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
