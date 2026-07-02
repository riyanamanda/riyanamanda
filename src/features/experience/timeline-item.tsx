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
                <div className='absolute left-1.75 top-4 bottom-0 w-px bg-border' />
            )}
            
            <div
                className={cn(
                    'absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background',
                    experience.isCurrent
                        ? 'bg-primary shadow-md shadow-primary/30'
                        : 'bg-muted-foreground/40'
                )}
            />
            
            <Card className='rounded-lg p-4 ring-0 [--card-spacing:0] bg-card text-card-foreground border border-border/50 shadow-sm transition-colors duration-200'>
                <div className='flex flex-wrap items-start justify-between gap-2 mb-3'>
                    <div>
                        <h3 className='text-sm font-semibold text-foreground'>
                            {experience.title}
                        </h3>
                        <p className='text-xs text-primary mt-0.5 flex items-center gap-2'>
                            <Building2
                                className='h-3 w-3 md:h-3.5 md:w-3.5 shrink-0 text-primary'
                                aria-hidden='true'
                            />
                            {experience.company}
                            <Badge className='px-1.5 py-0.5 rounded text-[10px] bg-secondary border border-border text-secondary-foreground normal-case tracking-normal font-normal'>
                                {experience.type}
                            </Badge>
                        </p>
                    </div>
                    
                    <Badge
                        className={cn(
                            'text-[10px] px-2.5 py-1 rounded-full font-medium shrink-0 normal-case tracking-normal gap-1.5',
                            experience.isCurrent
                                ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                                : 'bg-muted text-muted-foreground border border-border'
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
                            className='flex items-start gap-2 text-[11px] md:text-xs text-muted-foreground leading-relaxed'
                        >
                            <span className='mt-0.75 text-primary shrink-0 text-[8px]'>▸</span>
                            {bullet}
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default TimelineItem;