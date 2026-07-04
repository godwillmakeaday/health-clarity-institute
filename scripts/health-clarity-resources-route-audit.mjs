const routes = [
  "app/resources/page.tsx",
  "app/partner-brief/page.tsx",
  "src/app/resources/page.tsx",
  "src/app/partner-brief/page.tsx",
  "components/ResourcesPartnerBriefSection.tsx",
  "src/components/ResourcesPartnerBriefSection.tsx",
];

const fs = await import("node:fs");

console.log("\nHealth Clarity Resources & Partner Brief route audit\n");
for (const route of routes) {
  const exists = fs.existsSync(route);
  console.log(`${exists ? "✓" : "✗"} ${route}`);
}
console.log("\nExpected public routes:");
console.log("- /resources");
console.log("- /partner-brief");
console.log("\nIf production still shows 404 while the random deployment URL works, promote the working random deployment with Vercel CLI.\n");
