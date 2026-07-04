import Link from "next/link";

export const metadata = {
  title: "Informed Consent Clarity Centre | Health Clarity Institute",
  description:
    "Patient education for understanding medical explanations before signing, agreeing, refusing, delaying, or asking further questions.",
};

const consentMeaning = [
  {
    title: "Understanding the proposed treatment",
    body: "Patients should know what treatment, test, surgery, investigation, admission, referral, or procedure is being proposed in plain language.",
  },
  {
    title: "Knowing the reason for treatment",
    body: "The explanation should connect the recommendation to the suspected condition, diagnosis, symptoms, risk, or clinical concern.",
  },
  {
    title: "Knowing common risks and possible complications",
    body: "Consent conversations should not create panic, but they should help patients understand important risks and what may happen afterwards.",
  },
  {
    title: "Knowing available alternatives",
    body: "Where alternatives exist, patients should understand the reasonable options, including referral, monitoring, medication, procedure, or second explanation.",
  },
  {
    title: "Understanding refusal or delay",
    body: "Patients and families should be told what may happen if treatment is refused, delayed, interrupted, or transferred to another facility.",
  },
  {
    title: "Having space to ask questions",
    body: "A consent process should allow calm questions, clarification, and plain-language explanation, especially where family members are confused.",
  },
  {
    title: "Giving consent freely",
    body: "Consent should not be obtained through improper pressure, intimidation, silence, confusion, or unexplained urgency.",
  },
  {
    title: "Knowing who is responsible",
    body: "Where relevant, patients should know the team, department, doctor, clinician, or supervising professional involved in the treatment pathway.",
  },
];

const patientQuestions = [
  "What is my diagnosis or suspected condition?",
  "What treatment, test, surgery, or procedure is being proposed?",
  "Why is it necessary?",
  "Is it urgent or can it wait?",
  "What are the common risks?",
  "What serious risks should I understand?",
  "What alternatives are available?",
  "What happens if I refuse or delay?",
  "Who will perform or supervise the procedure?",
  "What will it cost, and what may create additional cost?",
  "Will I receive a copy of the consent form, prescription, test result, referral note, or discharge summary?",
  "Who can my family contact if there is confusion?",
];

