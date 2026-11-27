export type Locale = "en" | "id";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "hubz-porto-locale";

export function parseLocale(value: unknown): Locale {
  if (typeof value !== "string") return DEFAULT_LOCALE;
  const normalized = value.trim().toLowerCase();
  if (normalized === "id" || normalized.startsWith("id-")) return "id";
  return "en";
}
