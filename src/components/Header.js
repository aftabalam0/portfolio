import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <h1 className="text-3xl font-bold">Aftab Alam</h1>
                <button onClick={toggleMenu} className="block md:hidden text-white focus:outline-none">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
                <nav className={`${isOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex md:items-center`}>
                    <a href="#profile" className="block md:inline-block mt-2 md:mt-0 md:mr-4 hover:text-gray-300">Profile</a>
                    <a href="#education" className="block md:inline-block mt-2 md:mt-0 md:mr-4 hover:text-gray-300">Education</a>
                    <a href="#skills" className="block md:inline-block mt-2 md:mt-0 md:mr-4 hover:text-gray-300">Skills</a>
                    <a href="#projects" className="block md:inline-block mt-2 md:mt-0 md:mr-4 hover:text-gray-300">Projects</a>
                    <a href="#achievements" className="block md:inline-block mt-2 md:mt-0 md:mr-4 hover:text-gray-300">Achievements</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
