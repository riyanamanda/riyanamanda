import SectionHeading from '@/features/shared/section-heading';
import SkillCategory from './skill-category';
import skills from './data';

export default function SkillsSection() {
    return (
        <section id='skills' className='my-24 md:my-36 container px-3 md:px-0 relative'>
            <span className='hidden md:block w-[300px] h-[300px] absolute top-0 -left-40 opacity-10 bg-purple-400 rounded-full blur-3xl animate-blob' />
            <SectionHeading title='Core Skills' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {skills.map((skill, index) => (
                    <SkillCategory key={index} skill={skill} delay={index * 80} />
                ))}
            </div>
        </section>
    );
}
