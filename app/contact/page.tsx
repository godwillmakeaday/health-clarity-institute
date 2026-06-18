import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow } from "@/components/ui";
import { ArrowIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Verified Income Desk — for corrections, field-experiment suggestions, partnerships, and general questions.",
};

const routes: { title: string; body: string; subject: string }[] = [
  {
    title: "Corrections and updates",
    body: "Spotted an outdated claim, a broken proof signal, or a method that no longer works the way we described? We take this seriously and review every report.",
    subject: "Correction request",
  },
  {
    title: "Field experiment suggestions",
    body: "Have an income method you think we should test and document publicly? Tell us the hypothesis and we'll consider it for the Field Experiments page.",
    subject: "Field experiment suggestion",
  },
  {
    title: "Partnerships and press",
    body: "For media inquiries, research collaborations, or partnership proposals related to internet income literacy.",
    subject: "Partnership or press inquiry",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact the desk"
        lede="Whether you've found an outdated claim, have a method worth testing, or want to discuss a partnership, we'd like to hear from you."
      />

      <Container className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <Eyebrow>What is your message about?</Eyebrow>
            <div className="mt-6 space-y-4">
              {routes.map((r) => (
                <a
                  key={r.title}
                  href={`mailto:${site.email}?subject=${encodeURIComponent(r.subject)}`}
                  className="group flex items-start justify-between gap-4 rounded-lg border border-line bg-white p-6 no-underline shadow-card transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-cardHover"
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 font-serif text-lg text-navy group-hover:text-gold-dark">
                      {r.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-charcoal-soft">{r.body}</span>
                  </span>
                  <ArrowIcon size={16} className="mt-1.5 shrink-0 text-charcoal-soft transition-transform group-hover:translate-x-0.5 group-hover:text-gold-dark" />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-line bg-offwhite p-6">
              <h3 className="font-serif text-lg text-navy">Helping us help you</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                Please include the page or method in question, what you observed or are proposing, and the
                best way to reach you. The more specific the report, the faster we can act on it.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-line bg-white p-6 shadow-card">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-charcoal-soft/80">
                Reach us directly
              </p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-charcoal-soft">Email</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${site.email}`} className="font-medium text-navy">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-charcoal-soft">Desk</dt>
                  <dd className="mt-0.5 font-medium text-navy">{site.name}</dd>
                </div>
                <div>
                  <dt className="text-charcoal-soft">Response time</dt>
                  <dd className="mt-0.5 text-navy">We aim to reply within a few working days.</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
