import React from 'react';
import './App.css';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import AboutMe from './components/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ScrollProgressBar/>
                <Navbar/>
                <Hero/>
                <AboutMe/>
            </header>
        </div>
    );
}

export default App;
