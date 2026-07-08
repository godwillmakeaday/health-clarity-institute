import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Future Institution Roadmap" };

export default function FutureInstitutionRoadmapPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Future institution roadmap"
        title="A careful path from public clarity to future healthcare infrastructure."
        subtitle="The later stages are future ambitions, not present claims. Health Clarity Institute is currently an education and navigation-awareness platform."
      />

      <section className="section">
        <SectionHeader
          eyebrow="Roadmap"
          title="Trust must precede infrastructure."
          text="A serious healthcare institution should grow from public knowledge, editorial governance, professional accountability, records culture, partnerships, and licensing."
        />
        <RoadmapTimeline />
      </section>

      <section className="section soft-section split">
        <div>
          <p className="eyebrow">Important boundary</p>
          <h2>Future ambition is not a present service claim.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            The roadmap expresses a possible future sequence. It does not mean Health Clarity Institute presently operates a clinic, hospital, emergency service, diagnostic centre, telemedicine service, pharmacy, or doctor appointment platform.
          </p>
          <p>
            Any future care layer would require proper licensing, professional staffing, governance, compliance, physical infrastructure, clinical protocols, privacy systems, and legal accountability.
          </p>
        </div>
      </section>

      <section className="section">
        <DisclaimerPanel />
      </section>
    </>
  );
}
