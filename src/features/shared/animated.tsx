'use client';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

const ease = [0.25, 0.1, 0.25, 1] as const;

interface AnimProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.6, className }: AnimProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay, duration, ease }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeUp({ children, delay = 0, duration = 0.6, className }: AnimProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay, duration, ease }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeRight({ children, delay = 0, duration = 0.7, className }: AnimProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay, duration, ease }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeLeft({ children, delay = 0, duration = 0.7, className }: AnimProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay, duration, ease }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ZoomIn({ children, delay = 0, duration = 0.5, className }: AnimProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay, duration, ease }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
