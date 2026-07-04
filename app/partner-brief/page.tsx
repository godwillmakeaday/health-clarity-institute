import Link from "next/link";

const notCards = [
  "Not a hospital",
  "Not a clinic",
  "Not an emergency service",
  "Not a diagnostic tool",
  "Not a substitute for doctors",
  "Not a law firm",
  "Not an insurance company",
  "Not a regulator",
  "Not a therapy platform",
];

const isCards = [
  "Public health clarity platform",
  "Patient understanding resource",
  "Institutional health literacy support",
  "Nigerian-context health education platform",
  "Medical communication support layer",
  "Patient rights and documentation awareness platform",
  "Public education and partnership desk",
];

const problemCards = [
  "Patients do not always understand medical explanations",
  "Families may not know what questions to ask",
  "Consent may be signed without real understanding",
  "Hospital bills and insurance processes can confuse families",
  "Medical records may not be preserved properly",
  "Mental health concerns are often hidden by stigma",
  "Health technology and breakthrough claims may be misunderstood",
  "Public health messages may not translate into practical action",
];

const centres = [
  ["Conditions A–Z", "/conditions"],
  ["Symptoms A–Z", "/symptoms"],
  ["Specialist Centres", "/centres"],
  ["Clarity Centres", "/clarity-centres"],
  ["Medical Law & Patient Rights", "/medical-law-patient-rights"],
  ["Informed Consent Clarity Centre", "/informed-consent-clarity"],
  ["Mental Health Clarity Centre", "/mental-health-clarity"],
  ["Health Technology & Breakthroughs", "/health-technology-breakthroughs"],
  ["Health Finance & Insurance", "/health-finance-insurance"],
  ["Public Health Literacy", "/public-health-literacy"],
  ["Government Health Partnerships", "/government-health-partnerships"],
  ["Hospital Partnerships", "/hospital-partnerships"],
  ["Community Health Programmes", "/community-health-programmes"],
  ["Editorial Policy", "/editorial-policy"],
  ["Medical Review Policy", "/medical-review-policy"],
  ["Contributors & Reviewers", "/contributors"],
  ["Public Education Disclaimer", "/disclaimer"],
  ["Roadmap", "/roadmap"],
];

const publicValue = [
  "Improves patient understanding",
  "Supports better questions before care",
  "Strengthens informed consent education",
  "Improves documentation culture",
  "Supports health finance literacy",
  "Reduces avoidable confusion",
  "Supports hospital communication",
  "Supports community health education",
  "Improves trust between patients and institutions",
  "Creates a Nigerian health clarity knowledge base",
];

const governance = [
  "Public education only",
  "Professional review pathway",
  "Cautious language",
  "No fake medical claims",
  "No fake endorsements",
  "Nigerian context",
  "Corrections and updates",
  "Clear disclaimers",
  "Responsible partnerships",
];

const pathways = [
  "Reviewer",
  "Contributor",
  "Advisory partner",
  "Institutional partner",
  "Sponsor",
  "Programme partner",
  "Research/content partner",
];

