import Link from "next/link";

const costCategories = [
  "Consultation fees",
  "Laboratory tests",
  "Scans and imaging",
  "Admission costs",
  "Surgery costs",
  "Medication costs",
  "Specialist fees",
  "Emergency deposits",
  "Referral costs",
  "Follow-up care",
  "Rehabilitation costs",
  "Transport and family support costs",
];

const hmoBasics = [
  {
    title: "Health insurance",
    body: "A funding arrangement that may cover selected health costs depending on the policy, provider network, exclusions, limits, and approval process.",
  },
  {
    title: "HMO role",
    body: "An HMO may manage access to providers, approvals, covered services, referrals, and claims within the terms of a plan.",
  },
  {
    title: "Coverage",
    body: "Coverage may include some consultations, tests, medicines, admission, maternity, emergency care, or specialist access, depending on the plan.",
  },
  {
    title: "Exclusions",
    body: "Exclusions are services, conditions, medicines, procedures, or costs that the plan may not pay for.",
  },
  {
    title: "Pre-authorisation",
    body: "Some treatments require approval before payment. Patients should ask what approval is needed and who is responsible for requesting it.",
  },
  {
    title: "Documentation",
    body: "Receipts, approvals, policy documents, referral notes, and hospital bills help prevent confusion and support follow-up questions.",
  },
];

const admissionQuestions = [
  "What is the estimated cost?",
  "What does the estimate include?",
  "What is not included?",
  "Is insurance or HMO accepted?",
  "Has approval been obtained?",
  "What deposit is required?",
  "Can the bill change?",
  "Will receipts be issued?",
  "What documents should the family collect?",
  "Who explains the bill?",
  "What happens if referral is needed?",
  "What happens after discharge?",
];

const warningSigns = [
  {
    title: "No clear estimate",
    urgency: "Moderate",
    why: "Families may make decisions without understanding the likely financial exposure.",
    ask: "Can we receive a written or itemised estimate?",
    preserve: "Admission form, estimate, messages, receipts, and names of billing contacts.",
    contact: "Hospital billing desk, HMO desk, family decision maker, or employer health plan contact.",
  },
  {
    title: "Verbal bills only",
    urgency: "High",
    why: "Verbal billing can create confusion about what was requested, paid, or still outstanding.",
    ask: "Can this bill be written, stamped, itemised, or sent officially?",
    preserve: "Payment evidence, bill summaries, receipts, and communication records.",
    contact: "Billing office, patient relations desk, HMO representative, or hospital administrator.",
  },
  {
    title: "Receipts not issued",
    urgency: "High",
    why: "Without receipts, families may struggle to prove payment or claim reimbursement.",
    ask: "Can we receive receipts for every payment made?",
    preserve: "Bank transfer evidence, POS slips, teller records, and written payment acknowledgements.",
    contact: "Accounts department, billing desk, HMO/employer finance contact where relevant.",
  },
  {
    title: "Confusing HMO approval",
    urgency: "Moderate",
    why: "Treatment may be delayed or unexpectedly billed out-of-pocket if approval is unclear.",
    ask: "What has been approved, what is pending, and what is excluded?",
    preserve: "Approval codes, messages, referral forms, policy details, and provider notes.",
    contact: "HMO desk, HMO customer service, employer HR, or hospital billing office.",
  },
  {
    title: "Sudden unexplained bill increase",
    urgency: "High",
    why: "Bills can change for clinical reasons, but families should understand the basis of the change.",
    ask: "What changed medically or administratively to increase the bill?",
    preserve: "Initial estimate, updated bill, prescriptions, procedure notes where available, and receipts.",
    contact: "Billing office, ward manager, treating team contact, or patient relations desk.",
  },
  {
    title: "Family asked to pay without documentation",
    urgency: "High",
    why: "Urgency should not remove the need for clear payment records where documentation is possible.",
    ask: "Can this payment request be documented before or immediately after payment?",
    preserve: "Messages, written requests, transfer receipts, names, and times.",
    contact: "Hospital accounts, patient relations, or responsible family coordinator.",
  },
  {
    title: "Discharge delayed over unclear billing",
    urgency: "Moderate",
    why: "Families need clarity on outstanding items, insurance approvals, and lawful discharge procedures.",
    ask: "What exactly is outstanding and what document shows it?",
    preserve: "Discharge bill, receipts, HMO approvals, discharge summary, and communication notes.",
    contact: "Billing office, patient relations, HMO desk, or hospital administrator.",
  },
  {
    title: "Insurance coverage misunderstood",
    urgency: "Moderate",
    why: "Patients may assume a service is covered when the policy excludes or limits it.",
    ask: "Where in the policy or approval does it show coverage?",
    preserve: "Policy terms, membership card, approval messages, and provider list.",
    contact: "HMO, insurer, employer HR, or hospital insurance desk.",
  },
  {
    title: "Employer health plan not explained",
    urgency: "Low",
    why: "Staff may lose benefits or delay care because they do not understand their plan.",
    ask: "What hospitals, services, dependants, and approvals are covered?",
    preserve: "Staff handbook, policy document, HMO card, HR memo, and enrolment records.",
    contact: "Employer HR, HMO desk, or benefits administrator.",
  },
  {
    title: "Emergency deposit confusion",
    urgency: "Critical",
    why: "In emergencies, families need quick clarity on immediate payment requirements and documentation.",
    ask: "What is required now, what can wait, and who records this payment?",
    preserve: "Emergency bill, receipts, transfer evidence, names, dates, and treatment summary.",
    contact: "Emergency unit desk, billing office, HMO/employer contact, or family finance coordinator.",
  },
];

