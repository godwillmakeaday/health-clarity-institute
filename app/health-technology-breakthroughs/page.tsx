import Link from "next/link";

const technologyTypes = [
  "Telemedicine",
  "AI health tools",
  "Diagnostic tests",
  "Wearable devices",
  "Medical imaging",
  "Digital health records",
  "Remote monitoring",
  "Fertility technology",
  "Genomics and precision medicine",
  "Preventive health technology",
  "Medical devices",
  "Public health data systems",
];

const breakthroughQuestions = [
  "Is it approved or recognised by a relevant authority?",
  "Is it available locally, or only in selected hospitals or countries?",
  "Is it proven for ordinary clinical use, or still experimental?",
  "Who tested it, and what kind of evidence exists?",
  "What condition or patient group is it actually for?",
  "What risks, limitations, or false results should patients understand?",
  "What does it cost, and what follow-up is required?",
  "Is it being marketed responsibly, or presented as a guaranteed solution?",
  "Who should explain the result or recommendation?",
  "What should a patient ask before paying?",
];

const watchCards = [
  {
    title: "AI in Healthcare",
    meaning: "Software tools that may assist with triage, documentation, image review, risk prediction, or patient communication.",
    why: "AI may improve speed and access, but results still require professional judgment and careful governance.",
    questions: "Who reviews the result? What data was used? What happens if the tool is wrong?",
    caution: "High",
  },
  {
    title: "Cancer Screening Technology",
    meaning: "Tests or tools designed to detect warning signs earlier than symptoms may appear.",
    why: "Screening can be valuable, but false alarms and missed cases are possible.",
    questions: "Is this screening recommended for my age, sex, risk profile, and location?",
    caution: "Moderate",
  },
  {
    title: "Wearable Health Monitors",
    meaning: "Devices that track indicators such as heart rate, sleep, activity, or oxygen-related measurements.",
    why: "They can support awareness, but they are not a full medical assessment.",
    questions: "What should I do if the reading is abnormal? Who interprets it?",
    caution: "Moderate",
  },
  {
    title: "Remote Consultation Platforms",
    meaning: "Digital channels for speaking with healthcare professionals without visiting a facility first.",
    why: "They can improve access, but some conditions still require physical examination or urgent care.",
    questions: "Who is the provider, and when should I go to a hospital physically?",
    caution: "Moderate",
  },
  {
    title: "Fertility and Assisted Reproduction Technology",
    meaning: "Clinical technologies used in fertility evaluation, assisted conception, and reproductive care.",
    why: "They involve cost, emotional pressure, consent, records, expectations, and medical risk discussion.",
    questions: "What is the success rate for my situation, and what documents should I receive?",
    caution: "High",
  },
  {
    title: "Precision Medicine",
    meaning: "Care approaches that may use genes, biomarkers, or detailed patient data to guide decisions.",
    why: "It can sound promising, but access, evidence, cost, and interpretation matter.",
    questions: "What decision will this test actually change?",
    caution: "Moderate",
  },
  {
    title: "Longevity and Preventive Health",
    meaning: "Tools, tests, and programmes marketed around longer healthy living and early risk detection.",
    why: "Preventive care can help, but expensive packages may overpromise.",
    questions: "Which parts are evidence-based and which parts are optional wellness services?",
    caution: "High",
  },
  {
    title: "Stem Cell Claims and Patient Caution",
    meaning: "Claims involving regenerative treatment or cell-based interventions for different conditions.",
    why: "Some uses are legitimate in specific contexts, while many public claims may be premature or risky.",
    questions: "Is this approved for my condition? What evidence and professional oversight exist?",
    caution: "High",
  },
  {
    title: "Digital Medical Records",
    meaning: "Electronic systems used to store, manage, and share patient information.",
    why: "Good records improve continuity of care, but privacy and access rules matter.",
    questions: "Who can access my record, and how can I request a copy?",
    caution: "Moderate",
  },
  {
    title: "Home Testing Kits",
    meaning: "Tests used at home for screening or monitoring certain health indicators.",
    why: "They may be convenient, but interpretation and confirmation are important.",
    questions: "Does a positive or negative result need confirmation by a laboratory or doctor?",
    caution: "Moderate",
  },
  {
    title: "Medical Devices and Patient Safety",
    meaning: "Equipment used for diagnosis, monitoring, support, or treatment in homes and hospitals.",
    why: "Device quality, maintenance, training, and proper use affect safety.",
    questions: "Who supplied it, who maintains it, and what training is required?",
    caution: "Moderate",
  },
  {
    title: "Hospital Technology in Nigeria",
    meaning: "The growing use of imaging, digital records, telemedicine, laboratory systems, and monitoring tools in Nigerian facilities.",
    why: "Technology can improve care, but patients still need explanation, consent, records, and follow-up.",
    questions: "What is the result, who interprets it, and what is the next step?",
    caution: "Moderate",
  },
];

