const SectionHeading = ({ title }: { title: string }) => (
    <div className='flex flex-col items-center mb-10'>
        <h2
            className='font-semibold text-xs md:text-sm tracking-widest uppercase text-purple-500 dark:text-purple-400'
            data-aos='fade-in'
            data-aos-duration='800'
        >
            {title}
        </h2>
        <div
            className='mt-2 w-8 h-0.5 bg-gradient-to-r from-[#7928CA] to-[#FF0080] rounded'
            data-aos='fade-in'
            data-aos-delay='100'
            data-aos-duration='800'
        />
    </div>
);

export default SectionHeading;
