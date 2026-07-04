import Link from "next/link";

const clarityTopics = [
  {
    title: "Emotional distress",
    body: "A period of emotional strain may affect mood, sleep, attention, relationships, work, school, or family life. The first step is calm observation, not shame or panic.",
  },
  {
    title: "Stress and pressure",
    body: "Financial pressure, work demands, family responsibilities, examinations, bereavement, illness, or conflict can overwhelm a person’s normal coping pattern.",
  },
  {
    title: "Grief and loss",
    body: "Loss can affect people differently. Some people need family support, faith/community support, counselling, or clinical care depending on severity and duration.",
  },
  {
    title: "Anxiety-like concerns",
    body: "Persistent fear, worry, restlessness, avoidance, or physical tension may require a professional conversation where ordinary reassurance is no longer enough.",
  },
  {
    title: "Depression-like concerns",
    body: "Low mood, loss of interest, withdrawal, reduced functioning, or heavy tiredness may need careful support and professional assessment.",
  },
  {
    title: "Trauma and difficult experiences",
    body: "Violence, accidents, displacement, abuse, disasters, or severe conflict can affect memory, trust, sleep, confidence, and relationships.",
  },
  {
    title: "Substance-use concerns",
    body: "Alcohol, drugs, or medication misuse can affect health, safety, finances, family life, school, work, and legal exposure.",
  },
  {
    title: "Family and relationship strain",
    body: "Mental wellbeing often affects and is affected by the family environment. Support should be firm, respectful, and non-humiliating.",
  },
  {
    title: "School and workplace stress",
    body: "Institutions may need clear support pathways, confidentiality culture, and escalation rules when a person is struggling.",
  },
  {
    title: "When assessment may be needed",
    body: "A qualified professional can help determine whether a concern is temporary stress, a medical issue, a mental health condition, or a mixed situation.",
  },
];

const warningSigns = [
  {
    title: "Daily life is being affected",
    urgency: "Moderate",
    observe: "Changes in routine, hygiene, school, work, parenting, social participation, or family responsibilities.",
    avoid: "Do not dismiss the person as lazy, unserious, or spiritually weak.",
    contact: "A trusted doctor, counsellor, psychologist, psychiatrist, or appropriate support person.",
  },
  {
    title: "Sleep, appetite, or concentration is seriously disrupted",
    urgency: "Moderate",
    observe: "Long periods of poor sleep, very low appetite, inability to concentrate, or persistent exhaustion.",
    avoid: "Do not rely only on scolding, punishment, or forced silence.",
    contact: "A medical or mental health professional, especially if the disruption continues.",
  },
  {
    title: "Work or school functioning is declining",
    urgency: "Moderate",
    observe: "Absence, failing performance, withdrawal, missed deadlines, sudden loss of confidence, or complaints from teachers or supervisors.",
    avoid: "Do not expose private health information carelessly in public groups or offices.",
    contact: "School counsellor, workplace support, family doctor, or mental health professional.",
  },
  {
    title: "Family conflict is escalating",
    urgency: "High",
    observe: "Repeated shouting, fear, threats, unsafe home atmosphere, or family members feeling overwhelmed.",
    avoid: "Do not turn every concern into a public accusation or family humiliation.",
    contact: "Trusted family mediator, counsellor, qualified professional, or emergency support where safety is at risk.",
  },
  {
    title: "Substance use is creating harm",
    urgency: "High",
    observe: "Financial loss, work or school disruption, unsafe behaviour, health decline, or conflict linked to substance use.",
    avoid: "Do not ignore the pattern until it becomes a crisis.",
    contact: "A doctor, mental health professional, rehabilitation support, or trusted crisis support service.",
  },
  {
    title: "A person is withdrawing from normal support",
    urgency: "Moderate",
    observe: "Avoiding family, church, mosque, school, work, friends, meals, calls, or normal responsibilities.",
    avoid: "Do not shame the person publicly or mock them into returning.",
    contact: "Trusted family member, counsellor, doctor, or community support person.",
  },
  {
    title: "Behaviour becomes unusually confused or disorganised",
    urgency: "Critical",
    observe: "Sudden confusion, disorientation, extreme agitation, unusual speech, or behaviour that family cannot explain.",
    avoid: "Do not delay professional attention because of stigma.",
    contact: "Emergency medical service, hospital, doctor, or qualified mental health professional.",
  },
  {
    title: "A child or teenager shows serious distress",
    urgency: "High",
    observe: "Major change in behaviour, school refusal, intense fear, withdrawal, aggression, unexplained decline, or distress after a difficult event.",
    avoid: "Do not assume children are pretending or merely stubborn.",
    contact: "Parent/guardian, school counsellor, paediatrician, psychologist, or appropriate child mental health service.",
  },
  {
    title: "A caregiver is overwhelmed",
    urgency: "Moderate",
    observe: "Exhaustion, anger, helplessness, financial pressure, isolation, or inability to continue care safely.",
    avoid: "Do not leave one person to carry the entire burden without support.",
    contact: "Family support network, doctor, counsellor, social support service, or faith/community support leader.",
  },
  {
    title: "A person needs urgent professional attention",
    urgency: "Critical",
    observe: "Immediate safety concern, severe confusion, loss of control, medical emergency, or behaviour that may place anyone in danger.",
    avoid: "Do not attempt to manage a serious emergency alone.",
    contact: "Emergency medical care, hospital, police/security where lawful safety protection is required, or qualified crisis professionals.",
  },
];

