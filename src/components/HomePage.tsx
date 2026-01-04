"use client"

import { useState } from "react"
import { Navigation } from "./navigation"
import { AboutSection } from "./about-section"
import { ProjectsSection } from "./projects-section"
import { LifeSection } from "./life-section"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<"about" | "projects" | "life">("about")

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-32">
        {activeSection === "about" && <AboutSection />}
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "life" && <LifeSection />}
      </main>
    </div>
  )
}
