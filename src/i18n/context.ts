import { createContext, useContext } from "react"

import type { Dictionary, Lang } from "@/i18n"

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** The active dictionary — all UI copy for the current language. */
  t: Dictionary
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

function useLanguageContext(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLang/useContent must be used within a <LanguageProvider>")
  }
  return ctx
}

/** Read + change the active language. */
export function useLang() {
  const { lang, setLang } = useLanguageContext()
  return { lang, setLang }
}

/** Read the active language's dictionary (all translatable copy). */
export function useContent(): Dictionary {
  return useLanguageContext().t
}
