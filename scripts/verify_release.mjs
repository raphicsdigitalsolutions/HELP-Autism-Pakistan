import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const targetRoot = path.resolve(repoRoot, process.argv[2] || ".");
const fail = (message) => {
  console.error("[RELEASE_CHECK_FAIL] " + message);
  process.exitCode = 1;
  throw new Error(message);
};
const exists = (p) => fs.existsSync(p);
const read = (p) => fs.readFileSync(p, "utf8");
const htmlFiles = fs.readdirSync(targetRoot).filter((name) => name.endsWith(".html")).sort();
const expectedPages = [
  "index.html","about.html","programs.html","resources.html","contact.html","404.html",
  "aba-therapy.html","speech-language-therapy.html","occupational-therapy.html","sensory-therapy.html",
  "floortime-approach.html","teacch-therapy.html","play-therapy.html","music-therapy.html",
  "functional-living-skills.html","academics-school-training.html","vocational-therapy.html",
  "diagnostic-evaluation.html","internship-programs.html","parent-trainings.html","hands-on-trainings.html",
  "sibling-trainings.html","certificate-courses.html","community-awareness.html","aba-videos.html",
  "speech-therapy-videos.html","occupational-therapy-videos.html","safety-training-videos.html",
  "academic-videos.html","functional-living-skills-videos.html","vocational-videos.html","floortime-videos.html",
  "social-skills-videos.html","play-videos.html","hands-on-trainings-videos.html","cognitive-behavior-videos.html",
  "inclusive-education-videos.html","teacch-intervention-videos.html","pecs-visual-videos.html",
  "peer-mediated-videos.html","parent-power-videos.html","nutrition-supplements-videos.html",
  "facilitated-communication-videos.html","rdi-videos.html","journals.html","books.html",
  "free-consultations.html","autism-resource-library.html","photos-library.html"
];
if (htmlFiles.length !== 49) fail(`Expected 49 HTML pages (48 public + 404), found ${htmlFiles.length} in ${targetRoot}`);
for (const page of expectedPages) if (!exists(path.join(targetRoot,page))) fail(`Missing required page: ${page}`);

