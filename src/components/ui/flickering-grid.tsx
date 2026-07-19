import * as React from "react"

import { cn } from "@/lib/utils"

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  maxOpacity?: number
  /** When false, the grid is drawn once and frozen (no flicker loop runs). */
  animate?: boolean
}

/**
 * FlickeringGrid — a canvas grid of small squares that flicker in and out.
 * Draws a single static frame at rest; only runs its animation loop while
 * `animate` is true and the grid is in view. Color changes recolor the
 * current frame without reshuffling the grid.
 */
export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  maxOpacity = 0.3,
  animate = true,
  className,
  ...props
}: FlickeringGridProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const gridRef = React.useRef<{
    cols: number
    rows: number
    squares: Float32Array
    dpr: number
  } | null>(null)
  // Current color as an "rgba(r, g, b," prefix, kept in a ref so a color change
  // recolors the next draw without re-running setup (which would reshuffle).
  const colorRef = React.useRef("rgba(148, 163, 184,")
  const [isInView, setIsInView] = React.useState(false)

  const resolveColor = React.useCallback((c: string) => {
    const canvas = document.createElement("canvas")
    canvas.width = 1
    canvas.height = 1
    const ctx = canvas.getContext("2d")
    if (!ctx) return "rgba(148, 163, 184,"
    ctx.fillStyle = c
    ctx.fillRect(0, 0, 1, 1)
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data)
    return `rgba(${r}, ${g}, ${b},`
  }, [])

  const setupCanvas = React.useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      const cols = Math.floor(w / (squareSize + gridGap))
      const rows = Math.floor(h / (squareSize + gridGap))
      const squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity
      }
      return { cols, rows, squares, dpr }
    },
    [squareSize, gridGap, maxOpacity],
  )

  const updateSquares = React.useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity
        }
      }
    },
    [flickerChance, maxOpacity],
  )

  const drawGrid = React.useCallback(
    (
      ctx: CanvasRenderingContext2D,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      const prefix = colorRef.current
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j]
          ctx.fillStyle = `${prefix}${opacity})`
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr,
          )
        }
      }
    },
    [squareSize, gridGap],
  )

  // Color: resolve to rgba and recolor the current frame (no reshuffle).
  React.useEffect(() => {
    colorRef.current = resolveColor(color)
    const ctx = canvasRef.current?.getContext("2d")
    const grid = gridRef.current
    if (ctx && grid) drawGrid(ctx, grid.cols, grid.rows, grid.squares, grid.dpr)
  }, [color, resolveColor, drawGrid])

  // Setup: size the canvas, seed the grid, draw one static frame.
  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const w = width || container.clientWidth
      const h = height || container.clientHeight
      gridRef.current = setupCanvas(canvas, w, h)
      const { cols, rows, squares, dpr } = gridRef.current
      drawGrid(ctx, cols, rows, squares, dpr)
    }

    updateCanvasSize()

    const resizeObserver = new ResizeObserver(() => updateCanvasSize())
    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 },
    )
    intersectionObserver.observe(canvas)

    return () => {
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [setupCanvas, drawGrid, width, height])

  // Animation: only runs while `animate` is true and the grid is in view.
  React.useEffect(() => {
    if (!animate || !isInView) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId = 0
    let lastTime = 0

    const loop = (time: number) => {
      const grid = gridRef.current
      if (grid) {
        const deltaTime = lastTime ? (time - lastTime) / 1000 : 0
        lastTime = time
        updateSquares(grid.squares, deltaTime)
        drawGrid(ctx, grid.cols, grid.rows, grid.squares, grid.dpr)
      }
      animationFrameId = requestAnimationFrame(loop)
    }

    animationFrameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animationFrameId)
  }, [animate, isInView, updateSquares, drawGrid])

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)} {...props}>
      <canvas ref={canvasRef} className="pointer-events-none" />
    </div>
  )
}
