import Link from "next/link";
import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";

export const metadata = { title: "Contact / Partnership" };

export default function ContactPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Contact and partnership"
        title="Build health clarity with us."
        subtitle="For editorial collaboration, institutional partnership, health-literacy programmes, source review, professional advisory conversations, and future healthcare infrastructure planning."
      />

      <section className="section split">
        <div>
          <p className="eyebrow">Partnership focus</p>
          <h2>Schools, churches, employers, NGOs, communities, professionals, and licensed institutions.</h2>
        </div>
        <div className="stacked-copy contact-card">
          <p>
            Health Clarity Institute welcomes collaboration with professionals, educators, health workers, researchers, civic leaders, NGOs, churches, schools, public institutions, and community builders who believe that clarity is a public service.
          </p>
          <p>
            Replace this placeholder with the preferred institutional email before launch:
          </p>
          <a href="mailto:hello@healthclarityinstitute.org">hello@healthclarityinstitute.org</a>
          <p className="small-note">
            Do not send medical reports, diagnosis details, prescriptions, scan images, emergency requests, or sensitive patient information through this contact channel.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <DisclaimerPanel />
        <p className="small-note">For editorial governance, see the <Link href="/editorial-policy">Editorial Policy</Link>, <Link href="/privacy-policy">Privacy Policy</Link>, and <Link href="/medical-disclaimer">Medical Disclaimer</Link>.</p>
      </section>
    </>
  );
}
