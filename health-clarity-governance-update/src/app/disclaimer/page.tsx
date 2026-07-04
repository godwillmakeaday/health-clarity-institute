const sections = [
  {
    "kicker": "Emergency",
    "title": "Not an emergency service",
    "body": "In an emergency, seek urgent help from qualified healthcare providers or emergency services. Do not rely on this website for emergency medical decisions.",
    "badge": "Important"
  },
  {
    "kicker": "Medical boundary",
    "title": "Not a hospital, clinic, or diagnostic tool",
    "body": "This website does not examine patients, diagnose conditions, prescribe treatment, interpret personal test results as medical advice, or replace consultation with qualified healthcare professionals.",
    "checklist": [
      "Do not use this platform to decide whether to stop or start treatment.",
      "Do not delay urgent care because of anything read here.",
      "Discuss personal symptoms, records, and test results with qualified professionals."
    ]
  },
  {
    "kicker": "Legal boundary",
    "title": "Not legal advice",
    "body": "Some pages explain patient rights, medical records, informed consent, complaints, or documentation issues. That is public legal education only. Legal outcomes depend on facts, documents, jurisdiction, procedure, timing, and professional legal advice."
  },
  {
    "kicker": "Finance boundary",
    "title": "Not insurance or financial advice",
    "body": "Health finance and insurance pages explain common concepts such as bills, receipts, HMOs, approvals, and documentation. They do not sell insurance, guarantee coverage, negotiate bills, or provide financial advice."
  },
  {
    "kicker": "Mental health boundary",
    "title": "Not a mental health crisis service",
    "body": "Mental health pages provide public education and support-pathway awareness. They do not diagnose, provide therapy, prescribe medication, or provide crisis intervention. If there is immediate danger, contact qualified emergency or mental health services."
  },
  {
    "kicker": "Variation",
    "title": "Content may not apply to every person",
    "body": "Health, legal, insurance, and institutional outcomes depend on facts, timing, severity, age, medical history, examination, test results, hospital policy, records, professional judgment, and applicable law.",
    "items": [
      {
        "title": "Context matters",
        "text": "A guide may help you ask better questions, but it cannot know every fact about your situation."
      },
      {
        "title": "Professional judgment matters",
        "text": "Qualified professionals must apply knowledge to the specific person and circumstances."
      }
    ]
  }
];

const ctas = [
  {
    "label": "Editorial Policy",
    "href": "/editorial-policy",
    "primary": true
  },
  {
    "label": "Medical Review Policy",
    "href": "/medical-review-policy",
    "primary": false
  }
];

const notice = "In an emergency, seek urgent help from qualified healthcare providers or emergency services. Do not rely on this website for emergency medical decisions.";

export const metadata = {
  title: "Public Education Disclaimer | Health Clarity Institute",
  description: "A clear explanation of what Health Clarity Institute does and does not provide.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Safety • Public notice</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 md:text-6xl">Public Education Disclaimer</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">A clear explanation of what Health Clarity Institute does and does not provide.</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">This disclaimer protects patients, families, professionals, and institutions by making the platform boundaries visible.</p>
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
