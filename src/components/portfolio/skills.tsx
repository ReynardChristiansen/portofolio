import { useState, type CSSProperties } from "react"

import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Marquee } from "@/components/ui/marquee"
import { Reveal } from "@/components/portfolio/reveal"
import { useIsDark } from "@/hooks/use-is-dark"
import { skills } from "@/lib/portfolio-data"

type Skill = (typeof skills)[number]

/** Resolve a brand color (single hex, or per-theme pair) to a concrete hex. */
function resolveBrand(
  color: Skill["color"],
  isDark: boolean,
): string | undefined {
  if (!color) return undefined
  return typeof color === "string" ? color : isDark ? color.dark : color.light
}

function SkillCard({
  skill,
  brandColor,
}: {
  skill: Skill
  brandColor?: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative flex h-32 w-44 shrink-0 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-foreground/20 bg-card/40 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      style={{ "--brand": brandColor } as CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Flickering grid backdrop — frozen + grey at rest; animates + takes the
          skill's brand color on hover (foreground for monochrome brands) */}
      <FlickeringGrid
        color={hovered ? (brandColor ?? "#94a3b8") : "#94a3b8"}
        animate={hovered}
        squareSize={2}
        gridGap={4}
        flickerChance={0.35}
        maxOpacity={0.5}
        className="absolute inset-0 opacity-30 transition-opacity duration-300 [mask-image:radial-gradient(circle_at_center,transparent_20%,black_95%)] group-hover:opacity-100"
      />

      {/* Brand icon (not text) */}
      <skill.icon className="relative z-10 size-9 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:[color:var(--brand,var(--color-foreground))]" />
      <span className="relative z-10 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {skill.name}
      </span>
    </div>
  )
}

export function Skills() {
  const isDark = useIsDark()
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2))
  const secondRow = skills.slice(Math.ceil(skills.length / 2))

  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Tech Stack
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills &amp; Tools
          </h2>
          <p className="mt-4 text-muted-foreground">
            The technologies I use day to day to build products.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative flex flex-col gap-3">
          <Marquee pauseOnHover className="[--duration:45s] [--gap:0.75rem]">
            {firstRow.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                brandColor={resolveBrand(skill.color, isDark)}
              />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:45s] [--gap:0.75rem]">
            {secondRow.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                brandColor={resolveBrand(skill.color, isDark)}
              />
            ))}
          </Marquee>

          {/* Fade the left & right edges into the background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background sm:w-40" />
        </div>
      </Reveal>
    </section>
  )
}
