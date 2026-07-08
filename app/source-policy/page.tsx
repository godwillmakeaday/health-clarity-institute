import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { sourceLinks } from "@/lib/site";

export const metadata = { title: "Source Policy" };

export default function SourcePolicyPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Source policy"
        title="Health clarity must be source-conscious."
        subtitle="Public health education should be careful about where claims come from, how current they are, and whether professional review is required."
      />

      <section className="section split">
        <div>
          <p className="eyebrow">Source hierarchy</p>
          <h2>Use better sources for higher-stakes claims.</h2>
        </div>
        <div className="stacked-copy">
          <p>
            Official regulators, ministries, health authorities, hospital policies, public-health bodies, and peer-reviewed literature should carry more weight than anonymous posts, viral messages, or unsourced claims.
          </p>
          <p>
            When rules, insurance processes, fees, provider lists, or public notices may change, users should verify with official sources before acting.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <SectionHeader
          eyebrow="Starting source bench"
          title="Official and public sources to check"
          text="These links are not affiliations. They are source habits for public verification."
        />
        <div className="source-grid">
          {sourceLinks.map((source) => (
            <a className="source-card" href={source.href} key={source.label} target="_blank" rel="noreferrer">
              <h3>{source.label}</h3>
              <p>{source.text}</p>
              <span>Open source →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
