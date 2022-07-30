import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const I = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="100" height="140" viewBox="0 0 4 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={4} strokeLinejoin="round"
                d="M2 0V64" />
        </motion.svg>
    )
};

export default I;