import * as React from "react"

import { cn } from "@/lib/utils"

type Grid = { rows: number; cols: number }

const DEFAULT_GRIDS = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
} satisfies Record<string, Grid>

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS

const MIN_GRID = 1
const MAX_GRID = 16

interface PixelImageProps {
  src: string
  /** Accessible label for the whole image. */
  alt?: string
  grid?: PredefinedGridKey
  customGrid?: Grid
  /** Reveal from grayscale to full color. */
  grayscaleAnimation?: boolean
  /** How long each pixel cell fades in (ms). */
  pixelFadeInDuration?: number
  /** Max random stagger before a cell starts fading in (ms). */
  maxAnimationDelay?: number
  /** Delay before the grayscale → color reveal (ms). */
  colorRevealDelay?: number
  className?: string
}

/**
 * Reveals an image as a grid of pixel cells that fade in with random delays,
 * then resolves grayscale → color. Plays once on mount.
 */
export function PixelImage({
  src,
  alt = "",
  grid = "6x4",
  customGrid,
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  className,
}: PixelImageProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [showColor, setShowColor] = React.useState(false)

  const { rows, cols } = React.useMemo(() => {
    const isValid = (g?: Grid) =>
      !!g &&
      Number.isInteger(g.rows) &&
      Number.isInteger(g.cols) &&
      g.rows >= MIN_GRID &&
      g.cols >= MIN_GRID &&
      g.rows <= MAX_GRID &&
      g.cols <= MAX_GRID

    return isValid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid]
  }, [customGrid, grid])

  React.useEffect(() => {
    setIsVisible(true)
    const t = setTimeout(() => setShowColor(true), colorRevealDelay)
    return () => clearTimeout(t)
  }, [colorRevealDelay])

  const pieces = React.useMemo(() => {
    const total = rows * cols
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols
      const clipPath = `polygon(${col * (100 / cols)}% ${row * (100 / rows)}%, ${
        (col + 1) * (100 / cols)
      }% ${row * (100 / rows)}%, ${(col + 1) * (100 / cols)}% ${
        (row + 1) * (100 / rows)
      }%, ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%)`
      // Random per-cell stagger for the pixelated feel.
      const delay = Math.random() * maxAnimationDelay
      return { clipPath, delay }
    })
  }, [rows, cols, maxAnimationDelay])

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("relative h-full w-full select-none", className)}
    >
      {pieces.map((piece, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all ease-out"
          style={{
            clipPath: piece.clipPath,
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
        >
          <img
            src={src}
            alt=""
            aria-hidden
            draggable={false}
            className={cn(
              "h-full w-full object-cover",
              grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale"),
            )}
            style={{
              transitionProperty: "filter",
              transitionDuration: `${colorRevealDelay}ms`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
