import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "motion/react"
import { Languages } from "lucide-react"

import { languages } from "@/i18n"
import { useContent, useLang } from "@/i18n/context"
import { cn } from "@/lib/utils"

/**
 * Language picker for the dock: a globe/translate button that opens a small
 * menu (rendered in a portal so the dock never clips it) above the dock.
 */
export function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const t = useContent()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (triggerRef.current?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.nav.language}
        title={t.nav.language}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex size-full items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <Languages className="size-[45%]" />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              role="menu"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="fixed bottom-24 left-1/2 z-[60] w-52 -translate-x-1/2 space-y-1 overflow-hidden rounded-2xl border border-border/60 bg-background/90 p-1.5 shadow-xl shadow-black/10 backdrop-blur-md"
            >
              {languages.map((l) => {
                const active = l.code === lang
                return (
                  <button
                    key={l.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => {
                      setLang(l.code)
                      setOpen(false)
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors",
                      active
                        ? "bg-primary/10 font-medium text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <span className="text-base leading-none">{l.flag}</span>
                    <span className="flex-1">{l.label}</span>
                    {active && (
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                    )}
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}
