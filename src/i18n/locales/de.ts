import type { Dictionary } from "@/i18n/types"

export const de: Dictionary = {
  langName: "Deutsch",

  nav: {
    home: "Start",
    about: "Über mich",
    skills: "Kenntnisse",
    projects: "Projekte",
    contact: "Kontakt",
    language: "Sprache",
  },

  hero: {
    role: "Full Stack Developer",
    tagline:
      "Ich entwickle Mobil- und Web-Apps und verwandle Ideen in saubere, zuverlässige Produkte.",
    downloadCv: "Lebenslauf herunterladen",
    contactMe: "Kontaktiere mich",
    scrollToAbout: "Zu Über mich scrollen",
  },

  about: {
    eyebrow: "Über mich",
    heading: "Mein Hintergrund",
    paragraphs: [
      "Ich entwickle skalierbare Web- und Mobil-Anwendungen und liefere End-to-End-Lösungen von Frontend-Oberflächen bis zu Backend-Systemen. Ich habe eine Leidenschaft dafür, wirkungsvolle Produkte zu schaffen, die Nutzererfahrung zu verbessern und kontinuierlich neue Technologien zu lernen.",
    ],
    stats: {
      experience: "Jahre Erfahrung",
      projects: "Abgeschlossene Projekte",
    },
  },

  skills: {
    eyebrow: "Tech-Stack",
    heading: "Fähigkeiten & Tools",
    subtitle: "Die Technologien, die ich täglich zum Entwickeln von Produkten nutze.",
  },

  projects: {
    eyebrow: "Projekte",
    heading: "Ausgewählte Arbeiten",
    subtitle:
      "Ein paar Dinge, die ich gebaut habe — klicke auf eine Karte, um die Live-Demo abzuspielen.",
    livePreview: "Live-Vorschau",
    preview: "Vorschau",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "Eine Musik-Streaming-Web-App — streame Songs, folge Künstlern und baue deine Bibliothek auf. Installierbare PWA mit Mediensteuerung auf dem Sperrbildschirm.",
      },
      renime: {
        title: "Renime",
        description:
          "Eine mobile Anime-App — entdecke beliebte Titel, schaue Episoden, suche und speichere deine Favoriten für später. Mit Expo entwickelt.",
      },
      inkling: {
        title: "Inkling",
        description:
          "Zeichne etwas und eine KI errät es laut — Echtzeit-Skizzenerkennung im Browser mit TensorFlow.js (DoodleNet).",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "Das klassische Snake-Spiel, neu gebaut mit reinem HTML, CSS & JavaScript. Spielbar per Tastatur oder Touch, direkt im Browser.",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "Ein Brick-Breaker-Spiel über drei Level mit Paddle-Steuerung, Ballspur, Partikeln, Sound und einer Bonusball-Kombo-Mechanik.",
      },
      cooknow: {
        title: "CookNow",
        description:
          "Sag CookNow, was du in deiner Küche hast, und es findet Rezepte, die du sofort kochen kannst — sortiert nach Zutaten-Übereinstimmung, funktioniert offline.",
      },
    },
    window: {
      refresh: "Aktualisieren",
      openInNewTab: "In neuem Tab öffnen",
      close: "Vorschau schließen",
      minimize: "Vorschau minimieren",
      maximize: "Maximieren (Vollbild)",
      exitFullscreen: "Vollbild verlassen",
      noWebDemo: (title) =>
        `${title} ist eine mobile App (mit Expo entwickelt), daher gibt es hier keine Web-Demo zum Einbetten. Du kannst den Quellcode auf GitHub ansehen.`,
      viewOnGithub: "Auf GitHub ansehen",
    },
  },

  contact: {
    eyebrow: "Kontakt",
    heading: "Kontakt aufnehmen",
    subtitle:
      "Ich bin offen für neue Möglichkeiten und Kooperationen. Melde dich gerne.",
    rights: "Alle Rechte vorbehalten.",
  },
}
