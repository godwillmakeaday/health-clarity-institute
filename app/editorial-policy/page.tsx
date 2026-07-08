import Link from "next/link";
import { EditorialPolicyPanel } from "@/components/EditorialPolicyPanel";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Editorial Policy" };

const items = [
  { title: "Educational purpose", text: "Content is written to improve public understanding, not to diagnose, treat, prescribe, or replace licensed professionals." },
  { title: "Source-conscious writing", text: "Important public claims should be checked against official sources, reputable public-health bodies, peer-reviewed literature where appropriate, and qualified professional review when available." },
  { title: "Plain-language clarity", text: "Content should use language ordinary patients, families, schools, churches, and communities can understand without oversimplifying risk." },
  { title: "Boundary language", text: "Every page should distinguish education from medical care and encourage urgent professional attention when necessary." },
  { title: "No fake authority", text: "The site must not create fake doctors, fake reviewers, fake hospital departments, fake clinical services, or invented affiliations." },
  { title: "Correction pathway", text: "Errors should be corrected clearly, with updated language and a record of meaningful changes where appropriate." },
  { title: "Future medical review policy", text: "As the platform grows, clinical content should be reviewed by properly identified licensed professionals under transparent governance." },
  { title: "Data protection awareness", text: "The site should not solicit sensitive medical information through ordinary forms and should develop stronger consent, privacy, and security policies before any future data tool." }
];

export default function EditorialPolicyPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Editorial trust and governance"
        title="Authority requires discipline."
        subtitle="Health Clarity Institute is designed to be careful, source-conscious, transparent, and ethically bounded."
      />

      <section className="section">
        <SectionHeader
          eyebrow="Editorial standards"
          title="How Health Clarity content should be built"
          text="The goal is not to sound clinical. The goal is to help people understand health systems responsibly while knowing when only licensed care is appropriate."
        />
        <EditorialPolicyPanel items={items} />
      </section>

      <section className="section soft-section split">
        <div>
          <p className="eyebrow">Governance pages</p>
          <h2>Policies must be visible before trust is requested.</h2>
        </div>
        <div className="link-stack">
          <Link href="/medical-disclaimer">Medical Disclaimer</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/source-policy">Source Policy</Link>
          <Link href="/correction-policy">Correction Policy</Link>
          <Link href="/professional-collaboration-policy">Professional Collaboration Policy</Link>
        </div>
      </section>
    </>
  );
}
