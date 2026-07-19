import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/portfolio/reveal"
import { profile, socials } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-foreground/20 bg-card/40 px-6 py-16 text-center backdrop-blur-[2px]">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Got a project idea or want to collaborate? I'm always open to a new
            conversation.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 rounded-xl px-6 text-base">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" /> {profile.email}
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
                className="flex size-11 items-center justify-center rounded-full border border-foreground/20 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <footer className="mx-auto mt-16 max-w-5xl border-t border-border/60 pt-8 text-center text-sm text-muted-foreground">
        <p>
          © {profile.name}. Built with React, Vite &amp; Magic UI.
        </p>
      </footer>
    </section>
  )
}
