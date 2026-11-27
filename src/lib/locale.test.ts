import assert from "node:assert/strict";
import test from "node:test";
import { getAlternateLocalePath, localizePath } from "./locale";
import { SITE_CONTENT, SITE_META } from "../content/site";
import { LEGAL_CONTENT } from "../content/legal";

test("getAlternateLocalePath maps EN and ID routes bidirectionally and normalizes trailing slashes", () => {
  assert.equal(getAlternateLocalePath("/", "id"), "/id");
  assert.equal(getAlternateLocalePath("/id", "en"), "/");
  assert.equal(getAlternateLocalePath("/id/", "en"), "/");

  assert.equal(getAlternateLocalePath("/terms", "id"), "/id/terms");
  assert.equal(getAlternateLocalePath("/terms/", "id"), "/id/terms");
  assert.equal(getAlternateLocalePath("/id/terms/", "en"), "/terms");

  assert.equal(getAlternateLocalePath("/privacy", "id"), "/id/privacy");
  assert.equal(getAlternateLocalePath("/id/privacy", "en"), "/privacy");

  assert.equal(
    getAlternateLocalePath("/apps/hubz-publisher", "id"),
    "/id/apps/hubz-publisher"
  );
  assert.equal(
    getAlternateLocalePath("/id/apps/hubz-publisher/", "en"),
    "/apps/hubz-publisher"
  );

  assert.equal(getAlternateLocalePath("/terms?ref=tiktok#top", "id"), "/id/terms");
  assert.equal(getAlternateLocalePath("/unknown/path", "en"), "/");
  assert.equal(getAlternateLocalePath("/unknown/path", "id"), "/id");
});

test("localizePath prefixes Indonesian paths cleanly without double slashes", () => {
  assert.equal(localizePath("/", "en"), "/");
  assert.equal(localizePath("/", "id"), "/id");
  assert.equal(localizePath("/terms", "en"), "/terms");
  assert.equal(localizePath("/terms", "id"), "/id/terms");
  assert.equal(localizePath("/apps/hubz-publisher", "id"), "/id/apps/hubz-publisher");
});

test("SITE_CONTENT keeps EN/ID parity, real owner facts, zero placeholders, and zero middle-dot role joins", () => {
  assert.equal(SITE_META.name, "Wahabdin Sangadji");
  assert.equal(SITE_META.email, "wahabdinn@gmail.com");
  assert.equal(SITE_META.githubUrl, "https://github.com/wahabdinn1");
  assert.equal(SITE_META.domain, "https://wahabdinn.my.id");
  assert.equal(SITE_META.appName, "Hubz Publisher");

  assert.equal(SITE_CONTENT.en.projects.length, 2);
  assert.equal(SITE_CONTENT.id.projects.length, 2);
  assert.equal(SITE_CONTENT.en.platformSpecs.length, 4);
  assert.equal(SITE_CONTENT.id.platformSpecs.length, 4);

  const combined = JSON.stringify(SITE_CONTENT);
  assert.doesNotMatch(combined, /\b(TBD|TODO|Lorem ipsum)\b/i);
  assert.doesNotMatch(SITE_CONTENT.en.hero.roles, /·/);
  assert.doesNotMatch(SITE_CONTENT.id.hero.roles, /·/);
});

test("LEGAL_CONTENT includes required operator, app, and TikTok/Google/Meta API disclosures", () => {
  const termsText = JSON.stringify(LEGAL_CONTENT.en.terms);
  const privacyText = JSON.stringify(LEGAL_CONTENT.en.privacy);

  for (const required of [
    "Wahabdin Sangadji",
    "Hubz Publisher",
    "wahabdinn@gmail.com",
    "wahabdinn.my.id",
    "YouTube",
    "Meta",
    "TikTok",
  ]) {
    assert.ok(termsText.includes(required), `Terms missing: ${required}`);
    assert.ok(privacyText.includes(required), `Privacy missing: ${required}`);
  }

  assert.ok(privacyText.includes("user.info.basic"), "Privacy missing TikTok user.info.basic");
  assert.ok(privacyText.includes("video.upload"), "Privacy missing TikTok video.upload");
  assert.ok(privacyText.includes("AES-256-GCM"), "Privacy missing AES-256-GCM disclosure");

  assert.ok(
    LEGAL_CONTENT.id.terms.authorityNotice && LEGAL_CONTENT.id.terms.authorityNotice.length > 20,
    "ID Terms must include authoritative English notice"
  );
  assert.ok(
    LEGAL_CONTENT.id.privacy.authorityNotice &&
      LEGAL_CONTENT.id.privacy.authorityNotice.length > 20,
    "ID Privacy must include authoritative English notice"
  );
  assert.equal(LEGAL_CONTENT.en.terms.sections.length, LEGAL_CONTENT.id.terms.sections.length);
  assert.equal(LEGAL_CONTENT.en.privacy.sections.length, LEGAL_CONTENT.id.privacy.sections.length);
});
