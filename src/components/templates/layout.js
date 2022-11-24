import Head from 'next/head';
import React from 'react';
import { Footer, Header } from '../organisms';

const Layout = ({ title = 'Riyan Amanda Nasution', children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name='description'
                    content="Hello world, i'm riyan amanda nasution. my passion is in web development, i use laravel, bootstrap, tailwind and nextjs."
                />
                <meta
                    name='keywords'
                    content='riyan amanda, nasution, portfolio, programming, web development'
                />
            </Head>

            {/* Header of app */}
            <div className='flex flex-col justify-between bg-gradient-to-br from-white to-purple-50'>
                <Header />

                {/* Content of app */}
                <main>{children}</main>

                {/* Footer of app */}
                <Footer />
            </div>
        </>
    );
};

export default Layout;
