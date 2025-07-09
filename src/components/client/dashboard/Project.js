import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Project() {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    rangeMin: '',
    rangeMax: '',
  });

  // Static data for testing
  useEffect(() => {
    const staticProjects = [
      {
        client_project_id: 1,
        client_project_name: "Project Alpha",
        status: "pending",
        duration: "1 Month",
        minimum_range: 1000,
        maximum_range: 5000,
        description: "This is project Alpha description.",
        project_picture: "https://th.bing.com/th/id/OIP.fjtvUaL0uqlYFLpD9sI3_gHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      },
      {
        client_project_id: 2,
        client_project_name: "Project Beta",
        status: "inProgress",
        duration: "2 Weeks",
        minimum_range: 2000,
        maximum_range: 6000,
        description: "This is project Beta description.",
        project_picture: "https://th.bing.com/th/id/OIP.Nke9EXKUUlcF1E5wNS2UcAAAAA?w=184&h=100&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      },
      {
        client_project_id: 3,
        client_project_name: "Project Gamma",
        status: "completed",
        duration: "3 Months",
        minimum_range: 5000,
        maximum_range: 10000,
        description: "This is project Gamma description.",
        project_picture: "https://th.bing.com/th/id/OIP.oqmHtyiRBL1su_M5bYmdWQHaFj?w=215&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      },
    ];
    setAllProjects(staticProjects);
    setFilteredProjects(staticProjects);
  }, []);

  // Filter projects function (same logic)
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

  // Handle input change, also call filterProjects after setState
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      // Filter after updating filters state
      // You can also debounce this if needed
      setTimeout(() => {
        const { search, status, rangeMin, rangeMax } = newFilters;
        const min = parseFloat(rangeMin) || 0;
        const max = parseFloat(rangeMax) || Infinity;

        const filtered = allProjects.filter((project) => {
          const matchesName = project.client_project_name.toLowerCase().includes(search.toLowerCase());
          const matchesStatus = !status || project.status === status;
          const matchesRange = project.minimum_range >= min && project.maximum_range <= max;
          return matchesName && matchesStatus && matchesRange;
        });

        setFilteredProjects(filtered);
      }, 100);

      return newFilters;
    });
  };

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-4 justify-between items-center">
        {/* Search */}
        <input
          type="text"
          name="search"
          placeholder="Search by name..."
          className="p-3 border border-gray-300 rounded-md flex-grow min-w-[200px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={filters.search}
          onChange={handleInputChange}
        />

        {/* Status filter */}
        <select
          name="status"
          className="p-3 border border-gray-300 rounded-md min-w-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="halfCompleted">Half Completed</option>
          <option value="completed">Completed</option>
        </select>

        {/* Range filters */}
        <input
          type="number"
          name="rangeMin"
          placeholder="Min Range"
          className="w-28 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={filters.rangeMin}
          onChange={handleInputChange}
          min={0}
        />
        <input
          type="number"
          name="rangeMax"
          placeholder="Max Range"
          className="w-28 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={filters.rangeMax}
          onChange={handleInputChange}
          min={0}
        />

        {/* Create project button */}
        <button
          type="button"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          onClick={() => alert('Create New Project modal triggered!')}
        >
          + Create New Project
        </button>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.client_project_id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.project_picture}
                  alt={project.client_project_name}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 truncate">{project.client_project_name || 'N/A'}</h2>

                <p className="mb-2 text-gray-700 flex items-center gap-2">
                  <strong>Status:</strong>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'pending'
                        ? 'bg-red-100 text-red-800'
                        : project.status === 'inProgress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : project.status === 'halfCompleted'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {project.status || 'N/A'}
                  </span>
                </p>

                <p className="mb-1 text-gray-700">
                  <strong>Duration:</strong> {project.duration || 'N/A'}
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Range:</strong> ₹{project.minimum_range?.toLocaleString() || 'N/A'} - ₹{project.maximum_range?.toLocaleString() || 'N/A'}
                </p>
                <p className="mb-6 text-gray-600 flex-grow">{project.description || 'N/A'}</p>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full mb-5">
                  <div
                    className={`h-2 rounded-full ${
                      project.status === 'pending'
                        ? 'bg-red-600'
                        : project.status === 'inProgress'
                        ? 'bg-yellow-600'
                        : project.status === 'halfCompleted'
                        ? 'bg-blue-600'
                        : 'bg-green-600'
                    }`}
                    style={{
                      width: `${
                        project.status === 'pending'
                          ? 0
                          : project.status === 'inProgress'
                          ? 40
                          : project.status === 'halfCompleted'
                          ? 70
                          : 100
                      }%`,
                    }}
                  ></div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-6">
                  <button
                    className="text-indigo-600 hover:underline font-medium"
                    onClick={() => alert('Edit project modal triggered!')}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline font-medium"
                    onClick={() => alert('Delete project triggered!')}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No projects found.</p>
        )}
      </div>

      {/* Keep your existing modal form unchanged here */}
      {/* ... your modal code here ... */}
    </>
  );
}


// Fetch projects from API (commented out for static data)
    /*
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
    */
