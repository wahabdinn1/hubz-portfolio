import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const OUT_DIR = path.resolve(process.cwd(), "out");

const EXPECTED_HTML_FILES = [
  "index.html",
  "id.html",
  "apps/hubz-publisher.html",
  "id/apps/hubz-publisher.html",
  "terms.html",
  "id/terms.html",
  "privacy.html",
  "id/privacy.html",
  "404.html",
];

test("static export generates all 8 EN/ID routes and 404.html with complete crawler-readable HTML", (t) => {
  if (!fs.existsSync(OUT_DIR)) {
    t.skip("Run `pnpm build` before verifying static HTML output in out/.");
    return;
  }

  for (const relPath of EXPECTED_HTML_FILES) {
    const fullPath = path.join(OUT_DIR, relPath);
    assert.ok(fs.existsSync(fullPath), `Missing exported static HTML: ${relPath}`);
  }

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
    assert.ok(html.includes("Wahabdin Sangadji"), `${label} missing operator name`);
    assert.ok(html.includes("Hubz Publisher"), `${label} missing app name`);
    assert.ok(html.includes("wahabdinn@gmail.com"), `${label} missing contact email`);
    assert.doesNotMatch(html, /\b(TBD|Lorem ipsum)\b/i, `${label} contains placeholder text`);
  }

  for (const keyword of ["TikTok", "YouTube", "Meta", "user.info.basic", "video.upload"]) {
    assert.ok(privacyHtml.includes(keyword), `privacy.html missing ${keyword}`);
  }
  assert.ok(termsHtml.includes("TikTok"), "terms.html missing TikTok");
  assert.ok(termsHtml.includes("YouTube"), "terms.html missing YouTube");
  assert.ok(termsHtml.includes("Meta"), "terms.html missing Meta");
});
