import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const OUT_DIR = path.resolve(process.cwd(), "out");
const PUBLIC_DIR = path.resolve(process.cwd(), "public");

const EXPECTED_FILES = [
  "index.html",
  "works.html",
  "works/hubz-publisher.html",
  "terms.html",
  "privacy.html",
  "oauth/tiktok/callback.html",
  "404.html",
  "_redirects",
];

test("static export generates unified routes, /works, OAuth relay, public files, redirects, and 404.html with crawler-readable EN HTML", () => {
  assert.ok(
    fs.existsSync(OUT_DIR),
    "Missing out/ directory. Run `pnpm build` before running `pnpm test`."
  );

  for (const relPath of EXPECTED_FILES) {
    const fullPath = path.join(OUT_DIR, relPath);
    assert.ok(fs.existsSync(fullPath), `Missing exported static file: ${relPath}`);
  }

  for (const entry of fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })) {
    if (entry.isFile()) {
      assert.ok(
        fs.existsSync(path.join(OUT_DIR, entry.name)),
        `Stale out/: missing public/${entry.name} (re-run pnpm build)`
      );
    }
  }

  assert.ok(!fs.existsSync(path.join(OUT_DIR, "id.html")), "Legacy id.html must not be generated");
  assert.ok(!fs.existsSync(path.join(OUT_DIR, "id")), "Legacy /id directory must not be generated");
  assert.ok(
    !fs.existsSync(path.join(OUT_DIR, "apps/hubz-publisher.html")),
    "Legacy apps/hubz-publisher.html must not be generated"
  );

  const redirects = fs.readFileSync(path.join(OUT_DIR, "_redirects"), "utf8");
  assert.ok(
    redirects.includes("/apps/hubz-publisher /works/hubz-publisher 301"),
    "_redirects must 301 redirect legacy /apps/hubz-publisher to /works/hubz-publisher"
  );

  const homeHtml = fs.readFileSync(path.join(OUT_DIR, "index.html"), "utf8");
  const worksHtml = fs.readFileSync(path.join(OUT_DIR, "works.html"), "utf8");
  const termsHtml = fs.readFileSync(path.join(OUT_DIR, "terms.html"), "utf8");
  const privacyHtml = fs.readFileSync(path.join(OUT_DIR, "privacy.html"), "utf8");
  const productHtml = fs.readFileSync(
    path.join(OUT_DIR, "works/hubz-publisher.html"),
    "utf8"
  );

  for (const [label, html] of [
    ["index.html", homeHtml],
    ["works.html", worksHtml],
    ["terms.html", termsHtml],
    ["privacy.html", privacyHtml],
    ["works/hubz-publisher.html", productHtml],
  ]) {
    assert.match(html, /<html[^>]*\blang="en"/, `${label} must default to lang="en"`);
    assert.ok(html.includes("Wahabdin Sangadji"), `${label} missing operator name`);
    assert.ok(html.includes("Hubz Publisher"), `${label} missing app name`);
    assert.ok(html.includes("wahabdinn@gmail.com"), `${label} missing contact email`);
    assert.doesNotMatch(html, /\b(TBD|Lorem ipsum)\b/i, `${label} contains placeholder text`);
    assert.doesNotMatch(
      html,
      /font-display|editorial-link|Bodoni|specimen-guide/,
      `${label} contains Hallmark Specimen leftovers`
    );
  }

  for (const keyword of ["TikTok", "YouTube", "Meta", "user.info.basic", "video.upload"]) {
    assert.ok(privacyHtml.includes(keyword), `privacy.html missing ${keyword}`);
  }
  assert.ok(termsHtml.includes("TikTok"), "terms.html missing TikTok");
  assert.ok(termsHtml.includes("YouTube"), "terms.html missing YouTube");
  assert.ok(termsHtml.includes("Meta"), "terms.html missing Meta");

  assert.ok(homeHtml.includes("<title>Wahabdin Sangadji</title>"), "index.html must render exact home title");

  const oauthHtml = fs.readFileSync(path.join(OUT_DIR, "oauth/tiktok/callback.html"), "utf8");
  assert.match(
    oauthHtml,
    /<meta[^>]*name="robots"[^>]*content="noindex, nofollow"/,
    "oauth/tiktok/callback.html must keep noindex, nofollow"
  );

  const headerSource = fs.readFileSync(
    path.resolve(process.cwd(), "src/components/site-header.tsx"),
    "utf8"
  );
  assert.ok(
    headerSource.includes("min-w-0 truncate") && headerSource.includes("text-base sm:text-xl"),
    "SiteHeader wordmark must shrink/truncate cleanly at 320px viewports"
  );
});
