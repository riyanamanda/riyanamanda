import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { portfolio } from "@/data/portfolio";
import { IconArrowUpRight, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-primary/20 selection:text-primary">
      <div className="max-w-7xl mx-auto w-full py-10 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-16 items-start">
          <header className="w-full md:w-5/12 md:sticky md:top-20 md:h-[calc(100vh-10rem)] flex flex-col justify-between">
            <div className="space-y-8 md:space-y-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight bg-linear-to-r from-foreground via-foreground to-cyan-600 dark:to-cyan-400 bg-clip-text text-transparent">
                    {portfolio.name}
                  </h1>
                  <p className="font-medium text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                    {portfolio.bio}
                  </p>
                </div>

                <div className="md:hidden shrink-0 pt-1">
                  <Sheet>
                    <SheetTrigger
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                      aria-label="Open Menu"
                    >
                      <IconMenu2 size={20} />
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-72 bg-background border-border p-6 sm:p-8"
                    >
                      <nav className="flex flex-col gap-6 font-mono text-sm mt-8 text-muted-foreground">
                        <a
                          href="#about"
                          className="hover:text-foreground transition-colors"
                        >
                          <span className="text-primary font-semibold mr-2">
                            01.
                          </span>{" "}
                          About
                        </a>
                        <a
                          href="#experience"
                          className="hover:text-foreground transition-colors"
                        >
                          <span className="text-primary font-semibold mr-2">
                            02.
                          </span>{" "}
                          Experience
                        </a>
                        <a
                          href="#project"
                          className="hover:text-foreground transition-colors"
                        >
                          <span className="text-primary font-semibold mr-2">
                            03.
                          </span>{" "}
                          Projects
                        </a>
                        <a
                          href="https://www.scopus.com/authid/detail.uri?authorId=57223429913"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                        >
                          <span className="text-primary font-semibold mr-2">
                            04.
                          </span>{" "}
                          Journal
                        </a>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/85">
                  Primary Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {portfolio.stacks.map((stack) => (
                    <Badge
                      key={stack.id}
                      variant="secondary"
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent border border-border/50 transition-colors"
                    >
                      {stack.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <nav className="hidden md:flex flex-col gap-3 font-mono text-xs text-muted-foreground pt-2">
                <a
                  href="#about"
                  className="group flex items-center gap-2 w-fit hover:text-foreground transition-colors"
                >
                  <span className="text-primary font-semibold">01.</span>
                  <span className="tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50">
                    About
                  </span>
                </a>
                <a
                  href="#experience"
                  className="group flex items-center gap-2 w-fit hover:text-foreground transition-colors"
                >
                  <span className="text-primary font-semibold">02.</span>
                  <span className="tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50">
                    Experience
                  </span>
                </a>
                <a
                  href="#project"
                  className="group flex items-center gap-2 w-fit hover:text-foreground transition-colors"
                >
                  <span className="text-primary font-semibold">03.</span>
                  <span className="tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50">
                    Projects
                  </span>
                </a>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57223429913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 w-fit hover:text-foreground transition-colors"
                >
                  <span className="text-primary font-semibold">04.</span>
                  <span className="tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50">
                    Journal
                  </span>
                </a>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-6 pt-6 border-t border-border/40">
              {portfolio.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </header>

          <main className="w-full md:w-6/12 space-y-16 sm:space-y-20 text-muted-foreground leading-relaxed pt-6 md:pt-0">
            <section
              id="about"
              className="space-y-4 text-sm sm:text-base leading-relaxed scroll-mt-20"
            >
              <p>
                Hi! I&apos;m a{" "}
                <strong className="font-semibold text-foreground">
                  backend-focused Software Engineer
                </strong>{" "}
                with{" "}
                <strong className="font-semibold text-foreground">
                  5+ years
                </strong>{" "}
                of experience building production web applications. Primary
                expertise in{" "}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  Go
                </span>{" "}
                and{" "}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Java (Spring Boot)
                </span>
                , with solid frontend capability in{" "}
                <span className="font-semibold text-sky-600 dark:text-sky-400">
                  React
                </span>{" "}
                when the project calls for it.
              </p>
              <p>
                Specialized in designing and building{" "}
                <span className="font-medium text-foreground">REST APIs</span>,
                implementing modular and clean architectures, and integrating
                systems end-to-end. Strong foundation in monolithic systems
                (Laravel) and evolving towards{" "}
                <span className="font-medium text-foreground">
                  scalable, decoupled backend services
                </span>
                .
              </p>
              <p>
                Focused on backend solutions that are{" "}
                <span className="font-medium text-foreground">
                  reliable, performant, and aligned with real-world business
                  needs
                </span>{" "}
                — with an eye on deployment, observability, and maintainability.
              </p>
            </section>

            <section id="experience" className="space-y-8 scroll-mt-20">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 md:hidden">
                Experience
              </h2>

              <div className="space-y-8">
                <div className="group relative grid grid-cols-1 sm:grid-cols-8 gap-2 sm:gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60">
                  <header className="sm:col-span-2 text-xs font-mono font-medium uppercase text-muted-foreground/70 pt-1">
                    2022 — PRESENT
                  </header>
                  <div className="sm:col-span-6 space-y-2">
                    <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between sm:justify-start gap-1">
                      <span>
                        Senior Backend Engineer{" "}
                        <span className="text-muted-foreground font-normal">
                          · Enterprise HealthTech
                        </span>
                      </span>
                      <IconArrowUpRight
                        size={16}
                        className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary"
                      />
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Architected and built core microservices for hospital
                      management integration (SIMGOS) and BPJS VClaim sync using
                      Go. Designed event-driven messaging with RabbitMQ and
                      Redis to handle concurrent patient record synchronization
                      securely.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {[
                        "Go",
                        "Spring Boot",
                        "PostgreSQL",
                        "RabbitMQ",
                        "Redis",
                        "Docker",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-[11px] font-mono font-normal bg-background/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group relative grid grid-cols-1 sm:grid-cols-8 gap-2 sm:gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60">
                  <header className="sm:col-span-2 text-xs font-mono font-medium uppercase text-muted-foreground/70 pt-1">
                    2019 — 2022
                  </header>
                  <div className="sm:col-span-6 space-y-2">
                    <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between sm:justify-start gap-1">
                      <span>
                        Software Engineer{" "}
                        <span className="text-muted-foreground font-normal">
                          · Energy & Digital Media
                        </span>
                      </span>
                      <IconArrowUpRight
                        size={16}
                        className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary"
                      />
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Developed scalable RESTful APIs in Java (Spring Boot) and
                      PHP (Laravel). Optimized complex SQL query performance,
                      migrated legacy monolith services into modular
                      containerized microservices, and implemented React
                      dashboards for real-time monitoring.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {[
                        "Java",
                        "Spring Boot",
                        "Laravel",
                        "MySQL",
                        "React",
                        "Docker",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-[11px] font-mono font-normal bg-background/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="project" className="space-y-8 scroll-mt-20">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 md:hidden">
                Featured Projects
              </h2>

              <div className="space-y-10">
                <div className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60">
                  <div className="sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                      alt="Fullstack Helpdesk System"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="sm:col-span-5 space-y-2">
                    <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>Fullstack Helpdesk Platform</span>
                      <IconArrowUpRight
                        size={16}
                        className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary"
                      />
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      An end-to-end ticket management solution featuring
                      asynchronous event polling workers, MinIO object storage,
                      and real-time status updates.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        "Go (Echo)",
                        "React",
                        "PostgreSQL",
                        "RabbitMQ",
                        "MinIO",
                        "Docker",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[10px] font-mono px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60">
                  <div className="sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                      alt="BPJS VClaim Integration Engine"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="sm:col-span-5 space-y-2">
                    <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>BPJS VClaim Integration Engine</span>
                      <IconArrowUpRight
                        size={16}
                        className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary"
                      />
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      A high-reliability Go HTTP service generating HMAC-SHA256
                      request signatures and decrypting payload data for
                      synchronizing medical records with national healthcare
                      APIs.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["Go", "HMAC-SHA256", "REST API", "Redis", "SIMGOS"].map(
                        (tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[10px] font-mono px-2 py-0.5"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60">
                  <div className="sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
                      alt="Transactional Outbox & CDC Service"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="sm:col-span-5 space-y-2">
                    <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>Transactional Outbox & CDC Service</span>
                      <IconArrowUpRight
                        size={16}
                        className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary"
                      />
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      Distributed transaction architecture using Outbox Pattern
                      and Change Data Capture (CDC) via Debezium and Kafka to
                      guarantee dual-write consistency across microservices.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        "Java",
                        "Spring Boot",
                        "Kafka",
                        "Debezium",
                        "PostgreSQL",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[10px] font-mono px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60">
                  <div className="sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                      alt="RAG & Text-to-SQL AI Service"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="sm:col-span-5 space-y-2">
                    <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>RAG & Text-to-SQL Analytics</span>
                      <IconArrowUpRight
                        size={16}
                        className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary"
                      />
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      An AI proxy agent system translating natural language
                      queries into secure SQL executions with schema validation
                      and multi-agent model orchestration.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        "TypeScript",
                        "Next.js",
                        "Vector DB",
                        "OpenAI",
                        "Python",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[10px] font-mono px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6 scroll-mt-20 pb-10 md:pb-0">
              <blockquote className="border-l-2 border-primary/40 pl-4 italic text-sm text-muted-foreground/90">
                &ldquo;If you feel tired of studying, be prepared to accept the
                bitterness of ignorance.&rdquo;
              </blockquote>
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}
