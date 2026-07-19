import type { ReactNode } from "react"
import { motion } from "motion/react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Fade + rise into view once, when scrolled into the viewport. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
