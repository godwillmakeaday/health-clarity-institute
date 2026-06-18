import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";
import { CalloutBox } from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Smartphone Economy",
  description:
    "A doctrine for building real income infrastructure from a smartphone alone — what a phone can realistically replace, where it falls short, and the ten-layer stack that makes it work.",
};

const sections: { title: string; body: string[] }[] = [
  {
    title: "The Smartphone as Business Infrastructure",
    body: [
      "For most of the methods on this desk, a smartphone is not a limitation to work around — it is the actual infrastructure the business runs on. A modern phone can write, design, edit video, host conversations with clients, accept payment confirmations, and publish content, which covers most of what a small digital service or content operation needs in its first year.",
      "Treating the phone as infrastructure rather than a stopgap changes how you use it: dedicated folders for client work, a consistent professional profile photo and name across apps, and a habit of saving finished work immediately rather than losing it to a closed tab or a deleted chat.",
    ],
  },
  {
    title: "What a Smartphone Can Realistically Replace",
    body: [
      "A phone can substitute for a laptop on writing, scheduling, light design, voice and video recording, and most communication-heavy service work. Apps like Google Docs, Canva, CapCut, and WhatsApp Business cover the core toolkit for several methods on this desk without ever touching a desktop.",
      "It is a genuine substitute, not a downgraded one, for service delivery and communication. It becomes a limitation mainly for heavier technical work: complex spreadsheets, code editing, or video projects beyond simple cuts and captions.",
    ],
  },
  {
    title: "The Real Cost of Mobile Data (and How to Budget It)",
    body: [
      "Mobile data is a real, recurring cost that most income guides ignore. Research, content uploads, and video calls consume meaningfully more data than messaging alone. Budgeting a fixed weekly data allowance for income-producing activity — separate from personal use — makes the actual cost of a method visible instead of invisible.",
      "Where possible, batching data-heavy tasks (uploads, research sessions, video calls) into fewer, longer sessions on a stronger connection reduces both cost and the frustration of working on an unstable network.",
    ],
  },
  {
    title: "Apps That Function as a Free Starter Toolkit",
    body: [
      "A workable starter toolkit costs nothing beyond data: WhatsApp Business for client communication, Google Docs and Sheets for writing and basic tracking, Canva's free tier for design, CapCut for video editing, and a free-tier AI assistant for research and drafting support.",
      "None of these require a paid upgrade to produce a first real result. Paid tiers become worth considering only once a method is already producing income and a specific limitation — not a general one — has been identified.",
    ],
  },
  {
    title: "Where a Smartphone Is Not Enough",
    body: [
      "Some methods genuinely need more than a phone: spreadsheet-heavy data work, software or automation building, and any video work beyond simple editing benefit substantially from a larger screen and a physical keyboard. Pretending otherwise sets people up to fight their tools instead of doing the work.",
      "The honest path is to start the lower-barrier, phone-compatible methods first, and treat a laptop as a future upgrade funded by income those methods produce — not as a precondition for starting anything.",
    ],
  },
  {
    title: "Working Around Storage and Battery Constraints",
    body: [
      "Entry-level phones common across much of the Global South often have limited storage and battery life, both of which affect income-producing work specifically: large client files, long recording sessions, and all-day availability for messages.",
      "Practical workarounds include offloading finished files to free cloud storage immediately, clearing cache on content-heavy apps weekly, and setting realistic, communicated response windows instead of promising always-on availability a battery cannot support.",
    ],
  },
  {
    title: "Mobile-First Communication as a Trust Signal",
    body: [
      "Many clients and buyers in phone-first markets read communication style as a proxy for professionalism: clear voice notes, prompt replies, and a consistent WhatsApp Business profile with a real name and photo build more trust than a polished but unreachable email address.",
      "Treating WhatsApp or similar apps as a storefront — with a clear catalog, consistent hours, and saved quick replies for common questions — performs better than treating it as casual personal messaging extended to clients.",
    ],
  },
  {
    title: "Payment and Withdrawal Realities on Mobile",
    body: [
      "Payment friction is one of the most underestimated obstacles in mobile-first income work: currency conversion, withdrawal fees, and platform payout minimums can quietly erode a meaningful share of early earnings. Checking a platform's actual payout method and minimum threshold before investing time in it avoids an unpleasant surprise later.",
      "Where multiple payment rails are available, comparing real withdrawal cost — not just the advertised rate — across two or three options before committing time to a platform is a habit worth building early.",
    ],
  },
  {
    title: "Building a Portfolio From a Phone Alone",
    body: [
      "A credible portfolio does not require expensive equipment. A handful of well-chosen examples — screenshots of finished writing, short edited clips, simple designs, or documented results from a real (even unpaid) pilot project — built and organized entirely on a phone is enough to start most service-based methods on this desk.",
      "Organizing portfolio pieces in a single shareable folder or simple one-page link, updated as better examples replace weaker ones, matters more than the production value of any individual piece.",
    ],
  },
  {
    title: "When to Upgrade Beyond a Phone",
    body: [
      "The honest signal to upgrade is friction, not ambition: when a phone is visibly slowing down a method that is already producing income — frequent crashes during client work, files too large to manage, or tasks that take three times longer than they should — that is the point to consider a laptop or a secondary device.",
      "Upgrading before that point, funded by savings rather than income the method has actually produced, adds financial risk without addressing a problem that exists yet.",
    ],
  },
];

