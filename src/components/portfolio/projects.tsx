import { useCallback, useMemo, useState } from "react"
import { motion } from "motion/react"
import { ExternalLink, Play } from "lucide-react"
import { SiGithub } from "react-icons/si"

import { Reveal } from "@/components/portfolio/reveal"
import { SafariPreview } from "@/components/portfolio/safari-preview"
import { projects, type ResolvedProject } from "@/config/site"
import { useContent } from "@/i18n/context"

export function Projects() {
  const t = useContent()
  const [active, setActive] = useState<ResolvedProject | null>(null)
  const closePreview = useCallback(() => setActive(null), [])

  // Merge language-independent config with the active language's title/description.
  const resolved = useMemo<ResolvedProject[]>(
    () => projects.map((project) => ({ ...project, ...t.projects.items[project.id] })),
    [t],
  )

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {t.projects.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.projects.heading}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.projects.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resolved.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/20 bg-card/40 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                {/* Cover — click to open the Safari preview */}
                <motion.button
                  type="button"
                  onClick={() => setActive(project)}
                  aria-label={`${t.projects.preview} — ${project.title}`}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.985 }}
                  className="relative block aspect-video w-full overflow-hidden border-b border-foreground/10"
                >
                  <motion.img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="size-full object-cover"
                  />
                  {/* Centering container for the pill — no dark scrim */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    {/* Preview pill — pops up with a spring */}
                    <motion.span
                      variants={{
                        rest: { opacity: 0, y: 12, scale: 0.85 },
                        hover: { opacity: 1, y: 0, scale: 1 },
                      }}
                      transition={{ type: "spring", stiffness: 420, damping: 20, delay: 0.04 }}
                      className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-black/20"
                    >
                      <Play className="size-4 fill-black" />
                      {project.liveUrl ? t.projects.livePreview : t.projects.preview}
                    </motion.span>
                  </span>
                </motion.button>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} — GitHub`}
                        className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <SiGithub className="size-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} — ${t.projects.window.openInNewTab}`}
                          className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="flex-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-background/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <SafariPreview project={active} onClose={closePreview} />
    </section>
  )
}
