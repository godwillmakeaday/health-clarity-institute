import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";

export const metadata = { title: "Medical Disclaimer" };

export default function MedicalDisclaimerPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Medical disclaimer"
        title="Education is not diagnosis, treatment, prescription, or emergency care."
        subtitle="This page explains the safety boundary around Health Clarity Institute content."
      />

      <section className="section legal-copy">
        <DisclaimerPanel />
        <h2>What this platform is</h2>
        <p>
          Health Clarity Institute is a public education and healthcare-literacy platform. It explains health concepts, hospital preparation, record awareness, patient-navigation themes, and care pathway questions in plain language.
        </p>
        <h2>What this platform is not</h2>
        <p>
          It is not a hospital, clinic, emergency service, telemedicine platform, doctor-booking service, diagnostic service, pharmacy, laboratory, insurer, or substitute for licensed medical advice.
        </p>
        <h2>When to seek care</h2>
        <p>
          If symptoms are severe, sudden, rapidly worsening, dangerous, or beyond ordinary understanding, seek immediate care from a licensed emergency or healthcare provider. Do not wait for website content, messages, or online research.
        </p>
        <h2>No clinical relationship</h2>
        <p>
          Reading this site does not create a doctor-patient relationship, pharmacist-patient relationship, hospital-patient relationship, or care-provider relationship with Health Clarity Institute.
        </p>
        <h2>Professional review</h2>
        <p>
          Clinical claims should be reviewed by qualified professionals. Future professional review layers will require transparent identity, licensing, governance, and accountability.
        </p>
      </section>
    </>
  );
}
