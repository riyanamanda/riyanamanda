import SectionHeading from '@/features/shared/section-heading';

export default function AboutSection() {
    return (
        <section id='about' className='my-24 md:my-36 container px-3 md:px-0'>
            <SectionHeading title='About' />
            <div
                className='max-w-2xl mx-auto space-y-4 text-xs md:text-sm leading-relaxed text-gray-600 dark:text-gray-400 text-center md:text-left'
                data-aos='fade-up'
                data-aos-duration='800'
            >
                <p>
                    <strong className='text-purple-700 dark:text-purple-300'>
                        Backend-focused
                    </strong>{' '}
                    Software Engineer with{' '}
                    <strong className='text-purple-700 dark:text-purple-300'>5+ years</strong> of
                    experience building production web applications. Primary expertise in{' '}
                    <strong className='text-purple-700 dark:text-purple-300'>
                        Java (Spring Boot)
                    </strong>{' '}
                    and <strong className='text-purple-700 dark:text-purple-300'>Go</strong>, with
                    solid frontend capability in React when the project calls for it.
                </p>
                <p>
                    Specialized in designing and building{' '}
                    <strong className='text-purple-700 dark:text-purple-300'>REST APIs</strong>,
                    implementing modular and clean architectures, and integrating systems
                    end-to-end. Strong foundation in monolithic systems (Laravel) and evolving
                    towards scalable, decoupled backend services.
                </p>
                <p>
                    Focused on backend solutions that are reliable, performant, and aligned with
                    real-world business needs — with an eye on deployment, observability, and
                    maintainability.
                </p>
            </div>
        </section>
    );
}
