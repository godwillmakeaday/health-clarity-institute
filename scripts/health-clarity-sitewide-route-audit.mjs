import fs from "node:fs";
import path from "node:path";

const roots = ["app", "src/app"];
const expectedRoutes = [
  "clarity-centres",
  "medical-law-patient-rights",
  "informed-consent-clarity",
  "mental-health-clarity",
  "health-technology-breakthroughs",
  "health-finance-insurance",
  "editorial-policy",
  "medical-review-policy",
  "disclaimer",
  "contributors",
  "for-partners",
  "roadmap",
];

function exists(filePath) {
  return fs.existsSync(path.join(process.cwd(), filePath));
}

console.log("\nHealth Clarity Sitewide Route Audit\n");

for (const root of roots) {
  const present = exists(root);
  console.log(`${present ? "✓" : "—"} ${root}${present ? " exists" : " not found"}`);
  if (!present) continue;
  for (const route of expectedRoutes) {
    const routeFile = path.join(root, route, "page.tsx");
    console.log(`  ${exists(routeFile) ? "✓" : "•"} ${routeFile}`);
  }
  const testRoute = path.join(root, "route-test");
  if (exists(testRoute)) {
    console.log(`  ⚠ Temporary route-test still exists at ${testRoute}. Remove before public domain launch.`);
  }
}

console.log("\nRecommended public URLs after deploy:");
for (const route of expectedRoutes) {
  console.log(`/${route}`);
}
console.log("");
