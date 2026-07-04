import fs from "node:fs";
import path from "node:path";

const requiredRoutes = [
  "src/app/mental-health-clarity/page.tsx",
  "src/app/health-technology-breakthroughs/page.tsx",
  "src/app/health-finance-insurance/page.tsx",
  "src/app/centres/page.tsx",
  "src/app/informed-consent-clarity/page.tsx",
  "src/app/medical-law-patient-rights/page.tsx",
];

console.log("Health Clarity Institute route audit\n");
for (const route of requiredRoutes) {
  const exists = fs.existsSync(path.join(process.cwd(), route));
  console.log(`${exists ? "✓" : "✗"} ${route}`);
}

console.log("\nIf a required route is missing, confirm that you unzipped the update inside the project root:");
console.log("~/projects/health-clarity-institute");
