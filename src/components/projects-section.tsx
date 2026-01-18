import { ExternalLink } from "lucide-react"

interface ProjectsSectionProps {
  data: {
    title: string
    subtitle: string
    projects: Array<{
      title: string
      description: string
      tags: string[]
      link?: string
    }>
  }
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <div className="animate-in fade-in duration-700 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">{data.title}</h1>
        <p className="text-lg text-muted-foreground">{data.subtitle}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {data.projects.map((project, index) => (
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