const warningSigns = [
  {
    title: "You are asked to sign without explanation",
    why: "A signature without understanding may create confusion later about what was agreed, refused, or authorised.",
    ask: "Please explain what this form means, what treatment is proposed, and what risk I should understand.",
    preserve: "Copy or photo of the form where lawful, names of staff involved, date, time, receipts, and related test results.",
    urgency: "High",
  },
  {
    title: "You are rushed without emergency reason",
    why: "Urgency may be real, but unexplained pressure can prevent proper questions and family understanding.",
    ask: "Is this an emergency? What may happen if we take a short time to understand?",
    preserve: "Timeline of events, messages, bills, admission notes where available, and names/designations of explainers.",
    urgency: "High",
  },
  {
    title: "The form is blank or incomplete",
    why: "Blank or incomplete forms can make it unclear what procedure, risk, date, patient, or responsible person the consent relates to.",
    ask: "Can the form be completed and explained before I sign?",
    preserve: "The incomplete form details, date, time, and any communication around why it was presented.",
    urgency: "Critical",
  },
  {
    title: "The risks are dismissed without explanation",
    why: "Patients do not need every remote possibility, but important risks should not be waved away when the decision is serious.",
    ask: "What are the common risks and the serious risks I should know before deciding?",
    preserve: "Procedure name, information leaflets, test results, referral notes, and written questions asked.",
    urgency: "High",
  },
  {
    title: "You do not understand the language used",
    why: "Medical terms, English-only explanations, or rushed language can make consent unclear for patients and families.",
    ask: "Can this be explained in simpler words or in a language I understand?",
    preserve: "Names of those present, language barriers noted, documents given, and the final explanation received.",
    urgency: "Moderate",
  },
  {
    title: "No one explains alternatives",
    why: "Where options exist, patients may need to understand other pathways before accepting one treatment plan.",
    ask: "Are there other reasonable options, referrals, medicines, tests, or observation plans?",
    preserve: "Diagnosis, proposed treatment, prescriptions, referral options, and cost estimates where provided.",
    urgency: "Moderate",
  },
  {
    title: "You are threatened or pressured",
    why: "Fear-based decision-making can damage trust and may later create dispute about whether the agreement was voluntary.",
    ask: "Can we speak calmly with the responsible clinician or patient relations desk?",
    preserve: "Messages, witnesses, dates, names, and any written demand or threat.",
    urgency: "Critical",
  },
  {
    title: "Your questions are treated as disrespect",
    why: "Patients can ask reasonable questions without attacking healthcare workers. Communication breakdown can escalate avoidably.",
    ask: "We are not refusing care; we are asking for clear explanation so we can understand.",
    preserve: "Questions written down, names of persons approached, time of discussion, and documents received.",
    urgency: "Moderate",
  },
  {
    title: "Family members are confused about what is happening",
    why: "Confusion is common during admission, surgery, emergency care, transfer, or complications, and can lead to later mistrust.",
    ask: "Who is the right person to explain the current situation and next step to the family?",
    preserve: "Family notes, names/designations, times of updates, receipts, prescriptions, and test results.",
    urgency: "High",
  },
  {
    title: "You are not told who is responsible",
    why: "A patient may interact with several staff members. It is important to know the team or person responsible for explanations.",
    ask: "Who is the doctor, department, or clinician responsible for this decision?",
    preserve: "Names on forms, staff badges where visible, department name, ward/unit, and date/time of explanation.",
    urgency: "Moderate",
  },
  {
    title: "Records, test results, or prescriptions are not clearly provided",
    why: "Clear records help patients understand care, seek follow-up, obtain referral, and avoid repeating confusion.",
    ask: "Can I receive the relevant prescription, result, referral note, discharge summary, or appointment record?",
    preserve: "Receipts, patient card number, test request forms, result slips, prescription notes, and discharge documents.",
    urgency: "High",
  },
  {
    title: "The hospital refuses to clarify what was done",
    why: "Refusal to clarify a procedure, medication, complication, referral, or discharge decision can become a patient-rights and documentation issue.",
    ask: "Please direct us to the proper office or responsible person for explanation and records.",
    preserve: "Written requests, complaint letters, names, dates, receipts, discharge notes, and any response received.",
    urgency: "Critical",
  },
];

const explainers = [
  {
    title: "What Informed Consent Means",
    description: "A plain-language introduction to consent as understanding, voluntary agreement, and explanation — not merely a signature.",
    duration: "4 min",
    audience: "Patient",
  },
  {
    title: "Before You Sign a Surgery Consent Form",
    description: "Questions patients and families may ask before planned surgery, including risks, alternatives, cost, and aftercare.",
    duration: "6 min",
    audience: "Family",
  },
  {
    title: "Questions to Ask Before a Caesarean Section",
    description: "A calm guide to urgency, alternatives, anaesthesia, blood, theatre preparation, and family communication.",
    duration: "6 min",
    audience: "Patient",
  },
  {
    title: "Understanding Anaesthesia Consent",
    description: "A simple explanation of why anaesthesia is discussed separately and what patients may need to ask.",
    duration: "5 min",
    audience: "Public",
  },
  {
    title: "Blood Transfusion Consent",
    description: "A careful explainer on why blood may be proposed, what should be explained, and what records matter.",
    duration: "5 min",
    audience: "Patient",
  },
  {
    title: "Emergency Treatment and Family Decisions",
    description: "How families can stay calm, ask what is urgent, and understand decisions made under pressure.",
    duration: "7 min",
    audience: "Family",
  },
  {
    title: "Discharge Against Medical Advice",
    description: "What patients should understand before leaving care against advice and what documents should be clear.",
    duration: "5 min",
    audience: "Patient",
  },
  {
    title: "Referral to Another Hospital",
    description: "How to understand why referral is advised, what documents to carry, and what questions to ask before transfer.",
    duration: "5 min",
    audience: "Family",
  },
  {
    title: "Medical Records and Test Results",
    description: "A practical guide to preserving prescriptions, test results, scan reports, discharge summaries, and referral notes.",
    duration: "4 min",
    audience: "Public",
  },
  {
    title: "When a Patient Cannot Speak for Themselves",
    description: "A family-facing explainer on communication, capacity concerns, emergency decisions, and responsible documentation.",
    duration: "6 min",
    audience: "Family",
  },
  {
    title: "Consent for Children and Dependants",
    description: "A careful introduction to family involvement, guardianship questions, treatment explanation, and child-focused care.",
    duration: "5 min",
    audience: "Family",
  },
  {
    title: "Understanding Procedure Risks Without Panic",
    description: "How to listen to risk explanations calmly, ask useful questions, and avoid fear-based decisions.",
    duration: "4 min",
    audience: "Public",
  },
];

