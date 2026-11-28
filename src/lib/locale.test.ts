import assert from "node:assert/strict";
import test from "node:test";
import { DEFAULT_LOCALE, parseLocale } from "./locale";
import { SITE_CONTENT, SITE_META } from "../content/site";
import { LEGAL_CONTENT } from "../content/legal";

test("parseLocale defaults safely to EN and recognizes ID variants", () => {
  assert.equal(DEFAULT_LOCALE, "en");
  assert.equal(parseLocale("en"), "en");
  assert.equal(parseLocale("EN-US"), "en");
  assert.equal(parseLocale("id"), "id");
  assert.equal(parseLocale("id-ID"), "id");
  assert.equal(parseLocale(" ID "), "id");
  assert.equal(parseLocale(undefined), "en");
  assert.equal(parseLocale(null), "en");
  assert.equal(parseLocale("fr"), "en");
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

  for (const locale of ["en", "id"] as const) {
    const yt = SITE_CONTENT[locale].platformSpecs.find((row) => row.platform === "YouTube Shorts");
    assert.ok(yt, `Missing YouTube Shorts spec in ${locale}`);
    assert.ok(!yt.scopes.includes("youtube.force-ssl"), `youtube.force-ssl must be optional in ${locale}`);
    assert.equal(yt.optionalScopes, "youtube.force-ssl");
    assert.ok(SITE_CONTENT[locale].notFound.heading.length > 0);
  }

  const combined = JSON.stringify(SITE_CONTENT);
  assert.doesNotMatch(combined, /\b(TBD|TODO|Lorem ipsum)\b/i);
  assert.doesNotMatch(SITE_CONTENT.en.hero.roles, /·/);
  assert.doesNotMatch(SITE_CONTENT.id.hero.roles, /·/);

  for (const project of [...SITE_CONTENT.en.projects, ...SITE_CONTENT.id.projects]) {
    if (project.href) {
      assert.ok(!project.href.startsWith("/id"), `Project href ${project.href} must not use legacy /id path`);
    }
  }
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

  for (const locale of ["en", "id"] as const) {
    assert.ok(!LEGAL_CONTENT[locale].terms.otherDocPath.startsWith("/id"));
    assert.ok(!LEGAL_CONTENT[locale].privacy.otherDocPath.startsWith("/id"));
  }
});
