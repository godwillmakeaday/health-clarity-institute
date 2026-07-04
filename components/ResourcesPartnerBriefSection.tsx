import Link from "next/link";

const links = [
  { title: "Resources", href: "/resources", description: "Guides, briefs, checklists, and institutional resources." },
  { title: "Partner Brief", href: "/partner-brief", description: "A meeting-ready concept brief for serious reviewers and institutions." },
  { title: "Public Health Literacy", href: "/public-health-literacy", description: "Why public health understanding matters for Nigeria and Africa." },
  { title: "For Partners", href: "/for-partners", description: "Public-interest partnership pathways and safeguards." },
  { title: "Government Health Partnerships", href: "/government-health-partnerships", description: "Public health communication and literacy support possibilities." },
  { title: "Hospital Partnerships", href: "/hospital-partnerships", description: "Patient education and hospital communication support ideas." },
  { title: "Community Health Programmes", href: "/community-health-programmes", description: "Health clarity for families, schools, churches, and communities." },
];

export default function ResourcesPartnerBriefSection() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1d5f86]">Resources and partner brief</p>
        <h2 className="mt-3 font-serif text-3xl text-[#0a3149] md:text-4xl">Meeting-ready public health clarity resources</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          A structured resource desk for reviewers, institutions, hospitals, government health officials, NGOs, schools, churches, HMOs, and community leaders.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-serif text-xl text-[#0a3149]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              <p className="mt-6 text-sm font-semibold text-[#1d5f86]">Open →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
