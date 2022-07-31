import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const Z = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="calc(5vw + 20px)" height="calc(7vw + 28px)" viewBox="0 0 47 63" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M1.5 1.5H45.5L1.5 61H45.5"
            />
        </motion.svg>

    )
};

export default Z;