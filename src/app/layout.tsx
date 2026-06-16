import type { Metadata } from 'next';
import { Noto_Sans_Mono, Viga, Noto_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { cn } from '@/lib/utils';

const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

const notoSansMono = Noto_Sans_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-noto-sans-mono',
});

const viga = Viga({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-viga',
});

const siteUrl = 'https://riyanamanda.vercel.app';
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
    title: 'Riyan Amanda',
    description:
        "Hi, I'm Riyan Amanda — Backend-focused Software Engineer specializing in Java (Spring Boot) and Go, with 5+ years building production REST APIs and scalable backend systems.",
    keywords: [
        'riyan amanda',
        'backend software engineer',
        'java spring boot',
        'go golang',
        'rest api',
        'laravel',
        'portfolio',
        'web development',
    ],
    openGraph: {
        type: 'website',
        url: siteUrl,
        siteName: 'Riyan Amanda',
        title: 'Riyan Amanda — Backend Software Engineer',
        description:
            "Hi, I'm Riyan Amanda — Backend-focused Software Engineer specializing in Java (Spring Boot) and Go, with 5+ years building production REST APIs and scalable backend systems.",
        images: [{ url: ogImage, width: 1200, height: 630, alt: 'Riyan Amanda' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Riyan Amanda — Backend Software Engineer',
        description:
            "Hi, I'm Riyan Amanda — Backend-focused Software Engineer specializing in Java (Spring Boot) and Go, with 5+ years building production REST APIs and scalable backend systems.",
        images: [ogImage],
    },
    metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang='en'
            suppressHydrationWarning
            className={cn(
                'scroll-smooth',
                'font-sans',
                notoSans.variable,
                playfairDisplayHeading.variable,
            )}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`,
                    }}
                />
            </head>
            <body
                className={`${notoSansMono.variable} ${viga.variable} antialiased font-ran`}
                suppressHydrationWarning
            >
                <div className='flex flex-col min-h-screen bg-linear-to-br from-white to-purple-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300'>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
