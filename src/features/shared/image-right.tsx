"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageRightProps {
    src: string;
    alt: string;
    className: string;
    delay: number;
    url: string;
}

const ImageRight = ({ src, alt, className, delay, url }: ImageRightProps) => {
    const motionDelay = delay > 2 ? delay / 1000 : delay;

    return (
        <a href={url} target='_blank' rel='noreferrer'>
            <motion.div
                className={`${className} relative`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: motionDelay, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
            </motion.div>
        </a>
    );
};

export default ImageRight;
