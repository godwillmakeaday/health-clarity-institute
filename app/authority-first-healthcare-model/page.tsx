import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { FutureInstitutionCTA } from "@/components/FutureInstitutionCTA";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Authority-First Healthcare Model" };

const stages = [
  "Publish trusted health education",
  "Build patient understanding",
  "Organize healthcare navigation content",
  "Develop editorial and source standards",
  "Build community trust",
  "Attract professional collaborators",
  "Create institutional programmes",
  "Develop future licensed healthcare layers"
];

export default function AuthorityFirstHealthcareModelPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Strategic doctrine"
        title="The Authority-First Healthcare Model"
        subtitle="In this generation, a serious institution can begin with public knowledge before physical infrastructure."
        body="A future hospital can be preceded by trusted explainers, health guides, patient education, records-awareness, community programmes, referral literacy, and professional collaboration."
      />

      <section className="section split">
        <div>
          <p className="eyebrow">The claim</p>
          <h2>Build authority first. Build the institution later.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            Health Clarity Institute is not presenting itself as a hospital. It is building the public knowledge and trust foundation from which a future healthcare institution can grow.
          </p>
          <p>
            The model begins by organizing public health clarity: what people should understand before hospital visits, how records should be preserved, how care pathways work, how insurance questions can be verified, and why health decisions must return to licensed professionals.
          </p>
          <p>
            This is authority without false clinical claims. It is institutional seriousness without pretending that the future has already arrived.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <SectionHeader
          eyebrow="Model stages"
          title="From public knowledge to future healthcare layers"
          text="Each stage should earn trust before the next stage is attempted."
        />
        <div className="stage-grid">
          {stages.map((stage, index) => (
            <article className="stage-card" key={stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{stage}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section manifesto-panel">
        <p className="eyebrow">Doctrine statement</p>
        <h2>Content creates trust. Trust creates audience. Audience creates partnerships. Partnerships create infrastructure. Infrastructure creates the future institution.</h2>
        <p>
          The wisdom of the model is patience. Health Clarity Institute must not jump from content to clinical claims. It must build the public authority layer carefully, ethically, and with the right professional collaborators at each future stage.
        </p>
      </section>

      <section className="section">
        <DisclaimerPanel />
      </section>

      <FutureInstitutionCTA />
    </>
  );
}