const pilots = [
  {
    title: "Waiting-room patient education pilot",
    purpose: "Reduce confusion while patients wait for care.",
    audience: "Hospitals, clinics, patients, families",
    outputs: "Posters, short videos, question cards, plain-language explainers",
  },
  {
    title: "Informed consent clarity pilot",
    purpose: "Help patients prepare for treatment and procedure conversations.",
    audience: "Patients, families, hospitals",
    outputs: "Consent checklists, animated explainers, patient question sheets",
  },
  {
    title: "Health finance literacy pilot",
    purpose: "Help families ask clearer questions about bills, deposits, HMOs, and receipts.",
    audience: "Families, HMOs, employers, hospitals",
    outputs: "Billing questions guide, HMO approval explainer, documentation checklist",
  },
  {
    title: "Medical records awareness pilot",
    purpose: "Strengthen documentation culture before disputes or confusion arise.",
    audience: "Patients, caregivers, hospitals, employers",
    outputs: "Records checklist, discharge document guide, referral note explainer",
  },
  {
    title: "Community mental health literacy pilot",
    purpose: "Reduce stigma and improve responsible referral awareness.",
    audience: "Schools, churches, community groups, families",
    outputs: "Session outline, family support guide, responsible language cards",
  },
  {
    title: "School health literacy pilot",
    purpose: "Help students and school communities understand basic health navigation.",
    audience: "Schools, parents, youth groups",
    outputs: "School talks, printable guides, referral awareness materials",
  },
  {
    title: "Church/community health forum pilot",
    purpose: "Bring responsible health education into trusted community spaces.",
    audience: "Churches, community leaders, families",
    outputs: "Forum guide, discussion prompts, public education handouts",
  },
  {
    title: "HMO patient education pilot",
    purpose: "Clarify coverage, approval, exclusions, claims, and documentation processes.",
    audience: "HMOs, employers, enrollees",
    outputs: "HMO questions guide, approval pathway explainer, policy literacy resource",
  },
  {
    title: "Animated health explainer pilot",
    purpose: "Turn complex health decisions into calm, accessible visual explanations.",
    audience: "Patients, families, waiting rooms, community educators",
    outputs: "Short animations, subtitles, social clips, waiting-room versions",
  },
];

function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-[#fbf7ed] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b5c16]">
      {children}
    </span>
  );
}

