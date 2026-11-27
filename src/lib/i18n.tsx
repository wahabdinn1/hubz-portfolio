"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { LEGAL_CONTENT, type LegalBundle } from "@/content/legal";
import { SITE_CONTENT, type SiteContent } from "@/content/site";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  parseLocale,
  type Locale,
} from "@/lib/locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  site: SiteContent;
  legal: LegalBundle;
};

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  site: SITE_CONTENT[DEFAULT_LOCALE],
  legal: LEGAL_CONTENT[DEFAULT_LOCALE],
});

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Locale {
  try {
    return parseLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
  } catch {
    return DEFAULT_LOCALE;
  }
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Ignore storage write errors in restricted browsers.
    }
    listeners.forEach((listener) => listener());
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      site: SITE_CONTENT[locale],
      legal: LEGAL_CONTENT[locale],
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}
