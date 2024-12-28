import React from 'react'
import { Link } from 'react-router-dom'
import signUpImage from '../images/Signupimg.png'

export default function Register() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-purple-500">
                <div className="flex bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={signUpImage} alt="Register Image" />
                    </div>
                    <div className="flex-1 px-8">
                        <h2 className="text-4xl font-bold mb-6">Sign-up To Task-Zen</h2>
                        <form id="signUpForm" onsubmit="userSingUp(event)" method="post">

                            <div className="flex space-x-2 mb-4">
                                <div className="w-1/2">
                                    <label forName="first_name">First Name </label>
                                    <input type="text" id="first_name" name="first_name"
                                        className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-first_name"></span>
                                </div>
                                <div className="w-1/2">
                                    <label forName="last_name">Last Name</label>
                                    <input type="text" id="last_name" name="last_name"
                                        className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-last_name"></span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label forName="email">Email</label>
                                <input type="text" id="email" name="email"
                                    className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <span className="error-message" id="error-email"></span>
                            </div>

                            <div className="flex space-x-2 mb-4">
                                <div className="w-1/2">
                                    <label forName="password">Password</label>
                                    <input type="password" id="password" name="password"
                                        className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-password"></span>
                                </div>
                                <div className="w-1/2">
                                    <label forName="confirm_password">Confirm Password</label>
                                    <input type="password" id="confirm_password" name="confirm_password"
                                        className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-confirm_password"></span>

                                </div>
                            </div>

                            <div className="mb-4">
                                <label forName="join" name="join">Join as</label>
                                <div className="flex items-center space-x-3 mt-2">
                                    <input type="radio" id="freelancer" name="role" value="freelancer"
                                        className="text-2xl cursor-pointer" />
                                    <label htmlFor="freelancer" className='cursor-pointer'>Freelancer</label>
                                    &nbsp;
                                    <input type="radio" id="client" name="role" value="client" className="text-2xl cursor-pointer" />
                                    <label htmlFor="client" className='cursor-pointer'> Client</label>
                                </div>
                                <span className="error-message" id="error-role"></span>

                            </div>

                            <div className="mb-4">
                                <button type="submit"
                                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign-Up</button>
                            </div>

                            <div className="text-center text-sm">
                                <p>Already have an account?
                                    <Link to="/Login" className="text-black hover:text-purple-500">
                                        Login
                                    </Link>
                                </p>
                            </div>
                            <div id="userSignUpErrorMessage"></div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
