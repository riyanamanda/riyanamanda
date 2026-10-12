import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto w-full py-16 px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
          <header className="w-full md:w-5/12 md:sticky md:top-16 md:h-[calc(100vh-8rem)] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {portfolio.name}
                </h1>
                <p className="font-medium text-sm mt-4 leading-relaxed">
                  {portfolio.bio}
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {portfolio.stacks.map((stack) => (
                    <Badge
                      key={stack.id}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {stack.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-3 font-medium">
              <a href="#about" className="w-fit">
                About
              </a>
              <a href="#experience" className="w-fit">
                Experience
              </a>
              <a href="#project" className="w-fit">
                Project
              </a>
            </div>

            <div className="flex items-center gap-5 pt-6 mt-auto">
              {portfolio.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon size={20} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </header>

          <main className="w-full md:w-6/12 space-y-16 text-muted-foreground leading-relaxed">
            <section id="about" className="space-y-4">
              <p>About</p>
              I&apos;ll tell more about me here
            </section>

            <section>
              <p>Experiences</p>
            </section>

            <section>
              <p>projects</p>
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}
