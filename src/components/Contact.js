import React from 'react'
import contactasImage from '../images/contactasimg.webp'
export default function Contact() {
    return (
        <>
            <header className="bg-purple-700 text-white py-8 mt-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Contact TaskZen</h1>
                    <p className="text-lg mt-2">We’re here to help and answer any questions you might have.</p>
                </div>
            </header>

            <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg bg-purple-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Send Us a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label for="username" name="username"><i className="ri-user-3-fill text-2xl text-white"> Enter User Name :</i></label>
                                <input type="text" id="username" required="true" className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="email" name="email"><i className="ri-mail-send-fill text-2xl text-white"> Enter Email :</i></label>
                                <input type="email" id="email" required="true" className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="message" name="message"><i className="ri-message-2-fill text-2xl text-white"> Enter Message :</i></label>
                                <textarea id="message" required="true" rows="5" className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
                        </form>
                    </div>

                    <div className="flex p-2">
                        <img src={contactasImage} />
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
                            <p className="mb-2 text-white"><strong>Email:</strong> taskzen2147@gmail.com</p>
                            <p className="mb-2 text-white"><strong>Phone:</strong> 91+ 9510211189</p>
                            <p className="mb-2 text-white"><strong>Address:</strong> Surat , India</p>

                            <h3 className="text-xl font-bold mt-6 mb-4 text-white">Follow Us</h3>
                            <div className="grid grid-rows-2 gap-4 p-4 bg-gray-100 rounded-lg shadow-lg">
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.facebook.com/" className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300">
                                        <i className="ri-facebook-circle-fill text-4xl"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition duration-300">
                                        <i className="ri-instagram-fill text-4xl"></i>
                                    </a>
                                </div>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://x.com/?lang=en" className="flex items-center justify-center w-16 h-16 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition duration-300">
                                        <i className="ri-twitter-fill text-4xl"></i>
                                    </a>
                                    <a href="https://telegram.org/" className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
                                        <i className="ri-telegram-fill text-4xl"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
