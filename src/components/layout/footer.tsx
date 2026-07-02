import { socials } from './data';

const Footer = () => {
    return (
        <footer className='border-t border-border/40 mt-10 py-8 bg-background'>
            <div className='container flex flex-col items-center gap-4'>
                {/* Social Links */}
                <div className='flex items-center gap-5'>
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target='_blank'
                            rel='noreferrer'
                            className='text-xs text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium'
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
                
                <p className='text-[10px] text-muted-foreground/80 tracking-wide text-center'>
                    CITEI 2020 — Published paper indexed by <a href="https://www.scopus.com/authid/detail.uri?authorId=57223429913" target="_blank" className='underline' rel="noopener noreferrer">Scopus</a> · Universitas Ahmad Dahlan
                </p>

                <p className='text-[10px] text-muted-foreground/60'>
                    Designed by Me · 2026
                </p>
            </div>
        </footer>
    );
};

export default Footer;