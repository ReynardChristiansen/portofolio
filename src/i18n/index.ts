import type { Dictionary } from "@/i18n/types"
import { en } from "@/i18n/locales/en"
import { id } from "@/i18n/locales/id"
import { ja } from "@/i18n/locales/ja"
import { es } from "@/i18n/locales/es"
import { zh } from "@/i18n/locales/zh"
import { de } from "@/i18n/locales/de"
import { fr } from "@/i18n/locales/fr"
import { ko } from "@/i18n/locales/ko"

/* ================================================================== */
/*  i18n registry — add a language by (1) creating a locale file in    */
/*  ./locales, (2) importing it here, and (3) adding it to the two     */
/*  maps below. TypeScript will flag any missing translation key.      */
/* ================================================================== */

export type Lang = "en" | "id" | "ja" | "es" | "zh" | "de" | "fr" | "ko"

export const defaultLang: Lang = "en"

/** Order shown in the language switcher, with a flag for each. */
export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: en.langName, flag: "🇬🇧" },
  { code: "id", label: id.langName, flag: "🇮🇩" },
  { code: "ja", label: ja.langName, flag: "🇯🇵" },
  { code: "es", label: es.langName, flag: "🇪🇸" },
  { code: "zh", label: zh.langName, flag: "🇨🇳" },
  { code: "de", label: de.langName, flag: "🇩🇪" },
  { code: "fr", label: fr.langName, flag: "🇫🇷" },
  { code: "ko", label: ko.langName, flag: "🇰🇷" },
]

export const dictionaries: Record<Lang, Dictionary> = { en, id, ja, es, zh, de, fr, ko }

export type { Dictionary }
