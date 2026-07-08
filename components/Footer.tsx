import Link from "next/link";
import { policyNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <p className="eyebrow">Health Clarity Institute</p>
        <h2>Build authority first. Build the institution later.</h2>
        <p>
          A public health clarity, patient-navigation education, medical-record awareness, and
          healthcare-literacy platform for Nigeria and Africa. Educational only; not a hospital,
          clinic, emergency service, diagnosis platform, or substitute for licensed medical advice.
        </p>
      </div>
      <div className="footer-links-wrap">
        <div className="footer-links">
          <Link href="/health-guides">Health Guides</Link>
          <Link href="/hospital-navigation">Hospital Navigation</Link>
          <Link href="/medical-records-awareness">Medical Records Awareness</Link>
          <Link href="/authority-first-healthcare-model">Authority-First Model</Link>
          <Link href="/future-institution-roadmap">Future Roadmap</Link>
          <Link href="/contact">Contact / Partnership</Link>
        </div>
        <div className="footer-links policy-links">
          {policyNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
