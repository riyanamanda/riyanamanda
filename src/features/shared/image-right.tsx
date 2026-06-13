import Image from 'next/image';

interface ImageRightProps {
    src: string;
    alt: string;
    className: string;
    delay: number;
    url: string;
}

const ImageRight = ({ src, alt, className, delay, url }: ImageRightProps) => {
    return (
        <a href={url} target='_blank' rel='noreferrer'>
            <div
                className={`${className} relative`}
                data-aos='fade-in'
                data-aos-delay={delay}
                data-aos-duration='1000'
            >
                <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
            </div>
        </a>
    );
};

export default ImageRight;
