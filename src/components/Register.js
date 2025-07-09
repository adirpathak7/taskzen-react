import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUpImage from '../images/Signupimg.png'
import axios from 'axios'

export default function Register() {

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: '',
    })


    const handelInputChange = (e) => {
        const { name, value } = e.target
        setInputValues((preValues) => ({
            ...preValues,
            [name]: value
        }))
    }

    const clearError = (field) => {
        document.getElementById("error-" + field).innerHTML = ""
    }

    const userSingUp = (e) => {
        e.preventDefault()
        var first_name = document.getElementById("first_name").value;
        var last_name = document.getElementById("last_name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm_password").value;
        var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        var strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        clearError("first_name");
        clearError("last_name");
        clearError("email");
        clearError("password");
        clearError("confirm_password");
        clearError("role");

        if (!first_name) {
            document.getElementById("error-first_name").innerHTML = "Please enter the First Name!";
            document.getElementById("first_name").focus();
            return false;
        }

        if (!last_name) {
            document.getElementById("error-last_name").innerHTML = "Please enter the Last Name!";
            document.getElementById("last_name").focus();
            return false;
        }

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

        if (!strongPassword.test(password)) {
            document.getElementById("error-password").innerHTML = "Weak Password! Please include:<br>At least 8 characters,<br>1 uppercase letter,<br>1 lowercase letter,<br>1 number,<br>and 1 special character.";
            document.getElementById("password").focus();
            return false;
        }

        if (!confirm_password) {
            document.getElementById("error-confirm_password").innerHTML = "Please enter the Confirm Password!";
            document.getElementById("confirm_password").focus();
            return false;
        }

        if (confirm_password !== password) {
            document.getElementById("error-confirm_password").innerHTML = "Password and Confirm password does not match!";
            document.getElementById("confirm_password").focus();
            return false;
        }

        var roleSelected = document.querySelector('input[name="role"]:checked');
        if (!roleSelected) {
            document.getElementById("error-role").innerHTML = "Please select the Role!";
            document.getElementById("client").focus();
            return false;
        }

        const userSignUpErrorMessage = document.getElementById('userSignUpErrorMessage');
        if (!userSignUpErrorMessage) {
            console.error("User Sign-Up message div not found!");
            return;
        }

        const signUpForm = document.getElementById('signUpForm');
        const signUpFormData = new FormData(signUpForm);

        axios.post('http://localhost:8000/api/signUpUser', signUpFormData).then((response) => {
            if (response.data.data === '1') {
                alert("User registered successfully.");
                setInputValues({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                    role: '',
                })
                navigate('/Login')
            }
        }).catch((error) => {
            console.log("Error occurred while user register! " + error)
            userSignUpErrorMessage.innerHTML = 'Server did not respond! Please try again.'
            setInputValues({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: '',
                role: '',
            })
        })

    }

    return (
        <>
            <div className="flex justify-center py-20 items-center min-h-screen bg-purple-500">
                <div className="flex bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={signUpImage} alt="Register Image" />
                    </div>
                    <div className="flex-1 px-8">
                        <h2 className="text-4xl font-bold mb-6">Sign-up To Task-Zen</h2>
                        <form id="signUpForm" onSubmit={userSingUp} method="post">

                            <div className="flex space-x-2 mb-4">
                                <div className="w-1/2">
                                    <label forName="first_name">First Name </label>
                                    <input type="text" id="first_name" name="first_name"
                                        onChange={handelInputChange} value={inputValues.first_name} className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-first_name"></span>
                                </div>
                                <div className="w-1/2">
                                    <label forName="last_name">Last Name</label>
                                    <input type="text" id="last_name" name="last_name"
                                        onChange={handelInputChange} value={inputValues.last_name} className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-last_name"></span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label forName="email">Email</label>
                                <input type="text" id="email" name="email"
                                    onChange={handelInputChange} value={inputValues.email} className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <span className="error-message" id="error-email"></span>
                            </div>

                            <div className="flex space-x-2 mb-4">
                                <div className="w-1/2">
                                    <label forName="password">Password</label>
                                    <input type="password" id="password" name="password"
                                        onChange={handelInputChange} value={inputValues.password} className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-password"></span>
                                </div>
                                <div className="w-1/2">
                                    <label forName="confirm_password">Confirm Password</label>
                                    <input type="password" id="confirm_password" name="confirm_password"
                                        onChange={handelInputChange} value={inputValues.confirm_password} className="w-full text-black px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <span className="error-message" id="error-confirm_password"></span>

                                </div>
                            </div>

                            <div className="mb-4">
                                <label forName="join" name="join">Join as</label>
                                <div className="flex items-center space-x-3 mt-2">
                                    <input type="radio" id="freelancer" name="role" value="freelancer"
                                        onChange={handelInputChange} className="text-2xl cursor-pointer" />
                                    <label htmlFor="freelancer" className='cursor-pointer'>Freelancer</label>
                                    &nbsp;
                                    <input type="radio" id="client" name="role" value="client"
                                        onChange={handelInputChange} className="text-2xl cursor-pointer" />
                                    <label htmlFor="client" className='cursor-pointer'> Client</label>
                                </div>
                                <span className="error-message" id="error-role"></span>

                            </div>

                            <div className="mb-4">
                                <button type="submit"
                                    className="w-full py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600">Sign-Up</button>
                            </div>

                            <div className="text-center text-sm">
                                <p>Already have an account? &nbsp;
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
