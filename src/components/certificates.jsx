import React from 'react'
import Aspn from '../assets/certificate/ASP.jpg'
import Aws from '../assets/certificate/Aws.jpg'
import CtieExpo from '../assets/certificate/CITEXPO.jpg'
import ReactCer from '../assets/certificate/React.jpg'

export const achievement = [
    {
        id: 1,
        name: 'Tank Destroyer',
        description: 'That certificate was given us as the second best game developers',
        image: CtieExpo
    },
    {
        id: 2,
        name: 'React js',
        description: 'I attended a boot camp for React js, where I learned the fundamentals of building modern web applications. During the training, I gained hands-on experience with components and state management hooks.',
        image: ReactCer
    },
    {
        id: 3,
        name: 'ASP.NET and MySQL',
        description: 'Earned a Certificate of Completion in ASP.NET and MySQL, demonstrating foundational skills in web development and database management.',
        image: Aspn
    },
    {
        id: 4,
        name: 'AWS',
        description: 'Successfully completed AWS introductory training focused on cloud computing and essential AWS services.',
        image: Aws
    }
]

function Certificates() {
    return (
        <div className="bg-white text-black min-h-screen px-6 py-15 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">Certificates</h2>
                <p className="text-gray-500 mb-10">A collection of my certifications and achievements</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {achievement.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5">
                                <p className="text-xl text-blue-600 font-semibold mb-2">{item.name}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certificates