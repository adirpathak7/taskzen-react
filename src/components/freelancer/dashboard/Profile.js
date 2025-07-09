import React from 'react';
import profileImg from '../../../images/adi.jpg'

const FreelancerProfile = () => {
  return (
    <main className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8 space-y-6">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={profileImg}
            alt="Freelancer"
            className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">Aditya Pathak</h2>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
            <p className="text-sm text-gray-500">adityapathak@example.com</p>
            <p className="text-sm text-gray-500">+91 9876543210</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://github.com/ankitsharma"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300"
          >
            <i className="ri-github-fill text-xl text-gray-700"></i>
          </a>
          <a
            href="https://linkedin.com/in/ankitsharma"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-100 p-3 rounded-full hover:bg-blue-200"
          >
            <i className="ri-linkedin-fill text-xl text-blue-700"></i>
          </a>
          <a
            href="https://ankitsharma.dev"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-100 p-3 rounded-full hover:bg-purple-200"
          >
            <i className="ri-profile-fill text-xl text-purple-700"></i>
          </a>
        </div>

        {/* Skills */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Docker', 'TypeScript'].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Education</h3>
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <p className="font-medium text-gray-800">B.Tech in Computer Science</p>
            <p className="text-sm text-gray-600">ABC University (2017 - 2021)</p>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Experience</h3>
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <p className="font-medium text-gray-800">Software Engineer at XYZ Corp</p>
            <p className="text-sm text-gray-600">July 2021 - Present</p>
            <p className="text-sm text-gray-600">Worked on full stack web applications using MERN stack.</p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default FreelancerProfile;
