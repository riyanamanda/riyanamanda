import SectionHeading from '@/features/shared/section-heading';
import TimelineItem from './timeline-item';
import experiences from './data';

export default function ExperienceSection() {
    return (
        <section id='experience' className='my-24 md:my-36 container px-3 md:px-0'>
            <SectionHeading title='Experience' />
            <div className='max-w-2xl mx-auto'>
                {experiences.map((exp, index) => (
                    <TimelineItem
                        key={index}
                        experience={exp}
                        isLast={index === experiences.length - 1}
                        delay={index * 100}
                    />
                ))}
            </div>
        </section>
    );
}
