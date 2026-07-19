import { Home, User, Code2, FolderGit2, Mail } from "lucide-react"

import { Dock, DockIcon } from "@/components/ui/dock"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
]

const iconClass = "size-full text-muted-foreground transition-colors hover:text-foreground"

export function NavDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <Dock
        direction="middle"
        className="pointer-events-auto mt-0 border-border/60 bg-background/70 shadow-lg shadow-black/5"
      >
        {navItems.map((item) => (
          <DockIcon key={item.id}>
            <a
              href={`#${item.id}`}
              aria-label={item.label}
              title={item.label}
              className="flex size-full items-center justify-center"
            >
              <item.icon className={cn(iconClass, "size-[45%]")} />
            </a>
          </DockIcon>
        ))}

        <div className="mx-1 h-8 w-px shrink-0 self-center bg-border" aria-hidden />

        <DockIcon>
          <AnimatedThemeToggler
            variant="circle"
            className="flex size-full items-center justify-center text-muted-foreground transition-colors hover:text-foreground [&_svg]:size-[45%]"
          />
        </DockIcon>
      </Dock>
    </div>
  )
}
