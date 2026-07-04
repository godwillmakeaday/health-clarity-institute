const sections = [
  {
    "kicker": "Now available",
    "title": "Current platform pillars",
    "body": "Health Clarity Institute already has the structure of a multi-centre public health clarity platform.",
    "items": [
      {
        "title": "Conditions A–Z",
        "text": "Plain-language health condition explanations."
      },
      {
        "title": "Symptoms A–Z",
        "text": "Guides that help users understand when symptoms may need attention."
      },
      {
        "title": "Specialist Centres",
        "text": "Area-of-care clusters for patient navigation."
      },
      {
        "title": "Medical Law & Patient Rights",
        "text": "Rights, records, consent, dignity, privacy, and patient responsibility education."
      },
      {
        "title": "Informed Consent Clarity",
        "text": "Preparation before treatment conversations, procedures, investigations, and consent forms."
      },
      {
        "title": "Mental Health Clarity",
        "text": "Emotional distress, family support, stigma, and care pathways."
      },
      {
        "title": "Health Technology & Breakthroughs",
        "text": "Medical innovation, AI tools, diagnostics, devices, and breakthrough claims explained carefully."
      },
      {
        "title": "Health Finance & Insurance",
        "text": "Bills, HMOs, coverage, receipts, estimates, and health cost questions."
      }
    ]
  },
  {
    "kicker": "Under development",
    "title": "Next development priorities",
    "body": "The next phase should deepen credibility, navigation, professional review, and institutional usefulness.",
    "checklist": [
      "Homepage integration of all major centres.",
      "Central clarity-centres map.",
      "Medical records and documentation centre.",
      "Hospital navigation centre.",
      "Contributor and review workflows.",
      "Animated explainer scripts.",
      "Correction and update process."
    ]
  },
  {
    "kicker": "Professional review",
    "title": "Professional review needed",
    "body": "Health-sensitive pages should be reviewed carefully before being presented as professionally reviewed.",
    "checklist": [
      "Conditions and symptoms content.",
      "Mental health guidance.",
      "Medical law and patient rights content.",
      "Informed consent explainers.",
      "Health technology and breakthrough claims.",
      "Health finance and insurance guidance."
    ]
  },
  {
    "kicker": "Institutions",
    "title": "Institutional partnership opportunities",
    "body": "The platform can support hospitals, ministries, NGOs, schools, churches, HMOs, and community health programmes with patient education and public health literacy.",
    "items": [
      {
        "title": "Public education products",
        "text": "Printable guides, waiting-room scripts, explainer cards, and mobile-first patient checklists."
      },
      {
        "title": "Animated explainers",
        "text": "Short videos on consent, records, health finance, mental health support, and hospital navigation."
      },
      {
        "title": "Nigerian context expansion",
        "text": "Local realities around cost, access, family decision-making, records, HMOs, and public/private care."
      },
      {
        "title": "Africa health clarity vision",
        "text": "A broader clarity institution that can adapt to common health navigation problems across African settings."
      }
    ]
  }
];

const ctas = [
  {
    "label": "Explore Clarity Centres",
    "href": "/clarity-centres",
    "primary": true
  },
  {
    "label": "For Partners",
    "href": "/for-partners",
    "primary": false
  }
];

const notice = "The roadmap is directional. It is not a promise of medical services, regulatory approval, investment, or clinical care.";

export const metadata = {
  title: "Health Clarity Roadmap | Health Clarity Institute",
  description: "Where Health Clarity Institute is going as a public health clarity and patient understanding platform for Nigeria and Africa.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Roadmap • Platform direction</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 md:text-6xl">Health Clarity Roadmap</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">Where Health Clarity Institute is going as a public health clarity and patient understanding platform for Nigeria and Africa.</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">This roadmap helps visitors, professionals, institutions, and future partners understand what is available, what is under development, and where professional review is needed.</p>
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
