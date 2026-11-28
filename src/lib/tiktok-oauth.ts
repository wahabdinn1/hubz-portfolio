export const LOCAL_CALLBACK_BASE = "http://localhost:3000/api/oauth/tiktok/callback";
const ALLOWED_PARAMS = ["code", "state", "scopes", "error", "error_description"] as const;

export function buildLocalForwardUrl(search: string): string | null {
  const incoming = new URLSearchParams(search);
  const outgoing = new URLSearchParams();
  let hasAny = false;

  for (const key of ALLOWED_PARAMS) {
    const value = incoming.get(key);
    if (value !== null && value.trim() !== "") {
      outgoing.set(key, value);
      hasAny = true;
    }
  }

  if (!hasAny) return null;
  return `${LOCAL_CALLBACK_BASE}?${outgoing.toString()}`;
}
