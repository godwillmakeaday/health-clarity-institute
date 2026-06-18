import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { articles, articleCategories } from "@/data/articles";
import { BriefingsExplorer } from "./BriefingsExplorer";

export const metadata: Metadata = {
  title: "Briefings",
  description:
    "Long-form briefings on income models, trust, the smartphone economy, and the make-money-online market — written without hype or manufactured urgency.",
};

export default function BriefingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Briefings"
        title="Editorial briefings on income, trust, and proof."
        lede="Longer pieces that step back from any single method to examine the patterns underneath it — why certain claims spread, how to tell a model from a motivational story, and what trust actually means in an income economy built on screenshots."
      />
      <section className="py-12 md:py-16">
        <Container>
          <BriefingsExplorer articles={articles} categories={articleCategories} />
        </Container>
      </section>
    </>
  );
}