const patientQuestions = [
  "What problem is this technology solving?",
  "Is it a screening tool, diagnostic tool, monitoring tool, or treatment tool?",
  "Is a doctor supposed to interpret the result?",
  "What happens if the result is wrong?",
  "What data is collected?",
  "Who can access my data?",
  "What does it cost?",
  "Is there follow-up care?",
  "Is the provider licensed or recognised?",
  "What should I ask before paying?",
];

const institutionSupports = [
  "Patient education before technology use",
  "Waiting-room explainers for digital health tools",
  "Public health literacy campaigns",
  "Digital records culture",
  "Safe AI communication",
  "Informed patient use of health tools",
  "Technology trust-building",
  "Clear explanation of test limitations",
];

function CautionBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    Low: "bg-slate-100 text-slate-700 ring-slate-200",
    Moderate: "bg-amber-50 text-amber-800 ring-amber-200",
    High: "bg-rose-50 text-rose-800 ring-rose-200",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${styles[level] || styles.Moderate}`}>{level} caution</span>;
}

export default function HealthTechnologyBreakthroughsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-800">Health Clarity Institute · Innovation literacy</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Health Technology & Breakthroughs Clarity Centre</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">Understanding medical innovation, diagnostics, AI health tools, devices, preventive health, and breakthrough claims without hype or fear.</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">Not every breakthrough is ready for ordinary use. Some innovations are proven, some are early, some are expensive, some are experimental, and some require careful professional guidance.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#technology" className="rounded-xl bg-sky-950 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-900">Explore Health Technology</a>
                <a href="#claims" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50">Understand Breakthrough Claims</a>
                <a href="#questions" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50">View Patient Questions</a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Safety notice</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">This centre provides public education about health innovation and medical technology. It does not recommend treatments, diagnose conditions, endorse products, or replace qualified medical advice.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">What counts as health technology?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">The tools around healthcare are expanding quickly.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">This centre helps people ask whether a technology is proven, appropriate, affordable, available, and properly explained.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyTypes.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-950 text-sm font-bold text-white">H</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">A public clarity topic for patients, families, institutions, and health educators.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="claims" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Understanding breakthrough claims</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">A breakthrough claim should lead to better questions, not blind excitement.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Patients should be protected from both fear of innovation and careless acceptance of unproven promises.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="grid gap-3">
                {breakthroughQuestions.map((question) => (
                  <li key={question} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-900" />{question}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Breakthrough watch</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Sample topics for public health innovation explainers.</h2>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {watchCards.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <CautionBadge level={item.caution} />
              </div>
              <dl className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                <div><dt className="font-semibold text-slate-950">What it means</dt><dd className="mt-1">{item.meaning}</dd></div>
                <div><dt className="font-semibold text-slate-950">Why it matters</dt><dd className="mt-1">{item.why}</dd></div>
                <div><dt className="font-semibold text-slate-950">Questions to ask</dt><dd className="mt-1">{item.questions}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="questions" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">Patient questions</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Before using or paying for a health technology.</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">The purpose is not to reject innovation. The purpose is to understand what kind of tool it is and who should interpret its result.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {patientQuestions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">For hospitals and institutions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Technology trust is built through explanation, safety, and documentation.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {institutionSupports.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            <strong>Disclaimer:</strong> This centre provides public health technology education only. It does not endorse products, recommend medical devices, interpret test results, prescribe treatment, or replace consultation with qualified healthcare professionals. Medical technology decisions depend on evidence, regulation, professional judgment, patient facts, safety, cost, and availability.
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/centres" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">View all centres</Link>
            <Link href="/mental-health-clarity" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Mental health</Link>
            <Link href="/health-finance-insurance" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Health finance</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
