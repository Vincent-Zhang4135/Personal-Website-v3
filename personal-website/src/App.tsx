import React from 'react';
import './App.css';
import AboutMe from './AboutMe/AboutMe';
import Navbar from './Navbar/Navbar';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
                <AboutMe/>
            </header>
        </div>
    );
}

export default App;
