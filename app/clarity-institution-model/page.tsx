import Link from "next/link";
import { Hero } from "@/components/Hero";

export const metadata = { title: "Clarity Institution Model" };

export default function ClarityInstitutionModelPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Legacy doctrine page"
        title="The Clarity Institution Model now lives inside the Authority-First Healthcare Model."
        subtitle="Health Clarity Institute remains the first proof that public confusion can be organized into knowledge, trust, records-awareness, and future institutional infrastructure."
        actions={[{ href: "/authority-first-healthcare-model", label: "Open Authority-First Model", variant: "primary" }, { href: "/future-institution-roadmap", label: "View Roadmap", variant: "secondary" }]}
      />
      <section className="section split">
        <div>
          <p className="eyebrow">Continuity</p>
          <h2>Clarity, when organized, becomes authority.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            The original clarity doctrine remains intact. The new healthcare model focuses it into a practical institutional pathway for health education, patient navigation, record awareness, source governance, and future licensed healthcare layers.
          </p>
          <p>
            Continue to the dedicated model page for the upgraded doctrine and roadmap.
          </p>
          <Link className="button primary" href="/authority-first-healthcare-model">Continue</Link>
        </div>
      </section>
    </>
  );
}
