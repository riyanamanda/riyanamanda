import { Badge } from '@/components/ui/badge';
import { project } from '@/data/project';
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';

export default function Project() {
    return (
        <section id='project' className='scroll-mt-20'>
            <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>
                Featured Project
            </h2>

            <div className='space-y-6'>
                {project.map((pro) => (
                    <a
                        href={pro.url}
                        target='_blank'
                        key={pro.title}
                        className='group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60'>
                        <div className='sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted'>
                            <Image
                                src={pro.thumbnail}
                                alt={pro.title}
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                className='object-cover group-hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <div className='sm:col-span-5 space-y-2'>
                            <h3 className='font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between'>
                                <span>
                                    {pro.title} · {pro.company}
                                </span>
                                <IconArrowUpRight
                                    size={16}
                                    className='opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary'
                                />
                            </h3>
                            <p className='text-sm leading-relaxed text-muted-foreground'>
                                {pro.description}
                            </p>
                            <div className='flex flex-wrap gap-1.5 pt-1'>
                                {pro.technologies.map((tech) => (
                                    <Badge key={tech} variant='primary'>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
