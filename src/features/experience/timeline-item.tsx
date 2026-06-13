import { Experience } from '@/types';

interface TimelineItemProps {
    experience: Experience;
    isLast?: boolean;
    delay?: number;
}

const TimelineItem = ({ experience, isLast = false, delay = 0 }: TimelineItemProps) => {
    return (
        <div
            className='relative pl-8 pb-8 last:pb-0'
            data-aos='fade-up'
            data-aos-delay={delay}
            data-aos-duration='800'
        >
            {!isLast && (
                <div className='absolute left-[7px] top-4 bottom-0 w-px bg-purple-200 dark:bg-purple-900' />
            )}
            <div
                className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-950 ${
                    experience.isCurrent
                        ? 'bg-purple-500 shadow-md shadow-purple-500/30'
                        : 'bg-purple-300 dark:bg-purple-700'
                }`}
            />

            <div className='bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-900/40 rounded-lg p-4 shadow-sm'>
                <div className='flex flex-wrap items-start justify-between gap-2 mb-3'>
                    <div>
                        <h3 className='text-sm font-semibold text-purple-900 dark:text-purple-100'>
                            {experience.title}
                        </h3>
                        <p className='text-xs text-purple-600 dark:text-purple-400 mt-0.5 flex items-center gap-2'>
                            {experience.company}
                            <span className='px-1.5 py-0.5 bg-purple-50 dark:bg-purple-950/50 rounded text-[10px] border border-purple-100 dark:border-purple-800/50'>
                                {experience.type}
                            </span>
                        </p>
                    </div>
                    <span
                        className={`text-[10px] px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${
                            experience.isCurrent
                                ? 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
                        }`}
                    >
                        {experience.period}
                    </span>
                </div>

                <ul className='space-y-1.5'>
                    {experience.bullets.map((bullet, index) => (
                        <li
                            key={index}
                            className='flex items-start gap-2 text-[11px] md:text-xs text-gray-600 dark:text-gray-400 leading-relaxed'
                        >
                            <span className='mt-[3px] text-purple-400 flex-shrink-0 text-[8px]'>
                                ▸
                            </span>
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimelineItem;
