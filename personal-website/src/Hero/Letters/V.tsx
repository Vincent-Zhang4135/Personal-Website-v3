import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const V = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="calc(5vw + 20px)" height="calc(7vw + 28px)" viewBox="0 0 46 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2}
                strokeLinejoin="round"
                d="M2 1L22.6571 69L44 1" />
        </motion.svg>
    )
};

export default V;