function Card({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-serif text-xl text-[#0a3149]">{title}</h3>
      {children ? <div className="mt-4 text-sm leading-7 text-slate-600">{children}</div> : null}
    </article>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1d5f86]">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl text-[#0a3149] md:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function PartnerBriefPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="border-b border-slate-200 bg-[#f7f5ef] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#1d5f86]">Partner brief</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#0a3149] md:text-6xl">
            Health Clarity Institute Concept Brief
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            A public health clarity and patient understanding platform for Nigeria and Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/public-health-literacy" className="rounded-full bg-[#0a3149] px-6 py-3 text-sm font-semibold text-white">View Public Health Literacy</Link>
            <Link href="/clarity-centres" className="rounded-full border border-[#0a3149]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0a3149]">Explore Clarity Centres</Link>
            <Link href="/for-partners" className="rounded-full border border-[#0a3149]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0a3149]">Visit For Partners</Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Executive summary" title="Built for public clarity, not professional replacement.">
        <div className="rounded-[2rem] bg-[#0a3149] p-8 text-white md:p-12">
          <p className="text-lg leading-9 text-slate-100">
            Health Clarity Institute is a public health clarity and patient understanding platform designed to help patients, families, communities, and institutions understand health conditions, symptoms, hospital processes, informed consent, medical records, patient rights, health finance, insurance, health technology, mental health, and care pathways. It is built for education, navigation, and institutional communication support — not diagnosis, treatment, emergency care, or replacement of qualified professionals.
          </p>
        </div>
      </Section>

      <Section eyebrow="The problem" title="Health problems often become confusion problems.">
        <p className="max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
          In Nigeria and many African settings, health problems are often complicated by confusion, delay, misinformation, cost pressure, family decision-making, unclear consent, poor documentation, insurance questions, hospital communication gaps, and lack of plain-language health education.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((item) => <Card key={item} title={item} />)}
        </div>
      </Section>

      <Section eyebrow="The response" title="A structured public education and navigation layer.">
        <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-8">
          <p className="text-base leading-8 text-slate-700 md:text-lg">
            Health Clarity Institute organises health understanding into structured public education centres that help people ask better questions, preserve better records, understand professional pathways, reduce confusion, and engage health institutions more responsibly.
          </p>
        </div>
      </Section>

      <Section eyebrow="Definition" title="What Health Clarity Institute is">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {isCards.map((item) => <Card key={item} title={item} />)}
        </div>
      </Section>

      <Section eyebrow="Boundaries" title="What Health Clarity Institute is not">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {notCards.map((item) => <Card key={item} title={item} />)}
        </div>
      </Section>

      <Section eyebrow="Platform map" title="Current centres and pages">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {centres.map(([title, href]) => (
            <Link key={title} href={href} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-[#0a3149] transition hover:bg-[#f7f5ef]">
              {title} <span className="text-[#1d5f86]">→</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Public value" title="How the platform can help">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {publicValue.map((item) => <Card key={item} title={item} />)}
        </div>
      </Section>

      <Section eyebrow="Use cases" title="Institutional use cases">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card title="For Government">
            Public health literacy campaigns, community health education, primary healthcare communication, maternal and child health awareness, school health programmes, patient rights and consent education.
          </Card>
          <Card title="For Hospitals">
            Waiting-room explainers, informed consent preparation, discharge instruction support, patient records awareness, billing and insurance questions, family decision support.
          </Card>
          <Card title="For NGOs and Community Groups">
            Health literacy sessions, printable guides, WhatsApp education series, community health forums, mental health stigma reduction, rural health education.
          </Card>
          <Card title="For HMOs and Employers">
            Insurance literacy, employee health plan education, HMO approval explanation, health cost awareness, medical documentation guidance.
          </Card>
        </div>
      </Section>

      <Section eyebrow="Governance" title="Safety and trust principles">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {governance.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
              <Badge>Principle</Badge>
              <p className="mt-3 font-semibold text-[#0a3149]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Partnership pathways" title="How responsible collaboration can begin">
        <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((item) => <div key={item} className="rounded-2xl bg-white p-4 text-sm font-semibold text-[#0a3149] shadow-sm">{item}</div>)}
          </div>
          <p className="mt-8 text-sm leading-7 text-slate-600">
            Partnership discussions begin with public value, content quality, professional review, and responsible use. Ownership or investment discussions, if ever relevant, are separate and require proper legal, ethical, governance, and conflict-of-interest review.
          </p>
        </div>
      </Section>

      <Section eyebrow="Pilots" title="Possible pilot programmes">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pilots.map((pilot) => (
            <article key={pilot.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Badge>Pilot idea</Badge>
              <h3 className="mt-5 font-serif text-xl text-[#0a3149]">{pilot.title}</h3>
              <dl className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <div><dt className="font-semibold text-slate-800">Purpose</dt><dd>{pilot.purpose}</dd></div>
                <div><dt className="font-semibold text-slate-800">Target audience</dt><dd>{pilot.audience}</dd></div>
                <div><dt className="font-semibold text-slate-800">Possible outputs</dt><dd>{pilot.outputs}</dd></div>
                <div><dt className="font-semibold text-slate-800">Safeguard</dt><dd>Education only; professional and institutional boundaries must remain clear.</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next steps" title="A practical path for review and pilot discussion">
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {[
            "Review the live platform",
            "Identify public health literacy priorities",
            "Suggest corrections or missing topics",
            "Identify professional reviewers",
            "Select a pilot area",
            "Define content scope",
            "Review safety and disclaimer boundaries",
            "Launch a small pilot",
            "Collect feedback",
            "Improve and expand",
          ].map((step, index) => (
            <li key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d5f86]">Step {index + 1}</span>
              <p className="mt-3 font-semibold text-[#0a3149]">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#0a3149] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c79b]">Institutional discussion</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Review the platform with its boundaries clearly understood.</h2>
          <p className="mt-5 text-base leading-8 text-slate-200">
            This partner brief is for public education and institutional discussion. Health Clarity Institute does not diagnose, treat, provide emergency medical instruction, replace qualified healthcare professionals, replace legal advice, provide financial or insurance advice, or guarantee outcomes. All partnerships must respect professional standards, patient safety, applicable law, ethics, privacy, and institutional procedure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/public-health-literacy" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a3149]">View Public Health Literacy</Link>
            <Link href="/editorial-policy" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white">Review Governance Policy</Link>
            <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white">Contact the Institute</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
