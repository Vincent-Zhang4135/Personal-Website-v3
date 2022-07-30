import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const A = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="100" height="140" viewBox="0 0 45 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={4} strokeLinejoin="round"
                d="M2 66L22 2L43 66"
            />
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M11.5 38.5H34"
            />
        </motion.svg>
    )
};

export default A;