import ImageRight from '@/features/shared/image-right';

const TECH_TAGS = ['REST API', 'Spring Boot', 'Go', 'PostgreSQL', 'Docker', 'CI/CD'];

const LOGOS = [
    {
        url: 'https://lsigroup.id',
        src: '/logo/lingkaran.png',
        alt: 'PT. Lingkaran Sistem Intelektual',
        className: 'w-20 h-8 md:w-28 md:h-10',
        delay: 100,
    },
    {
        url: 'https://www.binadarma.ac.id',
        src: '/logo/binadarma.png',
        alt: 'Universitas Bina Darma',
        className: 'w-20 h-8 md:w-36 md:h-10',
        delay: 200,
    },
    {
        url: 'https://rs-erba.go.id',
        src: '/logo/erba.png',
        alt: 'Rumah Sakit dr. Ernaldi Bahar',
        className: 'w-20 h-8 md:w-36 md:h-10',
        delay: 300,
    },
    {
        url: 'https://www.pertamina.com',
        src: '/logo/patraniaga.png',
        alt: 'PT. Pertamina Patra Niaga',
        className: 'w-20 h-8 md:w-36 md:h-10',
        delay: 400,
    },
];

export default function HeroSection() {
    return (
        <>
            <section
                id='hero'
                className='flex flex-col items-center justify-center mt-16 md:mt-40 container px-3 md:px-0 relative'
            >
                <span className='w-[400px] h-[450px] absolute -top-40 -left-96 opacity-20 bg-purple-500 rounded-full blur-3xl animate-blob' />

                <h1
                    className='text-2xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] sm:h-14 md:h-20 w-full text-center'
                    data-aos='fade-in'
                    data-aos-delay='300'
                    data-aos-duration='1000'
                >
                    Riyan Amanda
                </h1>

                <p
                    className='text-xs md:text-sm mt-4 text-purple-700 dark:text-purple-300 font-medium tracking-wide text-center'
                    data-aos='fade-in'
                    data-aos-delay='500'
                    data-aos-duration='1000'
                >
                    Backend-focused Software Engineer · Java · Go · Spring Boot
                </p>

                <p
                    className='text-xs md:text-sm mt-2 text-gray-500 dark:text-gray-400 text-center'
                    data-aos='fade-in'
                    data-aos-delay='600'
                    data-aos-duration='1000'
                >
                    Palembang, Indonesia · Open to relocation / remote
                </p>

                <div
                    className='flex flex-wrap justify-center gap-2 mt-5'
                    data-aos='fade-in'
                    data-aos-delay='700'
                    data-aos-duration='1000'
                >
                    {TECH_TAGS.map((tag) => (
                        <span
                            key={tag}
                            className='text-[10px] px-2.5 py-1 rounded-full border border-purple-300/50 dark:border-purple-700/50 text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-950/30'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href='mailto:ryant.n92@gmail.com'
                    data-aos='fade-in'
                    data-aos-delay='800'
                    data-aos-duration='1000'
                >
                    <button className='mt-8 md:mt-14 px-4 py-2 border border-purple-500/30 rounded-full shadow-md text-xs font-semibold tracking-wider text-purple-500 dark:text-purple-400 shadow-purple-500/10 hover:text-white dark:hover:text-white hover:bg-purple-500 transition-all duration-200'>
                        Say Hi →
                    </button>
                </a>
            </section>

            <section className='mt-24 md:mt-32'>
                <p
                    className='text-center text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-6'
                    data-aos='fade-in'
                    data-aos-duration='800'
                >
                    Worked with
                </p>
                <div className='container mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12 drop-shadow-sm'>
                    {LOGOS.map((logo) => (
                        <ImageRight key={logo.alt} {...logo} />
                    ))}
                </div>
            </section>
        </>
    );
}
