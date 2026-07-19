import { Reveal } from "@/components/portfolio/reveal"

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "10+", label: "Projects completed" },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              My background
            </h2>
            <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I build scalable web and mobile applications, delivering
                end-to-end solutions from frontend interfaces to backend
                systems. I&rsquo;m passionate about creating impactful products,
                improving the user experience, and continuously learning new
                technologies.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex divide-x divide-border/60 overflow-hidden rounded-2xl border border-foreground/20 bg-card/40 backdrop-blur-[2px] transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 px-4 py-9 text-center">
                <div className="text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
