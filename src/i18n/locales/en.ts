import type { Dictionary } from "@/i18n/types"

export const en: Dictionary = {
  langName: "English",

  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    language: "Language",
  },

  hero: {
    role: "Full Stack Developer",
    tagline:
      "I build mobile and web, turning ideas into clean, reliable products.",
    downloadCv: "Download CV",
    contactMe: "Contact Me",
    scrollToAbout: "Scroll to about",
  },

  about: {
    eyebrow: "About",
    heading: "My background",
    paragraphs: [
      "I build scalable web and mobile applications, delivering end-to-end solutions from frontend interfaces to backend systems. I'm passionate about creating impactful products, improving the user experience, and continuously learning new technologies.",
    ],
    stats: {
      experience: "Years of experience",
      projects: "Projects completed",
    },
  },

  skills: {
    eyebrow: "Tech Stack",
    heading: "Skills & Tools",
    subtitle: "The technologies I use day to day to build products.",
  },

  projects: {
    eyebrow: "Projects",
    heading: "Featured Work",
    subtitle:
      "A few things I built — click any card to play the live demo.",
    livePreview: "Live Preview",
    preview: "Preview",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "A music streaming web app — stream songs, follow artists, and build your library. Installable PWA with lock-screen media controls.",
      },
      renime: {
        title: "Renime",
        description:
          "A mobile anime app — explore popular titles, watch episodes, search, and save your favorites for later. Built with Expo.",
      },
      inkling: {
        title: "Inkling",
        description:
          "Draw something and an AI guesses it out loud — real-time sketch recognition in the browser with TensorFlow.js (DoodleNet).",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "The classic Snake game rebuilt with vanilla HTML, CSS & JavaScript. Plays with keyboard or touch, right in the browser.",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "A brick-breaker game across three levels with paddle control, ball trail, particles, sound, and a bonus-ball combo mechanic.",
      },
      cooknow: {
        title: "CookNow",
        description:
          "Tell CookNow what's in your kitchen and it finds recipes you can cook right now — ranked by ingredient match, works offline.",
      },
    },
    window: {
      refresh: "Refresh",
      openInNewTab: "Open in a new tab",
      close: "Close preview",
      minimize: "Minimize preview",
      maximize: "Maximize (fullscreen)",
      exitFullscreen: "Exit fullscreen",
      noWebDemo: (title) =>
        `${title} is a mobile app (built with Expo), so there's no web demo to embed here. You can explore the source on GitHub.`,
      viewOnGithub: "View on GitHub",
    },
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in touch",
    subtitle:
      "I'm open to new opportunities and collaborations. Feel free to reach out.",
    rights: "All rights reserved.",
  },
}
