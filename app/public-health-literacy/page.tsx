import Link from "next/link";

type Card = {
  title: string;
  body: string;
  label?: string;
  items?: string[];
  href?: string;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-800">{children}</p>;
}

function Hero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-650">{subtitle}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

function Section({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <div className="mt-3 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">{title}</h2>
        {intro ? <p className="text-base leading-7 text-slate-600">{intro}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function CardGrid({ cards, cols = "lg:grid-cols-3" }: { cards: Card[]; cols?: string }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {cards.map((card) => (
        <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          {card.label ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-sky-800">{card.label}</p> : null}
          <h3 className="font-serif text-2xl leading-snug text-slate-950">{card.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
          {card.items ? (
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {card.items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-800" /> <span>{item}</span></li>)}
            </ul>
          ) : null}
          {card.href ? <Link href={card.href} className="mt-5 inline-flex text-sm font-semibold text-sky-900 hover:text-sky-700">Open page →</Link> : null}
        </article>
      ))}
    </div>
  );
}

function Notice({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6 text-sm leading-7 text-slate-800 shadow-sm">{children}</div>;
}

function CTAButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return <Link href={href} className={variant === "primary" ? "rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm" : "rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm"}>{children}</Link>;
}

const whatWeDo: Card[] = [
  { title: "Plain-language health education", body: "Guides written to help people understand health issues without pretending to diagnose or treat.", label: "Education" },
  { title: "Patient navigation support", body: "Explains questions, pathways, records, consent, hospital processes, and when professional help may be needed.", label: "Navigation" },
  { title: "Nigerian health context", body: "Acknowledges local realities such as cost, family decisions, public and private hospitals, transport, documentation, and trust.", label: "Context" },
  { title: "Informed consent clarity", body: "Helps patients and families prepare for medical conversations before signing, agreeing, refusing, delaying, or asking questions.", label: "Consent" },
  { title: "Patient rights awareness", body: "Explains dignity, privacy, records, explanation, consent, complaints, and responsible institutional communication.", label: "Rights" },
  { title: "Medical records culture", body: "Encourages preservation of prescriptions, test results, referral notes, receipts, discharge summaries, and consent forms.", label: "Records" },
  { title: "Health finance and insurance awareness", body: "Supports better questions around bills, estimates, HMOs, approvals, receipts, deposits, and coverage limits.", label: "Finance" },
  { title: "Mental health literacy", body: "Reduces stigma and helps families, schools, workplaces, and communities identify support pathways responsibly.", label: "Mental Health" },
  { title: "Health technology clarity", body: "Explains AI tools, devices, digital health records, telemedicine, breakthroughs, and patient safety questions without hype.", label: "Innovation" }
];

const audiences: Card[] = [
  { title: "Patients", body: "People trying to understand symptoms, conditions, questions to ask, documents to keep, and when care may be urgent." },
  { title: "Families and caregivers", body: "Relatives who often make decisions under pressure and need calm guidance on records, consent, cost, and communication." },
  { title: "Schools and churches", body: "Community institutions that can improve responsible health literacy without replacing qualified care." },
  { title: "Hospitals and clinics", body: "Institutions that need patient education materials, consent explainers, and communication support." },
  { title: "HMOs and employers", body: "Organisations that need clearer health finance, staff coverage, and care-navigation education." },
  { title: "Public agencies and NGOs", body: "Programmes working on health campaigns, primary healthcare, mental health, maternal health, and community education." }
];

const priorities = ["reducing confusion", "improving patient questions", "strengthening documentation", "supporting hospital communication", "improving consent understanding", "reducing misinformation", "supporting community education", "encouraging timely care-seeking", "improving trust between patients and institutions"];

export default function PublicHealthLiteracyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero eyebrow="Public Health Literacy & Partnership Desk" title="Helping People Understand Health Before Confusion Becomes Harm" subtitle="Health Clarity Institute supports public health literacy by helping patients, families, communities, and institutions understand health conditions, symptoms, hospital processes, consent, records, rights, finance, insurance, mental health, technology, and care pathways.">
        <CTAButton href="/concept-brief">Read Concept Brief</CTAButton>
        <CTAButton href="/for-partners" variant="secondary">For Partners</CTAButton>
      </Hero>
      <Section title="Why Public Health Literacy Matters" intro="Many health problems become worse because people do not understand what is happening, what questions to ask, what documents matter, when delay is risky, or where professional help should be sought.">
        <Notice>Public health literacy is not a replacement for doctors, hospitals, nurses, mental health professionals, emergency services, lawyers, insurers, or regulators. It is a public understanding layer that helps people approach health decisions more responsibly.</Notice>
      </Section>
      <Section eyebrow="What the platform does" title="Health clarity across the patient journey" intro="The platform organises real-life health confusion into structured centres, guides, checklists, and institutional education pathways.">
        <CardGrid cards={whatWeDo} />
      </Section>
      <Section eyebrow="Who it helps" title="Designed for patients, families, communities, and institutions" intro="Public health literacy is strongest when individuals and institutions share a common language of clarity, records, timing, questions, rights, and professional care pathways.">
        <CardGrid cards={audiences} />
      </Section>
      <Section eyebrow="Boundaries" title="Public education boundaries" intro="Health Clarity Institute must remain safe, responsible, and clear about what it does not do.">
        <Notice>Health Clarity Institute does not diagnose, treat, prescribe, provide emergency medical instruction, replace qualified healthcare professionals, replace legal advice, or guarantee medical, financial, insurance, or institutional outcomes.</Notice>
      </Section>
      <Section eyebrow="Priorities" title="Public health literacy priorities" intro="The platform’s long-term work is to make health decisions easier to understand before confusion becomes harm.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{priorities.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium capitalize text-slate-800">{item}</div>)}</div>
      </Section>
    </main>
  );
}
