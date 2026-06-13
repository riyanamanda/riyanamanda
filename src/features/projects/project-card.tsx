import Image from 'next/image';

const MAX_BADGES = 4;

interface ProjectCardProps {
    url: string;
    image: string;
    title: string;
    description: string;
    tech?: string[];
    position?: 'odd' | 'even';
    delay?: number;
    isPrivate?: boolean;
}

const ProjectCard = ({
    url,
    image,
    title,
    description,
    tech = [],
    position = 'odd',
    delay,
    isPrivate = false,
}: ProjectCardProps) => {
    const visibleTech = tech.slice(0, MAX_BADGES);
    const hiddenCount = tech.length - MAX_BADGES;

    return (
        <li className='group flex justify-center w-fit'>
            <a href={url} target='_blank' rel='noreferrer'>
                <div className='relative flex flex-col md:flex-row items-center'>
                    <div
                        className={`${
                            position === 'odd' ? 'md:order-1' : 'md:order-2'
                        } relative w-[350px] h-48 md:w-[600px] md:h-[300px] rounded-md shadow overflow-hidden`}
                        data-aos={position === 'odd' ? 'fade-right' : 'fade-left'}
                        data-aos-delay={delay}
                        data-aos-duration='1000'
                    >
                        <div className='bg-gradient-to-br from-white to-[#9733EE] opacity-30 group-hover:opacity-0 h-full w-full absolute z-10 transition-all duration-300' />
                        {isPrivate && (
                            <div className='absolute top-2 right-2 z-20 bg-gray-900/75 backdrop-blur-sm text-white text-[9px] font-medium px-2 py-0.5 rounded-full tracking-wide'>
                                Private / Internal
                            </div>
                        )}
                        <Image
                            src={image}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            priority
                        />
                    </div>

                    <div
                        className={`${
                            position === 'odd'
                                ? 'md:order-2 md:-ml-32 md:text-right md:items-end'
                                : 'md:order-1 md:-mr-32 md:text-left md:items-start'
                        } text-center justify-end flex flex-col items-center h-fit z-10 ml-0 -mt-20 md:mt-0 w-fit md:w-96 md:bg-transparent md:px-0 px-3 border border-purple-500/10 md:border-0 pb-3 mb:pb-0 rounded-lg md:rounded-0`}
                        data-aos={position === 'odd' ? 'fade-left' : 'fade-right'}
                        data-aos-delay={delay}
                        data-aos-duration='1000'
                    >
                        <h3 className='w-64 text-base mt-1 md:mt-0 md:text-2xl text-purple-900 dark:text-purple-100 rounded px-3 md:px-0 bg-purple-50 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent font-semibold'>
                            {title}
                        </h3>

                        <p className='mt-2 md:mt-5 p-1 md:p-4 bg-purple-50 dark:bg-gray-900 border leading-relaxed border-purple-500/10 rounded text-[8px] md:text-xs text-purple-900 dark:text-gray-300 shadow-lg group-hover:shadow-none transition-all duration-300 ease-in-out w-72 md:w-full'>
                            {description}
                        </p>

                        <ul className='flex flex-wrap text-[8px] text-purple-900 items-center gap-2 justify-end mt-5 md:text-xs'>
                            {visibleTech.map((value, index) => (
                                <li
                                    key={index}
                                    className='font-medium bg-purple-200 dark:bg-purple-900/50 dark:text-purple-200 shadow-xl shadow-purple-500/20 group-hover:shadow-none px-2 py-1 rounded tracking-wide transition-all duration-300 ease-in-out'
                                >
                                    {value}
                                </li>
                            ))}
                            {hiddenCount > 0 && (
                                <li className='font-medium bg-purple-100 dark:bg-gray-800 text-purple-500 dark:text-purple-400 px-2 py-1 rounded tracking-wide'>
                                    +{hiddenCount} more
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default ProjectCard;
