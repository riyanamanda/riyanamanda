import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/experience';

export default function Experience() {
    return (
        <section id='experience' className='scroll-mt-20'>
            <h2 className='text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 md:hidden'>
                Experience
            </h2>

            <div className='space-y-6'>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className='group relative transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60 space-y-2'>
                        <div className='text-xs font-mono font-medium uppercase text-muted-foreground/70'>
                            {exp.year}
                        </div>

                        <h3 className='font-semibold text-foreground flex items-center justify-between sm:justify-start gap-1 flex-wrap'>
                            <span>
                                {exp.role} · {exp.company}
                            </span>
                            <Badge variant='secondary'>{exp.status}</Badge>
                        </h3>

                        <ul className='list-disc text-sm ml-4 space-y-1'>
                            {exp.tasks.map((task) => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>

                        <div className='flex flex-wrap gap-1.5 pt-2'>
                            {exp.technologies.map((tech) => (
                                <Badge key={tech} variant='secondary'>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
