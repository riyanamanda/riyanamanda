import { Badge } from '@/components/ui/badge';
import { IconArrowUpRight } from '@tabler/icons-react';

export default function Experience() {
    return (
        <section id='experience' className='space-y-8 scroll-mt-20'>
            <h2 className='text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 md:hidden'>
                Experience
            </h2>

            <div className='space-y-8'>
                <div className='group relative grid grid-cols-1 sm:grid-cols-8 gap-2 sm:gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60'>
                    <header className='sm:col-span-2 text-xs font-mono font-medium uppercase text-muted-foreground/70 pt-1'>
                        2022 — PRESENT
                    </header>
                    <div className='sm:col-span-6 space-y-2'>
                        <h3 className='font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between sm:justify-start gap-1'>
                            <span>
                                Senior Backend Engineer{' '}
                                <span className='text-muted-foreground font-normal'>
                                    · Enterprise HealthTech
                                </span>
                            </span>
                            <IconArrowUpRight
                                size={16}
                                className='opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary'
                            />
                        </h3>
                        <p className='text-sm leading-relaxed text-muted-foreground'>
                            Architected and built core microservices for hospital management
                            integration (SIMGOS) and BPJS VClaim sync using Go. Designed
                            event-driven messaging with RabbitMQ and Redis to handle concurrent
                            patient record synchronization securely.
                        </p>
                        <div className='flex flex-wrap gap-1.5 pt-2'>
                            {['Go', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker'].map(
                                (tech) => (
                                    <Badge
                                        key={tech}
                                        variant='outline'
                                        className='text-[11px] font-mono font-normal bg-background/50'>
                                        {tech}
                                    </Badge>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className='group relative grid grid-cols-1 sm:grid-cols-8 gap-2 sm:gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60'>
                    <header className='sm:col-span-2 text-xs font-mono font-medium uppercase text-muted-foreground/70 pt-1'>
                        2019 — 2022
                    </header>
                    <div className='sm:col-span-6 space-y-2'>
                        <h3 className='font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between sm:justify-start gap-1'>
                            <span>
                                Software Engineer{' '}
                                <span className='text-muted-foreground font-normal'>
                                    · Energy & Digital Media
                                </span>
                            </span>
                            <IconArrowUpRight
                                size={16}
                                className='opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary'
                            />
                        </h3>
                        <p className='text-sm leading-relaxed text-muted-foreground'>
                            Developed scalable RESTful APIs in Java (Spring Boot) and PHP (Laravel).
                            Optimized complex SQL query performance, migrated legacy monolith
                            services into modular containerized microservices, and implemented React
                            dashboards for real-time monitoring.
                        </p>
                        <div className='flex flex-wrap gap-1.5 pt-2'>
                            {['Java', 'Spring Boot', 'Laravel', 'MySQL', 'React', 'Docker'].map(
                                (tech) => (
                                    <Badge
                                        key={tech}
                                        variant='outline'
                                        className='text-[11px] font-mono font-normal bg-background/50'>
                                        {tech}
                                    </Badge>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
