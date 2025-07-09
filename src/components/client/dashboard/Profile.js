import React, { useState } from 'react';
import profilePic from '../../../images/adi.jpg'; // business logo or client photo

export default function ClientProfile() {
  const [profile, setProfile] = useState({
    name: "Aditya Sharma",
    email: "aditya@gmail.com",
    phone: "9876543210",
    company: "Aditya Enterprises",
    industry: "Retail",
    location: "Mumbai, India",
    about: "We are a retail business specializing in consumer electronics with a passion for customer satisfaction.",
    website: "https://adityaenterprises.com",
  });

  return (
    <div className="bg-white p-2 min-h-screen">
      <h1 className="text-3xl font-extrabold text-indigo-800 p-2 mb-10 tracking-wide select-none">
        Client Profile
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 max-w-5xl mx-10">

        {/* Profile Image / Logo */}
        <div className="w-48 h-48 rounded-full border-8 border-indigo-600 shadow-lg overflow-hidden hover:ring-4 ring-purple-400 transition duration-300 cursor-pointer">
          <img
            src={profilePic}
            alt="Client Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Full Name
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900 select-text">{profile.name}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Email Address
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900 select-text">{profile.email}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Phone Number
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900 select-text">{profile.phone}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Company Name
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900 select-text">{profile.company}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Industry
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900 select-text">{profile.industry}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Location
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900 select-text">{profile.location}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Website
              </label>
              <p className="mt-1 text-lg font-semibold text-indigo-700 underline hover:text-indigo-900 cursor-pointer select-text">
                <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
              About Business
            </label>
            <p className="mt-2 text-gray-700 leading-relaxed select-text">{profile.about}</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-12 flex justify-center">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-300"
          type="button"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}
