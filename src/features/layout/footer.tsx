import { socials } from './data';

const Footer = () => {
    return (
        <footer className='border-t border-purple-500/10 dark:border-purple-900/20 mt-10 py-8'>
            <div className='container flex flex-col items-center gap-4'>
                <div className='flex items-center gap-5'>
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target='_blank'
                            rel='noreferrer'
                            className='text-xs text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200 font-medium'
                        >
                            {social.name}
                        </a>
                    ))}
                </div>

                <p className='text-[10px] text-purple-400 dark:text-purple-600 text-center'>
                    CITEI 2020 — Published paper indexed by Scopus · Universitas Ahmad Dahlan
                </p>

                <p className='text-[10px] text-gray-400 dark:text-gray-600'>
                    Designed by Me · {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
