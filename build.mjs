#!/usr/bin/env node
// Reassembles index.html from src/. The app bundle is already an esbuild IIFE,
// so "building" is lossless inlining — no re-bundling needed. Run: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, 'src');

const template = readFileSync(join(SRC, 'index.template.html'), 'utf8');
const boot = readFileSync(join(SRC, 'boot.js'), 'utf8');
const app = readFileSync(join(SRC, 'app.js'), 'utf8');

const out = template
  .replace('/*__BOOT__*/', () => boot)
  .replace('/*__APP__*/', () => app);

const dest = join(ROOT, 'index.html');
writeFileSync(dest, out);
console.log(`built ${dest} (${Buffer.byteLength(out)} bytes)`);
