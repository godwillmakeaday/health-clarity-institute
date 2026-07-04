import fs from "node:fs";
import path from "node:path";

for (const dir of ["app/route-test", "src/app/route-test"]) {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`Removed ${dir}`);
  } else {
    console.log(`No ${dir} found`);
  }
}