const stack: { layer: string; title: string; body: string }[] = [
  { layer: "01", title: "Connectivity", body: "A predictable, budgeted mobile data plan — the foundation every other layer depends on." },
  { layer: "02", title: "Communication", body: "WhatsApp Business, Telegram, or email, set up as a professional channel, not a personal one." },
  { layer: "03", title: "Identity", body: "A consistent name, photo, and short bio used across every platform and conversation." },
  { layer: "04", title: "Creation tools", body: "Google Docs, Canva, CapCut, and similar free-tier apps for producing the actual work." },
  { layer: "05", title: "Research support", body: "Search and a free-tier AI assistant, used to verify and draft, not to replace judgment." },
  { layer: "06", title: "Distribution channels", body: "The specific platforms, groups, or networks where the right buyers or audience are already present." },
  { layer: "07", title: "Proof and trust signals", body: "Saved testimonials, before/after examples, and documented results that can be shown, not just claimed." },
  { layer: "08", title: "A defined offer", body: "One clear, specific service or product description — not a vague list of things you could maybe do." },
  { layer: "09", title: "Payment infrastructure", body: "A checked, working way to receive and withdraw payment, with real fees and minimums understood in advance." },
  { layer: "10", title: "Systems and repetition", body: "A simple weekly rhythm — outreach, delivery, follow-up — that turns a single result into a repeatable one." },
];

export default function SmartphoneEconomyPage() {
  return (
    <>
      <PageHero
        eyebrow="The smartphone economy"
        title="A doctrine for building real income from a phone alone."
        lede="Most income literacy content assumes a laptop, a stable connection, and disposable income for paid tools. This page does not. It documents what a smartphone can realistically replace, where it falls short, and the layered stack that turns a single device into working business infrastructure."
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-0">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-lineSoft py-9 first:border-0 first:pt-0">
                <h2 className="text-h2">{section.title}</h2>
                <div className="prose-desk mt-4 max-w-prose">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="stack" className="border-t border-line bg-grey-50/60 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Framework"
            title="The Smartphone Income Stack"
            intro="Ten layers, built from the foundation up. A method that depends on a layer you don't have yet usually fails for that reason, not for lack of effort."
          />
          <div className="mt-10 space-y-3">
            {stack.map((item) => (
              <div
                key={item.layer}
                className="flex items-start gap-4 rounded-lg border border-line bg-white p-5 shadow-card"
              >
                <span className="shrink-0 font-mono text-[0.78rem] font-semibold text-gold-dark">{item.layer}</span>
                <div>
                  <h3 className="font-serif text-[1.05rem] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-charcoal-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <CalloutBox type="reality-check" title="A phone is infrastructure, not an excuse">
              <p>
                Several methods on this desk were tested primarily on a smartphone. A phone explains why a
                method starts slowly — it rarely explains why it fails entirely.
              </p>
            </CalloutBox>
            <CalloutBox type="first-test">
              <p>
                Ready to apply the stack? Start with the beginner-friendly, smartphone-friendly methods in the
                library and build the layers above as the method demands them.
              </p>
              <Link href="/income-models?tags=smartphone-friendly,beginner-friendly" className="mt-2 inline-block font-medium text-navy hover:text-gold-dark">
                Browse smartphone-friendly methods →
              </Link>
            </CalloutBox>
          </div>
        </Container>
      </section>
    </>
  );
}
