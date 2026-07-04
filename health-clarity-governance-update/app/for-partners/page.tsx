const sections = [
  {
    "kicker": "Why partner",
    "title": "Public health clarity as infrastructure",
    "body": "Confusion around health can lead to delay, conflict, poor documentation, mistrust, financial stress, and avoidable escalation. Patient education can strengthen the relationship between the public and health institutions.",
    "items": [
      {
        "title": "For patients and families",
        "text": "Clear explanations help people ask better questions, preserve records, understand pathways, and respond calmly."
      },
      {
        "title": "For institutions",
        "text": "Better public education can support communication, complaint reduction, informed consent culture, and trust."
      }
    ]
  },
  {
    "kicker": "Support areas",
    "title": "Areas where partnership can help",
    "body": "Partners can support programmes, content, review, distribution, training, and patient education resources.",
    "checklist": [
      "Public health literacy guides.",
      "Waiting-room explainers.",
      "Informed consent preparation materials.",
      "Health finance and insurance education.",
      "Medical records and documentation culture.",
      "Mental health literacy for schools, churches, and workplaces.",
      "Technology and breakthrough literacy.",
      "Community health campaigns."
    ]
  },
  {
    "kicker": "Pathways",
    "title": "Partnership pathways",
    "body": "Partnership should begin with public value and responsible contribution, not rushed ownership language.",
    "items": [
      {
        "title": "Reviewer",
        "text": "Reviews pages for clarity, safety, or professional accuracy."
      },
      {
        "title": "Contributor",
        "text": "Suggests topics, drafts, examples, or institutional insights."
      },
      {
        "title": "Advisory partner",
        "text": "Provides strategic guidance on public health literacy and governance."
      },
      {
        "title": "Institutional partner",
        "text": "Collaborates on patient education, outreach, or staff/community health literacy."
      },
      {
        "title": "Sponsor",
        "text": "Supports production of public guides, translations, or animated explainers."
      },
      {
        "title": "Programme partner",
        "text": "Works with the platform on a specific health literacy programme."
      },
      {
        "title": "Research/content partner",
        "text": "Supports structured content development and public education research."
      }
    ]
  },
  {
    "kicker": "Institutions",
    "title": "Who this is for",
    "body": "The platform is relevant to organisations that need the public to understand health decisions better.",
    "checklist": [
      "Hospitals and clinics.",
      "Public health agencies.",
      "NGOs and foundations.",
      "Churches and faith-based hospitals.",
      "Schools and universities.",
      "HMOs and health finance stakeholders.",
      "Medical associations and professional groups.",
      "Community leaders and health programmes."
    ]
  },
  {
    "kicker": "Boundary",
    "title": "What partnership does not mean",
    "body": "Partnership does not mean the website becomes a hospital, regulator, law firm, insurer, emergency service, or substitute for professional care. It remains a public health clarity platform."
  }
];

const ctas = [
  {
    "label": "Contributors",
    "href": "/contributors",
    "primary": true
  },
  {
    "label": "Roadmap",
    "href": "/roadmap",
    "primary": false
  }
];

const notice = "Partnership discussions should be transparent, ethical, public-interest oriented, and respectful of professional and institutional boundaries.";

export const metadata = {
  title: "For Partners | Health Clarity Institute",
  description: "How hospitals, clinics, NGOs, churches, schools, HMOs, public agencies, and community programmes can work with Health Clarity Institute.",
};

function SectionCard({ section }: { section: any }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{section.kicker}</p>
          <h2 className="mt-2 font-serif text-2xl text-slate-950 md:text-3xl">{section.title}</h2>
        </div>
        {section.badge ? (
          <span className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
            {section.badge}
          </span>
        ) : null}
      </div>
      <p className="max-w-4xl text-base leading-8 text-slate-600">{section.body}</p>
      {section.items?.length ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {section.items.map((item: any) => (
            <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      ) : null}
      {section.checklist?.length ? (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {section.checklist.map((item: string) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm leading-7 text-slate-700">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-700" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function GovernancePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Institutional partnerships</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 md:text-6xl">For Partners</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">How hospitals, clinics, NGOs, churches, schools, HMOs, public agencies, and community programmes can work with Health Clarity Institute.</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">This page frames partnership around public health literacy, patient education, informed consent support, health finance clarity, mental health literacy, and institutional trust-building.</p>
          {ctas.length ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {ctas.map((cta: any) => (
                <a key={cta.href} href={cta.href} className={cta.primary ? "rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white" : "rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800"}>
                  {cta.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {notice ? (
        <section className="border-b border-sky-100 bg-sky-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">Safety boundary</span>
              <p className="text-sm leading-7 text-sky-50">{notice}</p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:px-8 md:py-14">
        {sections.map((section: any) => (
          <SectionCard key={section.title} section={section} />
        ))}
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Public education notice</p>
            <p className="mt-3 max-w-4xl text-sm leading-8 text-slate-200">
              Health Clarity Institute provides public health education and patient-understanding guidance. It does not diagnose, treat, prescribe, provide emergency instruction, replace qualified healthcare professionals, or provide legal, insurance, or financial advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
