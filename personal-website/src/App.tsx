import React from 'react';
import './App.css';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import AboutMe from './AboutMe/AboutMe';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';


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
