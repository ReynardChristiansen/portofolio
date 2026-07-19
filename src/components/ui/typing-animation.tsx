import * as React from "react"

import { cn } from "@/lib/utils"

interface TypingAnimationProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  /** List of strings to cycle through. */
  texts: string[]
  /** Delay between typing each character, in ms. @default 90 */
  typingSpeed?: number
  /** Delay between deleting each character, in ms. @default 45 */
  deletingSpeed?: number
  /** How long to hold a fully typed string before deleting, in ms. @default 1600 */
  pauseDuration?: number
  /** Extra classes for the blinking cursor. */
  cursorClassName?: string
}

/**
 * Loops through `texts`, typing each one out character by character,
 * pausing, then deleting it before moving on to the next.
 */
export function TypingAnimation({
  texts,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1600,
  className,
  cursorClassName,
  ...props
}: TypingAnimationProps) {
  const [index, setIndex] = React.useState(0)
  const [display, setDisplay] = React.useState("")
  const [phase, setPhase] = React.useState<"typing" | "pausing" | "deleting">(
    "typing",
  )

  React.useEffect(() => {
    if (texts.length === 0) return

    const current = texts[index % texts.length]

    if (phase === "typing") {
      if (display === current) {
        const t = setTimeout(() => setPhase("pausing"), pauseDuration)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setDisplay(current.slice(0, display.length + 1))
      }, typingSpeed)
      return () => clearTimeout(t)
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), pauseDuration)
      return () => clearTimeout(t)
    }

    // deleting
    if (display === "") {
      setIndex((i) => (i + 1) % texts.length)
      setPhase("typing")
      return
    }
    const t = setTimeout(() => {
      setDisplay(current.slice(0, display.length - 1))
    }, deletingSpeed)
    return () => clearTimeout(t)
  }, [display, phase, index, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={cn("inline-flex items-center", className)} {...props}>
      <span>{display}</span>
      <span
        aria-hidden
        className={cn(
          "ml-1 inline-block h-[1em] w-[3px] animate-pulse rounded-full bg-current align-middle",
          cursorClassName,
        )}
      />
    </span>
  )
}
