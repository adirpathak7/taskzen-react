import React from 'react'
import homesecond from "../images/homesecond.png"
import programmingImage from "../images/programing.avif";
import salesMarketingImage from "../images/salesmarkting.webp";
import videoAnimationImage from "../images/videoanimation.png";
import aiServiceImage from "../images/aiservice.jpg";
import architectureImage from "../images/architecture.jpg";
import brandImage from "../images/brand.jpg";
import workImage from "../images/work.png";

export default function Home() {
    return (
        <>
            <div className="bg-purple-700 text-white">
                <div
                    className="container mx-auto flex flex-col md:flex-row items-center p-8 md:py-16"
                >
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Find Your Perfect <span className="text-sky-300">Freelancer </span>
                            <span className="text-sky-300">Companys</span> Quick and Easy
                        </h1>
                        <p className="text-lg">
                            Explore thousands of skilled professionals to bring your ideas to
                            life.
                        </p>

                        <div className="flex items-center space-x-4 mt-4">
                            <div className="flex -space-x-2">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            </div>
                            <div>
                                <p className="font-semibold">2465+ Happy Customers</p>
                                <p className="text-sm">4.9 ★★★★★</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[70%] w-[50%] mt-8 md:mt-0 ml-20 animate-pulse">
                        <img
                            src={homesecond}
                            alt="Freelancer Illustration"
                            className="w-full h-2xl"
                        />
                    </div>
                </div>
            </div>


            <div className="bg-white py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Featured Categories
                    </h2>
                    <p className="text-center text-gray-600 mt-2">
                        Get some inspirations from 86K+ skills
                    </p>
                    <div className="relative">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        >
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img
                                    src={programmingImage}
                                    alt="Programming"
                                    className="mx-auto"
                                />
                                <h3 className="font-semibold text-lg">Programming</h3>
                                <p className="text-gray-500">2 Skills</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img
                                    src={salesMarketingImage}
                                    alt="Sales Marketing"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-lg">Sales Marketing</h3>
                                <p className="text-gray-500">3 Skills</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img
                                    src={videoAnimationImage}
                                    alt="Video Animation"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-lg">Video Animation</h3>
                                <p className="text-gray-500">5 Skills</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img
                                    src={aiServiceImage}
                                    alt="AI Service"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-lg">AI Service</h3>
                                <p className="text-gray-500">3 Skills</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img
                                    src={architectureImage}
                                    alt="Architecture"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-lg">Architecture</h3>
                                <p className="text-gray-500">2 Skills</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img
                                    src={brandImage}
                                    alt="Brand Design"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-lg">Brand Design</h3>
                                <p className="text-gray-500">3 Skills</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="bg-purple-700 text-white py-16 px-8 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h4 className="text-lg font-semibold uppercase">Explore New Life</h4>
                        <h1 className="text-4xl font-bold mt-2">
                            Don’t just find. Be found <br /> put your CV in front of great employers
                        </h1>
                        <p className="text-gray-300 mt-4">
                            There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised words.
                        </p>
                        <a href="#" className="inline-block bg-white text-purple-500 px-6 py-3 mt-6 rounded-lg font-semibold hover:bg-gray-100">
                            Task Post Now →
                        </a>
                        <div className="flex justify-start gap-8 mt-10">
                            <div>
                                <p className="text-3xl font-bold">950M+</p>
                                <p className="text-gray-300">Total Freelancers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">32M+</p>
                                <p className="text-gray-300">Total Freelancers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">120M+</p>
                                <p className="text-gray-300">Total Freelancers</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={workImage} alt="Team working" />
                    </div>
                </div>
            </div>
        </>
    )
}
