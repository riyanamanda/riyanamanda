'use client';
import DarkModeToggle from '@/features/shared/dark-mode-toggle';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navigations } from './data';

const ease = [0.25, 0.1, 0.25, 1] as const;

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
                scrolled 
                    ? 'shadow-sm bg-background/70 border-b border-border/20' 
                    : 'bg-transparent'
            }`}
        >
            <div className='container px-4 py-4 flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-3 md:gap-0'>
                <nav>
                    <ul className='flex items-center justify-center font-medium text-xs space-x-5 list-none'>
                        {navigations.map((navigation, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease }}
                            >
                                <a
                                    href={navigation.url}
                                    className='text-muted-foreground hover:text-primary transition-colors duration-200'
                                >
                                    {navigation.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5, ease }}
                    className='flex items-center justify-center gap-2'
                >
                    <DarkModeToggle />
                </motion.div>
            </div>
        </header>
    );
};

export default Header;