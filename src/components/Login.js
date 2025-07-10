import React, { useState } from 'react'
import loginImage from '../images/Loginimg.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    });
    const [role, setRole] = useState('client'); // Default to client
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const clearError = (field) => {
        document.getElementById("error-" + field).innerHTML = "";
    };

    const userSignIn = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

        clearError("email");
        clearError("password");

        if (!email) {
            document.getElementById("error-email").innerHTML = "Please enter the Email ID!";
            document.getElementById("email").focus();
            return;
        }

        if (!email.match(mail)) {
            document.getElementById("error-email").innerHTML = "Invalid Email ID!";
            document.getElementById("email").focus();
            return;
        }

        if (!password) {
            document.getElementById("error-password").innerHTML = "Please enter the Password!";
            document.getElementById("password").focus();
            return;
        }

        const errorEl = document.getElementById("userSignInErrorMessage");
        if (!errorEl) return;

        // Dummy static login
        if (email === 'adityarpathak7@gmail.com' && password === '2147') {
            alert('Login successful (static)');
            sessionStorage.setItem('authToken', 'dummy-static-token');
            sessionStorage.setItem('userRole', role);

            // Redirect based on selected role
            if (role === 'client') {
                navigate('/client/dashboard');
            } else {
                navigate('/freelancer/dashboard');
            }
        } else {
            sessionStorage.clear();
            errorEl.innerHTML = "Invalid email or password (static check)";
            setInputValues({ email: '', password: '' });
        }

        // If you want to use API login instead, keep your commented axios block here
    };

    return (
        <>
            <div className='flex justify-center items-center py-20 min-h-screen bg-purple-500'>
                <div className="flex p-8 rounded-lg shadow-lg w-full max-w-4xl bg-white">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={loginImage} alt="Login" className='' />
                    </div>

                    <div className="flex-1 px-8">
                        <h2 className="text-4xl font-bold mb-6">Login In-To Task-Zen</h2>

                        <form id="signInForm" onSubmit={userSignIn} method="post">
                            {/* Role Selection */}
                            <div className="mb-6">
                                <label className="block mb-2 font-medium text-gray-700">Login as:</label>
                                <div className="flex items-center space-x-6">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="client"
                                            checked={role === 'client'}
                                            onChange={() => setRole('client')}
                                            className="form-radio text-purple-600"
                                        />
                                        <span className="ml-2 text-gray-800">Client</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="freelancer"
                                            checked={role === 'freelancer'}
                                            onChange={() => setRole('freelancer')}
                                            className="form-radio text-purple-600"
                                        />
                                        <span className="ml-2 text-gray-800">Freelancer</span>
                                    </label>
                                </div>
                            </div>

                            {/* Email */}
                            <label htmlFor="email">Email:</label>
                            <input
                                onChange={handleInputChange}
                                value={inputValues.email}
                                type="text"
                                name="email"
                                id="email"
                                className="w-96 px-4 py-2 mt-2 mb-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="error-message text-red-500 text-sm" id="error-email"></span>

                            {/* Password */}
                            <div className="mt-4">
                                <label htmlFor="password">Password:</label>
                                <div className="relative">
                                    <input
                                        onChange={handleInputChange}
                                        value={inputValues.password}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="text-black w-96 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="button"
                                        id="toggle-password"
                                        className="absolute right-3 top-3 text-gray-500 focus:outline-none"
                                    >
                                        <i className="fas fa-eye" id="eye-icon"></i>
                                    </button>
                                    <span className="error-message text-red-500 text-sm" id="error-password"></span>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="mt-4">
                                <Link to="#" className="text-md text-black hover:text-purple-600">Forgot Password?</Link>
                            </div>

                            {/* Submit */}
                            <div className="my-6">
                                <button type="submit" className="w-full py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600">
                                    Login
                                </button>
                            </div>

                            <span id="userSignInErrorMessage" className="text-red-500 text-sm"></span>

                            <div className="text-center text-sm mt-4">
                                <p>Don't have an account? <Link to="/Register" className="text-purple-600 hover:underline">Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
