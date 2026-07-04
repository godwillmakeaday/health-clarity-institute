# Health Clarity Institute — Three Centres Update

This update adds four active route folders for the existing Health Clarity Institute Next.js app:

- `/mental-health-clarity`
- `/health-technology-breakthroughs`
- `/health-finance-insurance`
- `/centres`

It also includes an optional reusable homepage component:

- `src/components/MoreHealthClarityCentres.tsx`

## Important

Unzip this ZIP inside the real project root:

```bash
cd ~/projects/health-clarity-institute
unzip -o /sdcard/Download/health-clarity-three-centres-update.zip
```

Do not leave the files inside a loose extracted folder. The pages must end up here:

```bash
src/app/mental-health-clarity/page.tsx
src/app/health-technology-breakthroughs/page.tsx
src/app/health-finance-insurance/page.tsx
src/app/centres/page.tsx
```

## Check routes

```bash
node scripts/health-clarity-route-audit.mjs
find src/app -maxdepth 3 -name page.tsx | sort | grep -E "mental-health|health-technology|health-finance|centres|informed-consent|medical-law"
```

## Commit and push

```bash
git status
git add src/app/mental-health-clarity src/app/health-technology-breakthroughs src/app/health-finance-insurance src/app/centres src/components/MoreHealthClarityCentres.tsx scripts/health-clarity-route-audit.mjs README-HEALTH-CLARITY-THREE-CENTRES.md
git commit -m "Add Health Clarity major centres"
git pull --rebase origin main
git push origin main
```

If Git says there is nothing to commit but Vercel has not updated, use:

```bash
git commit --allow-empty -m "Trigger Health Clarity centres redeploy"
git push origin main
```

## Test after Vercel says Ready

```text
https://health-clarity-institute.vercel.app/centres
https://health-clarity-institute.vercel.app/mental-health-clarity
https://health-clarity-institute.vercel.app/health-technology-breakthroughs
https://health-clarity-institute.vercel.app/health-finance-insurance
```

## Homepage integration

The ZIP includes `src/components/MoreHealthClarityCentres.tsx`. To show the section on the homepage, import and render it in your active homepage file, usually:

```tsx
import MoreHealthClarityCentres from "@/components/MoreHealthClarityCentres";
```

Then place this in the homepage JSX where you want the section to appear:

```tsx
<MoreHealthClarityCentres />
```

This avoids overwriting your existing homepage design.
