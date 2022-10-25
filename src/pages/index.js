import { Layout } from '@/components/templates';
import Image from 'next/image';
import React from 'react';

const Home = () => {
    return (
        <Layout>
            <section className='flex flex-col items-center justify-center mt-5 md:mt-28 container px-3 md:px-0'>
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

            <section className='container my-10 md:my-32'>
                <h2
                    className='font-semibold text-black text-xs md:text-sm text-center'
                    data-aos='fade-in'
                    data-aos-delay='2000'
                    data-aos-duration='1000'
                >
                    Featured Project
                </h2>

                <div className='my-5 md:my-10'>
                    <ul className='flex justify-center'>
                        <li className='group flex justify-center w-fit'>
                            <a
                                href='https://lingkaran.id'
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                <div className='relative flex flex-col md:flex-row items-center'>
                                    <div
                                        className='relative w-[350px] h-48 md:w-[600px] md:h-[300px] rounded-md shadow overflow-hidden'
                                        data-aos='fade-right'
                                        data-aos-delay='2500'
                                        data-aos-duration='1000'
                                    >
                                        <div className='bg-gradient-to-br from-[#DA22FF] to-[#9733EE] opacity-30 group-hover:opacity-0 h-full w-full absolute z-10 transition-all duration-300' />
                                        <Image
                                            src={'/images/lingkaran.png'}
                                            alt='Lingkaran ID'
                                            layout='fill'
                                            objectFit='cover'
                                            objectPosition='center'
                                            priority
                                        />
                                    </div>

                                    <div
                                        className='text-center md:text-right justify-end flex flex-col items-center md:items-end h-fit z-10 ml-0 md:-ml-32 -mt-20 md:mt-0 w-fit md:w-96 md:bg-transparent md:px-0 px-3 border border-purple-500/10 md:border-0 pb-3 mb:pb-0 rounded-lg md:rounded-0'
                                        data-aos='fade-left'
                                        data-aos-delay='2500'
                                        data-aos-duration='1000'
                                    >
                                        <h3 className='text-base mt-1 md:mt-0 md:text-2xl text-purple-900 rounded px-3 bg-purple-50 md:bg-transparent font-semibold'>
                                            Lingkaran
                                        </h3>

                                        <p className='mt-2 md:mt-5 p-1 md:p-4 bg-purple-50 border leading-relaxed border-purple-500/10 rounded text-[8px] md:text-xs text-purple-900 shadow-lg group-hover:shadow-none transition-all duration-300 ease-in-out w-72 md:w-full'>
                                            Lingkaran is a news portal site in
                                            Indonesia that provides news
                                            dissemination features through graph
                                            (SNA) and is one of the business
                                            units of PT. Lingkaran Sistem
                                            Intelektual.
                                        </p>

                                        <ul className='flex text-[8px] text-purple-900 items-center space-x-5 justify-end mt-5 md:text-xs'>
                                            <li>Laravel</li>
                                            <li>React</li>
                                            <li>Bootstrap</li>
                                            <li>SASS</li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
