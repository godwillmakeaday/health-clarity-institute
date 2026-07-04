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

const audiences: Card[] = [
  { title: "Families", body: "Health decisions often begin at home, where calm guidance can reduce panic and delay." },
  { title: "Parents and youth groups", body: "Simple health literacy can support better questions around child, adolescent, and family wellbeing." },
  { title: "Churches and mosques", body: "Faith communities can support responsible education while encouraging professional care." },
  { title: "Schools", body: "Schools need safe health literacy for students, parents, teachers, and administrators." },
  { title: "Workplaces", body: "Staff wellbeing, health insurance, mental health awareness, and medical leave questions need clarity." },
  { title: "Community associations", body: "Local groups can use plain-language guides for outreach, prevention, and navigation." }
];
const themes: Card[] = [
  { title: "When to seek care", body: "Helping communities understand delay, warning signs, and the value of timely consultation." },
  { title: "Understanding symptoms", body: "Plain-language explanations that reduce confusion without diagnosing." },
  { title: "Maternal health awareness", body: "Encouraging better questions, records, consent understanding, and care pathway awareness." },
  { title: "Mental health stigma reduction", body: "Promoting dignity, support pathways, and professional help-seeking where needed." },
  { title: "Health finance preparedness", body: "Encouraging families to understand bills, insurance, receipts, and emergency planning." },
  { title: "Misinformation awareness", body: "Helping communities recognise health claims that require professional verification." },
  { title: "Informed consent basics", body: "Preparing people to ask about risks, alternatives, urgency, cost, and consequences." },
  { title: "Medical records awareness", body: "Explaining why prescriptions, test results, referrals, receipts, and discharge summaries matter." }
];
const formats = ["short talks", "printable guides", "animated videos", "WhatsApp education series", "school health literacy sessions", "church/community health forums", "hospital navigation workshops", "family health planning guides", "public health campaign toolkits"];

export default function CommunityHealthProgrammesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero eyebrow="Public Health Literacy & Partnership Desk" title="Bringing Health Clarity to Families, Schools, Churches, Workplaces, and Communities" subtitle="Health Clarity Institute can support community health literacy through simple guides, discussion materials, animated explainers, school programmes, church/community sessions, and family health decision support.">
        <CTAButton href="/public-health-literacy">Public Health Literacy</CTAButton>
        <CTAButton href="/concept-brief" variant="secondary">Concept Brief</CTAButton>
      </Hero>
      <Section title="Why communities need health clarity" intro="Many people first discuss health problems with family members, neighbours, religious leaders, school authorities, workplace colleagues, or community groups before reaching a health facility. These spaces need responsible health literacy.">
        <Notice>Community health programmes should encourage timely professional consultation. They must not become informal diagnosis, treatment, emergency response, or professional replacement systems.</Notice>
      </Section>
      <Section eyebrow="Audiences" title="Community audiences" intro="Different community spaces need different language, but the same commitment to safety and responsible guidance."><CardGrid cards={audiences} /></Section>
      <Section eyebrow="Themes" title="Programme themes" intro="Health clarity can be adapted into practical topics for families, schools, churches, workplaces, and local groups."><CardGrid cards={themes} /></Section>
      <Section eyebrow="Formats" title="Programme formats" intro="The same content can be converted into live talks, guides, digital series, animated explainers, or public health toolkits.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{formats.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold capitalize text-slate-800">{item}</div>)}</div>
      </Section>
      <Section eyebrow="Safeguards" title="Safeguards for community programmes" intro="Public trust requires clear limits.">
        <Notice>All community programmes must remain educational. They should encourage timely professional consultation and must not replace doctors, nurses, hospitals, mental health professionals, emergency services, or qualified advisers.</Notice>
      </Section>
    </main>
  );
}
