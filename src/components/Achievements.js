import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements" className="bg-gray-900 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="relative z-10">
                    <h2 className="text-5xl font-bold mb-12 text-center">Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-md flex items-center justify-center">
                            <div className="text-4xl md:text-6xl text-yellow-500 mr-4">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Coding Profiles Highest Rating</h3>
                                <ul className="text-base md:text-lg">
                                    <li><a href="https://leetcode.com/aftabalam1056/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LeetCode </a>- 1719</li>
                                    <li><a href="https://www.codingninjas.com/studio/profile/aftab01" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Coding Ninjas </a>- 2223</li>
                                    <li><a href="https://www.codechef.com/users/aftab_121" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">CodeChef</a>- 1682</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-md flex items-center justify-center">
                            <div className="text-4xl md:text-6xl text-yellow-500 mr-4">
                                <i className="fas fa-award"></i>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Achievements</h3>
                                <ul className="text-base md:text-lg">
                                    <li>- Ranked 178 out of 51,000 participants in the Coding Ninjas World Cup Coding Competition.</li>
                                    <li>- Ranked 196 out of 3,686 in Coding Ninjas Weekend Contest 102.</li>
                                    <li>- Ranked 1 in CodeChef Division 4 Coding Contest.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
