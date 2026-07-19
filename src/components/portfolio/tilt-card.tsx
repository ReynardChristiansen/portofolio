import type { CSSProperties, ReactNode } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** Maximum tilt in degrees. */
  max?: number
}

/**
 * Tilts its content in 3D toward the cursor on hover, then springs back flat
 * on leave. Wrap a card with it for an interactive 3D effect.
 */
export function TiltCard({ children, className, style, max = 6 }: TiltCardProps) {
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  const spring = { stiffness: 220, damping: 18, mass: 0.5 }
  const rotateX = useSpring(targetX, spring)
  const rotateY = useSpring(targetY, spring)
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  return (
    <motion.div
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return
        const rect = e.currentTarget.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        targetX.set(-py * max * 2)
        targetY.set(px * max * 2)
      }}
      onPointerLeave={() => {
        targetX.set(0)
        targetY.set(0)
      }}
      style={{ ...style, transform }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
