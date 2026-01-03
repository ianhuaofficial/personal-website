"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { LifeSection } from "@/components/life-section"

export default function Home() {
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
