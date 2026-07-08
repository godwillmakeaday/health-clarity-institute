import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Patient Rights" };

const rights = [
  "To ask respectful questions about care, records, consent, costs, referrals, and follow-up.",
  "To understand that clinical decisions should be explained by qualified professionals in appropriate language.",
  "To preserve copies of important medical documents where lawful and available.",
  "To seek clarification from hospital administration, insurer, HMO, or regulator where a process is unclear.",
  "To treat health workers respectfully while also seeking clarity about care pathways.",
  "To know that legal questions around negligence, consent, confidentiality, or professional misconduct require qualified legal advice."
];

export default function PatientRightsPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Patient rights and medical law awareness"
        title="Rights education for clearer care conversations."
        subtitle="A careful public education page on consent, records, questions, complaints, confidentiality awareness, and the difference between health education, medical care, and legal advice."
      />

      <section className="section">
        <SectionHeader
          eyebrow="Rights clarity"
          title="A patient is not powerless because they are confused."
          text="Health Clarity Institute helps patients and families develop better questions. It does not decide clinical or legal disputes."
        />
        <div className="card-grid three">
          {rights.map((right) => (
            <article className="card" key={right}>
              <h3>Awareness point</h3>
              <p>{right}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-section split">
        <div>
          <p className="eyebrow">Boundary</p>
          <h2>Medical-law awareness is not legal advice.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            This page explains patient-rights themes in public language. It does not form a lawyer-client relationship and does not give legal advice about any specific dispute.
          </p>
          <p>
            For a real dispute involving negligence, consent, professional discipline, billing, confidentiality, or hospital complaints, speak with a qualified lawyer or appropriate regulatory body.
          </p>
        </div>
      </section>

      <section className="section">
        <DisclaimerPanel />
      </section>
    </>
  );
}
