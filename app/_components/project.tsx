import { Badge } from '@/components/ui/badge';
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';

export default function Project() {
    return (
        <section id='project' className='space-y-8 scroll-mt-20'>
            <h2 className='text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 md:hidden'>
                Featured Projects
            </h2>

            <div className='space-y-10'>
                <div className='group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60'>
                    <div className='sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted'>
                        <Image
                            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
                            alt='Fullstack Helpdesk System'
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    <div className='sm:col-span-5 space-y-2'>
                        <h3 className='font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between'>
                            <span>Fullstack Helpdesk Platform</span>
                            <IconArrowUpRight
                                size={16}
                                className='opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary'
                            />
                        </h3>
                        <p className='text-xs sm:text-sm leading-relaxed text-muted-foreground'>
                            An end-to-end ticket management solution featuring asynchronous event
                            polling workers, MinIO object storage, and real-time status updates.
                        </p>
                        <div className='flex flex-wrap gap-1.5 pt-1'>
                            {[
                                'Go (Echo)',
                                'React',
                                'PostgreSQL',
                                'RabbitMQ',
                                'MinIO',
                                'Docker',
                            ].map((tech) => (
                                <Badge
                                    key={tech}
                                    variant='secondary'
                                    className='text-[10px] font-mono px-2 py-0.5'>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60'>
                    <div className='sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted'>
                        <Image
                            src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
                            alt='BPJS VClaim Integration Engine'
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    <div className='sm:col-span-5 space-y-2'>
                        <h3 className='font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between'>
                            <span>BPJS VClaim Integration Engine</span>
                            <IconArrowUpRight
                                size={16}
                                className='opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary'
                            />
                        </h3>
                        <p className='text-xs sm:text-sm leading-relaxed text-muted-foreground'>
                            A high-reliability Go HTTP service generating HMAC-SHA256 request
                            signatures and decrypting payload data for synchronizing medical records
                            with national healthcare APIs.
                        </p>
                        <div className='flex flex-wrap gap-1.5 pt-1'>
                            {['Go', 'HMAC-SHA256', 'REST API', 'Redis', 'SIMGOS'].map((tech) => (
                                <Badge
                                    key={tech}
                                    variant='secondary'
                                    className='text-[10px] font-mono px-2 py-0.5'>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60'>
                    <div className='sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted'>
                        <Image
                            src='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
                            alt='Transactional Outbox & CDC Service'
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    <div className='sm:col-span-5 space-y-2'>
                        <h3 className='font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between'>
                            <span>Transactional Outbox & CDC Service</span>
                            <IconArrowUpRight
                                size={16}
                                className='opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary'
                            />
                        </h3>
                        <p className='text-xs sm:text-sm leading-relaxed text-muted-foreground'>
                            Distributed transaction architecture using Outbox Pattern and Change
                            Data Capture (CDC) via Debezium and Kafka to guarantee dual-write
                            consistency across microservices.
                        </p>
                        <div className='flex flex-wrap gap-1.5 pt-1'>
                            {['Java', 'Spring Boot', 'Kafka', 'Debezium', 'PostgreSQL'].map(
                                (tech) => (
                                    <Badge
                                        key={tech}
                                        variant='secondary'
                                        className='text-[10px] font-mono px-2 py-0.5'>
                                        {tech}
                                    </Badge>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className='group relative grid grid-cols-1 sm:grid-cols-8 gap-4 transition-all p-4 -mx-4 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60'>
                    <div className='sm:col-span-3 relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted'>
                        <Image
                            src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
                            alt='RAG & Text-to-SQL AI Service'
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    <div className='sm:col-span-5 space-y-2'>
                        <h3 className='font-semibold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between'>
                            <span>RAG & Text-to-SQL Analytics</span>
                            <IconArrowUpRight
                                size={16}
                                className='opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-primary'
                            />
                        </h3>
                        <p className='text-xs sm:text-sm leading-relaxed text-muted-foreground'>
                            An AI proxy agent system translating natural language queries into
                            secure SQL executions with schema validation and multi-agent model
                            orchestration.
                        </p>
                        <div className='flex flex-wrap gap-1.5 pt-1'>
                            {['TypeScript', 'Next.js', 'Vector DB', 'OpenAI', 'Python'].map(
                                (tech) => (
                                    <Badge
                                        key={tech}
                                        variant='secondary'
                                        className='text-[10px] font-mono px-2 py-0.5'>
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
