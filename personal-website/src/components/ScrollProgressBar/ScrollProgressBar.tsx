import React from 'react';
import { motion , useScroll } from 'framer-motion';
import './ScrollProgressBar.css'

const ScrollProgressBar = (): JSX.Element => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div className = "progress-bar" style={{scaleX : scrollYProgress}}/>
    )
}

export default ScrollProgressBar;