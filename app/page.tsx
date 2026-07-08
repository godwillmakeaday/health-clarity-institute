import Link from "next/link";
import { AuthorityDoctrineSection } from "@/components/AuthorityDoctrineSection";
import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { FutureInstitutionCTA } from "@/components/FutureInstitutionCTA";
import { KnowledgeHubCard } from "@/components/KnowledgeHubCard";
import { ProblemCard } from "@/components/ProblemCard";
import { SectionHeader } from "@/components/SectionHeader";
import { healthcareInstitutions, knowledgeHubs, pillars, problemCards } from "@/lib/site";

export default function HomePage() {
  const featuredHubs = knowledgeHubs.slice(0, 6);

  return (
    <>
      <section className="hero home-hero">
        <div className="hero-content narrow">
          <p className="eyebrow">Public health clarity · Patient navigation education · Nigeria and Africa</p>
          <h1>Health Clarity Institute</h1>
          <p className="hero-text">
            Building the public knowledge and trust foundation for better healthcare access in Nigeria and Africa.
          </p>
          <p className="hero-support">
            Health Clarity Institute helps patients, families, schools, churches, employers, and communities understand health conditions, hospital processes, medical records, referrals, preventive care, and care pathways before confusion becomes delay.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/health-guides">Explore Health Guides</Link>
            <Link className="button secondary" href="/hospital-navigation">Prepare for a Hospital Visit</Link>
            <Link className="button secondary" href="/medical-records-awareness">Understand Medical Records</Link>
            <Link className="button quiet" href="/future-institution-roadmap">View Future Roadmap</Link>
          </div>
          <div className="hero-disclaimer">
            <DisclaimerPanel compact />
          </div>
        </div>
      </section>

      <AuthorityDoctrineSection />

      <section className="section soft-section">
        <SectionHeader
          eyebrow="The real access problem"
          title="The health problem is not only access. It is confusion."
          text="A family may live near a hospital and still delay care because they do not know what is urgent, what records matter, what questions to ask, or how referrals and payment options work."
        />
        <div className="card-grid four">
          {problemCards.map((problem, index) => (
            <ProblemCard key={problem} text={problem} index={index} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="What Health Clarity does"
          title="Clarity before care. Preparation before panic. Records before loss."
          text="Health Clarity Institute is an education-first public authority platform. Its present work is to improve understanding, preparedness, and record-awareness, not to diagnose or treat."
        />
        <div className="card-grid three">
          {pillars.map((pillar) => (
            <article className="card pillar-card" key={pillar.title}>
              <span className="card-number">{pillar.letter}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-section">
        <SectionHeader
          eyebrow="Knowledge hubs"
          title="Health Clarity Knowledge Hubs"
          text="Each hub is designed to help users understand what to ask, what to keep, and when online content must stop and professional care must begin."
        />
        <div className="hub-grid">
          {featuredHubs.map((hub) => (
            <KnowledgeHubCard key={hub.title} {...hub} />
          ))}
        </div>
        <div className="center-action">
          <Link className="button primary" href="/health-guides">View All Knowledge Hubs</Link>
        </div>
      </section>

      <section className="section inspiration-section">
        <SectionHeader
          eyebrow="Institutional inspiration"
          title="Learning From Great Healthcare Institutions"
          text="Health Clarity does not copy, rank, or claim affiliation with these institutions. They are referenced only as examples of a principle: serious healthcare authority grows through knowledge, systems, research, professional culture, records, patient experience, and public trust."
        />
        <div className="institution-strip">
          {healthcareInstitutions.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      <FutureInstitutionCTA />
    </>
  );
}
