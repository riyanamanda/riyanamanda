import React from 'react';

const Header = () => {
    return (
        <header className='w-full flex flex-col md:flex-row items-center justify-center md:justify-between container py-3 px-3 md:px-0'>
            <ul className='flex space-x-16 items-center text-xs font-medium list-decimal text-purple-500'>
                <li
                    className='w-12'
                    data-aos='fade-right'
                    data-aos-delay='100'
                    data-aos-duration='1000'
                >
                    <a
                        href='https://github.com/riyanamanda'
                        target={'_blank'}
                        rel={'noreferrer'}
                        className='hover:pl-1 transition-all duration-300 hover:text-purple-500 text-purple-900'
                    >
                        Github
                    </a>
                </li>

                <li
                    className='w-12'
                    data-aos='fade-right'
                    data-aos-delay='200'
                    data-aos-duration='1000'
                >
                    <a
                        href='https://twitter.com/amanda_riyan'
                        target={'_blank'}
                        rel={'noreferrer'}
                        className='hover:pl-1 transition-all duration-300 hover:text-purple-500 text-purple-900'
                    >
                        Twitter
                    </a>
                </li>

                <li
                    className='w-12'
                    data-aos='fade-right'
                    data-aos-delay='300'
                    data-aos-duration='1000'
                >
                    <a
                        href='https://riyanamanda.showwcase.com/'
                        target={'_blank'}
                        rel={'noreferrer'}
                        className='hover:pl-1 transition-all duration-300 hover:text-purple-500 text-purple-900'
                    >
                        Showwcase
                    </a>
                </li>

                <li
                    className='w-12'
                    data-aos='fade-right'
                    data-aos-delay='400'
                    data-aos-duration='1000'
                >
                    <a
                        href='https://www.upwork.com/freelancers/~01b8a11bb7333dcad6'
                        target={'_blank'}
                        rel={'noreferrer'}
                        className='hover:pl-1 transition-all duration-300 hover:text-purple-500 text-purple-900'
                    >
                        Upwork
                    </a>
                </li>
            </ul>

            <a
                href={'/docs/new-cv.pdf'}
                target={'_blank'}
                rel={'noreferrer'}
                data-aos='fade-left'
                data-aos-delay='400'
                data-aos-duration='1000'
            >
                <button className='border md:mt-0 mt-5 border-purple-400/10 px-6 text-purple-50 bg-purple-500 py-2 rounded-md text-xs hover:bg-purple-200 hover:text-purple-900 transition-all duration-200 font-medium shadow-lg hover:shadow shadow-purple-500/20'>
                    Resume
                </button>
            </a>
        </header>
    );
};

export default Header;
