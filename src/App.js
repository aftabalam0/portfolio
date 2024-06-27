import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="font-sans">
            <Header />
            <Profile />
            <Education />
            <Skills />
            <Projects />
            <Achievements />
            <Footer />
        </div>
    );
}

export default App;
