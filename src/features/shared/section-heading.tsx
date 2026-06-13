import { FadeIn } from './animated';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    icon?: LucideIcon;
    tone?: 'about' | 'skills' | 'experience' | 'projects' | 'default';
}

const TONE_STYLES: Record<
    NonNullable<SectionHeadingProps['tone']>,
    { heading: string; accent: string }
> = {
    about: {
        heading: 'text-sky-600 dark:text-sky-300',
        accent: 'bg-linear-to-r from-sky-500 to-cyan-500',
    },
    skills: {
        heading: 'text-indigo-600 dark:text-indigo-300',
        accent: 'bg-linear-to-r from-indigo-500 to-violet-500',
    },
    experience: {
        heading: 'text-emerald-600 dark:text-emerald-300',
        accent: 'bg-linear-to-r from-emerald-500 to-teal-500',
    },
    projects: {
        heading: 'text-amber-600 dark:text-amber-300',
        accent: 'bg-linear-to-r from-amber-500 to-orange-500',
    },
    default: {
        heading: 'text-purple-500 dark:text-purple-400',
        accent: 'bg-linear-to-r from-[#7928CA] to-[#FF0080]',
    },
};

const SectionHeading = ({ title, icon: Icon, tone = 'default' }: SectionHeadingProps) => {
    const style = TONE_STYLES[tone];

    return <div className='flex flex-col items-center mb-10'>
        <FadeIn>
            <h2
                className={cn(
                    'font-semibold text-xs md:text-sm tracking-widest uppercase inline-flex items-center gap-2',
                    style.heading
                )}
            >
                {Icon && (
                    <Icon
                        className={cn('h-3 w-3 md:h-3.5 md:w-3.5', style.heading)}
                        aria-hidden='true'
                    />
                )}
                {title}
            </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
            <div className={cn('mt-2 w-8 h-0.5 rounded', style.accent)} />
        </FadeIn>
    </div>
};

export default SectionHeading;
