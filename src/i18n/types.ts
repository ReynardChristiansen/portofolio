import type { ProjectId, StatKey } from "@/config/site"

/**
 * The shape every locale file must implement. TypeScript enforces that
 * en / id / ja / es all provide the exact same keys, so a missing
 * translation is a compile error rather than a silent gap.
 */
export interface Dictionary {
  /** Language name in its own language — shown in the switcher. */
  langName: string

  nav: {
    home: string
    about: string
    skills: string
    projects: string
    contact: string
    language: string
  }

  hero: {
    role: string
    tagline: string
    downloadCv: string
    contactMe: string
    scrollToAbout: string
  }

  about: {
    eyebrow: string
    heading: string
    paragraphs: string[]
    /** Label for each stat, keyed by the stat's id in the config. */
    stats: Record<StatKey, string>
  }

  skills: {
    eyebrow: string
    heading: string
    subtitle: string
  }

  projects: {
    eyebrow: string
    heading: string
    subtitle: string
    /** Preview pill text on a card cover. */
    livePreview: string
    preview: string
    /** Title + description for each project, keyed by the project's id. */
    items: Record<ProjectId, { title: string; description: string }>
    /** Safari-style preview window controls & fallback copy. */
    window: {
      refresh: string
      openInNewTab: string
      close: string
      minimize: string
      maximize: string
      exitFullscreen: string
      /** Shown for projects without a web demo (interpolates the title). */
      noWebDemo: (title: string) => string
      viewOnGithub: string
    }
  }

  contact: {
    eyebrow: string
    heading: string
    subtitle: string
    /** Trailing part of the footer: "© {name} {year}. {rights}" */
    rights: string
  }
}
