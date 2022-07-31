import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Hashlink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import './Navbar.css'

const Navbar = (): JSX.Element => {
    return (
        <>
            <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L14.5 32.5L28.5 1.5H46L24.5 32.5H46" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}

export default Navbar;