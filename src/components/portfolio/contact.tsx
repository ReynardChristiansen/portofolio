import type { CSSProperties } from "react"

import { SiGmail } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/portfolio/reveal"
import { TiltCard } from "@/components/portfolio/tilt-card"
import { profile, socials } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal>
        <TiltCard
          max={6}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-foreground/20 bg-card/40 px-6 py-16 text-center backdrop-blur-[2px]"
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            I&rsquo;m open to new opportunities and collaborations. Feel free to
            reach out.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-7 text-base shadow-lg shadow-primary/10 transition-colors duration-300 hover:bg-[#EA4335] hover:text-white"
            >
              <a href={`mailto:${profile.email}`}>
                <SiGmail className="size-4" /> {profile.email}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                title={social.label}
                style={{ "--brand": social.color } as CSSProperties}
                className="group flex size-11 items-center justify-center rounded-full border border-foreground/20 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:[border-color:var(--brand,var(--color-foreground))]"
              >
                <social.icon className="size-5 transition-colors duration-300 group-hover:[color:var(--brand,var(--color-foreground))]" />
              </a>
            ))}
          </div>
        </TiltCard>
      </Reveal>

      <footer className="mx-auto mt-16 max-w-5xl border-t border-border/60 pt-8 text-center text-sm text-muted-foreground">
        <p>
          © {profile.name} {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </section>
  )
}
