#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const packages = ['formity', 'integration-engine', 'ahead-editor', 'ahead-shadcn'];
let ok = true;
packages.forEach((p) => {
  if (!fs.existsSync(path.join('packages', p, 'package.json'))) ok = false;
});
if (!ok) {
  console.error('❌ Missing package.json in packages');
  process.exit(1);
}
console.log('✅ All packages present');
try {
  execSync('pnpm install --frozen-lockfile', { stdio: 'pipe' });
  console.log('✅ Dependencies ok');
} catch {
  console.error('❌ Dependency install failed');
  process.exit(1);
} 