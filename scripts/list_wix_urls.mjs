import fs from 'fs';

const t1 = fs.readFileSync('scripts/template_engine.mjs', 'utf8');
const t2 = fs.readFileSync('scripts/build_all_pages.mjs', 'utf8');
const all = t1 + ' ' + t2;
const matches = all.match(/https:\/\/static\.wixstatic\.com\/[^"'\s]+/g) || [];
const unique = Array.from(new Set(matches));
console.log('Unique Wix URLs found:', unique.length);
unique.forEach((u, i) => console.log(`${i+1}: ${u}`));
