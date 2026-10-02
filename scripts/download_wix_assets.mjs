import fs from 'fs';
import path from 'path';
import https from 'https';

const t1 = fs.readFileSync('scripts/template_engine.mjs', 'utf8');
const t2 = fs.readFileSync('scripts/build_all_pages.mjs', 'utf8');
const matches = (t1 + ' ' + t2).match(/https:\/\/static\.wixstatic\.com\/[^"'\s]+/g) || [];
const unique = Array.from(new Set(matches));

const outDir = path.join('assets', 'img', 'migrated');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Downloading ${unique.length} unique Wix assets to assets/img/migrated/...`);

let success = 0;
let failed = 0;

const downloadOne = (url, index) => {
  return new Promise((resolve) => {
    const match = url.match(/563e77_[a-zA-Z0-9]+/);
    const baseName = match ? match[0] : `wix_${index}`;
    const filename = `${baseName}.jpg`;
    const dest = path.join(outDir, filename);

    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      success++;
      resolve({ url, local: `assets/img/migrated/${filename}`, ok: true });
      return;
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            success++;
            resolve({ url, local: `assets/img/migrated/${filename}`, ok: true });
          });
        });
      } else {
        file.close();
        try { fs.unlinkSync(dest); } catch {}
        failed++;
        resolve({ url, ok: false, status: res.statusCode });
      }
    }).on('error', (err) => {
      file.close();
      try { fs.unlinkSync(dest); } catch {}
      failed++;
      resolve({ url, ok: false, error: err.message });
    });
  });
};

async function run() {
  const results = await Promise.all(unique.map((u, i) => downloadOne(u, i)));
  console.log(`Download completed: ${success} successful, ${failed} failed out of ${unique.length}.`);
  fs.writeFileSync('scripts/wix_migration_manifest.json', JSON.stringify(results, null, 2));
  console.log('Saved scripts/wix_migration_manifest.json');
}

run();
