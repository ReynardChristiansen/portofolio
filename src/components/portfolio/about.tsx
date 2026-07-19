import { Reveal } from "@/components/portfolio/reveal"

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "30+", label: "Projects completed" },
  { value: "∞", label: "Curiosity" },
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
              A software engineer who sweats the details
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I am enthusiastic about utilizing my academic background, coupled
                with my real-world experience, to forge a career in software
                engineering.
              </p>
              <p>
                As I set out on this journey, I eagerly look forward to connecting
                with like-minded professionals, exchanging insights, and
                participating in projects that promote positive change.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-foreground/20 bg-card/40 p-5 text-center backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
