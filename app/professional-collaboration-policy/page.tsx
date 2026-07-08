import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Professional Collaboration Policy" };

const collaborators = [
  "Licensed doctors and nurses",
  "Pharmacists and laboratory professionals",
  "Public health educators",
  "Health insurance and NHIA literacy professionals",
  "Medical-law and ethics advisers",
  "Hospitals, clinics, diagnostic centres, and pharmacies with proper licensing",
  "Schools, churches, employers, NGOs, and community organizations"
];

export default function ProfessionalCollaborationPolicyPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Professional collaboration policy"
        title="Future healthcare layers require qualified collaborators."
        subtitle="Health Clarity Institute may collaborate with professionals and institutions, but collaboration must not create false service claims or hidden clinical promises."
      />

      <section className="section">
        <SectionHeader
          eyebrow="Collaboration scope"
          title="Who may help build the future layer"
          text="Partnerships should strengthen education, review, community literacy, records awareness, and future compliant care pathways."
        />
        <div className="card-grid three">
          {collaborators.map((item) => (
            <article className="card" key={item}>
              <h3>Potential collaborator</h3>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-section split">
        <div>
          <p className="eyebrow">Governance boundary</p>
          <h2>No hidden clinical claims.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            Professional collaboration must be transparent. If future content is medically reviewed, reviewers should be real, identified appropriately, licensed where required, and connected to clear review standards.
          </p>
          <p>
            If future services move beyond education into care coordination, diagnostics support, telehealth, clinic operations, or hospital operations, proper licensing, consent, privacy, clinical governance, and professional accountability must come first.
          </p>
        </div>
      </section>
    </>
  );
}
