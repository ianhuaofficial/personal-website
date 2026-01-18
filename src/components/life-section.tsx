interface LifeSectionProps {
  data: {
    title: string
    subtitle: string
    hobbies: Array<{
      title: string
      description: string
    }>
  }
}

export function LifeSection({ data }: LifeSectionProps) {
  return (
    <div className="animate-in fade-in duration-700 mx-auto max-w-3xl">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">{data.title}</h1>
        <p className="text-lg text-muted-foreground">{data.subtitle}</p>
      </div>

      <div className="space-y-12">
        {data.hobbies.map((hobby, index) => (
          <div key={index} className="group space-y-4 pb-12 border-b border-border/30 last:border-0 last:pb-0">
            <h2 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
              {hobby.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
