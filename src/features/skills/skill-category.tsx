import { Skill } from '@/types';

interface SkillCategoryProps {
    skill: Skill;
    delay?: number;
}

const SkillCategory = ({ skill, delay = 0 }: SkillCategoryProps) => {
    return (
        <div
            className={`relative rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 ${
                skill.isPrimary
                    ? 'bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900 border-2 border-purple-400 dark:border-purple-600 hover:border-purple-500 dark:hover:border-purple-500'
                    : 'bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700'
            }`}
            data-aos='fade-up'
            data-aos-delay={delay}
            data-aos-duration='800'
        >
            {skill.isPrimary && (
                <span className='absolute top-3 right-3 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-purple-500 text-white tracking-wide'>
                    Primary Focus
                </span>
            )}
            <h3
                className={`text-[10px] font-semibold uppercase tracking-widest mb-3 ${
                    skill.isPrimary
                        ? 'text-purple-700 dark:text-purple-300'
                        : 'text-purple-600 dark:text-purple-400'
                }`}
            >
                {skill.category}
            </h3>
            <ul className='flex flex-wrap gap-2'>
                {skill.items.map((item, index) => (
                    <li
                        key={index}
                        className={`text-[11px] px-2.5 py-1 rounded-full border ${
                            skill.isPrimary
                                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 border-purple-200 dark:border-purple-700/60 font-medium'
                                : 'bg-purple-50 dark:bg-purple-950/50 text-purple-900 dark:text-purple-200 border-purple-100 dark:border-purple-800/50'
                        }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCategory;
