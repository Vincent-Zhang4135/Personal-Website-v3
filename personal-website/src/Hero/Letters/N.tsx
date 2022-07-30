import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const N = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="100" height="140" viewBox="0 0 34 60" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M2 58.5V2L32.5 58.5V2" />
        </motion.svg>
    )
};

export default N;