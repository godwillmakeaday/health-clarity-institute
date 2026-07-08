import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";
import { MedicalRecordsChecklist } from "@/components/MedicalRecordsChecklist";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Medical Records Awareness" };

export default function MedicalRecordsAwarenessPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Medical records awareness"
        title="Record continuity is one foundation of better healthcare."
        subtitle="When records are lost, care becomes harder to understand. Health Clarity Institute teaches families how to preserve medical documents without collecting patient data on this site."
        actions={[{ href: "/hospital-navigation", label: "Hospital Visit Preparation", variant: "primary" }, { href: "/privacy-policy", label: "Privacy Policy", variant: "secondary" }]}
      />

      <section className="section soft-section">
        <SectionHeader
          eyebrow="Records to preserve"
          title="Build a family health record habit."
          text="Keep records private, organized, dated, and available when a licensed professional needs to understand what happened before."
        />
        <MedicalRecordsChecklist />
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Future-facing note</p>
          <h2>Record tools require privacy, consent, security, and compliance.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            Health Clarity Institute may later develop lawful record-organization tools, but the current site is educational and does not collect sensitive patient data.
          </p>
          <p>
            Any future record tool must be built with proper privacy notices, explicit consent, access controls, security safeguards, data protection review, and professional governance.
          </p>
          <p>
            Users should not submit medical reports, diagnosis details, prescriptions, scans, or other sensitive health information through ordinary contact forms.
          </p>
        </div>
      </section>

      <section className="section">
        <DisclaimerPanel />
      </section>
    </>
  );
}
