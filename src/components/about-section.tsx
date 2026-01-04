import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function AboutSection() {
  return (
    <div className="animate-in fade-in duration-700 mx-auto">
      <div className="max-w-3xl space-y-16">
        <div className="space-y-8">
          <div className="flex items-start gap-8 flex-col sm:flex-row">
            <div className="h-28 w-28 rounded-full bg-muted flex-shrink-0" />
            <div className="space-y-6 flex-1">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">Creative Developer</p>
                <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-balance text-foreground leading-[1.1]">
                  Hello, I'm Your Name
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I build accessible, pixel-perfect digital experiences for the web. Currently crafting thoughtful
                interfaces that blend design with robust engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-base text-foreground/80 leading-relaxed">
          <p>
            In the past, I've had the opportunity to develop software across a variety of settings — from advertising
            agencies and large corporations to start-ups and small digital product studios. Each experience has shaped
            how I approach problem-solving and design.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new places, reading about design and technology, or
            experimenting with photography. I believe the best work comes from a balanced life filled with curiosity and
            creativity.
          </p>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="h-[18px] w-[18px] group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Linkedin className="h-[18px] w-[18px] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Twitter className="h-[18px] w-[18px] group-hover:scale-110 transition-transform" />
              <span>Twitter</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="h-[18px] w-[18px] group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
