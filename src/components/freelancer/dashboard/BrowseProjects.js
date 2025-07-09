import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Build a Portfolio Website",
    description: "Need a React developer to build a personal portfolio website.",
    budget: "₹8,000",
    deadline: "7 days",
    skills: ["React", "CSS", "Tailwind"],
    postedBy: "Anjali Singh"
  },
  {
    id: 2,
    title: "Develop Mobile App UI",
    description: "Looking for a designer to create Figma UI for a finance app.",
    budget: "₹12,000",
    deadline: "5 days",
    skills: ["Figma", "UI/UX"],
    postedBy: "Ravi Kumar"
  },
  {
    id: 3,
    title: "API Integration in Node.js",
    description: "Integrate multiple APIs in an existing Node.js backend.",
    budget: "₹15,000",
    deadline: "10 days",
    skills: ["Node.js", "REST API", "Express"],
    postedBy: "Neha Mehta"
  }
];

export default function BrowserProjects() {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Browse Projects</h1>

      {/* Search Bar */}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-2">{project.description}</p>

              <div className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Posted By:</span> {project.postedBy}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.skills.map((skill, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Budget:</span> {project.budget} &nbsp; | &nbsp;
                  <span className="font-semibold">Deadline:</span> {project.deadline}
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects found matching your search.</p>
        )}
      </div>
    </div>
  );
}
