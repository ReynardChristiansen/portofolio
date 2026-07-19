import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

interface GlyphMatrixProps extends React.HTMLAttributes<HTMLCanvasElement> {
  /** Characters to randomly pick from */
  glyphs?: string
  /** Cell size in px (also font size) */
  cellSize?: number
  /** Probability (0-1) a cell mutates each tick */
  mutationRate?: number
  /** Tick interval in ms */
  interval?: number
  /** Fade out toward bottom (0 = no fade) */
  fadeBottom?: number
  /** Glyph color (any CSS color). Pass a theme-aware value from the consumer. */
  color?: string
  /** When false, draws a single static frame and does not run the loop. */
  animate?: boolean
}

/**
 * GlyphMatrix — an animated grid of subtly shifting glyphs.
 * Draws a single static frame at rest; only runs its animation loop while
 * `animate` is true. Pass a `color` prop (e.g. driven by next-themes) to
 * adapt it to light and dark modes.
 */
export function GlyphMatrix({
  glyphs = "01·•+*/\\<>=",
  cellSize = 14,
  mutationRate = 0.04,
  interval = 90,
  className,
  fadeBottom = 0.6,
  color = "#6B7280",
  animate = true,
  style,
  ...props
}: GlyphMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  // Current glyph color as RGBA (a in 0-1). Kept in a ref so a color change
  // (e.g. theme toggle) recolors the next frame without restarting the loop.
  const rgbaRef = useRef({ r: 107, g: 114, b: 128, a: 1 })
  // Shared grid state so the setup and animation effects don't fight.
  const gridRef = useRef({
    cols: 0,
    rows: 0,
    cells: [] as string[],
    alphas: [] as number[],
  })

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const { clientWidth: w, clientHeight: h } = ctx.canvas
      ctx.clearRect(0, 0, w, h)

      ctx.font = `${cellSize - 2}px ui-monospace, SFMono-Regular, Menlo, monospace`
      ctx.textBaseline = "top"

      const { cols, rows, cells, alphas } = gridRef.current
      const { r, g, b, a: colorAlpha } = rgbaRef.current
      for (let y = 0; y < rows; y++) {
        const fade = fadeBottom > 0 ? 1 - (y / rows) * fadeBottom : 1
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x
          const a = alphas[i] * fade * colorAlpha
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
          ctx.fillText(cells[i], x * cellSize, y * cellSize)
        }
      }
    },
    [cellSize, fadeBottom],
  )

  // Resolve the CSS color string to RGBA, then recolor the current frame.
  useEffect(() => {
    const probe = document.createElement("canvas")
    probe.width = 1
    probe.height = 1
    const probeCtx = probe.getContext("2d")
    if (!probeCtx) return
    // Seed with the default so an invalid color falls back to it: the 2d
    // context keeps the previous fillStyle when assigned an invalid value.
    probeCtx.fillStyle = "#6B7280"
    probeCtx.fillStyle = color
    probeCtx.fillRect(0, 0, 1, 1)
    const [r, g, b, a] = probeCtx.getImageData(0, 0, 1, 1).data
    rgbaRef.current = { r, g, b, a: a / 255 }

    const ctx = canvasRef.current?.getContext("2d")
    if (ctx) draw(ctx)
  }, [color, draw])

  // Setup: size the canvas, seed the grid, draw one static frame.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const { clientWidth: w, clientHeight: h } = canvas

      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const cols = Math.ceil(w / cellSize)
      const rows = Math.ceil(h / cellSize)
      const cells = new Array(cols * rows)
        .fill(0)
        .map(() => glyphs[Math.floor(Math.random() * glyphs.length)])
      const alphas = new Array(cols * rows)
        .fill(0)
        .map(() => 0.05 + Math.random() * 0.35)
      gridRef.current = { cols, rows, cells, alphas }
    }

    resize()
    draw(ctx)

    const ro = new ResizeObserver(() => {
      resize()
      draw(ctx)
    })
    ro.observe(canvas)

    return () => ro.disconnect()
  }, [glyphs, cellSize, draw])

  // Animation: only runs while `animate` is true.
  useEffect(() => {
    if (!animate) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let last = 0
    let stopped = false

    const tick = (t: number) => {
      if (stopped) return

      if (t - last >= interval) {
        last = t

        const { cols, rows, cells, alphas } = gridRef.current
        const total = cols * rows
        if (total > 0) {
          const mutations = Math.max(1, Math.floor(total * mutationRate))
          for (let n = 0; n < mutations; n++) {
            const i = Math.floor(Math.random() * total)
            cells[i] = glyphs[Math.floor(Math.random() * glyphs.length)]
            alphas[i] = 0.05 + Math.random() * 0.45
          }
          draw(ctx)
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      stopped = true
      cancelAnimationFrame(raf)
    }
  }, [animate, glyphs, mutationRate, interval, draw])

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
      style={{ width: "100%", height: "100%", display: "block", ...style }}
      aria-hidden="true"
      {...props}
    />
  )
}