const situations = [
  {
    title: "Surgery",
    understand: "The reason for surgery, expected benefit, common risks, serious risks, recovery plan, and who will be involved.",
    documents: "Consent form, operation note where available, investigation results, receipts, discharge summary.",
    questions: "Why surgery now? What are the alternatives? What happens after surgery?",
  },
  {
    title: "Caesarean section",
    understand: "Whether it is planned or urgent, maternal and baby concerns, anaesthesia, blood preparation, and aftercare.",
    documents: "Consent form, antenatal records, scan results, theatre notes where available, discharge summary.",
    questions: "Is this urgent? What risk is being prevented? What should the family prepare for?",
  },
  {
    title: "Anaesthesia",
    understand: "The type of anaesthesia, why it is needed, important risks, fasting instructions, and monitoring after the procedure.",
    documents: "Anaesthesia consent, pre-anaesthesia review, medication list, allergy notes.",
    questions: "What type is planned? What should I disclose? What happens after I wake up?",
  },
  {
    title: "Blood transfusion",
    understand: "Why blood is proposed, urgency, likely benefit, alternatives where relevant, and monitoring plan.",
    documents: "Consent note, blood request form, lab results, receipts, transfusion record where available.",
    questions: "Why is blood needed? How urgent is it? What monitoring will happen?",
  },
  {
    title: "Diagnostic tests",
    understand: "Why the test is requested, what it may show, preparation needed, cost, and how results will be communicated.",
    documents: "Test request, receipt, result slip, scan report, follow-up instruction.",
    questions: "What is this test looking for? When will the result be ready? Who explains it?",
  },
  {
    title: "Emergency treatment",
    understand: "What is immediately dangerous, what must happen now, what can wait, and how family updates will be handled.",
    documents: "Emergency card, admission note where available, receipts, prescriptions, referral or transfer note.",
    questions: "What is urgent now? Who is leading care? What should the family provide?",
  },
  {
    title: "Admission",
    understand: "Reason for admission, expected investigations, ward/unit, responsible team, cost pathway, and family communication channel.",
    documents: "Admission documents, patient card, receipts, prescriptions, test requests.",
    questions: "Why admission? Which unit is responsible? What documents should we keep?",
  },
  {
    title: "Discharge",
    understand: "Diagnosis, treatment given, medicines, warning symptoms, follow-up date, and when to return.",
    documents: "Discharge summary, prescriptions, appointment card, test results, receipts.",
    questions: "What exactly was treated? What medicines continue? What signs require return?",
  },
  {
    title: "Referral",
    understand: "Why transfer is advised, receiving facility, urgency, documents to carry, and risks of delay.",
    documents: "Referral letter, test results, scan reports, prescriptions, receipts, discharge/transfer note.",
    questions: "Why this facility? How urgent is the referral? What documents must go with us?",
  },
  {
    title: "Mental capacity concerns",
    understand: "Whether the patient can understand and decide, who is involved, and how decisions are documented.",
    documents: "Assessment notes where available, family details, admission records, medication list.",
    questions: "Can the patient decide? Who explains to family? How is the decision recorded?",
  },
  {
    title: "Treatment of minors",
    understand: "Who is responsible for giving permission, the child’s welfare, urgency, and what is being explained to caregivers.",
    documents: "Guardian details, consent form, clinic card, prescriptions, test results.",
    questions: "Who needs to approve? Is it urgent? What records should the caregiver keep?",
  },
  {
    title: "Medical records request",
    understand: "Which records are needed, why they are needed, proper request channel, and privacy boundaries.",
    documents: "Request letter, ID where required, patient number, receipts, prior results.",
    questions: "Which office handles records? What format is available? When can we collect?",
  },
  {
    title: "High-risk medication",
    understand: "Why the medicine is needed, dosage, major cautions, side effects to report, and follow-up monitoring.",
    documents: "Prescription, medication chart where available, lab results, appointment record.",
    questions: "How should this be taken? What should I avoid? What side effects require attention?",
  },
  {
    title: "Invasive procedures",
    understand: "What part of the body is involved, why the procedure is needed, discomfort, risk, aftercare, and alternatives.",
    documents: "Consent form, procedure note, test results, receipts, aftercare instruction.",
    questions: "What exactly will be done? What should I expect afterwards?",
  },
  {
    title: "Post-treatment complications",
    understand: "What complication is suspected, what is being done, whether referral is needed, and how communication will continue.",
    documents: "Treatment notes where available, prescriptions, test results, discharge summary, complaint or clarification letters.",
    questions: "What changed? What is the next step? Who will explain the plan to the family?",
  },
];

