import { FeatureCard } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { projects } from '@/data';
import Loading from 'react-loading';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        projects ? setIsLoading(false) : setIsLoading(true);
    }, []);

    return (
        <Layout>
            <section className='flex flex-col items-center justify-center mt-16 md:mt-40 container px-3 md:px-0 relative'>
                <span className='w-[400px] h-[450px] absolute -top-40 -left-96 opacity-20 bg-purple-500 rounded-full blur-3xl animate-blob'></span>
                <h1
                    className='text-2xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] sm:h-14 md:h-20 w-full text-center'
                    data-aos='fade-in'
                    data-aos-delay='700'
                    data-aos-duration='1000'
                >
                    Riyan Amanda Nasution
                </h1>
                <p
                    className='text-xs md:text-base mt-5 leading-relaxed [&>strong]:text-purple-800 text-center'
                    data-aos='fade-in'
                    data-aos-delay='900'
                    data-aos-duration='1000'
                >
                    I am a <strong>Full-Stack Web Developer</strong> based in
                    Palembang, Indonesia. <br className='hidden md:block' />I
                    use <strong>Laravel</strong>, <strong>Bootstrap</strong>,
                    <strong>Tailwind</strong>, and <strong>NextJS</strong>.
                </p>

                <a
                    href='mailto:ryant.n92@gmail.com'
                    data-aos='fade-in'
                    data-aos-delay='1200'
                    data-aos-duration='1000'
                >
                    <button className='mt-5 md:mt-20 px-3 md:px-6 py-1 md:py-3 border border-purple-500/20 rounded shadow-md text-xs font-semibold tracking-wider text-purple-500 shadow-purple-500/20 hover:text-white hover:bg-purple-500 transition-all duration-200'>
                        Say Hi
                    </button>
                </a>
            </section>

            <section className='my-20 md:my-44 relative overflow-x-hidden'>
                <span className='w-[400px] h-[450px] absolute top-20 -right-60 opacity-10 bg-purple-500 rounded-full blur-xl animate-blob'></span>
                <h2
                    className='font-semibold text-black text-xs md:text-sm text-center'
                    data-aos='fade-in'
                    data-aos-delay='1400'
                    data-aos-duration='1000'
                >
                    Featured Project{' '}
                    <span className='animate-pulse'>
                        ({Object.keys(projects).length})
                    </span>
                </h2>

                {isLoading ? (
                    <>
                        <div className='flex flex-col items-center my-20'>
                            <Loading type={'bars'} color={'#E39FF6'} />
                            <p className='text-xs'>Please wait</p>
                        </div>
                    </>
                ) : (
                    <div className='my-5 md:my-10'>
                        <ul className='flex flex-col gap-20 items-center'>
                            {projects?.map((project, index) => (
                                <FeatureCard
                                    key={index}
                                    url={project.url}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    tech={project.technology}
                                    position={project.position}
                                    delay={1600 + index}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Home;
