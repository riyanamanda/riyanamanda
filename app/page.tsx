import Header from '@/components/layout/header';
import { Separator } from '@/components/ui/separator';
import { portfolio } from '@/data/portfolio';
import About from './_components/about';
import Experience from './_components/experience';
import Project from './_components/project';

export default function Home() {
    return (
        <main className='bg-background text-foreground min-h-screen selection:bg-primary/20 selection:text-primary'>
            <div className='max-w-7xl mx-auto w-full py-10 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12'>
                <div className='flex flex-col md:flex-row justify-between gap-12 lg:gap-16 items-start'>
                    <Header portfolio={portfolio} />

                    <div className='w-full md:w-6/12 space-y-16 text-muted-foreground leading-relaxed pt-6 md:pt-0'>
                        <About />
                        <Separator />
                        <Experience />
                        <Separator />
                        <Project />

                        <section className='space-y-6 scroll-mt-20 pb-10 md:pb-0'>
                            <blockquote className='border-l-2 border-primary/40 pl-4 italic text-sm text-muted-foreground/90'>
                                &ldquo;If you feel tired of studying, be prepared to accept the
                                bitterness of ignorance.&rdquo;
                            </blockquote>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
