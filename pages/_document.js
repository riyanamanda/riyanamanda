import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin=''
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;1,400&family=Dancing+Script&display=swap'
                    rel='stylesheet'
                />
                <link
                    rel='shortcut icon'
                    href='favicon.ico'
                    type='image/x-icon'
                />
            </Head>

            <body className='bg-gradient-to-r from-[#200122] to-[#6f0000] font-main text-gray-400 antialiased'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
