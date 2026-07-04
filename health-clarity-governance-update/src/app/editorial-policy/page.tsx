const sections = [
  {
    "kicker": "Mission",
    "title": "Our editorial mission",
    "body": "Health Clarity Institute exists to help people understand health issues, medical decisions, patient communication, health finance, records, rights, and care pathways before confusion becomes harm.",
    "items": [
      {
        "title": "Public-facing clarity",
        "text": "We translate complex health and institutional issues into calm, practical language that ordinary people can understand."
      },
      {
        "title": "Not a replacement for care",
        "text": "Our content supports understanding; it does not replace qualified medical advice, diagnosis, treatment, legal advice, or emergency care."
      }
    ]
  },
  {
    "kicker": "Writing standard",
    "title": "Plain-language health education",
    "body": "Every guide should be readable on a phone, useful to a family member under pressure, and careful enough for professional review.",
    "checklist": [
      "Use simple explanations without oversimplifying serious matters.",
      "Avoid fear-based language, miracle claims, and exaggerated certainty.",
      "Explain what users should ask, preserve, or clarify rather than telling them what final decision to make.",
      "Use cautious language where facts may vary."
    ]
  },
  {
    "kicker": "Context",
    "title": "Nigerian context and public health relevance",
    "body": "Health decisions in Nigeria often involve access, cost, family authority, hospital communication, records, HMOs, faith communities, public/private care, and documentation. Our content should reflect those realities responsibly.",
    "items": [
      {
        "title": "Local realities",
        "text": "We consider patient navigation, health finance, family decisions, and records culture in Nigerian settings."
      },
      {
        "title": "Institutional usefulness",
        "text": "Guides should be useful to patients, families, hospitals, schools, churches, NGOs, and community leaders."
      }
    ]
  },
  {
    "kicker": "Evidence",
    "title": "Evidence-aware writing",
    "body": "The platform should not publish sensational claims. Health content should be careful, source-aware, and open to professional correction.",
    "checklist": [
      "Prefer established health knowledge and responsible public health framing.",
      "Avoid claiming medical breakthroughs are proven when they are experimental or early.",
      "Avoid naming treatments as recommendations unless clearly framed as general education requiring professional advice.",
      "Use “may”, “can”, “could”, and “professional assessment” where appropriate."
    ]
  },
  {
    "kicker": "Boundaries",
    "title": "What we avoid",
    "body": "The site must protect users from confusion, unsafe certainty, and irresponsible claims.",
    "checklist": [
      "No diagnosis by website.",
      "No prescriptions or drug instructions.",
      "No emergency medical decision-making.",
      "No fake expert names, fake reviews, or fake citations.",
      "No promise of cure, coverage, legal outcome, or hospital result.",
      "No anti-hospital or fear-based language."
    ]
  },
  {
    "kicker": "Updates",
    "title": "Corrections and updates",
    "body": "Health and institutional information changes. The platform should welcome corrections from qualified professionals and update pages when better guidance becomes available.",
    "items": [
      {
        "title": "Correction pathway",
        "text": "Users and professionals should be able to point out unclear, outdated, or risky content."
      },
      {
        "title": "Update discipline",
        "text": "Pages should be reviewed when clinical practice, public policy, insurance rules, or platform standards change."
      }
    ]
  }
];

const ctas = [
  {
    "label": "Medical Review Policy",
    "href": "/medical-review-policy",
    "primary": true
  },
  {
    "label": "Public Disclaimer",
    "href": "/disclaimer",
    "primary": false
  }
];

const notice = "Health Clarity Institute is designed to help people understand health issues and care pathways. It does not replace qualified medical advice, diagnosis, treatment, legal advice, or emergency care.";

export const metadata = {
  title: "Editorial Policy | Health Clarity Institute",
  description: "How Health Clarity Institute creates calm, plain-language public health clarity content for Nigerian patients, families, and institutions.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Governance • Editorial standards</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 md:text-6xl">Editorial Policy</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">How Health Clarity Institute creates calm, plain-language public health clarity content for Nigerian patients, families, and institutions.</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">This policy explains the editorial discipline behind the platform: public education, Nigerian relevance, evidence-aware writing, careful boundaries, and transparent corrections.</p>
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
