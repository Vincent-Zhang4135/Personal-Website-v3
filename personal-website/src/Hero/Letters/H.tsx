import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const H = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="calc(5vw + 20px)" height="calc(7vw + 28px)" viewBox="0 0 35 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M2 0V38H32"
            />
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M2 68V37"
            />
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={2} strokeLinejoin="round"
                d="M33 0C33 2.43582 33 46.3483 33 68"
            />
        </motion.svg>
    )
};

export default H;