import Link from "next/link";

const footerColumns = [
  {
    title: "Health Library",
    links: [
      { label: "Conditions A–Z", href: "/conditions" },
      { label: "Symptoms A–Z", href: "/symptoms" },
      { label: "Specialist Centres", href: "/centres" },
      { label: "Nigerian Health Context", href: "/nigerian-health-context" },
    ],
  },
  {
    title: "Clarity Centres",
    links: [
      { label: "Medical Law & Patient Rights", href: "/medical-law-patient-rights" },
      { label: "Informed Consent Clarity", href: "/informed-consent-clarity" },
      { label: "Mental Health Clarity", href: "/mental-health-clarity" },
      { label: "Health Technology & Breakthroughs", href: "/health-technology-breakthroughs" },
      { label: "Health Finance & Insurance", href: "/health-finance-insurance" },
      { label: "Clarity Centres", href: "/clarity-centres" },
    ],
  },
  {
    title: "Institutional",
    links: [
      { label: "For Institutions", href: "/for-institutions" },
      { label: "For Partners", href: "/for-partners" },
      { label: "Contributors", href: "/contributors" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Trust & Governance",
    links: [
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Medical Review Policy", href: "/medical-review-policy" },
      { label: "Public Education Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function HealthClarityUnifiedFooter() {
  return (
    <footer className="bg-[#0b3551] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 text-lg font-bold">
                HCI
              </div>
              <div>
                <h2 className="font-serif text-2xl">Health Clarity Institute Nigeria</h2>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-100">Public health clarity</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50">
              Health Clarity Institute provides public health education and patient clarity. It does not
              diagnose, treat, provide emergency medical instruction, replace qualified healthcare
              professionals, or provide legal, financial, or insurance advice.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-blue-100">hello@healthclarity.ng</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm leading-6 text-blue-50 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs leading-6 text-blue-100">
          In an emergency, seek urgent help from qualified healthcare providers or emergency services. Do not rely on this website for emergency medical decisions.
        </div>
      </div>
    </footer>
  );
}

export default HealthClarityUnifiedFooter;
