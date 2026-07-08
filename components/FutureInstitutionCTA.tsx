import Link from "next/link";

export function FutureInstitutionCTA() {
  return (
    <section className="section cta-panel">
      <div>
        <p className="eyebrow">Future institution pathway</p>
        <h2>From clarity to trust, from trust to infrastructure.</h2>
        <p>
          Health Clarity Institute is not yet a hospital. It is building the public knowledge,
          records-awareness, navigation education, and trust foundation from which responsible future
          healthcare layers can grow.
        </p>
      </div>
      <div className="button-row compact-row">
        <Link className="button primary" href="/future-institution-roadmap">View Future Roadmap</Link>
        <Link className="button secondary" href="/contact">Explore Partnership</Link>
      </div>
    </section>
  );
}
