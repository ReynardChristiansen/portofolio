import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"

import { defaultLang, dictionaries, type Lang } from "@/i18n"
import { LanguageContext } from "@/i18n/context"

const STORAGE_KEY = "portfolio-lang"

function readInitialLang(): Lang {
  if (typeof window === "undefined") return defaultLang
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && saved in dictionaries) return saved as Lang
  return defaultLang
}

/**
 * Provides the active language + dictionary to the whole app. The choice is
 * persisted to localStorage and mirrored onto <html lang> for accessibility.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
