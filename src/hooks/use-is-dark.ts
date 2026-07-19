import { useEffect, useState } from "react"

/**
 * Tracks whether the `dark` class is present on <html>.
 * The AnimatedThemeToggler mutates that class directly, so we observe it
 * to keep canvas-based components (Particles, GlyphMatrix) theme-aware.
 */
export function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  )

  useEffect(() => {
    const root = document.documentElement
    const update = () => setIsDark(root.classList.contains("dark"))
    update()

    const observer = new MutationObserver(update)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return isDark
}
