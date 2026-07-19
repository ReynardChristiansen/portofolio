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

/* ------------------------------------------------------------------ */
/*  Replace the values below with your own data.                     */
/* ------------------------------------------------------------------ */

export const profile = {
  firstName: "Reynard",
  lastName: "Christiansen",
  name: "Reynard Christiansen",
  /** Small greeting above the name (any language works). */
  greeting: "안녕하세요, 저는",
  /** Greetings looped with the typing effect. Add/remove as you like. */
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
  role: "Full Stack Developer",
  tagline:
    "I build mobile and web, turning ideas into clean, reliable products.",
  location: "Indonesia",
  email: "orangmap@gmail.com",
  /** CV file from src/assets. Replace the file or import a different one above. */
  resumeUrl: cvFile,
  /** Nama file saat CV diunduh (atribut download di tombol). */
  cvDownloadName: "Reynard_Christiansen_CV.pdf",
  /** Profile photo from src/assets. Replace the file or import a different one above. */
  avatarUrl: profilePic,
}

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

export type Project = {
  title: string
  description: string
  tags: string[]
  /** Cover image in /public/projects. */
  cover: string
  /** Live demo URL — embedded in the Safari preview. Omit if there is none. */
  liveUrl?: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: "Hirmify",
    description:
      "A music streaming web app — stream songs, follow artists, and build your library. Installable PWA with lock-screen media controls.",
    tags: ["React", "Vite", "Tailwind", "PWA"],
    cover: "/projects/hirmify.png",
    liveUrl: "https://hirmify.vercel.app/",
    repoUrl: "https://github.com/ReynardChristiansen/Spotify_Clone_v3",
  },
  {
    title: "Renime",
    description:
      "A mobile anime app — explore popular titles, watch episodes, search, and save your favorites for later. Built with Expo.",
    tags: ["React Native", "Expo", "JavaScript"],
    cover: "/projects/renime.png",
    repoUrl: "https://github.com/ReynardChristiansen/Anime_Clone",
  },
  {
    title: "Inkling",
    description:
      "Draw something and an AI guesses it out loud — real-time sketch recognition in the browser with TensorFlow.js (DoodleNet).",
    tags: ["React", "TensorFlow.js", "Vite"],
    cover: "/projects/inkling.png",
    liveUrl: "https://draw-ai-three.vercel.app/",
    repoUrl: "https://github.com/ReynardChristiansen/draw_ai",
  },
  {
    title: "Hyper Snake",
    description:
      "The classic Snake game rebuilt with vanilla HTML, CSS & JavaScript. Plays with keyboard or touch, right in the browser.",
    tags: ["JavaScript", "HTML", "CSS", "Canvas"],
    cover: "/projects/hypersnake.png",
    liveUrl: "https://reynardchristiansen.github.io/",
    repoUrl: "https://github.com/ReynardChristiansen/ReynardChristiansen.github.io",
  },
  {
    title: "Break the Bricks",
    description:
      "A brick-breaker game across three levels with paddle control, ball trail, particles, sound, and a bonus-ball combo mechanic.",
    tags: ["JavaScript", "HTML", "CSS", "Canvas"],
    cover: "/projects/bricks.png",
    liveUrl: "https://reynardchristiansen.github.io/Bricks_Game/",
    repoUrl: "https://github.com/ReynardChristiansen/Bricks_Game",
  },
  {
    title: "CookNow",
    description:
      "Tell CookNow what's in your kitchen and it finds recipes you can cook right now — ranked by ingredient match, works offline.",
    tags: ["React", "TypeScript", "Tailwind", "PWA"],
    cover: "/projects/cooknow.png",
    liveUrl: "https://cook-now-pi.vercel.app/",
    repoUrl: "https://github.com/ReynardChristiansen/cookNow",
  },
]

export type SocialLink = {
  label: string
  href: string
  icon: IconType
  /** Brand color on hover. Leave empty to use the default text color. */
  color?: string
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ReynardChristiansen", icon: SiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/reynard-christiansen-959b96251/", icon: FaLinkedinIn, color: "#0A66C2" },
]
