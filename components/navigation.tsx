"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

interface NavigationProps {
  activeSection: "about" | "projects" | "life"
  onSectionChange: (section: "about" | "projects" | "life") => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const sections = [
    { id: "about" as const, label: "About" },
    { id: "projects" as const, label: "Projects" },
    { id: "life" as const, label: "Life" },
  ]

  return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <div className="flex h-20 items-center justify-between">
          <div className="text-base font-medium tracking-tight text-foreground">Your Name</div>

          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`
                    relative text-sm font-medium transition-colors pb-1
                    ${activeSection === section.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
