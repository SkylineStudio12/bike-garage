#!/usr/bin/env node
// Reassembles index.html from src/. src/app.js is kept PRETTIFIED for editing;
// esbuild minifies it here so the deployed index.html stays compact.
// Run: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { transform } from 'esbuild';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, 'src');

const template = readFileSync(join(SRC, 'index.template.html'), 'utf8');
const boot = readFileSync(join(SRC, 'boot.js'), 'utf8');
const appSrc = readFileSync(join(SRC, 'app.js'), 'utf8');

// Minify the app bundle for deploy (source stays readable).
const { code: app } = await transform(appSrc, {
  loader: 'js',
  minify: true,
  legalComments: 'inline',
});

const out = template
  .replace('/*__BOOT__*/', () => boot)
  .replace('/*__APP__*/', () => app.trimEnd());

const dest = join(ROOT, 'index.html');
writeFileSync(dest, out);
console.log(`built ${dest} (${Buffer.byteLength(out)} bytes; app ${Buffer.byteLength(app)} bytes)`);
