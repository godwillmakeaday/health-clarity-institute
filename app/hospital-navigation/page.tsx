import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";
import { HospitalNavigationChecklist } from "@/components/HospitalNavigationChecklist";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Hospital Navigation Desk" };

const sections = [
  { title: "What to carry to hospital", text: "Carry prior test results, prescriptions, referral letters, discharge summaries, insurance documents, allergy history, and a clear symptom timeline where available." },
  { title: "How to describe symptoms clearly", text: "Use simple facts: what started, when it started, what makes it better or worse, what has changed, and what you already tried or were given by a professional." },
  { title: "How to prepare questions", text: "Write down the questions you want to ask so stress does not erase them during the visit." },
  { title: "How to preserve test results", text: "Keep original copies safely, take photos or scans where lawful, and organize documents by date and hospital or laboratory." },
  { title: "How to understand referrals", text: "Ask what the referral is for, where you are being sent, what records should accompany you, and what timing is recommended." },
  { title: "How to organize family medical history", text: "Keep a plain record of important long-term conditions, medicines, allergies, past admissions, and emergency contacts." },
  { title: "How to follow up after discharge", text: "Preserve discharge summaries and ask about medicines, follow-up dates, warning signs, and who to contact if symptoms worsen." },
  { title: "How to avoid losing prescriptions and scan reports", text: "Store them in a dedicated health folder and keep backups where safe and private." },
  { title: "When to seek urgent care immediately", text: "When symptoms are severe, sudden, rapidly worsening, dangerous, or beyond ordinary understanding, do not rely on online content. Seek emergency or licensed medical care immediately." }
];

export default function HospitalNavigationPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Hospital Navigation Desk"
        title="Prepare for hospital visits without replacing doctors."
        subtitle="A public education desk for organizing symptoms, questions, records, referrals, and follow-up before and after hospital care."
        actions={[{ href: "/medical-records-awareness", label: "Understand Records", variant: "primary" }, { href: "/patient-rights", label: "Patient Rights", variant: "secondary" }]}
      />

      <section className="section soft-section">
        <SectionHeader
          eyebrow="Preparation checklist"
          title="What to prepare before a non-emergency hospital visit"
          text="This is not a clinical instruction. It is a clarity checklist to help patients and families communicate better with licensed professionals."
        />
        <HospitalNavigationChecklist />
      </section>

      <section className="section">
        <div className="card-grid three">
          {sections.map((section) => (
            <article className="card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <DisclaimerPanel title="Hospital navigation is not medical triage" />
      </section>
    </>
  );
}
