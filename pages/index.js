import Head from 'next/head';

export default function index() {
    return (
        <>
            <Head>
                <title>Riyan Amanda Nasution</title>
                <meta
                    name='description'
                    content='This website will describe a bit about me. nothing special, just tired to make boring stuff.'
                />
                <meta
                    name='keywords'
                    content='riyan amanda, boring stuff, lingkaran id, palembang'
                />
            </Head>

            <main className='flex h-screen flex-col items-center justify-center space-y-10 p-10 text-sm'>
                <div className='rounded-lg border border-gray-50/20 p-5 shadow-xl shadow-black/20 md:p-16'>
                    <p className='mb-10 text-sm'>Hi there, my name is ...</p>

                    <h1 className='mb-10 font-title text-5xl font-semibold tracking-wider text-white'>
                        Riyan Amanda Nasution
                    </h1>

                    <p className='leading-relaxed'>
                        I am Full-Stack Web Developer. Base in Palembang,
                        Indonesia.
                    </p>

                    <p className='mb-10 leading-relaxed'>
                        I use laravel framework and sometimes Next Js.
                    </p>

                    <div className='mb-2'>Featured project:</div>
                    <ul className='mb-10'>
                        <li>
                            <a
                                href='https://lingkaran.id'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white'
                            >
                                Lingkaran ID
                            </a>
                        </li>
                    </ul>

                    <div className='mb-2'>Let&apos;s be friend:</div>
                    <ul className='flex space-x-3'>
                        <li>
                            <a
                                href='https://www.facebook.com/riyan.amanda.n'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white'
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://twitter.com/amanda_riyan'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white'
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/RiyanAmanda'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white'
                            >
                                Github
                            </a>
                        </li>
                    </ul>

                    <p className='mt-20 flex w-full justify-center'>
                        Thanks for your visit.
                    </p>
                </div>
            </main>
        </>
    );
}