const familySupport = [
  "Stay calm and separate urgent medical decisions from anger or confusion.",
  "Ask for the name and designation of the person explaining the situation.",
  "Write down dates, times, departments, and the sequence of events.",
  "Request a plain-language explanation rather than arguing over medical terms.",
  "Ask what is urgent now and what can wait for a fuller explanation.",
  "Preserve documents, receipts, test results, prescriptions, referral notes, and discharge papers.",
  "Avoid threats, insults, or confrontation that can make communication harder.",
  "Ask for escalation to the responsible clinician, patient relations desk, or appropriate hospital office where communication remains unclear.",
];

const institutionTargets = [
  "Hospitals",
  "Clinics",
  "NGOs",
  "Churches",
  "Schools",
  "Patient support groups",
  "Community health educators",
  "Public health programmes",
];

const institutionSupports = [
  "Patient education",
  "Waiting-room video explainers",
  "Consent communication checklists",
  "Patient-rights awareness",
  "Complaint reduction",
  "Trust-building",
  "Documentation culture",
  "Health literacy outreach",
];

const records = [
  "Consent forms",
  "Prescriptions",
  "Test results",
  "Scan reports",
  "Receipts",
  "Referral letters",
  "Discharge summaries",
  "Admission notes where available",
  "Appointment cards",
  "Messages from hospital staff",
  "Complaint letters",
  "Photographs of visible documents or property where appropriate and lawful",
];

