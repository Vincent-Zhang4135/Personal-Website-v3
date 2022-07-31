import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import './Navbar.css'

const Navbar = (): JSX.Element => {
    return (
        <div className="navbar">
            {/* Logo */}
            <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L14.5 32.5L28.5 1.5H46L24.5 32.5H46" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Routers */}
            <div className="navbar-container">
                <BrowserRouter>
                    <HashLink to='#aboutme' smooth  >
                        {"<about/>"}
                    </HashLink>
                    <HashLink to='#skills' smooth  >
                        {"<skills/>"}
                    </HashLink>
                    <HashLink to='#experience' smooth  >
                        {"<experience/>"}
                    </HashLink>
                    <HashLink to='#projects' smooth  >
                        {"<projects/>"}
                    </HashLink>
                    <HashLink to='#projects' smooth  >
                        {"<resume/>"}
                    </HashLink>
                    <HashLink to='#footer' smooth  >
                        {"<contact/>"}
                    </HashLink>


                </BrowserRouter>
            </div>

            {/* Out Links */}
            <div className="navbar-container">
                Testing
            </div>

        </div>
    )
}

export default Navbar;