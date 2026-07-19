import { useCallback, useState } from "react"
import { ExternalLink, Play } from "lucide-react"
import { SiGithub } from "react-icons/si"

import { Reveal } from "@/components/portfolio/reveal"
import { SafariPreview } from "@/components/portfolio/safari-preview"
import { projects, type Project } from "@/lib/portfolio-data"

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const closePreview = useCallback(() => setActive(null), [])

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted-foreground">
              A few projects that reflect how I work — click a card to play the live
              demo.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/20 bg-card/40 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                {/* Cover — click to open the Safari preview */}
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  aria-label={`Preview ${project.title}`}
                  className="relative block aspect-video w-full overflow-hidden border-b border-foreground/10"
                >
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">
                      <Play className="size-4 fill-black" />
                      {project.liveUrl ? "Live Preview" : "Preview"}
                    </span>
                  </div>
                </button>

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
                        aria-label={`${project.title} source code`}
                        className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <SiGithub className="size-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} live site`}
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
