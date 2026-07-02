'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Handshake, MapPin, MonitorCog } from 'lucide-react';
import Image from 'next/image';

const ease = [0.25, 0.1, 0.25, 1] as const;

const TECH_TAGS = [
    'Go (Golang)',
    'Java (Spring Boot)',
    'React JS',
    'PostgreSQL',
    'Docker',
    'Clean Architecture',
    'CI/CD',
];

const LOGOS = [
    {
        url: 'https://lsigroup.id',
        src: '/logo/lingkaran.png',
        alt: 'PT. Lingkaran Sistem Intelektual',
        className: 'w-20 h-8 md:w-28 md:h-10',
        delay: 0.1,
    },
    {
        url: 'https://www.binadarma.ac.id',
        src: '/logo/binadarma.png',
        alt: 'Universitas Bina Darma',
        className: 'w-20 h-8 md:w-36 md:h-10',
        delay: 0.2,
    },
    {
        url: 'https://rs-erba.go.id',
        src: '/logo/erba.png',
        alt: 'Rumah Sakit dr. Ernaldi Bahar',
        className: 'w-20 h-8 md:w-36 md:h-10',
        delay: 0.3,
    },
    {
        url: 'https://www.pertamina.com',
        src: '/logo/patraniaga.png',
        alt: 'PT. Pertamina Patra Niaga',
        className: 'w-20 h-8 md:w-36 md:h-10',
        delay: 0.4,
    },
];

export default function HeroSection() {
    return (
        <>
            <section
                id='hero'
                className='flex flex-col items-center justify-center mt-16 md:mt-40 container px-3 md:px-0 relative overflow-visible'
            >
                <span className='w-100 h-112.5 absolute -top-40 -left-96 opacity-15 bg-primary rounded-full blur-3xl animate-blob' />
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease }}
                    className='text-3xl md:text-6xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-primary to-[oklch(0.55_0.24_250)] sm:h-14 md:h-20 w-full text-center tracking-tight pb-1'
                >
                    Riyan Amanda
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease }}
                    className='text-xs md:text-sm mt-4 text-primary font-medium tracking-wide text-center'
                >
                    Backend-focused Software Engineer · Building High-Performance Systems
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1, ease }}
                    className='text-xs md:text-sm mt-2 text-muted-foreground text-center inline-flex items-center justify-center gap-2 flex-wrap'
                >
                    <span className='inline-flex items-center gap-1.5'>
                        <MapPin
                            className='h-3 w-3 md:h-3.5 md:w-3.5 text-primary'
                            aria-hidden='true'
                        />
                        Palembang, Indonesia
                    </span>
                    <span aria-hidden='true' className='text-muted-foreground/40'>
                        ·
                    </span>
                    <span className='inline-flex items-center gap-1.5'>
                        <MonitorCog
                            className='h-3 w-3 md:h-3.5 md:w-3.5 text-primary'
                            aria-hidden='true'
                        />
                        Open to relocation / remote
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1, ease }}
                    className='flex flex-wrap justify-center gap-2 mt-5 max-w-2xl'
                >
                    {TECH_TAGS.map((tag) => (
                        <Badge
                            key={tag}
                            className='px-2.5 py-1 rounded-full border border-border bg-secondary text-secondary-foreground hover:bg-secondary normal-case tracking-wide font-medium text-[10px]'
                        >
                            {tag}
                        </Badge>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease }}
                    className='mt-8 md:mt-14'
                >
                    <Button
                        variant='outline'
                        size='sm'
                        asChild
                        className='rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm shadow-primary/10 normal-case tracking-wider font-semibold px-6 transition-all'
                    >
                        <a href='mailto:ryant.n92@gmail.com'>Say Hi →</a>
                    </Button>
                </motion.div>
            </section>

            <section className='mt-24 md:mt-32 mb-10'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease }}
                    className='text-center text-[10px] text-muted-foreground/60 uppercase tracking-widest mb-6 inline-flex items-center justify-center gap-1.5 w-full font-medium'
                >
                    <Handshake
                        className='h-3 w-3 md:h-3.5 md:w-3.5 text-primary/80'
                        aria-hidden='true'
                    />
                    Professional Footprint
                </motion.p>

                <div className='container mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-300'>
                    {LOGOS.map((logo) => (
                        <motion.a
                            key={logo.alt}
                            href={logo.url}
                            target='_blank'
                            rel='noreferrer'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: logo.delay, duration: 0.8, ease }}
                        >
                            <div className={`${logo.className} relative`}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>
        </>
    );
}
