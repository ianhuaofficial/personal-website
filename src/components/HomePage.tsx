"use client"

import { useState } from "react"
import { Navigation } from "./navigation"
import { AboutSection } from "./about-section"
import { ProjectsSection } from "./projects-section"
import { LifeSection } from "./life-section"

interface HomePageProps {
  aboutData: {
    name: string
    location: string
    title: string
    subtitle: string
    paragraphs: string[]
    socialLinks: {
      github: string
      linkedin: string
      x: string
    }
  }
  projectsData: {
    title: string
    subtitle: string
    projects: Array<{
      title: string
      description: string
      tags: string[]
      link?: string
    }>
  }
  lifeData: {
    title: string
    subtitle: string
    hobbies: Array<{
      title: string
      description: string
    }>
  }
}

export default function HomePage({ aboutData, projectsData, lifeData }: HomePageProps) {
  const [activeSection, setActiveSection] = useState<"about" | "projects" | "life">("about")

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-32">
        {activeSection === "about" && <AboutSection data={aboutData} />}
        {activeSection === "projects" && <ProjectsSection data={projectsData} />}
        {activeSection === "life" && <LifeSection data={lifeData} />}
      </main>
    </div>
  )
}
