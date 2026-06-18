import type { Pathway } from "@/lib/types";

export const pathways: Pathway[] = [
  {
    title: "I only have a smartphone",
    audience: "No laptop, limited data budget, starting from a phone alone.",
    description:
      "Most of the methods on this desk were designed with exactly this starting point in mind. Begin with the doctrine for building from a phone, then move into the most accessible, lowest-capital methods.",
    steps: [
      { label: "Read the Smartphone Economy doctrine", href: "/smartphone-economy" },
      { label: "Browse beginner-friendly, smartphone-friendly models", href: "/income-models?tags=smartphone-friendly,beginner-friendly" },
      { label: "Review the WhatsApp local-website-service experiment", href: "/field-experiments" },
      { label: "Study the smartphone-first skill stack", href: "/smartphone-economy#stack" },
    ],
  },
  {
    title: "I can write",
    audience: "Comfortable putting ideas into clear sentences, even without formal training.",
    description:
      "Writing is the most transferable skill on this desk — it underpins freelance work, blogging, briefings, affiliate content, and newsletters alike. Start with the lowest-barrier writing model and decide how far to take it.",
    steps: [
      { label: "Start with Freelance Writing and Editing", href: "/income-models/freelance-writing-and-editing" },
      { label: "Study Niche Blogging as a long-term asset", href: "/income-models/niche-blogging" },
      { label: "Read briefings on trust and proof", href: "/briefings" },
      { label: "Consider Affiliate Marketing once you have a content habit", href: "/income-models/affiliate-marketing" },
      { label: "Explore Newsletter Publishing for a niche you know well", href: "/income-models/newsletter-publishing" },
    ],
  },
  {
    title: "I can sell",
    audience: "Comfortable with direct conversations, pitching, and following up with real people.",
    description:
      "Selling is the bottleneck for most beginners, not the missing piece. If you already have it, you can move faster through models that require direct outreach to local businesses and individuals.",
    steps: [
      { label: "Start with Local Business Website Services", href: "/income-models/local-business-website-services" },
      { label: "Add Social Media Management as a second offer", href: "/income-models/social-media-management" },
      { label: "Test Digital Products and Templates for repeat revenue", href: "/income-models/digital-products-and-templates" },
      { label: "Review Marketplace Skills for warm-network distribution", href: "/income-models/marketplace-skills" },
    ],
  },
  {
    title: "I have professional knowledge",
    audience: "Real depth in a sector, profession, or specialized subject area.",
    description:
      "Professional depth is the foundation for the desk's highest-trust, highest-ceiling models. These require more validation before they pay, but they reward expertise that general content creators do not have.",
    steps: [
      { label: "Study AI-Assisted Research Services", href: "/income-models/ai-assisted-research-services" },
      { label: "Review Paid Briefings and Reports", href: "/income-models/paid-briefings-and-reports" },
      { label: "Read about the legal-adjacent information desk experiment", href: "/field-experiments" },
      { label: "Consider Online Tutoring if your depth is teachable", href: "/income-models/online-tutoring" },
    ],
  },
  {
    title: "I want to avoid scams",
    audience: "Cautious by default, has been burned before, or wants to vet anything before committing.",
    description:
      "This is the most important pathway on the desk. Spend time here before spending money anywhere else.",
    steps: [
      { label: "Read the full Anti-Scam Guide", href: "/anti-scam-guide" },
      { label: "Study the red flags and green flags", href: "/anti-scam-guide#flags" },
      { label: "Use the course-buying checklist before any purchase", href: "/anti-scam-guide#checklist" },
      { label: "Read why the make-money-online market became untrustworthy", href: "/briefings/why-the-make-money-online-market-became-untrustworthy" },
    ],
  },
  {
    title: "I want long-term digital assets",
    audience: "Willing to trade speed for durability, building something that compounds over years.",
    description:
      "Several models on this desk are explicitly long-horizon. They rarely pay quickly, but they tend to be the most durable once established.",
    steps: [
      { label: "Study Niche Blogging", href: "/income-models/niche-blogging" },
      { label: "Study Newsletter Publishing", href: "/income-models/newsletter-publishing" },
      { label: "Study YouTube Research Channels", href: "/income-models/youtube-research-channels" },
      { label: "Study Digital Products and Templates", href: "/income-models/digital-products-and-templates" },
      { label: "Browse all long-term-asset models", href: "/income-models?tags=long-term-asset" },
    ],
  },
];
