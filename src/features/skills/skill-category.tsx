import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    type LucideIcon,
    Braces,
    Database,
    Globe,
    Network,
    Server,
    Settings2,
} from 'lucide-react';
import { Skill } from '@/types';

const SKILL_CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
    Backend: Server,
    Architecture: Network,
    Database,
    DevOps: Settings2,
    Frontend: Globe,
};

const SKILL_CATEGORY_TONE_MAP: Record<
    string,
    { heading: string; icon: string; item: string; itemPrimary: string }
> = {
    Backend: {
        heading: 'text-blue-700 dark:text-blue-300',
        icon: 'text-blue-700 dark:text-blue-300',
        item: 'bg-blue-50 text-blue-900 border-blue-100 dark:bg-blue-950/50 dark:text-blue-200 dark:border-blue-800/50',
        itemPrimary:
            'bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-900/40 dark:text-blue-100 dark:border-blue-700/60',
    },
    Architecture: {
        heading: 'text-violet-700 dark:text-violet-300',
        icon: 'text-violet-700 dark:text-violet-300',
        item: 'bg-violet-50 text-violet-900 border-violet-100 dark:bg-violet-950/50 dark:text-violet-200 dark:border-violet-800/50',
        itemPrimary:
            'bg-violet-100 text-violet-900 border-violet-200 dark:bg-violet-900/40 dark:text-violet-100 dark:border-violet-700/60',
    },
    Database: {
        heading: 'text-emerald-700 dark:text-emerald-300',
        icon: 'text-emerald-700 dark:text-emerald-300',
        item: 'bg-emerald-50 text-emerald-900 border-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-200 dark:border-emerald-800/50',
        itemPrimary:
            'bg-emerald-100 text-emerald-900 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-100 dark:border-emerald-700/60',
    },
    DevOps: {
        heading: 'text-amber-700 dark:text-amber-300',
        icon: 'text-amber-700 dark:text-amber-300',
        item: 'bg-amber-50 text-amber-900 border-amber-100 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-800/50',
        itemPrimary:
            'bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-900/40 dark:text-amber-100 dark:border-amber-700/60',
    },
    Frontend: {
        heading: 'text-cyan-700 dark:text-cyan-300',
        icon: 'text-cyan-700 dark:text-cyan-300',
        item: 'bg-cyan-50 text-cyan-900 border-cyan-100 dark:bg-cyan-950/50 dark:text-cyan-200 dark:border-cyan-800/50',
        itemPrimary:
            'bg-cyan-100 text-cyan-900 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-100 dark:border-cyan-700/60',
    },
};

const getCategoryIcon = (category: string): LucideIcon => {
    return SKILL_CATEGORY_ICON_MAP[category] ?? Braces;
};

const getCategoryTone = (category: string) => {
    return (
        SKILL_CATEGORY_TONE_MAP[category] ?? {
            heading: 'text-purple-600 dark:text-purple-400',
            icon: 'text-purple-600 dark:text-purple-300',
            item: 'bg-purple-50 text-purple-900 border-purple-100 dark:bg-purple-950/50 dark:text-purple-200 dark:border-purple-800/50',
            itemPrimary:
                'bg-purple-100 text-purple-900 border-purple-200 dark:bg-purple-900/40 dark:text-purple-100 dark:border-purple-700/60',
        }
    );
};

const SkillCategory = ({ skill }: { skill: Skill }) => {
    const CategoryIcon = getCategoryIcon(skill.category);
    const tone = getCategoryTone(skill.category);

    return (
        <Card
            className={cn(
                'relative p-4 rounded-lg ring-0 [--card-spacing:0] hover:shadow-md transition-all duration-300',
                skill.isPrimary
                    ? 'bg-linear-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900 border-2 border-purple-400 dark:border-purple-600 hover:border-purple-500 dark:hover:border-purple-500'
                    : 'bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700'
            )}
        >
            {skill.isPrimary && (
                <Badge className='absolute top-3 right-3 px-2 py-0.5 rounded-full bg-purple-500 text-white text-[9px] normal-case tracking-wide font-semibold'>
                    Primary Focus
                </Badge>
            )}
            <h3
                className={cn(
                    'text-[10px] font-semibold uppercase tracking-widest mb-3 inline-flex items-center gap-1.5',
                    tone.heading
                )}
            >
                <CategoryIcon
                    className={cn('h-3 w-3 md:h-3.5 md:w-3.5', tone.icon)}
                    aria-hidden='true'
                />
                {skill.category}
            </h3>
            <ul className='flex flex-wrap gap-2'>
                {skill.items.map((item, index) => (
                    <li key={index}>
                        <Badge
                            className={cn(
                                'text-[11px] px-2.5 py-1 rounded-full border normal-case tracking-normal font-medium',
                                skill.isPrimary
                                    ? tone.itemPrimary
                                    : tone.item
                            )}
                        >
                            {item}
                        </Badge>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default SkillCategory;
