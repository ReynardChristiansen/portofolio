import type { CSSProperties } from "react"

import { SiGmail } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/portfolio/reveal"
import { TiltCard } from "@/components/portfolio/tilt-card"
import { site, socials } from "@/config/site"
import { useContent } from "@/i18n/context"

export function Contact() {
  const t = useContent()

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal>
        <TiltCard
          max={6}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-foreground/20 bg-card/40 px-6 py-16 text-center backdrop-blur-[2px]"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {t.contact.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-7 text-base shadow-lg shadow-primary/10 transition-colors duration-300 hover:bg-[#EA4335] hover:text-white"
            >
              <a href={`mailto:${site.email}`}>
                <SiGmail className="size-4" /> {site.email}
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
          © {site.name} {new Date().getFullYear()}. {t.contact.rights}
        </p>
      </footer>
    </section>
  )
}
