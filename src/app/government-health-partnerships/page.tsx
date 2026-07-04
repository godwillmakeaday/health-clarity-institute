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

const supportAreas: Card[] = [
  { title: "Public health literacy campaigns", body: "Plain-language campaign materials that help people understand what action to take and when to seek care." },
  { title: "Maternal and child health education", body: "Educational guides that support safer questions around pregnancy, child health, referrals, records, and care pathways." },
  { title: "Informed consent awareness", body: "Public education on understanding treatment explanations before signing, agreeing, refusing, or delaying." },
  { title: "Patient rights education", body: "Dignity, explanation, privacy, records, questions, and responsible complaint pathways." },
  { title: "Health finance and insurance literacy", body: "Education around estimates, receipts, HMO approvals, coverage questions, and financial documentation." },
  { title: "Mental health literacy", body: "Stigma reduction, family support, referral awareness, and institution-level response pathways." },
  { title: "Preventive health education", body: "Guides on early care-seeking, screening awareness, health checks, and responsible health behaviour." },
  { title: "Digital patient education", body: "Structured web pages, printable guides, QR resources, and animated explainers for public programmes." }
];

const useCases = ["state public health campaigns", "hospital waiting-room materials", "primary healthcare education", "school health programmes", "community leader training", "local language health explainers", "maternal health communication", "HMO/public insurance education", "medical records awareness", "emergency preparedness education"];
const steps = ["introductory discussion", "public health priority identification", "content scope definition", "professional review pathway", "pilot programme", "public education rollout", "feedback and improvement"];

export default function GovernmentHealthPartnershipsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero eyebrow="Public Health Literacy & Partnership Desk" title="Supporting Public Health Communication, Literacy, and Patient Understanding" subtitle="Health Clarity Institute can support ministries, agencies, and public health programmes with plain-language health education, patient navigation content, public awareness materials, and community health literacy resources.">
        <CTAButton href="/concept-brief">View Concept Brief</CTAButton>
        <CTAButton href="/public-health-literacy" variant="secondary">Public Health Literacy</CTAButton>
      </Hero>
      <Section title="Why government health communication needs clarity" intro="Public health messages often fail when people do not understand what action to take, where to go, what documents matter, what rights and responsibilities exist, or how to navigate care.">
        <Notice>No government partnership is claimed here. This page explains possible areas where Health Clarity Institute may support public health education if properly engaged.</Notice>
      </Section>
      <Section eyebrow="Areas of support" title="Where Health Clarity can support public agencies" intro="The platform can translate complex health communication needs into public-facing education materials."><CardGrid cards={supportAreas} /></Section>
      <Section eyebrow="Use cases" title="Possible government use cases" intro="These use cases are examples for discussion, not claims of existing government endorsement.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{useCases.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold capitalize text-slate-800">{item}</div>)}</div>
      </Section>
      <Section eyebrow="Partnership model" title="A responsible pathway for public collaboration" intro="A careful step-by-step approach protects public trust and professional standards.">
        <div className="grid gap-4 md:grid-cols-7">{steps.map((step, i) => <div key={step} className="rounded-2xl border border-sky-200 bg-sky-50 p-4"><p className="text-xs font-bold text-sky-800">STEP {i+1}</p><p className="mt-2 text-sm font-semibold capitalize text-slate-900">{step}</p></div>)}</div>
      </Section>
      <Section eyebrow="Boundaries" title="What the platform does not replace" intro="Public education must support official health systems, not confuse or compete with them.">
        <Notice>Health Clarity Institute does not replace government health agencies, hospitals, clinicians, emergency systems, or regulatory authorities. It can serve as a public education and clarity support platform.</Notice>
      </Section>
    </main>
  );
}
