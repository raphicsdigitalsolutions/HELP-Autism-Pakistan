import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const htmlFiles = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.html'));

console.log(`Auditing ${htmlFiles.length} HTML files...`);

let totalLinksChecked = 0;
let brokenLinks = [];
let duplicateIdIssues = [];

const existingFiles = new Set(htmlFiles);

htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(ROOT_DIR, file), 'utf-8');

  // Check IDs for duplicates within the same file
  const idMatches = [...content.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
  const seenIds = new Set();
  idMatches.forEach(id => {
    if (seenIds.has(id)) {
      duplicateIdIssues.push({ file, id });
    }
    seenIds.add(id);
  });

  // Check all hrefs
  const hrefMatches = [...content.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
  hrefMatches.forEach(href => {
    // Ignore anchors, external links, mailto, tel
    if (href.startsWith('#') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      return;
    }

    totalLinksChecked++;
    const [targetFile, anchor] = href.split('#');
    const fullTargetPath = path.join(ROOT_DIR, targetFile);
    if (!fs.existsSync(fullTargetPath)) {
      brokenLinks.push({ sourceFile: file, target: href });
    }
  });
});

console.log(`Total internal links checked: ${totalLinksChecked}`);
if (duplicateIdIssues.length > 0) {
  console.error(`Duplicate IDs found:`, duplicateIdIssues);
} else {
  console.log(`No duplicate IDs found across all pages!`);
}

if (brokenLinks.length > 0) {
  console.error(`Broken links found:`, brokenLinks);
} else {
  console.log(`All internal links resolve perfectly to real files!`);
}
