import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Project() {

    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [filters, setFilters] = useState({
        search: '',
        status: '',
        rangeMin: '',
        rangeMax: '',
    });

    // Fetch projects from API
    useEffect(() => {
        const fetchClientProjectsDetails = async () => {
            const apiUrl = 'http://localhost:8000/api/client/getProjectsByClientId';
            const token = sessionStorage.getItem('authToken');

            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const clientProjects = response.data?.data || [];
                setAllProjects(clientProjects);
                setFilteredProjects(clientProjects);
            } catch (error) {
                console.error('Error fetching client project details:', error);
            }
        };

        fetchClientProjectsDetails();
    }, []);

    // Filter projects
    const filterProjects = () => {
        const { search, status, rangeMin, rangeMax } = filters;
        const min = parseFloat(rangeMin) || 0;
        const max = parseFloat(rangeMax) || Infinity;

        const filtered = allProjects.filter((project) => {
            const matchesName = project.client_project_name.toLowerCase().includes(search.toLowerCase());
            const matchesStatus = !status || project.status === status;
            const matchesRange = project.minimum_range >= min && project.maximum_range <= max;

            return matchesName && matchesStatus && matchesRange;
        });

        setFilteredProjects(filtered);
    };

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };
    return (
        <>
            <div className="mb-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search by name..."
                        className="p-2 border border-gray-300 rounded-md"
                        value={filters.search}
                        onChange={handleInputChange}
                        onInput={filterProjects}
                    />

                    <select
                        name="status"
                        className="p-2 border border-gray-300 rounded-md"
                        value={filters.status}
                        onChange={handleInputChange}
                        onInput={filterProjects}
                    >
                        <option value="">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="inProgress">In Progress</option>
                        <option value="halfCompleted">Half Completed</option>
                        <option value="completed">Completed</option>
                    </select>

                    <input
                        type="number"
                        name="rangeMin"
                        placeholder="Min Range"
                        className="p-2 border border-gray-300 rounded-md"
                        value={filters.rangeMin}
                        onChange={handleInputChange}
                        onInput={filterProjects}
                    />

                    <input
                        type="number"
                        name="rangeMax"
                        placeholder="Max Range"
                        className="p-2 border border-gray-300 rounded-md"
                        value={filters.rangeMax}
                        onChange={handleInputChange}
                        onInput={filterProjects}
                    />

                    <button
                        type="button"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        onClick={() => alert('Create New Project modal triggered!')}
                    >
                        Create New Project
                    </button>
                </div>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div
                            key={project.client_project_id}
                            className="p-6 rounded-lg shadow-lg bg-white border border-gray-300 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={project.project_picture}
                                alt="Project Image"
                                className="w-64 h-48 rounded-md mb-4 object-cover hover:scale-110 transition"
                            />
                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                {project.client_project_name || 'N/A'}
                            </h2>
                            <p className="mb-2">
                                <strong>Status:</strong>{' '}
                                <span className={`text-${project.status === 'pending' ? 'red' : 'gray'}-600`}>{project.status || 'N/A'}</span>
                            </p>
                            <p className="mb-2">Duration: {project.duration || 'N/A'}</p>
                            <p className="mb-2">
                                Range: {project.minimum_range || 'N/A'} - {project.maximum_range || 'N/A'}
                            </p>
                            <p className="mb-4 text-gray-600">Description: {project.description || 'N/A'}</p>
                            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                                <div
                                    className={`h-2 rounded-full bg-${project.status === 'pending'
                                        ? 'red-600'
                                        : project.status === 'inProgress'
                                            ? 'yellow-600'
                                            : project.status === 'halfCompleted'
                                                ? 'blue-600'
                                                : 'green-600'
                                        }`}
                                    style={{
                                        width: `${project.status === 'pending'
                                            ? 0
                                            : project.status === 'inProgress'
                                                ? 40
                                                : project.status === 'halfCompleted'
                                                    ? 70
                                                    : 100
                                            }%`
                                    }}
                                ></div>
                            </div>
                            <div className="flex justify-center gap-4">
                                <button
                                    className="text-blue-600 hover:underline"
                                    onClick={() => alert('Edit project modal triggered!')}
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-600 hover:underline"
                                    onClick={() => alert('Delete project triggered!')}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>

            <form id="" method="POST">
                <div id="editProjectModal" className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-4xl">
                        <h2 className="text-lg font-semibold mb-4 text-center">Edit Project</h2>
                        <input type="hidden" id="editProjectId" />

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="client_project_name" id="editProjectName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer" placeholder=" " />
                            <label forName="client_project_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                <i className="ri-layout-top-fill ml-1"></i>&nbsp;Project Title</label>
                            <span className="error-message text-red-400" id="error-client_project_name"></span>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <textarea name="description" id="editDescription" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer" placeholder=" "></textarea>
                            <label forName="description" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                <i className="ri-edit-2-fill ml-1"></i>&nbsp;Project Details</label>
                            <span className="error-message text-red-400" id="error-description"></span>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="file" name="project_picture" id="editProjectPicture" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer" placeholder=" " />
                            <span className="error-message text-red-400" id="error-project_picture"></span>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <select name="duration" id="editProjectDuration" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800">
                                <option value="">Select Duration</option>
                                <option value="1 Weak">1 Week</option>
                                <option value="2 Weak">2 Weeks</option>
                                <option value="15 Day's">15 Days</option>
                                <option value="1 Month">1 Month</option>
                                <option value="3 Months">3 Months</option>
                                <option value="6 Months">6 Months</option>
                                <option value="1 Year">1 Year</option>
                            </select>
                            <span className="error-message text-red-400" id="error-duration"></span>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="minimum_range" id="editMinimumRange" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer" placeholder=" " />
                            <label forName="minimum_range" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                <i className="ri-price-tag-3-fill ml-1"></i>&nbsp;Minimum Range</label>
                            <span className="error-message text-red-400" id="error-minimum_range"></span>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="maximum_range" id="editMaximumRange" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer" placeholder=" " />
                            <label forName="maximum_range" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                <i className="ri-price-tag-3-fill ml-1"></i>&nbsp;Maximum Range</label>
                            <span className="error-message text-red-400" id="error-maximum_range"></span>
                        </div>

                        <div className="flex justify-end mt-4 gap-4">
                            <button onclick="editClientAddedProject(event)" type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                Update Project
                            </button>
                            <button type="button" className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none" onclick="closeModal('editProjectModal')">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
