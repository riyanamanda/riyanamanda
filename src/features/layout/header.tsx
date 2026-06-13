'use client';
import { useEffect, useState } from 'react';
import { navigations } from './data';
import DarkModeToggle from '@/features/shared/dark-mode-toggle';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`sticky left-0 top-0 z-50 backdrop-blur transition-all duration-500 ${
                scrolled ? 'shadow-sm bg-white/70 dark:bg-gray-950/70' : 'bg-transparent'
            }`}
        >
            <div className='container px-4 py-4 flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-3 md:gap-0'>
                <nav>
                    <ul className='flex items-center justify-center font-medium text-xs space-x-5 list-none'>
                        {navigations.map((navigation, index) => (
                            <li
                                key={index}
                                data-aos='zoom-in'
                                data-aos-delay={index * 80}
                                data-aos-duration='800'
                            >
                                <a
                                    href={navigation.url}
                                    className='text-slate-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200'
                                >
                                    {navigation.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div
                    className='flex items-center justify-center gap-2'
                    data-aos='zoom-in'
                    data-aos-delay='400'
                    data-aos-duration='800'
                >
                    <DarkModeToggle />
                    <a href='/resume.pdf' target='_blank' rel='noreferrer'>
                        <button className='bg-purple-500 text-white text-xs px-3 py-1.5 rounded shadow-lg shadow-purple-500/20 font-medium hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-200'>
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
