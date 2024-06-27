import React from 'react';

const Education = () => {
    return (
        <section id="education" className="relative bg-gray-900 text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative z-10">
                    <h2 className="text-5xl font-bold mb-12 text-center">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-px w-8 bg-white mr-4"></div>
                                <div>
                                    <h3 className="text-3xl font-semibold">Dr Shakuntala Misra National Rehabilitation University</h3>
                                    <p className="text-lg">Btech - CSE | CGPA: 8.2 | 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-px w-8 bg-white mr-4"></div>
                                <div>
                                    <h3 className="text-3xl font-semibold">Ralli International School</h3>
                                    <p className="text-lg">Intermediate | Percentage: 82.2% | 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-25"></div>
        </section>
    );
}

export default Education;
