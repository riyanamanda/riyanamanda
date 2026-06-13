import SectionHeading from '@/features/shared/section-heading';
import { FadeUp } from '@/features/shared/animated';
import { Cpu } from 'lucide-react';
import SkillCategory from './skill-category';
import skills from './data';

export default function SkillsSection() {
    return (
        <section id='skills' className='my-24 md:my-36 container px-3 md:px-0 relative'>
            <span className='hidden md:block w-75 h-75 absolute top-0 -left-40 opacity-10 bg-purple-400 rounded-full blur-3xl animate-blob' />
            <SectionHeading title='Core Skills' icon={Cpu} tone='skills' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {skills.map((skill, index) => (
                    <FadeUp key={index} delay={index * 0.08}>
                        <SkillCategory skill={skill} />
                    </FadeUp>
                ))}
            </div>
        </section>
    );
}
