import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Access Infrastructure Desk | Health Clarity Institute",
  description:
    "A future-facing Health Clarity Institute desk for patient-navigation education, medical-record awareness, referral literacy, and healthcare-access understanding.",
};

const problems = [
  "Symptoms are not clearly documented.",
  "Families delay because they do not know where to go.",
  "Test results and prescriptions get lost.",
  "Referrals are misunderstood.",
  "Follow-up dates are forgotten.",
  "Patients repeat their history from memory.",
  "People confuse pharmacy advice with clinical diagnosis.",
  "Emergencies are sometimes delayed because warning signs are missed.",
];

const futureLayers = [
  "Future licensed provider partnerships",
  "Future diagnostics-partner coordination",
  "Future medical-record organization tools",
  "Future community health literacy programmes",
  "Future care-follow-up education",
  "Future referral-literacy resources",
];

const boundaries = [
  "Not a hospital",
  "Not a clinic",
  "Not an emergency service",
  "Not a doctor-booking platform",
  "Not a diagnosis service",
  "Not a treatment service",
  "Not a medical-record collection platform",
];

const preservationItems = [
  "test results",
  "prescriptions",
  "discharge summaries",
  "referral letters",
  "scan reports",
  "immunization records",
  "antenatal records",
  "chronic-disease logs",
];