const carePathways = [
  { title: "Counsellor", body: "May support conversation, coping, family communication, grief, stress, and practical emotional support.", question: "What kind of issue do you usually help with, and when do you refer to a doctor or specialist?" },
  { title: "Psychologist", body: "May provide assessment, therapy, behavioural support, and structured mental health intervention where available.", question: "What assessment or therapy approach may be appropriate for this situation?" },
  { title: "Psychiatrist", body: "A medical doctor specialised in mental health, often involved where medical assessment or medication may be needed.", question: "What diagnosis or treatment questions should the family understand?" },
  { title: "General doctor", body: "Can check physical health issues, medication effects, sleep, pain, substance use, and referral needs.", question: "Could a physical condition be contributing to this change?" },
  { title: "Hospital mental health department", body: "May support urgent assessment, admission decisions, medication review, and specialist care pathways.", question: "Is this an emergency, outpatient issue, or referral case?" },
  { title: "School counsellor", body: "Can help with student distress, learning pressure, bullying concerns, family communication, and referral awareness.", question: "What support can the school safely provide while protecting the student’s dignity?" },
  { title: "Workplace support", body: "Employers can support staff wellbeing through leave, privacy, workload review, and referral information.", question: "What support is available without exposing private health information unnecessarily?" },
  { title: "Faith/community support", body: "Can provide belonging, encouragement, family support, and practical help while respecting professional care needs.", question: "How can support be offered without shame, blame, or delay of professional attention?" },
  { title: "Family support meeting", body: "A structured family conversation can reduce confusion and distribute care responsibilities.", question: "Who should help, what is urgent, and what professional step should be taken next?" },
  { title: "Emergency care pathway", body: "Used where safety, confusion, severe distress, or medical crisis requires immediate professional intervention.", question: "Which hospital or emergency service can respond now?" },
];

const supportChecklist = [
  "Listen calmly before correcting.",
  "Avoid insults, mockery, labels, or public shame.",
  "Ask simple questions and allow pauses.",
  "Write down dates, changes noticed, and triggering events.",
  "Encourage professional help when the concern is persistent or serious.",
  "Preserve medical records if treatment has already started.",
  "Avoid force except where lawful emergency protection is necessary.",
  "Involve trusted support carefully and respectfully.",
  "Respect privacy where possible.",
  "Follow up after the first conversation.",
];

const institutionItems = [
  "Stigma reduction and dignified language",
  "Referral awareness and escalation pathways",
  "Student support and staff wellbeing systems",
  "Confidentiality culture",
  "Family education and caregiver support",
  "Responsible communication during crisis",
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

export default function MentalHealthClarityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-800">Health Clarity Institute · Public mental health education</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Mental Health Clarity Centre</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">Understanding emotional distress, mental wellbeing, family support, stigma, care pathways, and when professional help may be needed.</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">Mental health concerns are not always visible. Families, schools, workplaces, churches, and communities often need calm guidance on how to respond without shame, blame, silence, or panic.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#concerns" className="rounded-xl bg-sky-950 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-900">Understand Mental Health Concerns</a>
                <a href="#family-support" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50">View Family Support Guide</a>
                <a href="#pathways" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50">Explore Care Pathways</a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Safety notice</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">This centre provides public mental health education. It does not diagnose, treat, prescribe medication, provide therapy, or replace consultation with qualified mental health or medical professionals. If there is immediate danger, emergency services or qualified professionals should be contacted.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="concerns" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">What mental health clarity means</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">A calm language for concerns that families often struggle to name.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">These topics are not diagnoses. They are public education entry points that help people recognise when careful support or professional assessment may be needed.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clarityTopics.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">When to seek professional help</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Warning signs that deserve careful attention.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">The aim is not to label people. The aim is to notice risk early, preserve dignity, and connect people with appropriate support.</p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {warningSigns.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <UrgencyBadge level={item.urgency} />
                </div>
                <dl className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                  <div><dt className="font-semibold text-slate-950">What families can observe</dt><dd className="mt-1">{item.observe}</dd></div>
                  <div><dt className="font-semibold text-slate-950">What to avoid</dt><dd className="mt-1">{item.avoid}</dd></div>
                  <div><dt className="font-semibold text-slate-950">Who may need to be contacted</dt><dd className="mt-1">{item.contact}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="family-support" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">Family support guide</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Support should protect dignity, not increase fear.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Families often respond first. A calm first response can reduce confusion and make it easier to seek help.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-3 sm:grid-cols-2">
              {supportChecklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-900" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pathways" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">Mental health care pathways</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Different concerns may require different support routes.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">This directory helps users ask better questions before choosing a support pathway.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {carePathways.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
                <p className="mt-4 rounded-xl bg-white/10 p-3 text-sm leading-6 text-sky-100"><span className="font-semibold text-white">Question to ask: </span>{item.question}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">For institutions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Schools, churches, workplaces, and communities can reduce harm through literacy.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {institutionItems.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            <strong>Disclaimer:</strong> This centre provides public education only. It does not provide diagnosis, treatment, counselling, therapy, emergency intervention, or legal advice. Mental health outcomes depend on individual facts, professional assessment, timing, safety, family context, and available care.
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/centres" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">View all centres</Link>
            <Link href="/health-finance-insurance" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Health finance</Link>
            <Link href="/health-technology-breakthroughs" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Health technology</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
