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

const notItems: Card[] = [
  { title: "Not a hospital", body: "The platform does not provide clinical care, admission, emergency response, or medical procedures." },
  { title: "Not a diagnostic tool", body: "It does not determine what condition a person has or what treatment they need." },
  { title: "Not a substitute for doctors", body: "It helps people prepare better questions and understand professional conversations." },
  { title: "Not a law firm", body: "It explains legal and patient-rights issues educationally, but does not provide legal advice." },
  { title: "Not an insurance company", body: "It explains health finance and insurance questions but does not sell or guarantee coverage." },
  { title: "Not a regulator", body: "It does not license, discipline, supervise, or regulate healthcare institutions or professionals." }
];

const centres: Card[] = [
  { title: "Conditions A–Z", body: "Plain-language condition library for patient understanding.", href: "/conditions" },
  { title: "Symptoms A–Z", body: "Symptom education and care-seeking awareness.", href: "/symptoms" },
  { title: "Specialist Centres", body: "Area-of-care centres for related health guides.", href: "/centres" },
  { title: "Medical Law & Patient Rights", body: "Patient rights, records, consent, privacy, dignity, and complaints awareness.", href: "/medical-law-patient-rights" },
  { title: "Informed Consent Clarity", body: "Preparing patients and families for treatment explanations and consent conversations.", href: "/informed-consent-clarity" },
  { title: "Mental Health Clarity", body: "Mental health literacy, stigma reduction, family support, and care pathways.", href: "/mental-health-clarity" },
  { title: "Health Technology & Breakthroughs", body: "Explaining innovation, AI, devices, diagnostics, and breakthrough claims without hype.", href: "/health-technology-breakthroughs" },
  { title: "Health Finance & Insurance", body: "Hospital bills, receipts, estimates, insurance, HMO processes, and payment questions.", href: "/health-finance-insurance" },
  { title: "Governance & Review", body: "Editorial policy, medical review policy, contributors, disclaimer, and roadmap.", href: "/clarity-centres" }
];

const valueCards: Card[] = [
  { title: "Better patient understanding", body: "Clearer explanations help people approach care with better questions and less confusion." },
  { title: "Stronger hospital communication", body: "Patient education resources can reduce misunderstanding before conflict grows." },
  { title: "Clearer consent conversations", body: "Patients and families can prepare to ask about risks, alternatives, urgency, cost, and records." },
  { title: "Better documentation culture", body: "The platform encourages preservation of forms, results, receipts, referrals, and discharge documents." },
  { title: "Health finance awareness", body: "Families can learn what to ask about estimates, deposits, approvals, receipts, and insurance limits." },
  { title: "Responsible innovation literacy", body: "Breakthrough and technology claims are explained with caution, evidence-awareness, and patient safety in mind." }
];

const partnershipCards: Card[] = [
  { title: "Public education campaigns", body: "Plain-language campaigns around consent, maternal health, mental health, records, and patient navigation." },
  { title: "Waiting-room explainers", body: "Patient education videos, posters, checklists, and QR-linked guides for hospitals and clinics." },
  { title: "Community health literacy", body: "Programmes for schools, churches, NGOs, estates, workplaces, and local communities." },
  { title: "Institutional content support", body: "Structured guides for public health programmes, hospital communication, and health insurance literacy." },
  { title: "Animated health explainers", body: "Short public education videos for consent, billing, discharge, records, referrals, and care pathways." },
  { title: "Professional review network", body: "A pathway for clinicians, lawyers, finance specialists, and public health professionals to improve content quality." }
];

export default function ConceptBriefPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero eyebrow="Concept Brief" title="A Public Health Clarity and Patient Understanding Platform for Nigeria and Africa" subtitle="Health Clarity Institute helps patients, families, communities, and institutions understand health conditions, symptoms, medical decisions, consent, records, patient rights, health finance, insurance, technology, and care pathways.">
        <CTAButton href="/public-health-literacy">Public Health Literacy</CTAButton>
        <CTAButton href="/government-health-partnerships" variant="secondary">Government Partnerships</CTAButton>
      </Hero>
      <Section title="What Health Clarity Institute is" intro="Health Clarity Institute is a public health clarity platform designed to help ordinary people understand health-related issues before confusion, delay, misinformation, poor documentation, or poor communication creates avoidable harm.">
        <Notice>Its role is to support understanding, questions, documentation, and navigation. It does not replace qualified professional care.</Notice>
      </Section>
      <Section eyebrow="Boundaries" title="What it is not" intro="A serious public health clarity platform must be transparent about its limits."><CardGrid cards={notItems} /></Section>
      <Section eyebrow="Nigeria context" title="Why Nigeria needs it" intro="In Nigeria, many health problems are shaped not only by medical facts but also by cost, family decision-making, documentation, consent, hospital communication, public/private hospital access, transport, fear, misinformation, rights awareness, and institutional trust.">
        <Notice>Health Clarity Institute is positioned as a clarity layer around the health system — not as a replacement for hospitals, doctors, public agencies, or professional judgment.</Notice>
      </Section>
      <Section eyebrow="Current platform" title="Current platform centres" intro="The platform is organised into centres so users can move from confusion to the right kind of understanding."><CardGrid cards={centres} /></Section>
      <Section eyebrow="Public value" title="Why the platform matters" intro="The value is not only medical information; it is structured understanding for real-life decisions."><CardGrid cards={valueCards} /></Section>
      <Section eyebrow="Partnership possibilities" title="Ways institutions can work with the platform" intro="Partnership language must remain public-interest, educational, and responsible."><CardGrid cards={partnershipCards} /></Section>
      <Section eyebrow="Governance" title="Governance principles" intro="Trust depends on careful language, review pathways, transparent disclaimers, and responsible updates.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{["public education only", "professional review pathway", "cautious language", "no fake claims", "Nigerian context", "corrections and updates", "clear disclaimers", "responsible partnerships"].map((item) => <div key={item} className="rounded-2xl bg-slate-950 p-4 text-sm font-semibold capitalize text-white">{item}</div>)}</div>
      </Section>
    </main>
  );
}
