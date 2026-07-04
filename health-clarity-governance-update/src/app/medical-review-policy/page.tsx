const sections = [
  {
    "kicker": "Purpose",
    "title": "Why review matters",
    "body": "Health information can influence decisions. Review helps reduce unsafe wording, unsupported claims, and confusing guidance.",
    "items": [
      {
        "title": "Trust protection",
        "text": "Review protects the public by making content more accurate, balanced, and professionally responsible."
      },
      {
        "title": "Boundary protection",
        "text": "Review also helps the platform avoid crossing into diagnosis, prescription, or clinical advice."
      }
    ]
  },
  {
    "kicker": "Difference",
    "title": "Public education versus medical advice",
    "body": "Public education explains general concepts and questions to ask. Medical advice applies professional judgment to a specific person, condition, record, examination, test result, and context.",
    "checklist": [
      "We can explain what informed consent means.",
      "We cannot decide whether a particular patient should consent.",
      "We can explain why records matter.",
      "We cannot interpret a patient’s full medical file as final medical advice."
    ]
  },
  {
    "kicker": "Review model",
    "title": "Expert contribution and review",
    "body": "Professionals may contribute as topic advisers, reviewers, writers, or correction partners. Review participation should be identified honestly; the site should not claim professional review where none has happened.",
    "items": [
      {
        "title": "Professional insight",
        "text": "Doctors, nurses, public health professionals, lawyers, HMOs, hospital administrators, and health technologists can help improve content."
      },
      {
        "title": "No fake authority",
        "text": "Do not invent reviewers, institutions, approvals, or endorsements."
      }
    ]
  },
  {
    "kicker": "Labels",
    "title": "Review labels",
    "body": "Pages may use review labels to show readers the content status clearly.",
    "items": [
      {
        "title": "Public education draft",
        "text": "Content is published for clarity but requires deeper professional review."
      },
      {
        "title": "Editorially reviewed",
        "text": "Content has been reviewed for tone, structure, public-facing clarity, and safety boundaries."
      },
      {
        "title": "Professional review needed",
        "text": "Content touches a sensitive health area and should be reviewed by a qualified professional."
      },
      {
        "title": "Clinician reviewed",
        "text": "Content has been reviewed by an identified qualified clinician."
      },
      {
        "title": "Updated for Nigerian context",
        "text": "Content has been adjusted for local institutional, access, cost, or patient-navigation realities."
      }
    ]
  },
  {
    "kicker": "Language",
    "title": "Use of cautious language",
    "body": "Health content should avoid overconfidence. It should use careful wording when facts depend on professional assessment, timing, severity, age, history, tests, and context.",
    "checklist": [
      "Use “may require professional assessment” instead of “this means you have”.",
      "Use “ask your healthcare provider” instead of giving direct treatment instructions.",
      "Use “emergency care may be needed” without giving detailed emergency procedures.",
      "Avoid claiming that one pathway fits every patient."
    ]
  },
  {
    "kicker": "Limits",
    "title": "Limits of the platform",
    "body": "Health Clarity Institute is a clarity layer, not a clinical service. It cannot examine, diagnose, prescribe, monitor, admit, discharge, or provide emergency intervention.",
    "checklist": [
      "No diagnosis.",
      "No treatment plan.",
      "No drug prescription.",
      "No emergency instruction.",
      "No legal or insurance outcome guarantee."
    ]
  }
];

const ctas = [
  {
    "label": "Contributor Guidelines",
    "href": "/contributors",
    "primary": true
  },
  {
    "label": "Disclaimer",
    "href": "/disclaimer",
    "primary": false
  }
];

const notice = "Content status labels are transparency tools. They are not a substitute for consultation with qualified healthcare professionals.";

export const metadata = {
  title: "Medical Review Policy | Health Clarity Institute",
  description: "How Health Clarity Institute separates public education from medical advice and invites responsible professional review.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Governance • Review boundaries</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 md:text-6xl">Medical Review Policy</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">How Health Clarity Institute separates public education from medical advice and invites responsible professional review.</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">This page explains review levels, cautious language, professional contribution, and the limits of a public health education platform.</p>
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
