import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { motion } from "motion/react"
import { ExternalLink, Lock, RotateCw } from "lucide-react"
import { SiGithub } from "react-icons/si"

import type { Project } from "@/lib/portfolio-data"

interface SafariPreviewProps {
  project: Project | null
  onClose: () => void
}

/**
 * A macOS Safari-style window (traffic lights + address bar + refresh &
 * fullscreen controls) rendered in a modal. Embeds the project's live demo in
 * an iframe; falls back to the cover image for projects without a web demo.
 */
export function SafariPreview({ project, onClose }: SafariPreviewProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    if (!project) return

    // Always open windowed — never inherit a stale fullscreen state.
    setIsFullscreen(false)

    const exitFs = () => {
      if (document.fullscreenElement) void document.exitFullscreen()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      // First Escape exits fullscreen; a second one closes the modal.
      if (document.fullscreenElement) exitFs()
      else onClose()
    }
    const onFsChange = () =>
      setIsFullscreen(Boolean(document.fullscreenElement))

    document.addEventListener("keydown", onKey)
    document.addEventListener("fullscreenchange", onFsChange)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("fullscreenchange", onFsChange)
      document.body.style.overflow = ""
      exitFs() // never leave the browser stuck in fullscreen after close
    }
  }, [project, onClose])

  if (!project) return null

  const address = project.liveUrl ?? project.repoUrl

  // Exit fullscreen (if any) and reset before closing, so the next open starts
  // fresh in the default windowed state.
  const handleClose = () => {
    if (document.fullscreenElement) void document.exitFullscreen()
    setIsFullscreen(false)
    onClose()
  }

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void windowRef.current?.requestFullscreen()
    }
  }

  const iconBtn =
    "rounded p-1 text-neutral-500 transition-colors hover:bg-black/5 hover:text-black dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClose}
    >
      <motion.div
        ref={windowRef}
        className={`flex flex-col overflow-hidden bg-neutral-100 shadow-2xl dark:bg-neutral-900 ${
          isFullscreen
            ? "h-screen w-screen rounded-none border-0"
            : "h-[85vh] w-full max-w-5xl rounded-xl border border-black/10 dark:border-white/10"
        }`}
        initial={{ scale: 0.96, y: 12, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Safari title bar */}
        <div className="flex h-11 shrink-0 items-center gap-3 border-b border-black/10 bg-neutral-200/80 px-4 dark:border-white/10 dark:bg-neutral-800/80">
          <div className="group/lights flex items-center gap-2">
            {/* Close */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close preview"
              className="flex size-3.5 items-center justify-center rounded-full bg-[#ff5f57]"
            >
              <svg
                viewBox="0 0 10 10"
                className="size-2.5 text-black/60 opacity-0 transition-opacity group-hover/lights:opacity-100"
              >
                <path
                  d="M2 2 L8 8 M8 2 L2 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Minimize */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Minimize preview"
              className="flex size-3.5 items-center justify-center rounded-full bg-[#febc2e]"
            >
              <svg
                viewBox="0 0 10 10"
                className="size-2.5 text-black/60 opacity-0 transition-opacity group-hover/lights:opacity-100"
              >
                <path
                  d="M2 5 H8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Maximize / fullscreen (two states) */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Maximize (fullscreen)"}
              className="flex size-3.5 items-center justify-center rounded-full bg-[#28c840]"
            >
              <svg
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="size-2.5 text-black/70 opacity-0 transition-opacity group-hover/lights:opacity-100"
              >
                <path d="M5 2 V8 M2 5 H8" />
              </svg>
            </button>
          </div>

          {/* Address bar — reload sits inside it at the right edge (Safari-style) */}
          <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-md bg-black/5 py-1 pl-3 pr-1 text-xs text-neutral-600 dark:bg-black/40 dark:text-neutral-300">
            <Lock className="size-3 shrink-0" />
            <span className="flex-1 truncate text-center">{address}</span>
            {project.liveUrl && (
              <button
                type="button"
                onClick={() => setReloadKey((k) => k + 1)}
                aria-label="Refresh"
                title="Refresh"
                className="-my-0.5 shrink-0 rounded p-1 text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                <RotateCw className="size-3.5" />
              </button>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-0.5">
            <a
              href={address}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open in a new tab"
              title="Open in a new tab"
              className={iconBtn}
            >
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="relative flex-1 bg-neutral-100 dark:bg-neutral-950">
          {project.liveUrl ? (
            <iframe
              key={`${project.liveUrl}-${reloadKey}`}
              src={project.liveUrl}
              title={`${project.title} live preview`}
              className="h-full w-full border-0 bg-neutral-950"
              loading="lazy"
              allow="autoplay; fullscreen; clipboard-write; accelerometer; gyroscope"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
              <img
                src={project.cover}
                alt={project.title}
                className="max-h-[55%] rounded-lg border border-black/10 object-contain shadow-lg dark:border-white/10"
              />
              <p className="max-w-md text-sm text-neutral-500 dark:text-neutral-400">
                {project.title} is a mobile app (built with Expo), so there&rsquo;s no
                web demo to embed here. You can explore the source on GitHub.
              </p>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              >
                <SiGithub className="size-4" /> View on GitHub
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}
