import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { methods } from "@/data/methods";
import { IncomeModelsExplorer } from "./IncomeModelsExplorer";

export const metadata: Metadata = {
  title: "Income Models Library",
  description:
    "Sixteen internet income models, each rated for difficulty, risk, and realistic time before results — with who it fits, what it requires, and how it tends to fail.",
};

export default function IncomeModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Income models library"
        title="Sixteen methods. Same rating system. No exceptions."
        lede="Every method below is described the same way: what it actually is, who it fits and who it does not, the skills and tools it requires, the lies commonly told about it, and the realistic time before it produces income. Filter by what you already have, or compare all sixteen side by side."
      />
      <section className="py-12 md:py-16">
        <Container>
          <Suspense>
            <IncomeModelsExplorer methods={methods} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
