#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const log = (m, c = '\x1b[36m') => console.log(`${c}%s\x1b[0m`, m);
const run = (cmd, args = [], opts = {}) =>
  new Promise((res, rej) => {
    const c = spawn(cmd, args, { stdio: 'inherit', ...opts });
    c.on('close', (code) => (code === 0 ? res() : rej(code)));
  });

(async () => {
  log('🩺  Formity Zero – Bootstrap & Doctor');
  const nodeVer = Number(process.versions.node.split('.')[0]);
  if (nodeVer < 18) {
    log('Node 18+ required', '\x1b[31m');
    process.exit(1);
  }
  const pm = ['pnpm', 'npm', 'yarn'].find((p) => {
    try { fs.statSync(require.resolve(`${p}/package.json`)); return true; } catch {}
  }) || (await (async () => { await run('npm', ['i', '-g', 'pnpm']); return 'pnpm'; })());
  log(`📦 Using ${pm}`);
  await run(pm, ['install']);
  await run(pm, ['doctor']);
  const { select } = await import('@clack/prompts');
  const mode = await select({
    message: 'Pick a mode',
    options: [
      { value: 'dev', label: 'Start dev servers (all packages)' },
      { value: 'build', label: 'Build everything' },
      { value: 'test', label: 'Run unit tests' },
    ],
  });
  await run(pm, ['run', mode]);
})().catch(log); 