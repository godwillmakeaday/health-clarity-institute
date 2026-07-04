#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const routes = [
  'editorial-policy',
  'medical-review-policy',
  'disclaimer',
  'contributors',
  'for-partners',
  'roadmap',
  'clarity-centres',
];

for (const root of ['app', 'src/app']) {
  console.log(`\nChecking ${root}`);
  for (const route of routes) {
    const file = path.join(process.cwd(), root, route, 'page.tsx');
    console.log(`${fs.existsSync(file) ? '✓' : '✗'} ${file}`);
  }
}
