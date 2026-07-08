import Link from "next/link";
import { Hero } from "@/components/Hero";

export const metadata = { title: "For Partners" };

export default function ForPartnersPage() {
  return (
    <>
      <Hero
        small
        eyebrow="For partners"
        title="Partnership now lives inside Contact / Partnership."
        subtitle="Health Clarity Institute is open to careful editorial, professional, educational, and institutional collaboration."
        actions={[{ href: "/contact", label: "Open Contact / Partnership", variant: "primary" }, { href: "/professional-collaboration-policy", label: "Collaboration Policy", variant: "secondary" }]}
      />
      <section className="section split">
        <div>
          <p className="eyebrow">Continuity</p>
          <h2>Collaboration must respect the educational boundary.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            This platform is not a hospital or doctor-booking service. Partner conversations should focus on health literacy, records awareness, patient-navigation education, source review, and future compliant institution-building.
          </p>
          <Link className="button primary" href="/contact">Continue to contact</Link>
        </div>
      </section>
    </>
  );
}
