import { Hero } from "@/components/Hero";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Privacy policy"
        title="Do not submit sensitive medical information through ordinary contact forms."
        subtitle="Health Clarity Institute is currently an educational site with no login, no patient dashboard, no appointment booking, and no patient-record collection system."
      />

      <section className="section legal-copy">
        <h2>Current data position</h2>
        <p>
          This version of the website does not require users to create accounts, book appointments, upload records, submit diagnosis details, or provide patient files.
        </p>
        <h2>Contact forms</h2>
        <p>
          If a contact or partnership form is added later, users should not submit sensitive health information, medical reports, prescriptions, scans, test results, diagnosis details, or emergency requests through it.
        </p>
        <h2>Future record tools</h2>
        <p>
          Any future medical-record organization tool would require a separate privacy framework, explicit consent, data protection review, access controls, retention policy, security safeguards, and compliance assessment.
        </p>
        <h2>Children, families, and communities</h2>
        <p>
          Health education for families, schools, churches, and communities should be handled carefully. Personal health information should not be shared publicly or submitted casually.
        </p>
        <h2>Third-party links</h2>
        <p>
          The site may link to official sources such as public authorities, health agencies, or professional organizations. Those websites have their own privacy practices and are not controlled by Health Clarity Institute.
        </p>
      </section>
    </>
  );
}
