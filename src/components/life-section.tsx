interface LifeEntry {
  date: string
  title: string
  description: string
}

interface Hobby {
  title: string
  description: string
}

const lifeEntries: LifeEntry[] = [
  {
    date: "Dec 2024",
    title: "Winter in the Mountains",
    description: "Spent a week hiking through snow-covered peaks. The silence and beauty were transformative.",
  },
  {
    date: "Oct 2024",
    title: "Speaking at TechConf",
    description: "Gave a talk on modern web development practices. Great conversations with fellow developers.",
  },
  {
    date: "Aug 2024",
    title: "Summer in Tokyo",
    description: "Explored the intersection of tradition and technology. The ramen was life-changing.",
  },
  {
    date: "Jun 2024",
    title: "Marathon Complete",
    description: "Finished my first marathon. The mental challenge was greater than the physical one.",
  },
  {
    date: "Apr 2024",
    title: "New Photography Project",
    description: "Started a series capturing urban architecture at dawn. The early mornings are worth it.",
  },
  {
    date: "Feb 2024",
    title: "Joined New Team",
    description: "Excited to work with brilliant people on challenging problems that matter.",
  },
]

const hobbies: Hobby[] = [
  {
    title: "Photography",
    description:
      "I love capturing moments through my lens, especially urban architecture and natural landscapes. There's something special about finding beauty in the everyday and preserving it forever.",
  },
  {
    title: "Running",
    description:
      "Running is my meditation. Whether it's a quiet morning jog or training for a marathon, it helps me clear my mind and stay grounded. The runner's high is real.",
  },
  {
    title: "Travel",
    description:
      "Exploring new places and cultures fuels my creativity. From bustling cities to remote mountain trails, each journey teaches me something new about the world and myself.",
  },
  {
    title: "Reading",
    description:
      "I'm always deep in a book—fiction, philosophy, or tech. Reading expands my perspective and gives me fresh ideas. My reading list is endless and always growing.",
  },
  {
    title: "Cooking",
    description:
      "Experimenting in the kitchen is my creative outlet. I enjoy trying new recipes and cuisines, especially recreating dishes from my travels. Good food brings people together.",
  },
]

export function LifeSection() {
  return (
    <div className="animate-in fade-in duration-700 mx-auto max-w-3xl">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">Beyond Work</h1>
        <p className="text-lg text-muted-foreground">Things I enjoy when I'm not coding</p>
      </div>

      <div className="space-y-12">
        {hobbies.map((hobby, index) => (
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
