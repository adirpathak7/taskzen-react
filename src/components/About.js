import React from 'react';
import aboutimg from '../images/aboutimg.png';
import missionImg from '../images/mission.png';
import visionImg from '../images/vision.jpg';
import adiImg from '../images/adi.jpg';
import foundersImg from '../images/fountersimg.jpg';
import somnathImg from '../images/somnath.jpg';

export default function About() {
    return (
        <>
            <div className="bg-purple-700 text-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center p-8 md:py-16">
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Welcome to TaskZen!
                        </h1>
                        <p className="text-lg">
                            At TaskZen, we bridge the gap between skilled freelancers and businesses, providing a seamless platform to connect, collaborate, and create. As a cutting-edge IT solution, TaskZen empowers professionals to showcase their expertise while enabling businesses to find the perfect talent for their projects.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img
                            src={aboutimg}
                            alt="Freelancer Illustration"
                            className="p-6"
                        />
                    </div>
                </div>
            </div>

            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">About TaskZen</h1>

                    <section className="flex flex-col md:flex-row items-center p-8 bg-white rounded-lg shadow-lg mb-12">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                At TaskZen, our mission is to empower businesses and freelancers by providing an intuitive, efficient, and secure platform that fosters seamless collaboration and project success.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={missionImg} alt="TaskZen Mission" className="w-full h-auto rounded-lg shadow-md" />
                            <hr className="border-t-2 border-gray-300 mt-4" />
                        </div>
                    </section>

                    <section className="flex flex-col md:flex-row items-center p-8 bg-white rounded-lg shadow-lg">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                Our vision is to redefine the future of work by making TaskZen the go-to platform for freelancers and businesses around the world. We envision a global community where professionals from diverse backgrounds connect, collaborate, and grow together through the power of technology.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={visionImg} alt="TaskZen Vision" className="w-full h-auto rounded-lg shadow-md" />
                            <hr className="border-t-2 border-gray-300 mt-4" />
                        </div>
                    </section>
                </div>
            </section>

            <section className="py-12 px-6 bg-purple-700">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-semibold text-center text-white mb-12">Expertise and Specialization</h1>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-green-600 mb-6">Areas of Expertise</h2>
                            <ul className="space-y-4 text-lg text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    Cloud Computing
                                </li>
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    Mobile App Development
                                </li>
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    Artificial Intelligence (AI) and Machine Learning (ML)
                                </li>
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    Blockchain Technology
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-blue-600 mb-6">Industries We Serve</h2>
                            <ul className="space-y-4 text-lg text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    Healthcare
                                </li>
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    Finance
                                </li>
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    E-commerce
                                </li>
                                <li className="flex items-center">
                                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                                    Education
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">Meet Our Adminers</h1>

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                            <img src={adiImg} alt="Founder" className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-200" />
                            <h3 className="text-2xl font-semibold text-gray-800">Aaditya Pathak</h3>
                            <p className="text-gray-600 mb-4">TaskZen Admin</p>
                            <p className="text-gray-600">
                                Aaditya is a visionary leader with over 15 years of experience in the IT industry.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                            <img src={foundersImg} alt="CTO" className="w-80 h-72 mx-auto rounded-full border-4 border-gray-200" />
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                            <img src={somnathImg} alt="Lead Developer" className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-200" />
                            <h3 className="text-2xl font-semibold text-gray-800">Somnath Gouda</h3>
                            <p className="text-gray-600 mb-4">TaskZen Admin</p>
                            <p className="text-gray-600">
                                Somnath is an expert in full-stack development with a passion for creating intuitive user experiences.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}
