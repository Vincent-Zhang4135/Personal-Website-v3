import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const C = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible"width="calc(8vw + 20px)" height="calc(7vw + 28px)" viewBox="0 0 46 59" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={1} strokeLinejoin="round"
                d="M44.5 14.5C42.3333 10.3333 35.4 2 25 2C12 2 6.50001 8.5 3.5 16.5C0.687486 24 1.81016 33.9465 2.5 40.5C3.5 50 14.4749 56.5 23 56.5C32 56.5 34 57 44.5 47.5"
            />
        </motion.svg>
    )
};

export default C;