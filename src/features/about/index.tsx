import { FadeUp } from '@/features/shared/animated';
import SectionHeading from '@/features/shared/section-heading';
import { UserRound } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id='about' className='my-24 md:my-36 container px-3 md:px-0'>
            <SectionHeading title='About' icon={UserRound} tone='about' />
            <FadeUp className='max-w-2xl mx-auto space-y-4 text-xs md:text-sm leading-relaxed text-muted-foreground text-center md:text-left'>
                <p>
                    <strong className='text-primary font-semibold'>Backend-focused</strong>{' '}
                    Software Engineer with{' '}
                    <strong className='text-primary font-semibold'>5+ years</strong> of
                    experience building production web applications. Primary expertise in{' '}
                    <strong className='text-primary font-semibold'>Go</strong> and{' '}
                    <strong className='text-primary font-semibold'>Java (Spring Boot)</strong> ,
                    with solid frontend capability in React when the project calls for it.
                </p>
                <p>
                    Specialized in designing and building{' '}
                    <strong className='text-primary font-semibold'>REST APIs</strong>,
                    implementing modular and clean architectures, and integrating systems
                    end-to-end. Strong foundation in monolithic systems (Laravel) and evolving
                    towards scalable, decoupled backend services.
                </p>
                <p>
                    Focused on backend solutions that are reliable, performant, and aligned with
                    real-world business needs — with an eye on deployment, observability, and
                    maintainability.
                </p>
            </FadeUp>
        </section>
    );
}
