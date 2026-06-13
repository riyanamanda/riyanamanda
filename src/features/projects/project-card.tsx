'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
    type LucideIcon,
    Braces,
    Cloud,
    Database,
    GitBranch,
    Server,
    ShieldCheck,
    Wrench,
} from 'lucide-react';

const ease = [0.25, 0.1, 0.25, 1] as const;
const MAX_BADGES = 4;

type TechSemantic =
    | 'backend'
    | 'database'
    | 'cloud'
    | 'git'
    | 'security'
    | 'tooling'
    | 'default';

const TECH_ICON_RULES: Array<{ re: RegExp; icon: LucideIcon; semantic: TechSemantic }> = [
    { re: /(api|spring|go|laravel|node|backend|server)/i, icon: Server, semantic: 'backend' },
    { re: /(postgres|mysql|redis|mongo|sql|database)/i, icon: Database, semantic: 'database' },
    { re: /(docker|kubernetes|deploy|devops|cloud|aws|gcp|azure)/i, icon: Cloud, semantic: 'cloud' },
    { re: /(github|git|ci\/cd|pipeline)/i, icon: GitBranch, semantic: 'git' },
    { re: /(auth|oauth|jwt|security)/i, icon: ShieldCheck, semantic: 'security' },
    { re: /(tool|cli|automation)/i, icon: Wrench, semantic: 'tooling' },
];

const TECH_BADGE_TONES: Record<TechSemantic, string> = {
    backend:
        'bg-blue-100 text-blue-900 border border-blue-200 dark:bg-blue-900/35 dark:text-blue-200 dark:border-blue-700/60',
    database:
        'bg-emerald-100 text-emerald-900 border border-emerald-200 dark:bg-emerald-900/35 dark:text-emerald-200 dark:border-emerald-700/60',
    cloud:
        'bg-cyan-100 text-cyan-900 border border-cyan-200 dark:bg-cyan-900/35 dark:text-cyan-200 dark:border-cyan-700/60',
    git: 'bg-orange-100 text-orange-900 border border-orange-200 dark:bg-orange-900/35 dark:text-orange-200 dark:border-orange-700/60',
    security:
        'bg-rose-100 text-rose-900 border border-rose-200 dark:bg-rose-900/35 dark:text-rose-200 dark:border-rose-700/60',
    tooling:
        'bg-amber-100 text-amber-900 border border-amber-200 dark:bg-amber-900/35 dark:text-amber-200 dark:border-amber-700/60',
    default:
        'bg-violet-100 text-violet-900 border border-violet-200 dark:bg-violet-900/35 dark:text-violet-200 dark:border-violet-700/60',
};

const getTechSemantic = (techLabel: string): { icon: LucideIcon; semantic: TechSemantic } => {
    const matched = TECH_ICON_RULES.find((rule) => rule.re.test(techLabel));
    return { icon: matched?.icon ?? Braces, semantic: matched?.semantic ?? 'default' };
};

interface ProjectCardProps {
    url: string;
    image: string;
    title: string;
    description: string;
    tech?: string[];
    position?: 'odd' | 'even';
    delay?: number;
    isPrivate?: boolean;
}

const ProjectCard = ({
    url,
    image,
    title,
    description,
    tech = [],
    position = 'odd',
    delay = 0,
    isPrivate = false,
}: ProjectCardProps) => {
    const visibleTech = tech.slice(0, MAX_BADGES);
    const hiddenCount = tech.length - MAX_BADGES;

    return (
        <li className='group flex justify-center w-fit'>
            <a href={url} target='_blank' rel='noreferrer'>
                <div className='relative flex flex-col md:flex-row items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: position === 'odd' ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ delay, duration: 0.8, ease }}
                        className={cn(
                            'relative w-87.5 h-48 md:w-150 md:h-75 rounded-md shadow overflow-hidden',
                            position === 'odd' ? 'md:order-1' : 'md:order-2'
                        )}
                    >
                        <div className='bg-linear-to-br from-white to-[#9733EE] opacity-30 group-hover:opacity-0 h-full w-full absolute z-10 transition-all duration-300' />
                        {isPrivate && (
                            <Badge className='absolute top-2 right-2 z-20 bg-gray-900/75 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 rounded-full normal-case tracking-wide font-medium'>
                                Private / Internal
                            </Badge>
                        )}
                        <Image
                            src={image}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: position === 'odd' ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ delay, duration: 0.8, ease }}
                        className={cn(
                            'text-center justify-end flex flex-col items-center h-fit z-10 ml-0 -mt-20 md:mt-0 w-fit md:w-96 md:bg-transparent md:px-0 px-3 border border-purple-500/10 md:border-0 pb-3 mb:pb-0 rounded-lg md:rounded-0',
                            position === 'odd'
                                ? 'md:order-2 md:-ml-32 md:text-right md:items-end'
                                : 'md:order-1 md:-mr-32 md:text-left md:items-start'
                        )}
                    >
                        <h3 className='w-64 text-base mt-1 md:mt-0 md:text-2xl text-purple-900 dark:text-purple-100 rounded px-3 md:px-0 bg-purple-50 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent font-semibold'>
                            {title}
                        </h3>

                        <p className='mt-2 md:mt-5 p-1 md:p-4 bg-purple-50 dark:bg-gray-900 border leading-relaxed border-purple-500/10 rounded text-[8px] md:text-xs text-purple-900 dark:text-gray-300 shadow-lg group-hover:shadow-none transition-all duration-300 ease-in-out w-72 md:w-full'>
                            {description}
                        </p>

                        <ul className='flex flex-wrap items-center gap-2 justify-end mt-5'>
                            {visibleTech.map((value, index) => {
                                const { icon: Icon, semantic } = getTechSemantic(value);

                                return (
                                    <li key={index}>
                                        <Badge
                                            className={cn(
                                                'font-medium px-2 py-1 rounded normal-case tracking-wide text-[8px] md:text-xs transition-all duration-300 ease-in-out shadow-xl group-hover:shadow-none',
                                                TECH_BADGE_TONES[semantic]
                                            )}
                                        >
                                            <Icon
                                                className='h-2.5 w-2.5 md:h-3 md:w-3'
                                                aria-hidden='true'
                                            />
                                            {value}
                                        </Badge>
                                    </li>
                                );
                            })}
                            {hiddenCount > 0 && (
                                <li>
                                    <Badge
                                        variant='secondary'
                                        className='font-medium px-2 py-1 rounded normal-case tracking-wide text-[8px] md:text-xs bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                                    >
                                        <Braces
                                            className='h-2.5 w-2.5 md:h-3 md:w-3'
                                            aria-hidden='true'
                                        />
                                        +{hiddenCount} more
                                    </Badge>
                                </li>
                            )}
                        </ul>
                    </motion.div>
                </div>
            </a>
        </li>
    );
};

export default ProjectCard;
