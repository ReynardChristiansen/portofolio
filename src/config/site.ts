import type { IconType } from "react-icons"
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiVite,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFramer,
  SiGithub,
} from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa6"

import profilePic from "@/assets/profile-pic.jpg"
import cvFile from "@/assets/Reynard_Christiansen_CV.pdf"

/* ================================================================== */
/*  SITE CONFIG — the single source of truth for everything that is    */
/*  NOT translatable text (identity, files, links, icons, colors).     */
/*                                                                     */
/*  Translatable copy (headings, paragraphs, project titles, …) lives  */
/*  in src/i18n/locales/<lang>.ts instead. Change data here once and   */
/*  it updates across the whole site + every language.                 */
/* ================================================================== */

export const site = {
  firstName: "Reynard",
  lastName: "Christiansen",
  name: "Reynard Christiansen",
  email: "reynard.satria@gmail.com",
  location: "Indonesia",
  /** CV file from src/assets. Swap the import above to replace it. */
  resumeUrl: cvFile,
  /** Filename used when the CV is downloaded (download attribute). */
  cvDownloadName: "Reynard_Christiansen_CV.pdf",
  /** Profile photo from src/assets. Swap the import above to replace it. */
  avatarUrl: profilePic,
  /**
   * Multilingual greetings cycled by the hero typing animation. These are
   * intentionally in many languages at once (a visual flourish) and are
   * independent of the active UI language.
   */
  greetings: [
    "안녕하세요, 저는", // Korean
    "Halo, saya", // Indonesian
    "Hello, I'm", // English
    "こんにちは、私は", // Japanese
    "你好，我是", // Chinese
    "Hola, soy", // Spanish
    "Bonjour, je suis", // French
    "Hallo, ich bin", // German
    "Ciao, sono", // Italian
    "Olá, eu sou", // Portuguese
  ],
}

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

/** A single hex, or a per-theme pair for monochrome brands (e.g. Next.js). */
export type BrandColor = string | { light: string; dark: string }

export type Skill = {
  name: string
  icon: IconType
  /** Brand color for the hover accent. Use { light, dark } for monochrome brands. */
  color?: BrandColor
}

export const skills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: { light: "#000000", dark: "#ffffff" } },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
]

/* ------------------------------------------------------------------ */
/*  About — stats (values here, labels in the locale files)           */
/* ------------------------------------------------------------------ */

export const statKeys = ["experience", "projects"] as const
export type StatKey = (typeof statKeys)[number]

export const stats: { key: StatKey; value: string }[] = [
  { key: "experience", value: "2+" },
  { key: "projects", value: "10+" },
]

/* ------------------------------------------------------------------ */
/*  Projects (title + description live in the locale files, keyed by  */
/*  the id below)                                                      */
/* ------------------------------------------------------------------ */

export const projectIds = [
  "hirmify",
  "renime",
  "inkling",
  "hypersnake",
  "bricks",
  "cooknow",
] as const
export type ProjectId = (typeof projectIds)[number]

export type ProjectConfig = {
  id: ProjectId
  /** Cover image in /public/projects. */
  cover: string
  tags: string[]
  /** Live demo URL — embedded in the Safari preview. Omit if there is none. */
  liveUrl?: string
  repoUrl: string
}

/** A project config merged with its translated title + description. */
export type ResolvedProject = ProjectConfig & {
  title: string
  description: string
}

export const projects: ProjectConfig[] = [
  {
    id: "hirmify",
    tags: ["React", "Vite", "Tailwind", "PWA"],
    cover: "/projects/hirmify.png",
    liveUrl: "https://hirmify.vercel.app/",
    repoUrl: "https://github.com/ReynardChristiansen/Spotify_Clone_v3",
  },
  {
    id: "renime",
    tags: ["React Native", "Expo", "JavaScript"],
    cover: "/projects/renime.png",
    repoUrl: "https://github.com/ReynardChristiansen/Anime_Clone",
  },
  {
    id: "inkling",
    tags: ["React", "TensorFlow.js", "Vite"],
    cover: "/projects/inkling.png",
    liveUrl: "https://draw-ai-three.vercel.app/",
    repoUrl: "https://github.com/ReynardChristiansen/draw_ai",
  },
  {
    id: "hypersnake",
    tags: ["JavaScript", "HTML", "CSS", "Canvas"],
    cover: "/projects/hypersnake.png",
    liveUrl: "https://reynardchristiansen.github.io/",
    repoUrl: "https://github.com/ReynardChristiansen/ReynardChristiansen.github.io",
  },
  {
    id: "bricks",
    tags: ["JavaScript", "HTML", "CSS", "Canvas"],
    cover: "/projects/bricks.png",
    liveUrl: "https://reynardchristiansen.github.io/Bricks_Game/",
    repoUrl: "https://github.com/ReynardChristiansen/Bricks_Game",
  },
  {
    id: "cooknow",
    tags: ["React", "TypeScript", "Tailwind", "PWA"],
    cover: "/projects/cooknow.png",
    liveUrl: "https://cook-now-pi.vercel.app/",
    repoUrl: "https://github.com/ReynardChristiansen/cookNow",
  },
]

/* ------------------------------------------------------------------ */
/*  Social links                                                      */
/* ------------------------------------------------------------------ */

export type SocialLink = {
  label: string
  href: string
  icon: IconType
  /** Brand color on hover. Leave empty to use the default text color. */
  color?: string
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ReynardChristiansen", icon: SiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/reynard-christiansen-959b96251/",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
]
