import React, { useState } from 'react'
import loginImage from '../images/Loginimg.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default function Login() {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handelInputChange = (event) => {
        const { name, value } = event.target
        setInputValues((preValue) => ({
            ...preValue,
            [name]: value
        }))
    }

    const clearError = (field) => {
        document.getElementById("error-" + field).innerHTML = ""
    }

    const userSignIn = (event) => {
        event.preventDefault()
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

        clearError("email");
        clearError("password");

        if (!email) {
            document.getElementById("error-email").innerHTML = "Please enter the Email ID!";
            document.getElementById("email").focus();
            return false;
        }

        if (!email.match(mail)) {
            document.getElementById("error-email").innerHTML = "Invalid Email ID!";
            document.getElementById("email").focus();
            return false;
        }

        if (!password) {
            document.getElementById("error-password").innerHTML = "Please enter the Password!";
            document.getElementById("password").focus();
            return false;
        }

        const userSignInErrorMessage = document.getElementById('userSignInErrorMessage');
        if (!userSignInErrorMessage) {
            console.error("User Sign-In div not found!");
            return;
        }

        const formData = new FormData()
        formData.append('email', inputValues.email)
        formData.append('password', inputValues.password)
        axios.post('http://localhost:8000/api/loginUser', formData)
            .then((response) => {
                if (response.data.data === '1') {
                    alert('Login successfully.');
                    sessionStorage.setItem('authToken', response.data.token);
                    sessionStorage.setItem('userRole', response.data.role);
                    navigate('/');
                } else {
                    sessionStorage.clear();
                    userSignInErrorMessage.innerHTML = "Invalid Password";
                    setInputValues({ email: '', password: '' });
                    console.log(response);
                }
            })
            .catch((error) => {
                console.error("Error occurred while user login! " + error);
                userSignInErrorMessage.innerHTML = "Server did not respond! Please try again.";
                setInputValues({ email: '', password: '' });
            });

    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex bg-purple-600 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={loginImage} alt="Login Image" />
                    </div>

                    <div className="flex-1 text-white px-8">
                        <h2 className="text-4xl font-bold mb-6">Login In-To Task-Zen</h2>

                        <form id="signInForm" onSubmit={userSignIn} method="post">

                            <label forName="email" name="email" className='text-2xl'>Email :</label>
                            <input onChange={handelInputChange} value={inputValues.email} type="text" name="email" id="email" className="w-96 px-4 py-2 mt-2 mb-6 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <span className="error-message" id="error-email"></span>


                            <div className="mt-4">
                                <label forName="password" name="password" className='text-2xl'>Password :</label>

                                <div className="relative">
                                    <input onChange={handelInputChange} value={inputValues.password} type="password" name="password" id="password" className="text-black w-96 px-4 py-2 mt-2 mb-6 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <button type="button" id="toggle-password" className="absolute right-3 top-3 text-gray-500 focus:outline-none">
                                        <i className="fas fa-eye text-2xl" id="eye-icon"></i>
                                    </button>
                                    <span className="error-message" id="error-password"></span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <Link to="#" className="text-md text-white hover:text-gray-100">Forgot Password?</Link>
                            </div>

                            <br /> <br />

                            <div className="mb-2">
                                <button type="submit" className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    viewBox="0 0 24 24">
                                    Login
                                </button>
                            </div>
                            <span id="userSignInErrorMessage" className="text-white"></span>

                            <div className="text-center text-sm mt-2">
                                <p>Don't have an account? <Link to="/Register" className="text-gray-50 hover:underline hover:text-white">Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
