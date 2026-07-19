import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { NavDock } from "@/components/portfolio/nav-dock"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"

function App() {
  return (
    <>
      <div className="relative min-h-svh bg-background text-foreground">
        {/* Global animated grid background — wraps every section */}
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.3}
          duration={3}
          repeatDelay={1}
          className="fixed inset-0 h-full w-full stroke-gray-400/40 text-gray-400 [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)]"
        />

        <main className="relative z-10 pb-28">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Dock navbar */}
        <NavDock />
      </div>
    </>
  )
}

export default App
