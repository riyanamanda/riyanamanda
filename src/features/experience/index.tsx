import SectionHeading from '@/features/shared/section-heading';
import { FadeUp } from '@/features/shared/animated';
import { BriefcaseBusiness } from 'lucide-react';
import TimelineItem from './timeline-item';
import experiences from './data';

export default function ExperienceSection() {
    return (
        <section id='experience' className='my-24 md:my-36 container px-3 md:px-0'>
            <SectionHeading title='Experience' icon={BriefcaseBusiness} tone='experience' />
            <div className='max-w-2xl mx-auto'>
                {experiences.map((exp, index) => (
                    <FadeUp key={index} delay={index * 0.1}>
                        <TimelineItem
                            experience={exp}
                            isLast={index === experiences.length - 1}
                        />
                    </FadeUp>
                ))}
            </div>
        </section>
    );
}
