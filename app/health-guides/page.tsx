import { DisclaimerPanel } from "@/components/DisclaimerPanel";
import { Hero } from "@/components/Hero";
import { KnowledgeHubCard } from "@/components/KnowledgeHubCard";
import { SectionHeader } from "@/components/SectionHeader";
import { knowledgeHubs } from "@/lib/site";

export const metadata = { title: "Health Guides" };

export default function HealthGuidesPage() {
  return (
    <>
      <Hero
        small
        eyebrow="Health guides"
        title="Knowledge hubs for clearer care conversations."
        subtitle="Educational guides that help users prepare questions, preserve records, understand care pathways, and know when professional attention is needed."
        actions={[{ href: "/hospital-navigation", label: "Prepare for a Visit", variant: "primary" }, { href: "/medical-disclaimer", label: "Read Medical Disclaimer", variant: "secondary" }]}
      />

      <section className="section">
        <SectionHeader
          eyebrow="Public education structure"
          title="Every guide follows a safe clarity pattern."
          text="What the topic means, what questions to ask a licensed professional, what records to keep, and when to seek urgent care. No guide diagnoses, prescribes, or replaces care."
        />
        <div className="hub-grid">
          {knowledgeHubs.map((hub) => (
            <KnowledgeHubCard key={hub.title} {...hub} />
          ))}
        </div>
      </section>

      <section className="section">
        <DisclaimerPanel />
      </section>
    </>
  );
}
