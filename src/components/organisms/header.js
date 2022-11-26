import { navigations } from '@/data';

const Header = () => {
    const scroll = () => {
        const header = document.getElementById('header');
        let height = window.scrollY;
        if (height > 100) {
            header.classList.add('shadow', 'bg-white/50');
        } else {
            header.classList.remove('shadow', 'bg-white/50');
        }
    };

    if (typeof window !== 'undefined')
        window.addEventListener('scroll', scroll);

    return (
        <header
            id='header'
            className='sticky left-0 top-0 z-50 backdrop-blur transition-all duration-500'
        >
            <div className='container px-[1rem] py-5 flex flex-col md:flex-row justify-center md:justify-between md:items-center'>
                <nav>
                    <ul className='flex items-center justify-center text-xs space-x-4 list-inside list-decimal'>
                        {navigations.map((navigation, index) => (
                            <li
                                key={index}
                                className='group text-purple-500 transition-all duration-300'
                                data-aos='zoom-in'
                                data-aos-delay={index * 100}
                                data-aos-duration='1000'
                            >
                                <a
                                    href={navigation.url}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    className='text-black group-hover:text-purple-500 transition-all duration-300'
                                >
                                    {navigation.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href={'/docs/new-cv.pdf'}
                    target={'_blank'}
                    rel={'noreferrer'}
                    data-aos='zoom-in'
                    data-aos-delay='500'
                    data-aos-duration='1000'
                    className='text-center w-fit self-center'
                >
                    <button className='bg-purple-500 text-white text-xs px-3 py-1.5 mt-8 md:mt-0 rounded shadow-xl shadow-purple-500/10 font-medium hover:bg-purple-100 transition-all duration-300 hover:text-purple-500'>
                        Resume
                    </button>
                </a>
            </div>
        </header>
    );
};

export default Header;
