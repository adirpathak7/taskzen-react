import React from 'react';
import suratMap from '../images/suratmap.jpg'; // Make sure the image exists in your project

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get Started</h3>
          <ul className="space-y-2">
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#">Programming</a></li>
            <li><a href="#">AI Services</a></li>
            <li><a href="#">Video Animation</a></li>
            <li><a href="#">Architecture</a></li>
            <li><a href="#">Sales Marketing</a></li>
            <li><a href="#">Brand Design</a></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>
          <a
            href="https://www.google.com/maps/place/Surat,+Gujarat,+India/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={suratMap}
              alt="Surat Location Map"
              className="w-full h-auto"
            />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p className="text-lg">&copy; 2024 Task-zen. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a> |{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
