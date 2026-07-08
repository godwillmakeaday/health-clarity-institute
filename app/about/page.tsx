import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustPrinciples } from "@/components/TrustPrinciples";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Hero
        small
        eyebrow="About the institute"
        title="A clarity institution before a healthcare institution."
        subtitle="Health Clarity Institute is building a public education, patient-navigation, medical-record awareness, and healthcare-literacy foundation for Nigeria and Africa."
      />

      <section className="section split">
        <div>
          <p className="eyebrow">Positioning</p>
          <h2>Authority first. Infrastructure later.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            Health Clarity Institute does not present itself as a hospital, clinic, telemedicine provider, diagnosis service, treatment centre, emergency responder, or appointment-booking platform.
          </p>
          <p>
            Its present role is to help patients, families, schools, churches, employers, and communities understand care pathways, hospital preparation, health records, patient rights, insurance questions, and responsible health communication.
          </p>
          <p>
            The long-term idea is that a future healthcare institution can be preceded by public trust: guides, policies, source standards, professional culture, record awareness, and partnerships with licensed providers at the proper stage.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <SectionHeader
          eyebrow="Trust boundaries"
          title="What we will not pretend to be"
          text="The strongest authority is careful authority. Health Clarity Institute grows through honesty, not exaggerated claims."
        />
        <TrustPrinciples />
      </section>

      <section className="section">
        <DisclaimerPanel />
      </section>
    </>
  );
}
