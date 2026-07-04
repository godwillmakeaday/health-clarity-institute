const sections = [
  {
    "kicker": "Who can contribute",
    "title": "A broad contributor community",
    "body": "Health Clarity Institute can benefit from many forms of expertise, including clinical care, public health, patient communication, law, health finance, technology, design, writing, and community education.",
    "items": [
      {
        "title": "Health professionals",
        "text": "Doctors, nurses, public health workers, pharmacists, counsellors, and hospital administrators can improve accuracy and practical usefulness."
      },
      {
        "title": "Institutional experts",
        "text": "Lawyers, HMO/insurance professionals, technologists, educators, NGO workers, and community leaders can help explain the non-clinical parts of health navigation."
      }
    ]
  },
  {
    "kicker": "Contribution types",
    "title": "Ways to contribute",
    "body": "Not every contributor needs code access. Many people should review the live site and send structured suggestions.",
    "checklist": [
      "Suggest topics Nigerians need explained.",
      "Review a draft for clarity or risk.",
      "Flag outdated or unsafe wording.",
      "Submit public-facing article drafts.",
      "Suggest Nigerian context examples.",
      "Help design animated explainer scripts.",
      "Improve accessibility, layout, and mobile readability."
    ]
  },
  {
    "kicker": "Standards",
    "title": "Contributor standards",
    "body": "Contributors should respect the public education mission and avoid sensationalism, fear, professional rivalry, or unsupported claims.",
    "checklist": [
      "No fake titles or invented credentials.",
      "No diagnosis or treatment instructions for individual visitors.",
      "No drug promotion or commercial claims disguised as education.",
      "No copying copyrighted medical content.",
      "No patient-identifying stories without proper permission and privacy protection."
    ]
  },
  {
    "kicker": "Review panels",
    "title": "Future review panels",
    "body": "As the platform grows, review panels may be created for medical review, patient communication, legal clarity, health finance, technology, mental health, and Nigerian context.",
    "items": [
      {
        "title": "Review before authority",
        "text": "The platform should not claim full authority before it has a review structure."
      },
      {
        "title": "Transparent labels",
        "text": "Pages can show whether they are public education drafts, editorially reviewed, or professionally reviewed."
      }
    ]
  },
  {
    "kicker": "Corrections",
    "title": "How to submit corrections",
    "body": "A correction process should invite professionals and members of the public to report unclear, outdated, unsafe, or incomplete content.",
    "checklist": [
      "Identify the page and section.",
      "Explain the concern clearly.",
      "Suggest safer wording where possible.",
      "State whether the correction is medical, legal, financial, technology, or general clarity."
    ]
  }
];

const ctas = [
  {
    "label": "For Partners",
    "href": "/for-partners",
    "primary": true
  },
  {
    "label": "Medical Review Policy",
    "href": "/medical-review-policy",
    "primary": false
  }
];

const notice = "Contributor involvement does not automatically mean endorsement, partnership, employment, or clinical responsibility. All contributions remain subject to editorial review.";

export const metadata = {
  title: "Contributors & Reviewers | Health Clarity Institute",
  description: "How health professionals, legal professionals, writers, designers, technologists, and institutions can help strengthen Health Clarity Institute.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Community • Professional contribution</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 md:text-6xl">Contributors & Reviewers</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">How health professionals, legal professionals, writers, designers, technologists, and institutions can help strengthen Health Clarity Institute.</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">The platform can grow through responsible contributions, but health-sensitive material must be handled with caution, review, and clear boundaries.</p>
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
