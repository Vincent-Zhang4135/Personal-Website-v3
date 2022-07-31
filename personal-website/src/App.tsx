import React from 'react';
import './App.css';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ScrollProgressBar/>
                <Navbar/>
                <Hero/>
                <AboutMe/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Footer/>
            </header>
        </div>
    );
}

export default App;
