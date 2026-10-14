import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Portfolio } from '@/types';
import { IconMenu2 } from '@tabler/icons-react';
import { Badge } from '../ui/badge';

export default function Header({ portfolio }: { portfolio: Portfolio }) {
    return (
        <header className='w-full md:w-5/12 md:sticky md:top-20 md:h-[calc(100vh-10rem)] flex flex-col justify-between'>
            <div className='space-y-8 md:space-y-10'>
                <div className='flex items-start justify-between gap-4'>
                    <div>
                        <h1 className='text-4xl font-bold tracking-tight bg-linear-to-r from-foreground via-foreground to-cyan-600 dark:to-cyan-400 bg-clip-text text-transparent'>
                            {portfolio.name}
                        </h1>
                        <p className='font-medium text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed'>
                            {portfolio.bio}
                        </p>
                    </div>

                    <div className='md:hidden shrink-0 pt-1'>
                        <Sheet>
                            <SheetTrigger
                                className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9'
                                aria-label='Open Menu'>
                                <IconMenu2 size={20} />
                            </SheetTrigger>
                            <SheetContent
                                side='right'
                                className='w-72 bg-background border-border p-6 sm:p-8'>
                                <nav className='flex flex-col gap-6 font-mono text-sm mt-8 text-muted-foreground'>
                                    <a
                                        href='#about'
                                        className='hover:text-foreground transition-colors'>
                                        <span className='text-primary font-semibold mr-2'>01.</span>{' '}
                                        About
                                    </a>
                                    <a
                                        href='#experience'
                                        className='hover:text-foreground transition-colors'>
                                        <span className='text-primary font-semibold mr-2'>02.</span>{' '}
                                        Experience
                                    </a>
                                    <a
                                        href='#project'
                                        className='hover:text-foreground transition-colors'>
                                        <span className='text-primary font-semibold mr-2'>03.</span>{' '}
                                        Projects
                                    </a>
                                    <a
                                        href='https://www.scopus.com/authid/detail.uri?authorId=57223429913'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='hover:text-foreground transition-colors'>
                                        <span className='text-primary font-semibold mr-2'>04.</span>{' '}
                                        Journal
                                    </a>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                <div className='space-y-3'>
                    <h2 className='text-xs font-semibold uppercase tracking-widest text-muted-foreground/85'>
                        Primary Technologies
                    </h2>
                    <div className='flex flex-wrap gap-2'>
                        {portfolio.stacks.map((stack) => (
                            <Badge
                                key={stack.id}
                                variant='secondary'
                                className='px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent border border-border/50 transition-colors'>
                                {stack.name}
                            </Badge>
                        ))}
                    </div>
                </div>

                <nav className='hidden md:flex flex-col gap-3 font-mono text-xs text-muted-foreground pt-2'>
                    <a
                        href='#about'
                        className='group flex items-center gap-2 w-fit hover:text-foreground transition-colors'>
                        <span className='text-primary font-semibold'>01.</span>
                        <span className='tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50'>
                            About
                        </span>
                    </a>
                    <a
                        href='#experience'
                        className='group flex items-center gap-2 w-fit hover:text-foreground transition-colors'>
                        <span className='text-primary font-semibold'>02.</span>
                        <span className='tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50'>
                            Experience
                        </span>
                    </a>
                    <a
                        href='#project'
                        className='group flex items-center gap-2 w-fit hover:text-foreground transition-colors'>
                        <span className='text-primary font-semibold'>03.</span>
                        <span className='tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50'>
                            Projects
                        </span>
                    </a>
                    <a
                        href='https://www.scopus.com/authid/detail.uri?authorId=57223429913'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group flex items-center gap-2 w-fit hover:text-foreground transition-colors'>
                        <span className='text-primary font-semibold'>04.</span>
                        <span className='tracking-wider uppercase group-hover:underline underline-offset-4 decoration-primary/50'>
                            Journal
                        </span>
                    </a>
                </nav>
            </div>

            <div className='hidden md:flex items-center gap-6 pt-6'>
                {portfolio.socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
                        aria-label={social.name}>
                        <social.icon size={18} />
                        <span>{social.name}</span>
                    </a>
                ))}
            </div>
        </header>
    );
}