const urgencyStyles: Record<string, string> = {
  Low: "border-slate-200 bg-slate-50 text-slate-700",
  Moderate: "border-amber-200 bg-amber-50 text-amber-800",
  High: "border-orange-200 bg-orange-50 text-orange-800",
  Critical: "border-red-200 bg-red-50 text-red-800",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#0b4a6f]">
      {children}
    </p>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default function InformedConsentClarityPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-x-0 top-0 h-2 bg-[#0b3551]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <SectionLabel>Patient clarity • Consent education • Nigerian context</SectionLabel>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#0b2538] sm:text-5xl lg:text-6xl">
              Informed Consent Clarity Centre
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
              Helping patients and families understand medical explanations before they sign,
              agree, refuse, delay, or proceed.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Consent is not only a signature. It is understanding, voluntary agreement,
              and a clear explanation of what is being proposed, why it matters, what the
              risks are, what alternatives exist, and what may happen next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#before-you-sign"
                className="rounded-full bg-[#0b3551] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#08293f]"
              >
                Prepare Before You Sign
              </a>
              <a
                href="#patient-questions"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-[#0b3551] transition hover:border-[#0b3551]"
              >
                View Patient Questions
              </a>
              <a
                href="#explainers"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-[#0b3551] transition hover:border-[#0b3551]"
              >
                Explore Consent Explainers
              </a>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-[#0b3551] to-[#123f5f] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
              Consent readiness pathway
            </p>
            <div className="mt-6 space-y-4">
              {[
                "What is being proposed?",
                "Why is it necessary?",
                "What risks and alternatives should I understand?",
                "What documents should be preserved?",
                "Who explains next steps if there is confusion?",
              ].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0b3551]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-blue-50">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-[#0b3551]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em]">Institutional safety notice</p>
          <p className="mt-3 text-base leading-7">
            This centre provides public health education and patient communication guidance.
            It does not replace the explanation that must be given by a qualified healthcare
            provider, and it is not a substitute for medical or legal advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Meaning</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b2538] sm:text-4xl">
            What informed consent means
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Informed consent is a communication process. The patient or family should
            understand the proposed decision well enough to ask questions and respond
            responsibly within the realities of the medical situation.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {consentMeaning.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-[#0b2538]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="before-you-sign" className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionLabel>Preparation</SectionLabel>
            <h2 id="patient-questions" className="text-3xl font-semibold tracking-tight text-[#0b2538] sm:text-4xl">
              Before You Sign: Patient Questions Checklist
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              These questions help patients and families prepare for a proper medical
              conversation. They should be asked calmly and respectfully, especially when
              care is urgent or emotions are high.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {patientQuestions.map((question, index) => (
              <div key={question} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4a6f]">
                  Question {index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Warning signs</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b2538] sm:text-4xl">
            Consent warning signs
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            A warning sign does not automatically mean wrongdoing. It means the patient,
            family, hospital, or professional team may need clearer communication,
            better documentation, or faster escalation.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {warningSigns.map((item) => (
            <Card key={item.title}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-semibold text-[#0b2538]">{item.title}</h3>
                <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${urgencyStyles[item.urgency]}`}>
                  {item.urgency}
                </span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Why it matters</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.why}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">What to ask</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.ask}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">What to preserve</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.preserve}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="explainers" className="bg-[#0b2538] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-200">
              Animated explainer library
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for future patient education videos
            </h2>
            <p className="mt-4 text-base leading-8 text-blue-100">
              These placeholder cards create space for short animated videos that can be
              used by patients, families, hospitals, clinics, NGOs, schools, and community
              health educators.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {explainers.map((video) => (
              <div key={video.title} className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-sm backdrop-blur">
                <div className="flex h-36 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-[#0b2538]">
                    ▶
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-50">
                    {video.duration}
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-50">
                    {video.audience}
                  </span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                    Explainer coming soon
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{video.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Directory</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b2538] sm:text-4xl">
            Consent situations directory
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Consent clarity matters in many ordinary medical situations, especially when
            treatment is serious, invasive, urgent, expensive, or likely to require follow-up.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {situations.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold text-[#0b2538]">{item.title}</h3>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
                <p><span className="font-bold text-slate-900">Understand: </span>{item.understand}</p>
                <p><span className="font-bold text-slate-900">Documents: </span>{item.documents}</p>
                <p><span className="font-bold text-slate-900">Questions: </span>{item.questions}</p>
              </div>
              <Link
                href="/patient-rights"
                className="mt-5 inline-flex text-sm font-semibold text-[#0b4a6f] hover:text-[#0b2538]"
              >
                Related centre: Patient Rights →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionLabel>Family decision support</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0b2538] sm:text-4xl">
              Families often decide under pressure
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Admission, emergency care, surgery, complications, and referral can place
              families under sudden emotional and financial pressure. The goal is not to
              delay necessary care, but to create calm understanding and responsible records.
            </p>
          </div>
          <div className="space-y-3">
            {familySupport.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0b4a6f]" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#0b3551] p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-200">
                For hospitals and health institutions
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A communication layer for patient trust
              </h2>
              <p className="mt-4 text-base leading-8 text-blue-100">
                The centre can support hospitals, clinics, NGOs, churches, schools, and
                community health programmes with calm patient education materials that
                encourage better questions, clearer records, and more respectful communication.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold">Target users</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {institutionTargets.map((item) => (
                    <span key={item} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold">Institutional support</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {institutionSupports.map((item) => (
                    <span key={item} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionLabel>Documentation and records</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0b2538] sm:text-4xl">
              Documents patients and families should preserve
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Records help patients understand care, follow instructions, seek referral,
              raise questions responsibly, and avoid confusion when different people explain
              different parts of treatment.
            </p>
            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
              Do not secretly record in places where it may breach privacy, hospital rules,
              or the rights of other patients. Ask for proper documentation where possible.
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {records.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm font-medium leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <SectionLabel>Final disclaimer</SectionLabel>
          <p className="text-base leading-8 text-slate-700">
            This centre provides public health education and patient communication guidance.
            It does not diagnose, treat, provide emergency medical instruction, or replace
            consultation with qualified healthcare professionals. It also does not provide
            legal advice. Medical and legal outcomes depend on facts, records, timing,
            professional judgment, applicable law, and institutional procedure.
          </p>
        </div>
      </section>
    </main>
  );
}
