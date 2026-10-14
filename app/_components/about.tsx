export default function About() {
    return (
        <section id='about' className='space-y-4 text-sm sm:text-base leading-relaxed scroll-mt-20'>
            <p>
                Hi! I&apos;m a{' '}
                <strong className='font-semibold text-foreground'>
                    backend-focused Software Engineer
                </strong>{' '}
                with <strong className='font-semibold text-foreground'>5+ years</strong> of
                experience building production web applications. Primary expertise in{' '}
                <span className='font-semibold text-cyan-600 dark:text-cyan-400'>Go</span> and{' '}
                <span className='font-semibold text-emerald-600 dark:text-emerald-400'>
                    Java (Spring Boot)
                </span>
                , with solid frontend capability in{' '}
                <span className='font-semibold text-sky-600 dark:text-sky-400'>React</span> when the
                project calls for it.
            </p>
            <p>
                Specialized in designing and building{' '}
                <span className='font-medium text-foreground'>REST APIs</span>, implementing modular
                and clean architectures, and integrating systems end-to-end. Strong foundation in
                monolithic systems (Laravel) and evolving towards{' '}
                <span className='font-medium text-foreground'>
                    scalable, decoupled backend services
                </span>
                .
            </p>
            <p>
                Focused on backend solutions that are{' '}
                <span className='font-medium text-foreground'>
                    reliable, performant, and aligned with real-world business needs
                </span>{' '}
                — with an eye on deployment, observability, and maintainability.
            </p>
        </section>
    );
}
