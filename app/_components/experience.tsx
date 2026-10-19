import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/experience';

export default function Experience() {
    return (
        <section id='experience' className='scroll-mt-20'>
            <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>
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
                                {exp.role} · {exp.company} -{' '}
                            </span>
                            <Badge
                                variant='accent'
                                className='bg-[#6DB33F]/15 text-[#6DB33F] border border-[#6DB33F]/30 dark:text-[#7ecb47]'>
                                {exp.status}
                            </Badge>
                        </h3>

                        <ul className='list-disc text-sm ml-4 space-y-1'>
                            {exp.tasks.map((task) => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>

                        <div className='flex flex-wrap gap-1.5 pt-2'>
                            {exp.technologies.map((tech) => (
                                <Badge variant='primary' key={tech}>
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
