import { FeatureCard } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { projects } from '@/data';
import Loading from 'react-loading';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        projects ? setIsLoading(false) : setIsLoading(true);
    }, []);

    return (
        <Layout>
            <section className='flex flex-col items-center justify-center mt-5 md:mt-60 container px-3 md:px-0'>
                <h1
                    className='text-2xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] sm:h-14 w-full text-center'
                    data-aos='fade-in'
                    data-aos-delay='1000'
                    data-aos-duration='1000'
                >
                    Riyan Amanda Nasution
                </h1>

                <p
                    className='text-xs md:text-sm mt-5 leading-relaxed [&>strong]:text-purple-800 text-center'
                    data-aos='fade-in'
                    data-aos-delay='1500'
                    data-aos-duration='1500'
                >
                    I am a <strong>Full-Stack Web Developer</strong> based in
                    Palembang, Indonesia. <br className='hidden md:block' />I
                    use <strong>Laravel</strong>, <strong>Bootstrap</strong>,
                    <strong>Tailwind</strong>, and <strong>NextJS</strong>.
                </p>
            </section>

            <section className='container my-10 md:my-52'>
                <h2
                    className='font-semibold text-black text-xs md:text-sm text-center'
                    data-aos='fade-in'
                    data-aos-delay='2000'
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
