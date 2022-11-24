import Image from 'next/image';
import React from 'react';

const FeatureCard = ({
    url,
    image,
    title,
    description,
    tech = [],
    position = 'odd',
}) => {
    return (
        <li className='group flex justify-center w-fit'>
            <a href={url} target={'_blank'} rel={'noreferrer'}>
                <div className='relative flex flex-col md:flex-row items-center'>
                    <div
                        className={`${
                            position === 'odd' ? 'md:order-1' : 'md:order-2'
                        } relative w-[350px] h-48 md:w-[600px] md:h-[300px] rounded-md shadow overflow-hidden`}
                        data-aos={
                            position === 'odd' ? 'fade-right' : 'fade-left'
                        }
                        data-aos-delay='500'
                        data-aos-duration='1000'
                    >
                        <div className='bg-gradient-to-br from-[#DA22FF] to-[#9733EE] opacity-30 group-hover:opacity-0 h-full w-full absolute z-10 transition-all duration-300' />
                        <Image
                            src={image}
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            priority
                        />
                    </div>

                    <div
                        className={`${
                            position === 'odd'
                                ? 'md:order-2 md:-ml-32 md:text-right md:items-end'
                                : 'md:order-1 md:-mr-32 md:text-left md:items-start'
                        } text-center justify-end flex flex-col items-center h-fit z-10 ml-0 -mt-20 md:mt-0 w-fit md:w-96 md:bg-transparent md:px-0 px-3 border border-purple-500/10 md:border-0 pb-3 mb:pb-0 rounded-lg md:rounded-0`}
                        data-aos={
                            position === 'odd' ? 'fade-left' : 'fade-right'
                        }
                        data-aos-delay='500'
                        data-aos-duration='1000'
                    >
                        <h3 className='w-64 text-base mt-1 md:mt-0 md:text-2xl text-purple-900 rounded px-3 md:px-0 bg-purple-50 md:bg-transparent font-semibold'>
                            {title}
                        </h3>

                        <p className='mt-2 md:mt-5 p-1 md:p-4 bg-purple-50 border leading-relaxed border-purple-500/10 rounded text-[8px] md:text-xs text-purple-900 shadow-lg group-hover:shadow-none transition-all duration-300 ease-in-out w-72 md:w-full'>
                            {description}
                        </p>

                        <ul className='flex text-[8px] text-purple-900 items-center space-x-5 justify-end mt-5 md:text-xs'>
                            {tech.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default FeatureCard;
