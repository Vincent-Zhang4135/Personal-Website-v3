import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const G = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="calc(5vw + 20px)" height="calc(7vw + 28px)" viewBox="0 0 46 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
            fill="transparent"
            strokeWidth="4"
            stroke="white"
            strokeLinecap="round"
            variants={draw}
            custom={1} strokeLinejoin="round"
            d="M44.5001 14.5C42.3334 10.3333 35.4001 2 25.0001 2C12.0001 2 6.50007 8.5 3.50006 16.5C0.687547 24 1.81022 33.9465 2.50006 40.5C3.50006 50 14.4749 56.5 23.0001 56.5C32.0001 56.5 33 55.5 43.5 46L44.5001 34.5H27.5" 
            />
        </motion.svg>
    )
};

export default G;