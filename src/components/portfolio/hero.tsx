import type { CSSProperties } from "react"

import { ArrowDown } from "lucide-react"
import { SiGmail } from "react-icons/si"
import { FaDownload } from "react-icons/fa6"

import { Particles } from "@/components/ui/particles"
import { ShineBorder } from "@/components/ui/shine-border"
import { PixelImage } from "@/components/ui/pixel-image"
import { AuroraText } from "@/components/ui/aurora-text"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Button } from "@/components/ui/button"
import { useIsDark } from "@/hooks/use-is-dark"
import { site, socials } from "@/config/site"
import { useContent } from "@/i18n/context"

export function Hero() {
  const isDark = useIsDark()
  const t = useContent()

  // Monochrome aurora palette, theme-aware so the name stays readable in both modes.
  // More stops + a symmetric ramp = smoother, seamless shimmer.
  const nameColors = isDark
    ? ["#ffffff", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#a1a1aa", "#d4d4d8", "#e4e4e7", "#ffffff"]
    : ["#0a0a0a", "#27272a", "#3f3f46", "#52525b", "#71717a", "#52525b", "#3f3f46", "#27272a", "#0a0a0a"]

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden px-6 py-28"
    >
      {/* Particles (home only) */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={70}
        staticity={1000}
        size={0.5}
        color={isDark ? "#ffffff" : "#000000"}
        refresh
      />
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: text */}
        <div className="flex flex-col items-start text-left">
          <p className="flex min-h-[1.75rem] items-center text-lg text-muted-foreground sm:min-h-8 sm:text-xl">
            <TypingAnimation texts={site.greetings} />
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">
              <AuroraText colors={nameColors} speed={2}>
                {site.firstName}
              </AuroraText>
            </span>
            <span className="block">
              <AuroraText colors={nameColors} speed={2}>
                {site.lastName}
              </AuroraText>
            </span>
          </h1>

          <p className="mt-6 text-2xl font-semibold text-foreground/90 sm:text-3xl">
            {t.hero.role}
          </p>

          <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border/60 bg-foreground/5 px-7 text-base text-foreground backdrop-blur-md transition-all duration-300 hover:bg-foreground/10 dark:bg-foreground/5 dark:hover:bg-foreground/10"
            >
              <a href={site.resumeUrl} download={site.cvDownloadName}>
                <FaDownload className="size-4 transition-colors duration-300 group-hover/button:text-[#22c55e]" />{" "}
                {t.hero.downloadCv}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border/60 bg-foreground/5 px-7 text-base text-foreground backdrop-blur-md transition-all duration-300 hover:bg-foreground/10 dark:bg-foreground/5 dark:hover:bg-foreground/10"
            >
              <a href="#contact">
                <SiGmail className="size-4 transition-colors duration-300 group-hover/button:text-[#EA4335]" />{" "}
                {t.hero.contactMe}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
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
        </div>

        {/* Right: profile photo with animated ShineBorder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Round photo + animated shine border */}
            <div className="relative size-72 overflow-hidden rounded-full sm:size-80 lg:size-[26rem]">
              <PixelImage
                src={site.avatarUrl}
                alt={site.name}
                grid="8x8"
                grayscaleAnimation={false}
                className="grayscale"
                pixelFadeInDuration={600}
                maxAnimationDelay={600}
              />
              <ShineBorder
                borderWidth={3}
                duration={8}
                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t.hero.scrollToAbout}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 text-muted-foreground/70 transition-colors hover:text-foreground sm:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