export default function AccessInfrastructureDeskPage() {
  return (
    <main className="accessDesk">
      <section className="heroSection">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Health Clarity Institute Desk</p>
            <h1>Healthcare Access Infrastructure Desk</h1>
            <p className="subtitle">
              A future-facing Health Clarity Institute desk for patient-navigation
              education, medical-record awareness, referral literacy, and
              healthcare-access understanding.
            </p>
            <p className="heroBody">
              Many families do not suffer only because care is unavailable. They suffer
              because the path to care is confusing. Symptoms are poorly documented,
              old test results are lost, referrals are misunderstood, prescriptions are
              scattered, and families do not always know when to seek urgent help. This
              desk exists to organize public knowledge around safer movement from
              confusion to proper professional care.
            </p>
            <div className="buttonRow">
              <Link href="/health-guides" className="primaryButton">
                Explore Health Guides
              </Link>
              <Link href="/patient-rights" className="secondaryButton">
                Read Patient Rights
              </Link>
            </div>
          </div>

          <aside className="disclaimerCard" aria-label="Medical disclaimer">
            <strong>Educational boundary</strong>
            <p>
              This desk provides educational and navigation-awareness content only. It
              is not a hospital, clinic, emergency service, telemedicine provider,
              doctor-booking platform, or substitute for licensed medical advice.
            </p>
          </aside>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">The Problem</p>
            <h2>The missing layer is healthcare access clarity.</h2>
            <p>
              Access is not only about whether a hospital exists. Access also depends on
              how well people understand symptoms, records, referrals, follow-up,
              warning signs, and the route to professional care.
            </p>
          </div>

          <div className="cardGrid fourGrid">
            {problems.map((problem) => (
              <article className="problemCard" key={problem}>
                <span className="dot" />
                <p>{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader narrow">
            <p className="eyebrow">The Desk Model</p>
            <h2>From fear to documented care-seeking.</h2>
            <p>
              The desk is built around preparation, navigation, and preservation — three
              simple habits that can help families approach professional care with more
              order and less panic.
            </p>
          </div>

          <div className="stepsGrid">
            <article className="stepCard">
              <span>01</span>
              <h3>Prepare</h3>
              <p>
                Help patients and families organize symptoms, timelines, questions,
                documents, medicines, and warning signs before seeking care.
              </p>
            </article>
            <article className="stepCard">
              <span>02</span>
              <h3>Navigate</h3>
              <p>
                Educate users on the difference between emergency care, clinic visit,
                specialist referral, diagnostics, pharmacy, follow-up, and preventive care.
              </p>
            </article>
            <article className="stepCard">
              <span>03</span>
              <h3>Preserve</h3>
              <p>
                Teach families how to preserve {preservationItems.slice(0, -1).join(", ")},
                and {" "}
                {preservationItems[preservationItems.length - 1]}.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section deepSection">
        <div className="container twoColumn">
          <div>
            <p className="eyebrow light">Future Access Infrastructure</p>
            <h2>Future licensed-care coordination layers.</h2>
            <p>
              In future stages, Health Clarity Institute may explore partnerships with
              licensed hospitals, clinics, laboratories, pharmacies, health insurers, and
              medical professionals. Any future operational layer will require proper
              licensing, consent, privacy, clinical governance, data protection, and
              professional oversight.
            </p>
          </div>

          <div className="futureGrid">
            {futureLayers.map((layer) => (
              <div className="futureCard" key={layer}>
                {layer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container twoColumn alignStart">
          <div>
            <p className="eyebrow">Boundary Statement</p>
            <h2>What this desk is not.</h2>
            <p>
              Clear boundaries protect the public and protect the integrity of the future
              institution. This desk is an education and access-clarity layer, not a
              clinical service.
            </p>
          </div>

          <div className="boundaryList">
            {boundaries.map((boundary) => (
              <div className="boundaryItem" key={boundary}>
                <span aria-hidden="true">×</span>
                {boundary}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container connectionPanel">
          <p className="eyebrow">Institutional Fit</p>
          <h2>Why this belongs inside Health Clarity Institute.</h2>
          <p>
            Health Clarity Institute already organizes health education, patient clarity,
            specialist knowledge, Nigerian health context, and patient-rights awareness.
            The Healthcare Access Infrastructure Desk extends that mission into the
            practical question of how patients and families prepare for, understand, and
            preserve the pathway to professional care.
          </p>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaPanel">
          <div>
            <p className="eyebrow light">Build responsibly</p>
            <h2>Build the access layer responsibly.</h2>
            <p>
              The purpose is not to pretend that an institution already exists at full
              operational scale. The purpose is to build the public knowledge, trust,
              record-awareness, and patient-navigation foundation from which future
              licensed healthcare collaboration can grow.
            </p>
          </div>
          <div className="ctaButtons">
            <Link href="/health-guides" className="lightButton">
              Explore Health Guides
            </Link>
            <Link href="/medical-records-awareness" className="outlineLightButton">
              Learn About Medical Records
            </Link>
            <Link href="/contact" className="outlineLightButton">
              Contact for Partnership
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .accessDesk {
          background: #ffffff;
          color: #142334;
          font-family: inherit;
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .heroSection {
          background:
            radial-gradient(circle at top right, rgba(29, 136, 219, 0.12), transparent 34rem),
            linear-gradient(135deg, #f7fbff 0%, #ffffff 52%, #f2fbf7 100%);
          border-bottom: 1px solid #dbe7ef;
          padding: 84px 0 64px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);
          gap: 36px;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #047b92;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .eyebrow.light {
          color: #9be7d2;
        }

        h1, h2, h3, p {
          margin-top: 0;
        }

        h1 {
          max-width: 820px;
          color: #07192d;
          font-size: clamp(2.55rem, 7vw, 5rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          margin-bottom: 20px;
        }

        h2 {
          color: #07192d;
          font-size: clamp(2rem, 4vw, 3.25rem);
          line-height: 1.04;
          letter-spacing: -0.045em;
          margin-bottom: 16px;
        }

        h3 {
          color: #07192d;
          font-size: 1.35rem;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .subtitle {
          color: #30516f;
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          line-height: 1.55;
          max-width: 820px;
          margin-bottom: 18px;
        }

        .heroBody,
        .sectionHeader p,
        .twoColumn p,
        .connectionPanel p,
        .ctaPanel p,
        .stepCard p {
          color: #4c6378;
          font-size: 1rem;
          line-height: 1.78;
        }

        .buttonRow,
        .ctaButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        a {
          text-decoration: none;
        }

        .primaryButton,
        .secondaryButton,
        .lightButton,
        .outlineLightButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          border-radius: 999px;
          padding: 0 20px;
          font-size: 0.94rem;
          font-weight: 800;
          transition: transform 160ms ease, box-shadow 160ms ease;
        }

        .primaryButton:hover,
        .secondaryButton:hover,
        .lightButton:hover,
        .outlineLightButton:hover {
          transform: translateY(-1px);
        }

        .primaryButton {
          background: #063762;
          color: #ffffff;
          box-shadow: 0 18px 38px rgba(6, 55, 98, 0.18);
        }

        .secondaryButton {
          background: #ffffff;
          color: #063762;
          border: 1px solid #cbdce8;
        }

        .disclaimerCard {
          border: 1px solid rgba(4, 123, 146, 0.2);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 24px 70px rgba(10, 45, 78, 0.10);
          padding: 28px;
        }

        .disclaimerCard strong {
          display: block;
          color: #063762;
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .disclaimerCard p {
          color: #4c6378;
          line-height: 1.72;
          margin-bottom: 0;
        }

        .section {
          padding: 76px 0;
        }

        .mutedSection {
          background: #f7fafc;
          border-top: 1px solid #e6eef4;
          border-bottom: 1px solid #e6eef4;
        }

        .sectionHeader {
          max-width: 820px;
          margin-bottom: 34px;
        }

        .sectionHeader.narrow {
          max-width: 740px;
        }

        .cardGrid {
          display: grid;
          gap: 16px;
        }

        .fourGrid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .problemCard {
          min-height: 152px;
          border: 1px solid #dbe7ef;
          border-radius: 22px;
          background: #ffffff;
          padding: 22px;
          box-shadow: 0 16px 42px rgba(10, 45, 78, 0.05);
        }

        .problemCard p {
          color: #263f57;
          font-weight: 700;
          line-height: 1.45;
          margin: 14px 0 0;
        }

        .dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #21b58f;
        }

        .stepsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .stepCard {
          border: 1px solid #dbe7ef;
          border-radius: 28px;
          background: linear-gradient(180deg, #ffffff, #f8fbfd);
          padding: 28px;
          min-height: 300px;
        }

        .stepCard span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 16px;
          background: #e8f6f3;
          color: #047b92;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .deepSection {
          background: linear-gradient(135deg, #07192d, #0b3d5f 55%, #0f6f75);
          color: #ffffff;
        }

        .deepSection h2,
        .ctaSection h2 {
          color: #ffffff;
        }

        .deepSection p,
        .ctaSection p {
          color: rgba(255, 255, 255, 0.82);
        }

        .twoColumn {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 40px;
          align-items: center;
        }

        .alignStart {
          align-items: start;
        }

        .futureGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .futureCard {
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 18px;
          font-weight: 800;
          line-height: 1.38;
        }

        .boundaryList {
          display: grid;
          gap: 12px;
        }

        .boundaryItem {
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid #dbe7ef;
          border-radius: 18px;
          background: #ffffff;
          color: #263f57;
          padding: 16px 18px;
          font-weight: 800;
        }

        .boundaryItem span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: #fff2f1;
          color: #b54036;
          font-size: 1.2rem;
        }

        .connectionPanel {
          border: 1px solid #dbe7ef;
          border-radius: 32px;
          background:
            radial-gradient(circle at top right, rgba(33, 181, 143, 0.12), transparent 28rem),
            #ffffff;
          box-shadow: 0 20px 70px rgba(10, 45, 78, 0.08);
          padding: clamp(28px, 5vw, 52px);
        }

        .connectionPanel p {
          max-width: 840px;
        }

        .ctaSection {
          background: #07192d;
          padding-bottom: 88px;
        }

        .ctaPanel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
          gap: 32px;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 32px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          padding: clamp(28px, 5vw, 52px);
        }

        .lightButton {
          background: #ffffff;
          color: #07192d;
        }

        .outlineLightButton {
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #ffffff;
        }

        @media (max-width: 920px) {
          .heroGrid,
          .twoColumn,
          .ctaPanel {
            grid-template-columns: 1fr;
          }

          .fourGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .stepsGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .heroSection {
            padding: 56px 0 42px;
          }

          .section {
            padding: 52px 0;
          }

          .fourGrid,
          .futureGrid {
            grid-template-columns: 1fr;
          }

          .buttonRow,
          .ctaButtons {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton,
          .lightButton,
          .outlineLightButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
