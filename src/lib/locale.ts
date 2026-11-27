export type Locale = "en" | "id";

const KNOWN_EN_PATHS = new Set<string>([
  "/",
  "/apps/hubz-publisher",
  "/terms",
  "/privacy",
]);

function normalizePathname(raw: string): string {
  const withoutHash = raw.split("#")[0] ?? "/";
  const withoutQuery = withoutHash.split("?")[0] ?? "/";
  const trimmed = withoutQuery.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withLeading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeading.replace(/\/+$/, "") || "/";
}

export function localizePath(enPath: string, locale: Locale): string {
  const clean = normalizePathname(enPath);
  const baseEn = clean === "/id" ? "/" : clean.startsWith("/id/") ? clean.slice(3) : clean;
  if (locale === "en") return baseEn;
  return baseEn === "/" ? "/id" : `/id${baseEn}`;
}

export function getAlternateLocalePath(pathname: string, targetLocale: Locale): string {
  const clean = normalizePathname(pathname);
  const enCandidate =
    clean === "/id" ? "/" : clean.startsWith("/id/") ? clean.slice(3) || "/" : clean;
  const resolvedEn = KNOWN_EN_PATHS.has(enCandidate) ? enCandidate : "/";
  return localizePath(resolvedEn, targetLocale);
}
