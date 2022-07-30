import React from 'react';
import { motion } from 'framer-motion';
import draw from './draw'

const T = (): JSX.Element => {
    return (
        <motion.svg initial="hidden" animate="visible" width="100" height="140" viewBox="0 0 40 54"xmlns="http://www.w3.org/2000/svg">
            <motion.path
                fill="transparent"
                strokeWidth="4"
                stroke="white"
                strokeLinecap="round"
                variants={draw}
                custom={5} strokeLinejoin="round"
                d="M0 2H20M40 2H20M20 2V54"
            />
        </motion.svg>
    )
};

export default T;