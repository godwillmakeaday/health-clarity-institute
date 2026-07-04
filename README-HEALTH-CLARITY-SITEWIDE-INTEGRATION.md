# Health Clarity Institute — Sitewide Integration Update

This update is for the next stage of Health Clarity Institute: making the platform feel like one unified public health clarity institution instead of separate hidden pages.

## What this ZIP includes

- Improved `/clarity-centres` institutional map page
- Homepage section component: `HealthClarityCentresSection`
- Homepage trust/governance component: `HealthClarityTrustSection`
- Unified footer component: `HealthClarityUnifiedFooter`
- Route audit script
- Route-test cleanup script
- Mirrored files in both `app/` and `src/app/` to avoid route-folder confusion

## Files included

```text
app/clarity-centres/page.tsx
src/app/clarity-centres/page.tsx
components/HealthClarityCentresSection.tsx
components/HealthClarityTrustSection.tsx
components/HealthClarityUnifiedFooter.tsx
src/components/HealthClarityCentresSection.tsx
src/components/HealthClarityTrustSection.tsx
src/components/HealthClarityUnifiedFooter.tsx
scripts/health-clarity-sitewide-route-audit.mjs
scripts/remove-route-test.mjs
README-HEALTH-CLARITY-SITEWIDE-INTEGRATION.md
```

## Termux usage

From the correct project folder:

```bash
cd ~/projects/health-clarity-institute
unzip -o /sdcard/Download/health-clarity-sitewide-integration-update.zip
node scripts/remove-route-test.mjs
node scripts/health-clarity-sitewide-route-audit.mjs
```

Then commit and push:

```bash
git status
git add app src/app components src/components scripts/health-clarity-sitewide-route-audit.mjs scripts/remove-route-test.mjs README-HEALTH-CLARITY-SITEWIDE-INTEGRATION.md
git commit -m "Add Health Clarity sitewide integration layer"
git pull --rebase origin main
git push origin main
```

After Vercel shows **Ready**, test:

```text
https://health-clarity-institute.vercel.app/clarity-centres
https://health-clarity-institute.vercel.app/medical-law-patient-rights
https://health-clarity-institute.vercel.app/informed-consent-clarity
https://health-clarity-institute.vercel.app/mental-health-clarity
https://health-clarity-institute.vercel.app/health-technology-breakthroughs
https://health-clarity-institute.vercel.app/health-finance-insurance
https://health-clarity-institute.vercel.app/editorial-policy
https://health-clarity-institute.vercel.app/medical-review-policy
https://health-clarity-institute.vercel.app/disclaimer
https://health-clarity-institute.vercel.app/contributors
https://health-clarity-institute.vercel.app/for-partners
https://health-clarity-institute.vercel.app/roadmap
```

## Homepage integration

This ZIP does not overwrite your existing homepage automatically, because the current homepage may already have custom structure.

To integrate the new homepage sections manually, import and place these components inside the homepage file:

```tsx
import HealthClarityCentresSection from "../components/HealthClarityCentresSection";
import HealthClarityTrustSection from "../components/HealthClarityTrustSection";
```

For `src/app/page.tsx`, use:

```tsx
import HealthClarityCentresSection from "../components/HealthClarityCentresSection";
import HealthClarityTrustSection from "../components/HealthClarityTrustSection";
```

Then place inside the page JSX:

```tsx
<HealthClarityCentresSection />
<HealthClarityTrustSection />
```

If your homepage is in root `app/page.tsx`, the import path may be:

```tsx
import HealthClarityCentresSection from "../components/HealthClarityCentresSection";
import HealthClarityTrustSection from "../components/HealthClarityTrustSection";
```

## Footer integration

To replace or upgrade the footer, import:

```tsx
import HealthClarityUnifiedFooter from "../components/HealthClarityUnifiedFooter";
```

Then use:

```tsx
<HealthClarityUnifiedFooter />
```

## Important public boundary

Health Clarity Institute provides public health education and patient clarity. It does not diagnose, treat, provide emergency medical instruction, replace qualified healthcare professionals, or provide legal, financial, or insurance advice.
