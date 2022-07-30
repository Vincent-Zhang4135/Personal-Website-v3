import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const V = (): JSX.Element => {
    return (
        <>
            <motion.svg initial="hidden" animate="visible" width="100" height="140" viewBox="0 0 46 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path  fill="transparent"
                    strokeWidth="4"
                    stroke="white"
                    strokeLinecap="round"
                    variants={draw}
                    custom={1} d="M2 1L22.6571 69L44 1" strokeLinejoin="round" />
            </motion.svg>

        </>
    )
};

export default V;