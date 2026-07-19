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
    "I build web, mobile and real-time applications — turning ideas into clean, reliable products end to end.",
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
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    title: "Realtime Analytics Dashboard",
    description:
      "Analytics dashboard with realtime charts, advanced filters, and dark mode. Built to monitor thousands of events per second.",
    tags: ["React", "TypeScript", "WebSocket", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "AI Content Studio",
    description:
      "LLM-powered content generation app with a collaborative editor, version history, and multi-format export.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "OpenAI"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "DevOps Toolkit CLI",
    description:
      "CLI for deploy automation, environment management, and container monitoring — cutting release time by up to 60%.",
    tags: ["Python", "Docker", "CI/CD"],
    repoUrl: "#",
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
