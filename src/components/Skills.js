import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="relative z-10">
                    <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center justify-center">
                            <div className="text-4xl md:text-6xl mr-4">🚀</div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Programming Languages</h3>
                                <p className="text-base md:text-lg">Java, JavaScript, SQL</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center justify-center">
                            <div className="text-4xl md:text-6xl mr-4">⚛️</div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Libraries/Frameworks</h3>
                                <p className="text-base md:text-lg">React, Node.js, Tailwind CSS, Puppeteer</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center justify-center">
                            <div className="text-4xl md:text-6xl mr-4">🌐</div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Languages</h3>
                                <p className="text-base md:text-lg">HTML, CSS</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center justify-center">
                            <div className="text-4xl md:text-6xl mr-4">🛠️</div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Tools</h3>
                                <p className="text-base md:text-lg">GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
