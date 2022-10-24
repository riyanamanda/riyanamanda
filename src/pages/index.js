/* eslint-disable @next/next/no-img-element */
import { Layout } from '@/components/templates';
import React from 'react';

const Home = () => {
      return (
          <Layout>
                <section className='flex flex-col items-center justify-center mt-20 md:mt-32 container px-3 md:px-0'>
                      <h1
                          className='text-2xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080] sm:h-14 w-full text-center'
                          data-aos='fade-in'
                          data-aos-delay='1000'
                          data-aos-duration='1000'
                      >
                            Riyan Amanda Nasution
                      </h1>

                      <p
                          className='text-xs md:text-sm mt-5 leading-relaxed text-purple-600 text-center'
                          data-aos='fade-in'
                          data-aos-delay='1500'
                          data-aos-duration='1500'
                      >
                            I am a Full-Stack Web Developer based in Palembang,
                            Indonesia. <br className='hidden md:block' />I use Laravel, Bootstrap, Tailwind, and
                            NextJS.
                      </p>
                </section>

                <section className='container my-10 md:my-32'>
                      <h3
                          className='font-semibold text-purple-900 text-xs md:text-sm text-center'
                          data-aos='fade-up'
                          data-aos-delay='2000'
                          data-aos-duration='1000'
                      >
                            Featured Project
                      </h3>

                      <div className='my-5 md:my-10'>
                            <ul>
                                  <li className='flex flex-1 justify-center'>
                                        <a
                                            href='https://lingkaran.id'
                                            target={'_blank'}
                                            rel={'noreferrer'}
                                        >
                                              <div className='group flex flex-col md:flex-row items-center'>
                                                    <img
                                                        className='border border-green-500/20 rounded-lg group-hover:shadow-lg transition-all duration-300 ease-in-out'
                                                        src='/images/lingkaran.png'
                                                        alt='Lingkaran ID'
                                                        width={400}
                                                        data-aos='fade-right'
                                                        data-aos-delay='2500'
                                                        data-aos-duration='1000'
                                                    />

                                                    <div
                                                        className='text-center md:text-right justify-end flex flex-col items-center md:items-end h-fit z-10 ml-0 md:-ml-24 -mt-20 md:mt-0 w-fit md:w-96 md:bg-transparent md:px-0 px-3 bg-white border border-green-500/20 md:border-0 pb-3 mb:pb-0 rounded-lg md:rounded-0'
                                                        data-aos='fade-left'
                                                        data-aos-delay='2500'
                                                        data-aos-duration='1000'
                                                    >
                                                          <h3 className='font-viga text-base mt-3 md:mt-0 md:text-xl text-green-600'>
                                                                Lingkar
                                                                <span className='text-red-600'>
                                                an
                                            </span>
                                                          </h3>

                                                          <p className='mt-2 md:mt-5 p-1 md:p-4 bg-green-50 border leading-relaxed border-green-500/20 rounded text-[8px] md:text-xs text-green-900 shadow-lg group-hover:shadow-none transition-all duration-300 ease-in-out w-72 md:w-full'>
                                                                Lingkaran is a news portal site in
                                                                Indonesia that provides news
                                                                dissemination features through graph
                                                                (SNA) and is one of the business
                                                                units of PT. Lingkaran Sistem
                                                                Intelektual.
                                                          </p>

                                                          <ul className='flex text-[8px] items-center space-x-5 justify-end mt-5 md:text-xs'>
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
