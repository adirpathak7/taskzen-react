import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header className="w-full" >
                <nav className="bg-white text-purple-500 fixed top-0 z-50 w-full">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="text-purple-500 text-2xl font-bold flex-shrink-0">
                                TaskZen
                            </div>
                            <div className="hidden md:flex space-x-6 flex-1 justify-center">
                                <Link to="/Home"
                                    className="text-purple-500 hover:text-purple-800 px-3 py-2 text-sm font-medium relative group">
                                    Home
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>

                                <Link to="/About"
                                    className="text-purple-500 hover:text-purple-800 px-3 py-2 text-sm font-medium relative group">
                                    About
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>


                                <Link to="/Contact"
                                    className="text-purple-500 hover:text-purple-800 px-3 py-2 text-sm font-medium relative group">
                                    Contact
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>

                                <Link to="/Service"
                                    className="text-purple-500 hover:text-purple-800 px-3 py-2 text-sm font-medium relative group">
                                    Services
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>

                                <Link to="/FAQ"
                                    className="text-purple-500 hover:text-purple-800 px-3 py-2 text-sm font-medium relative group">
                                    FAQ
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>
                            </div>

                            <div className="flex space-x-4">
                                <Link to="/Login" className="items-center bg-gray-100 border-0 py-2 px-5 text-gray-800 hover:text-white hover:bg-purple-600 rounded-md text-base transition duration-300 ease-in-out">Login</Link>
                                <Link to="/Register" className="items-center bg-gray-100 border-0 py-2 px-5 text-gray-800 hover:text-white hover:bg-purple-600 rounded-md text-base transition duration-300 ease-in-out">Sign-up</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
