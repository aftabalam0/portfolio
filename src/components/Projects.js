import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className=" bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="relative z-10">
                    <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-2">GitHub Issues Scrapper</h3>
                            <p className="text-base mb-4">Project to scrape GitHub issues. Extracts and organizes the scraped data into a JSON file.</p>
                            <div className="flex items-center mb-2">
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Node.js</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Puppeteer</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">JavaScript</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-github text-gray-500 mr-2"></i>
                                <a href="https://github.com/aftabalam0/Github-Issues-Scrapper" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
                            </div>
                        </div>
                        <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-2">IP Tracker</h3>
                            <p className="text-base mb-4">Developed a real-time IP address tracker using React. Utilized the Geo IPify API to fetch location data based on IP addresses.</p>
                            <div className="flex items-center mb-2">
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tailwind CSS</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-github text-gray-500 mr-2"></i>
                                <a href="https://github.com/aftabalam0/iptracker" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
                            </div>
                        </div>
                        <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Memory Game</h3>
                            <p className="text-base mb-4">The game consists of a grid of cards with different images on the front. The objective of the game is to find all the matching pairs of cards by flipping them over.</p>
                            <div className="flex items-center mb-2">
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">JavaScript</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">HTML</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">CSS</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-github text-gray-500 mr-2"></i>
                                <a href="https://github.com/aftabalam0/memoryGame" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