const documents = [
  "Hospital card",
  "Admission form",
  "Consent form",
  "HMO approval messages",
  "Insurance policy details",
  "Receipts",
  "Invoices",
  "Discharge bill",
  "Prescriptions",
  "Test results",
  "Referral letters",
  "Employer health plan documents",
  "Complaint letters",
  "Payment evidence",
];

const institutionSupports = [
  "Staff health plan education",
  "Family health emergency planning",
  "Hospital documentation culture",
  "HMO process awareness",
  "Community health funding literacy",
  "Patient support groups",
  "Church/community emergency care funds",
  "Responsible financial communication",
];

function UrgencyBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    Low: "bg-slate-100 text-slate-700 ring-slate-200",
    Moderate: "bg-amber-50 text-amber-800 ring-amber-200",
    High: "bg-orange-50 text-orange-800 ring-orange-200",
    Critical: "bg-rose-50 text-rose-800 ring-rose-200",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${styles[level] || styles.Moderate}`}>{level}</span>;
}

export default function HealthFinanceInsurancePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-800">Health Clarity Institute · Health finance literacy</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Health Finance & Insurance Clarity Centre</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">Understanding hospital bills, health insurance, HMO approvals, out-of-pocket payments, receipts, estimates, and family health budgeting.</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">Health problems often become financial problems. Patients and families need clarity on what is covered, what is not covered, what must be paid, what documents to request, and what questions to ask before decisions are made.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#insurance" className="rounded-xl bg-sky-950 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-900">Understand Health Insurance</a>
                <a href="#billing" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50">View Hospital Billing Questions</a>
                <a href="#documents" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50">Prepare Financial Documents</a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Safety notice</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">This centre provides public education about health finance and insurance. It does not sell insurance, guarantee coverage, negotiate bills, provide financial advice, or replace professional consultation with insurers, hospitals, HMOs, or qualified advisers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Health cost categories</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">A hospital bill is usually a combination of many cost lines.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Families make better decisions when they know what may be included, excluded, estimated, or added later.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {costCategories.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-950">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Ask whether this cost is included, excluded, estimated, insured, or payable separately.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="insurance" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Health insurance and HMO basics</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Coverage is not the same as unlimited payment.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Patients, employers, and families should understand plan limits, approvals, exclusions, provider networks, and documentation.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hmoBasics.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="billing" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Before admission or procedure</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Financial questions should be asked early and documented clearly.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">These questions help families understand estimates, deposits, insurance approval, changing bills, and discharge costs.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-3 sm:grid-cols-2">
              {admissionQuestions.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-900" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Hospital billing warning signs</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Financial confusion can become a health, documentation, or complaint issue.</h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {warningSigns.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <UrgencyBadge level={item.urgency} />
                </div>
                <dl className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                  <div><dt className="font-semibold text-slate-950">Why it matters</dt><dd className="mt-1">{item.why}</dd></div>
                  <div><dt className="font-semibold text-slate-950">What to ask</dt><dd className="mt-1">{item.ask}</dd></div>
                  <div><dt className="font-semibold text-slate-950">What to preserve</dt><dd className="mt-1">{item.preserve}</dd></div>
                  <div><dt className="font-semibold text-slate-950">Who may need to be contacted</dt><dd className="mt-1">{item.contact}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="documents" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Documents to preserve</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Health finance clarity depends on records.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Preserving documents helps patients, families, hospitals, insurers, employers, and HMOs understand what happened.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              {documents.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">For employers, schools, churches, NGOs, and families</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight">Institutions can help people understand health costs before crisis arrives.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutionSupports.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            <strong>Disclaimer:</strong> This centre provides public education only. It does not provide insurance, financial advice, medical advice, legal advice, billing negotiation, or coverage guarantees. Health finance outcomes depend on hospital policy, insurance terms, HMO approval, documentation, timing, treatment needs, and applicable rules.
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/centres" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">View all centres</Link>
            <Link href="/mental-health-clarity" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Mental health</Link>
            <Link href="/health-technology-breakthroughs" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Health technology</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
