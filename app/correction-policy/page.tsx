import { Hero } from "@/components/Hero";

export const metadata = { title: "Correction Policy" };

export default function CorrectionPolicyPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Correction policy"
        title="A serious authority platform must be correctable."
        subtitle="Health Clarity Institute should welcome corrections, source updates, and professional review where content needs improvement."
      />

      <section className="section legal-copy">
        <h2>Correction standard</h2>
        <p>
          When content is inaccurate, unclear, outdated, or insufficiently sourced, it should be reviewed and corrected. Corrections should improve clarity without hiding the responsibility to be accurate.
        </p>
        <h2>Types of corrections</h2>
        <p>
          Corrections may include factual updates, safer disclaimer language, improved source references, clearer distinctions between education and medical care, or removal of claims that require professional review.
        </p>
        <h2>How corrections should be handled</h2>
        <p>
          Meaningful corrections should be documented internally and, where appropriate, visibly updated on the page. Serious medical or legal issues should be escalated to qualified professionals before republication.
        </p>
        <h2>How to report an issue</h2>
        <p>
          Use the contact page for editorial or partnership matters only. Do not submit sensitive health information, emergency requests, or patient records through ordinary contact channels.
        </p>
      </section>
    </>
  );
}
