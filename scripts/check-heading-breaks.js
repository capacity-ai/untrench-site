#!/usr/bin/env node
// Fails if any h1–h4 in a TSX component contains a hardcoded <br />.
// Hardcoded breaks snap at unexpected viewport sizes — use responsive
// font sizing or max-w constraints instead.

const fs = require('fs');
const path = require('path');

function collectTsx(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      results.push(...collectTsx(full));
    } else if (entry.isFile() && full.endsWith('.tsx')) {
      results.push(full);
    }
  }
  return results;
}

const src = path.join(__dirname, '..', 'src');
const files = collectTsx(src);
let violations = 0;

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let inHeading = false;
  let startLine = -1;
  let buf = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!inHeading && /<h[1-4][\s>]/.test(line)) {
      inHeading = true;
      startLine = i + 1;
      buf = line;
    } else if (inHeading) {
      buf += '\n' + line;
    }

    if (inHeading && /<\/h[1-4]>/.test(line)) {
      const intentional = buf.includes('{/* br-ok */}');
      if (!intentional && /<br\s*\/?>/.test(buf)) {
        const rel = path.relative(process.cwd(), file);
        console.error(`\n${rel}:${startLine}`);
        buf.split('\n').filter(l => l.trim()).forEach(l => console.error('  ' + l.trim()));
        violations++;
      }
      inHeading = false;
      buf = '';
    }
  }
}

if (violations > 0) {
  console.error(`\n✗ ${violations} heading(s) with hardcoded <br /> — use responsive font-size or max-w instead.`);
  process.exit(1);
} else {
  console.log('✓ No hardcoded <br /> in headings.');
}
