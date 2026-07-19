import { Home, User, Code2, FolderGit2, Mail } from "lucide-react"

import { Dock, DockIcon } from "@/components/ui/dock"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { LanguageSwitcher } from "@/components/portfolio/language-switcher"
import { useContent } from "@/i18n/context"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "home", icon: Home },
  { id: "about", icon: User },
  { id: "skills", icon: Code2 },
  { id: "projects", icon: FolderGit2 },
  { id: "contact", icon: Mail },
] as const

const iconClass = "size-full text-muted-foreground transition-colors hover:text-foreground"

export function NavDock() {
  const t = useContent()

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
              aria-label={t.nav[item.id]}
              title={t.nav[item.id]}
              className="flex size-full items-center justify-center"
            >
              <item.icon className={cn(iconClass, "size-[45%]")} />
            </a>
          </DockIcon>
        ))}

        <div className="mx-1 h-8 w-px shrink-0 self-center bg-border" aria-hidden />

        <DockIcon>
          <LanguageSwitcher />
        </DockIcon>

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
