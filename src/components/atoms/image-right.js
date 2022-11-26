const { default: Image } = require('next/image');

const ImageRight = ({ src, alt, className, delay, url }) => {
    return (
        <a href={url} target='_blank' rel='noreferrer'>
            <div
                className={`${className} relative`}
                data-aos='fade-in'
                data-aos-delay={delay}
                data-aos-duration='1000'
            >
                <Image src={src} alt={alt} layout='fill' />
            </div>
        </a>
    );
};

export default ImageRight;
