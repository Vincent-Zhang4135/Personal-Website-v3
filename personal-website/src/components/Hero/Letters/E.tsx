import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const E = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="calc(5vw + 20px)" height="calc(7vw + 28px)" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M33 50H2V0"
            />
            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M33 0H2V28H33"
            />
        </motion.svg>
    )
};

export default E;