const baseExpected = "https://www.helpautismpakistan.com/";
const canonicalSeen = new Set();
let linkRefsChecked = 0;
for (const page of htmlFiles) {
  const html = read(path.join(targetRoot,page));
  if (!/<title>\s*[^<]+<\/title>/i.test(html)) fail(`Missing title in ${page}`);
  if (!/<meta\s+name=["']description["']\s+content=["'][^"']+["']/i.test(html)) fail(`Missing description in ${page}`);
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  if (!canonical) fail(`Missing canonical URL in ${page}`);
  const expectedCanonical = page === "index.html" ? baseExpected : baseExpected + page;
  if (canonical !== expectedCanonical) fail(`Canonical mismatch in ${page}: expected ${expectedCanonical}, got ${canonical}`);
  if (canonicalSeen.has(canonical)) fail(`Duplicate canonical URL: ${canonical}`);
  canonicalSeen.add(canonical);

  const attrRe = /\b(?:src|href|poster|data-full-src)=["']([^"']+)["']/gi;
  for (const match of html.matchAll(attrRe)) {
    let raw = match[1].replace(/&amp;/g,"&").trim();
    if (!raw || /^(?:https?:|\/\/|data:|mailto:|tel:|javascript:|#)/i.test(raw)) continue;
    raw = raw.split("#")[0].split("?")[0];
    if (!raw) continue;
    const hasExtension = /\.[a-z0-9]{2,6}$/i.test(raw);
    if (!hasExtension && !raw.endsWith("/")) continue;
    const resolved = raw.startsWith("/")
      ? path.resolve(targetRoot, "." + raw)
      : path.resolve(path.dirname(path.join(targetRoot,page)), raw);
    if (!resolved.startsWith(targetRoot + path.sep) && resolved !== path.join(targetRoot,"index.html")) fail(`Local path escapes site root from ${page}: ${raw}`);
    if (raw.endsWith("/")) {
      if (raw === "/") {
        if (!exists(path.join(targetRoot,"index.html"))) fail("Homepage entry is missing");
      }
    } else if (!exists(resolved)) {
      fail(`Missing local file referenced in ${page}: ${raw}`);
    }
    linkRefsChecked++;
  }
}

const configPath = path.join(repoRoot,"vercel.json");
const config = JSON.parse(read(configPath));
if (config.cleanUrls !== false) fail("vercel.json must keep cleanUrls=false to match .html canonicals and sitemap entries");
if (!Array.isArray(config.redirects) || config.redirects.length < 45) fail("Expected explicit permanent redirects for extensionless page aliases and legacy Wix routes");
const redirectMap = new Map(config.redirects.map(r => [r.source,r]));
for (const required of ["/speech-therapy","/sensory-integration","/consultations","/resource-library","/safety-videos","/cbt-videos"]) {
  if (!redirectMap.has(required)) fail(`Missing required legacy redirect: ${required}`);
}
for (const r of config.redirects) {
  if (!r.source?.startsWith("/") || !r.destination?.startsWith("/") || !r.destination.endsWith(".html") || r.permanent !== true) {
    fail(`Invalid redirect definition: ${JSON.stringify(r)}`);
  }
  const destinationFile = path.join(targetRoot,r.destination.replace(/^\//,""));
  if (!exists(destinationFile)) fail(`Redirect destination does not exist: ${r.source} -> ${r.destination}`);
}

const sitemapPath = path.join(targetRoot,"sitemap.xml");
if (!exists(sitemapPath)) fail("Missing sitemap.xml in site output");
const sitemap = read(sitemapPath);
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
if (locations.length !== 48 || new Set(locations).size !== locations.length) fail(`Expected 48 unique sitemap locations, found ${locations.length}`);
for (const location of locations) {
  const url = new URL(location);
  if (url.origin !== "https://www.helpautismpakistan.com") fail(`Unexpected sitemap origin: ${location}`);
  const page = url.pathname === "/" ? "index.html" : url.pathname.replace(/^\//,"");
  if (!page.endsWith(".html")) fail(`Sitemap URL must use the chosen .html strategy: ${location}`);
  if (!exists(path.join(targetRoot,page))) fail(`Sitemap route has no matching HTML file: ${location}`);
}

const mainJs = read(path.join(repoRoot,"assets/js/main.js"));
if (!mainJs.includes("handleWhatsAppInquiry") || !mainJs.includes("CLINIC_WHATSAPP_DIGITS = '923444040074'") || !mainJs.includes("https://wa.me/${CLINIC_WHATSAPP_DIGITS}?text=") || !mainJs.includes("You must press the")) {
  fail("WhatsApp-first inquiry and explicit Send confirmation are not present in main.js");
}
if (/localStorage\.setItem\s*\(\s*['"]help_consultations['"]/.test(mainJs)) {
  fail("Sensitive consultation details must not be persisted to localStorage");
}
for (const page of ["index.html","contact.html"]) {
  const html = read(path.join(targetRoot,page));
  if (!html.includes("Continue to WhatsApp") || !html.includes("form-privacy-note") || !html.includes("form-feedback-box")) {
    fail(`WhatsApp-first form/privacy notice missing in ${page}`);
  }
}

const galleryData = read(path.join(repoRoot,"scripts/gallery_data.mjs"));
const galleryPaths = [...galleryData.matchAll(/src:\s*["'](assets\/img\/social\/[^"']+)["']/g)].map(m => m[1]);
if (galleryPaths.length !== 46) fail(`Expected 46 declared gallery images, found ${galleryPaths.length}`);
for (const imagePath of galleryPaths) {
  if (!exists(path.join(targetRoot,imagePath))) fail(`Missing gallery asset: ${imagePath}`);
}

console.log(`[RELEASE_CHECK_PASS] ${htmlFiles.length} HTML pages; ${linkRefsChecked} local file references; ${locations.length} sitemap URLs; ${config.redirects.length} permanent redirects; ${galleryPaths.length} gallery images; WhatsApp privacy workflow verified (${targetRoot}).`);
