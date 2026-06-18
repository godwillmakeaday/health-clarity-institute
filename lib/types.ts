export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export type RiskLevel = "Low" | "Moderate" | "High";

export type Verdict =
  | "Worth testing"
  | "Requires skill first"
  | "Long-term asset"
  | "High-risk"
  | "Not beginner-friendly"
  | "Avoid unless experienced";

export type FilterTag =
  | "smartphone-friendly"
  | "beginner-friendly"
  | "requires-writing"
  | "requires-selling"
  | "requires-audience"
  | "requires-technical-skill"
  | "low-capital"
  | "long-term-asset"
  | "fastest-to-test"
  | "highest-trust-requirement";

export interface FilterDef {
  tag: FilterTag;
  label: string;
}

export interface IncomeMethod {
  slug: string;
  name: string;
  pageTitle: string;
  dek: string;
  summary: string;
  whatItIs: string;
  whoFits: string[];
  whoDoesNotFit: string[];
  requiredSkills: string[];
  requiredTools: string[];
  difficulty: DifficultyLevel;
  timeBeforeResults: string;
  commonLies: string[];
  firstRealisticStep: string;
  riskLevel: RiskLevel;
  proofSignals: string[];
  tags: FilterTag[];
  first7Days: string[];
  first30Days: string[];
  realisticEarningPath: string;
  failurePoints: string[];
  ethicalBoundary: string;
  verdict: Verdict;
  verdictNote: string;
}

export type ExperimentStatus = "Running" | "Completed" | "Paused" | "Planned";

export interface Experiment {
  slug: string;
  title: string;
  hypothesis: string;
  tools: string[];
  cost: string;
  timeRequired: string;
  status: ExperimentStatus;
  whatWorked: string[];
  whatFailed: string[];
  lessons: string[];
  nextTest: string;
}

export type ArticleCategory =
  | "Income Models"
  | "Smartphone Economy"
  | "Digital Work"
  | "Affiliate Marketing"
  | "Trust and Proof"
  | "Course Economy"
  | "Global South Internet Opportunity"
  | "AI-Assisted Work"
  | "Local Service Businesses"
  | "Creator Economy"
  | "Ethical Selling";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  dek: string;
  readTime: string;
  body: string[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface Pathway {
  title: string;
  audience: string;
  description: string;
  steps: { label: string; href: string }[];
}
