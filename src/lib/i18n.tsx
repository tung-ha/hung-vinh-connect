import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "vi";

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (en: string, vi: string) => string;
};

const I18nContext = createContext<I18nValue>({
  locale: "vi",
  setLocale: () => {},
  t: (_en, vi) => vi,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  // Vietnamese is the default language on first load.
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    const stored = window.localStorage.getItem("hv-locale");
    if (stored === "vi" || stored === "en") setLocaleState(stored);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem("hv-locale", l);
  }, []);

  const t = useCallback((en: string, vi: string) => (locale === "vi" ? vi : en), [locale]);

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
