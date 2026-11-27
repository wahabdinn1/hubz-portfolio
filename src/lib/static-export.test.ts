import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const OUT_DIR = path.resolve(process.cwd(), "out");

const EXPECTED_HTML_FILES = [
  "index.html",
  "apps/hubz-publisher.html",
  "terms.html",
  "privacy.html",
  "404.html",
];

test("static export generates unified routes and 404.html with complete crawler-readable EN HTML", (t) => {
  if (!fs.existsSync(OUT_DIR)) {
    t.skip("Run `pnpm build` before verifying static HTML output in out/.");
    return;
  }

  for (const relPath of EXPECTED_HTML_FILES) {
    const fullPath = path.join(OUT_DIR, relPath);
    assert.ok(fs.existsSync(fullPath), `Missing exported static HTML: ${relPath}`);
  }

  // Ensure legacy /id/* static directories or files are completely removed
  assert.ok(!fs.existsSync(path.join(OUT_DIR, "id.html")), "Legacy id.html must not be generated");
  assert.ok(!fs.existsSync(path.join(OUT_DIR, "id")), "Legacy /id directory must not be generated");

  const homeHtml = fs.readFileSync(path.join(OUT_DIR, "index.html"), "utf8");
  const termsHtml = fs.readFileSync(path.join(OUT_DIR, "terms.html"), "utf8");
  const privacyHtml = fs.readFileSync(path.join(OUT_DIR, "privacy.html"), "utf8");
  const productHtml = fs.readFileSync(
    path.join(OUT_DIR, "apps/hubz-publisher.html"),
    "utf8"
  );

  for (const [label, html] of [
    ["index.html", homeHtml],
    ["terms.html", termsHtml],
    ["privacy.html", privacyHtml],
    ["apps/hubz-publisher.html", productHtml],
  ]) {
    assert.match(html, /<html[^>]*\blang="en"/, `${label} must default to lang="en"`);
    assert.ok(html.includes("Wahabdin Sangadji"), `${label} missing operator name`);
    assert.ok(html.includes("Hubz Publisher"), `${label} missing app name`);
    assert.ok(html.includes("wahabdinn@gmail.com"), `${label} missing contact email`);
    assert.doesNotMatch(html, /\b(TBD|Lorem ipsum)\b/i, `${label} contains placeholder text`);
    assert.doesNotMatch(html, /font-display|editorial-link|Bodoni|specimen-guide/, `${label} contains Hallmark Specimen leftovers`);
  }

  for (const keyword of ["TikTok", "YouTube", "Meta", "user.info.basic", "video.upload"]) {
    assert.ok(privacyHtml.includes(keyword), `privacy.html missing ${keyword}`);
  }
  assert.ok(termsHtml.includes("TikTok"), "terms.html missing TikTok");
  assert.ok(termsHtml.includes("YouTube"), "terms.html missing YouTube");
  assert.ok(termsHtml.includes("Meta"), "terms.html missing Meta");

  assert.ok(homeHtml.includes("<title>Wahabdin Sangadji</title>"), "index.html must render exact home title");

  const headerSource = fs.readFileSync(
    path.resolve(process.cwd(), "src/components/site-header.tsx"),
    "utf8"
  );
  assert.ok(
    headerSource.includes("min-w-0 truncate") && headerSource.includes("text-base sm:text-xl"),
    "SiteHeader wordmark must shrink/truncate cleanly at 320px viewports"
  );
});
