# Health Clarity Institute Governance Update

This update adds institutional credibility and governance pages for Health Clarity Institute.

## Routes added

- `/editorial-policy`
- `/medical-review-policy`
- `/disclaimer`
- `/contributors`
- `/for-partners`
- `/roadmap`
- `/clarity-centres`

## Why both `app/` and `src/app/` are included

Your Health Clarity project has previously contained both route structures. To avoid another inactive-folder problem, this update includes the same pages under both `app/` and `src/app/`. After deployment, keep whichever route structure the live build uses and remove duplicates later if desired.

## Termux usage

```bash
cd ~/projects/health-clarity-institute
unzip -o /sdcard/Download/health-clarity-governance-update.zip
node scripts/health-clarity-governance-route-audit.mjs

git status
git add app src/app components src/components scripts/health-clarity-governance-route-audit.mjs README-HEALTH-CLARITY-GOVERNANCE.md
git commit -m "Add Health Clarity governance pages"
git pull --rebase origin main
git push origin main
```

## Test after Vercel Ready

- `https://health-clarity-institute.vercel.app/editorial-policy`
- `https://health-clarity-institute.vercel.app/medical-review-policy`
- `https://health-clarity-institute.vercel.app/disclaimer`
- `https://health-clarity-institute.vercel.app/contributors`
- `https://health-clarity-institute.vercel.app/for-partners`
- `https://health-clarity-institute.vercel.app/roadmap`
- `https://health-clarity-institute.vercel.app/clarity-centres`
