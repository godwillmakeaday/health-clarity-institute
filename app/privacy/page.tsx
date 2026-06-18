import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What The Verified Income Desk collects, why, and how to reach us with privacy questions.",
};

const points: { heading: string; body: string }[] = [
  {
    heading: "What we collect",
    body: "This site does not require an account, and we do not collect personal information beyond what you send us directly — for example, your email address if you contact the desk. Standard server and analytics logs may record non-identifying technical data such as approximate location, device type, and pages visited, used only to understand how the site is used.",
  },
  {
    heading: "Cookies",
    body: "We use minimal cookies, limited to what is necessary for basic site functionality and aggregate, privacy-respecting analytics. We do not use cookies to build advertising profiles or sell data to third parties.",
  },
  {
    heading: "Third-party links",
    body: "Method pages and briefings link to external tools, platforms, and affiliate programs. Once you leave this site, that third party's own privacy policy governs your data, not ours. We encourage you to review it before sharing information.",
  },
  {
    heading: "Email correspondence",
    body: "If you email the desk, we retain that correspondence to respond to you and, where relevant, to improve published content. We do not sell or share your email address with third parties.",
  },
  {
    heading: "Your rights",
    body: "You can ask us what information we hold about you and request that we delete it, subject to any legal obligation to retain records. Contact us using the details below to make a request.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy"
        lede="A short, plain explanation of what we collect and why — written to be read, not skipped."
      />
      <Container className="py-12 md:py-16">
        <div className="max-w-prose space-y-10">
          {points.map((p, i) => (
            <section key={p.heading} className="border-t border-line pt-7 first:border-0 first:pt-0">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-semibold text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-2xl text-navy">{p.heading}</h2>
              </div>
              <p className="prose-desk mt-3">{p.body}</p>
            </section>
          ))}

          <div className="rounded-lg border border-line bg-offwhite p-6 text-sm leading-relaxed text-charcoal-soft">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${site.email}`} className="link-quiet">{site.email}</a>.
          </div>
        </div>
      </Container>
    </>
  );
}
