import { ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A comprehensive web application that solves real user problems with elegant design and performant architecture.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "Modern static site generator with optimized builds and exceptional developer experience. Built for speed and simplicity.",
    tags: ["Astro", "JavaScript", "CSS"],
    link: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "Full-stack platform with real-time features and scalable backend infrastructure. Designed for high-traffic applications.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "https://example.com",
  },
  {
    title: "Project Four",
    description:
      "API-first architecture with robust authentication and data processing. Built to handle complex business logic.",
    tags: ["Python", "Django", "React"],
  },
]

export function ProjectsSection() {
  return (
    <div className="animate-in fade-in duration-700 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">Selected Work</h1>
        <p className="text-lg text-muted-foreground">A collection of projects I'm proud of</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-all duration-300"
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-foreground/70 border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
