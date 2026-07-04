#!/usr/bin/env node
// Boot smoke test: render the built index.html in jsdom and assert the app
// actually mounted (a broken bundle renders little/nothing into #root).
// Run: node smoke.cjs
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { JSDOM, VirtualConsole } = require('jsdom');

const MIN_RENDER = 100000; // rendered #root innerHTML must exceed this
const html = readFileSync(join(__dirname, 'index.html'), 'utf8');

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', (e) => errors.push(e));

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  url: 'https://bike-log.local/',
  virtualConsole: vc,
  beforeParse(window) {
    // jsdom lacks matchMedia; the app calls it once at startup.
    window.matchMedia = window.matchMedia || function (q) {
      return { matches: false, media: q, onchange: null,
        addListener() {}, removeListener() {},
        addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; } };
    };
  },
});

// React effects flush asynchronously; give the microtask/timer queue a beat.
setTimeout(() => {
  const root = dom.window.document.getElementById('root');
  const len = root ? root.innerHTML.length : 0;
  const boot = dom.window.document.querySelector('pre'); // boot-error overlay, if any

  const fatal = errors.filter(e => !/Not implemented/i.test(String(e && e.detail || e)));
  if (fatal.length) {
    console.error('❌ smoke: runtime errors during boot:');
    fatal.forEach(e => console.error('   ', String(e.detail || e).split('\n')[0]));
    process.exit(1);
  }
  if (boot) {
    console.error('❌ smoke: boot-error overlay rendered:', boot.textContent.slice(0, 200));
    process.exit(1);
  }
  if (len < MIN_RENDER) {
    console.error(`❌ smoke: #root only rendered ${len} chars (need > ${MIN_RENDER}). App did not mount.`);
    process.exit(1);
  }
  console.log(`✅ smoke: app mounted, #root rendered ${len} chars (> ${MIN_RENDER})`);
  process.exit(0);
}, 1500);
