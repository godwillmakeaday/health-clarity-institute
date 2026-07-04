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

const hospitalUses: Card[] = [
  { title: "Waiting-room education", body: "Calm patient education materials for common hospital questions and care pathways." },
  { title: "Informed consent explainers", body: "Plain-language preparation guides for treatment explanations and consent conversations." },
  { title: "Discharge instruction guides", body: "Materials that help patients understand follow-up, warning signs, medication questions, and records." },
  { title: "Referral explanation materials", body: "Guides that explain why referral may happen and what documents patients should preserve." },
  { title: "Patient rights education", body: "Support for dignity, privacy, records, explanation, questions, and responsible complaint awareness." },
  { title: "Billing and insurance questions", body: "Checklists to help families understand estimates, receipts, HMO approvals, and payment documentation." },
  { title: "Family decision support", body: "Guidance for families making decisions under pressure without panic or confrontation." },
  { title: "Mental health referral awareness", body: "Responsible guidance on support pathways and when professional assessment may be needed." }
];
const resources = ["printable patient questions checklist", "animated consent videos", "admission process guide", "discharge checklist", "medication instruction explainer", "referral pathway guide", "patient complaint pathway explainer", "HMO approval explanation guide", "medical record preservation guide", "family communication checklist"];
const benefits: Card[] = [
  { title: "Reduced confusion", body: "Patients and families understand basic pathways before tension escalates." },
  { title: "Better patient questions", body: "Clear guides help patients ask relevant questions calmly and respectfully." },
  { title: "Improved trust", body: "Transparent education supports a stronger relationship between institutions and the public." },
  { title: "Clearer documentation culture", body: "Families know which documents, receipts, referrals, and summaries matter." },
  { title: "Better consent conversations", body: "Patients arrive better prepared to understand risks, alternatives, and next steps." },
  { title: "Reduced avoidable conflict", body: "Many disputes begin as confusion; clarity can reduce avoidable escalation." }
];

export default function HospitalPartnershipsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero eyebrow="Public Health Literacy & Partnership Desk" title="Helping Hospitals Communicate Clearly With Patients and Families" subtitle="Health Clarity Institute can support hospitals, clinics, and healthcare institutions with patient education, consent explainers, medical records awareness, billing clarity, and waiting-room communication resources.">
        <CTAButton href="/informed-consent-clarity">Consent Centre</CTAButton>
        <CTAButton href="/for-partners" variant="secondary">For Partners</CTAButton>
      </Hero>
      <Section title="Why hospital communication matters" intro="Many patient-hospital conflicts begin from misunderstanding, poor documentation, unclear consent, billing confusion, family anxiety, or lack of plain-language explanation.">
        <Notice>This page does not claim any hospital partnership. It outlines how Health Clarity Institute may support patient education and communication clarity where institutions choose to engage responsibly.</Notice>
      </Section>
      <Section eyebrow="Hospital use" title="What hospitals can use" intro="Materials can support patient understanding before, during, and after hospital encounters."><CardGrid cards={hospitalUses} /></Section>
      <Section eyebrow="Resource ideas" title="Hospital resource ideas" intro="These formats can be adapted into web pages, QR codes, printable guides, or animated explainers.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{resources.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium capitalize text-slate-800 shadow-sm">{item}</div>)}</div>
      </Section>
      <Section eyebrow="Benefits" title="Potential benefits for hospitals" intro="Clearer education can support both patients and institutions."><CardGrid cards={benefits} /></Section>
      <Section eyebrow="Boundaries" title="Clinical boundaries" intro="The platform supports communication, not clinical control.">
        <Notice>The platform does not interfere with clinical judgment, hospital policy, emergency care, diagnosis, or treatment. It supports patient education and communication clarity.</Notice>
      </Section>
    </main>
  );
}
