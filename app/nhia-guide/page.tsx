import Link from "next/link";
import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { sourceLinks } from "@/lib/site";

export const metadata = { title: "Health Insurance and NHIA Guide" };

const questions = [
  "Am I covered through an employer, private plan, state health insurance agency, NHIA pathway, or another arrangement?",
  "Which HMO or health insurance body manages my access?",
  "Which healthcare provider is listed for me and what services are covered?",
  "What documents or identification do I need when seeking care?",
  "What costs are covered, what may require co-payment, and what is excluded?",
  "What should I do if my provider, HMO, or enrolment details are unclear?",
  "Where can I confirm current rules from NHIA or my state health insurance agency?"
];

export default function NHIAGuidePage() {
  return (
    <>
      <Hero
        small
        eyebrow="Health insurance and NHIA guide"
        title="Understand coverage questions before payment becomes panic."
        subtitle="A public education guide for asking better questions about health insurance, HMOs, healthcare providers, enrolment, coverage, and official sources in Nigeria."
        actions={[{ href: "/source-policy", label: "View Source Policy", variant: "primary" }, { href: "/contact", label: "Partnership", variant: "secondary" }]}
      />

      <section className="section split">
        <div>
          <p className="eyebrow">Nigeria health financing clarity</p>
          <h2>Insurance literacy is part of healthcare access.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            Nigeria's National Health Insurance Authority presents its mission around financial access to quality healthcare and universal health coverage. Public users still need practical literacy: who covers them, what provider they can use, what documents they need, and where to verify current information.
          </p>
          <p>
            Health Clarity Institute does not enrol users, sell insurance, approve claims, choose providers, or speak for NHIA, state agencies, HMOs, hospitals, or employers. It helps people ask better questions and check official sources.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <SectionHeader
          eyebrow="Questions to ask"
          title="Before you assume you are covered, verify the pathway."
          text="Use these as conversation prompts with NHIA, a state health insurance agency, HMO, employer, hospital, or licensed insurance adviser."
        />
        <div className="card-grid three">
          {questions.map((question) => (
            <article className="card" key={question}>
              <h3>Verification question</h3>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Official source habit"
          title="Use official sources for current rules."
          text="Health insurance rules, benefit packages, provider lists, and public notices can change. Always verify with official sources before acting."
        />
        <div className="source-grid">
          {sourceLinks.map((source) => (
            <a className="source-card" href={source.href} key={source.label} target="_blank" rel="noreferrer">
              <h3>{source.label}</h3>
              <p>{source.text}</p>
              <span>Open official source →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <DisclaimerPanel title="Insurance education only" />
        <p className="small-note">Need institutional collaboration around health insurance literacy? <Link href="/contact">Contact Health Clarity Institute.</Link></p>
      </section>
    </>
  );
}
