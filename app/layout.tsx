import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    subsets: ['latin'],
    variable: '--font-sans',
});

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://riyanamanda.web.id'),

    title: {
        default: 'Riyan Amanda Nasution',
        template: '%s | Riyan Amanda Nasution',
    },

    description:
        'Fullstack Software Engineer specializing in backend development with Go and Java (Spring Boot). Explore my skills, projects, and experience. Open to remote or relocation roles.',

    keywords: [
        'Riyan Amanda Nasution',
        'Fullstack Software Engineer',
        'Backend Developer',
        'Go Developer',
        'Golang',
        'Java Spring Boot',
        'Software Engineer Portfolio',
    ],

    authors: [{ name: 'Riyan Amanda Nasution' }],
    creator: 'Riyan Amanda Nasution',

    alternates: {
        canonical: '/',
    },

    openGraph: {
        title: 'Riyan Amanda Nasution | Fullstack & Backend Software Engineer',
        description:
            'Fullstack Software Engineer specializing in backend development with Go and Java (Spring Boot). Open to remote or relocation roles.',
        url: '/',
        siteName: 'Riyan Amanda Nasution Portfolio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Riyan Amanda Nasution - Software Engineer Portfolio',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Riyan Amanda Nasution | Fullstack & Backend Software Engineer',
        description:
            'Fullstack Software Engineer specializing in backend development with Go and Java (Spring Boot).',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang='en'
            suppressHydrationWarning
            className={cn(
                'h-full',
                'antialiased',
                geistSans.variable,
                geistMono.variable,
                'font-sans'
            )}>
            <body className='min-h-full flex flex-col bg-background text-foreground antialiased'>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
