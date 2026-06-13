import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, CalendarRange } from 'lucide-react';
import { Experience } from '@/types';

interface TimelineItemProps {
    experience: Experience;
    isLast?: boolean;
}

const TimelineItem = ({ experience, isLast = false }: TimelineItemProps) => {
    return (
        <div className={cn('relative pl-8', isLast ? 'pb-0' : 'pb-8')}>
            {!isLast && (
                <div className='absolute left-1.75 top-4 bottom-0 w-px bg-purple-200 dark:bg-purple-900' />
            )}
            <div
                className={cn(
                    'absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-950',
                    experience.isCurrent
                        ? 'bg-purple-500 shadow-md shadow-purple-500/30'
                        : 'bg-purple-300 dark:bg-purple-700'
                )}
            />

            <Card className='rounded-lg p-4 ring-0 [--card-spacing:0] bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-900/40 shadow-sm'>
                <div className='flex flex-wrap items-start justify-between gap-2 mb-3'>
                    <div>
                        <h3 className='text-sm font-semibold text-purple-900 dark:text-purple-100'>
                            {experience.title}
                        </h3>
                        <p className='text-xs text-purple-600 dark:text-purple-400 mt-0.5 flex items-center gap-2'>
                            <Building2
                                className='h-3 w-3 md:h-3.5 md:w-3.5 shrink-0 text-purple-600 dark:text-purple-300'
                                aria-hidden='true'
                            />
                            {experience.company}
                            <Badge className='px-1.5 py-0.5 rounded text-[10px] bg-purple-50 dark:bg-purple-950/50 border border-purple-100 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 normal-case tracking-normal font-normal'>
                                {experience.type}
                            </Badge>
                        </p>
                    </div>
                    <Badge
                        className={cn(
                            'text-[10px] px-2.5 py-1 rounded-full font-medium shrink-0 normal-case tracking-normal',
                            experience.isCurrent
                                ? 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
                        )}
                    >
                        <CalendarRange className='h-3 w-3 md:h-3.5 md:w-3.5' aria-hidden='true' />
                        {experience.period}
                    </Badge>
                </div>

                <ul className='space-y-1.5'>
                    {experience.bullets.map((bullet, index) => (
                        <li
                            key={index}
                            className='flex items-start gap-2 text-[11px] md:text-xs text-gray-600 dark:text-gray-400 leading-relaxed'
                        >
                            <span className='mt-0.75 text-purple-400 shrink-0 text-[8px]'>▸</span>
                            {bullet}
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default TimelineItem;
