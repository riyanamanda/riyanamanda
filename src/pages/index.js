/* eslint-disable @next/next/no-img-element */
import { Layout } from '@/components/templates';
import React from 'react';

const Home = () => {
    return (
        <Layout>
            <section className='flex flex-col items-center justify-center mt-32 container'>
                <h1
                    className='text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] h-14'
                    data-aos='fade-in'
                    data-aos-delay='1000'
                    data-aos-duration='1000'
                >
                    Riyan Amanda Nasution
                </h1>

                <p
                    className='text-sm mt-5 leading-relaxed text-purple-600 text-center'
                    data-aos='fade-in'
                    data-aos-delay='1500'
                    data-aos-duration='1500'
                >
                    I am a Full-Stack Web Developer based in Palembang,
                    Indonesia. <br />I use Laravel, Bootstrap, Tailwind, and
                    NextJS.
                </p>
            </section>

            <section className='container my-32'>
                <h3
                    className='font-semibold text-purple-900 text-sm text-center'
                    data-aos='fade-up'
                    data-aos-delay='2000'
                    data-aos-duration='1000'
                >
                    Featured Project
                </h3>

                <div className='my-10'>
                    <ul>
                        <li className='flex flex-1 justify-center'>
                            <a
                                href='https://lingkaran.id'
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                <div className='group flex items-center'>
                                    <img
                                        className='border border-green-500/20 rounded-lg group-hover:shadow-lg transition-all duration-300 ease-in-out'
                                        src='/images/lingkaran.png'
                                        alt='Lingkaran ID'
                                        width={500}
                                        data-aos='fade-right'
                                        data-aos-delay='2500'
                                        data-aos-duration='1000'
                                    />
                                    <div
                                        className='text-right justify-end flex flex-col items-end h-fit z-10 -ml-24 w-96'
                                        data-aos='fade-left'
                                        data-aos-delay='2500'
                                        data-aos-duration='1000'
                                    >
                                        <h3 className='font-viga text-xl text-green-600'>
                                            Lingkar
                                            <span className='text-red-600'>
                                                an
                                            </span>
                                        </h3>

                                        <p className='mt-5 p-4 bg-green-50 border leading-relaxed border-green-500/20 rounded text-xs text-green-900 shadow-lg group-hover:shadow-none transition-all duration-300 ease-in-out'>
                                            Lingkaran is a news portal site in
                                            Indonesia that provides news
                                            dissemination features through graph
                                            (SNA) and is one of the business
                                            units of PT. Lingkaran Sistem
                                            Intelektual.
                                        </p>

                                        <ul className='flex items-center space-x-5 justify-end mt-5 text-xs'>
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
