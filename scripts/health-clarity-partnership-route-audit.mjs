import fs from "node:fs";

const routes = [
  "public-health-literacy",
  "concept-brief",
  "government-health-partnerships",
  "hospital-partnerships",
  "community-health-programmes"
];

console.log("Health Clarity Partnership Desk route audit
");
for (const route of routes) {
  for (const base of ["app", "src/app"]) {
    const file = `${base}/${route}/page.tsx`;
    console.log(`${fs.existsSync(file) ? "✓" : "✗"} ${file}`);
  }
}
for (const file of ["components/PublicHealthPartnershipDeskSection.tsx", "src/components/PublicHealthPartnershipDeskSection.tsx"]) {
  console.log(`${fs.existsSync(file) ? "✓" : "✗"} ${file}`);
}
