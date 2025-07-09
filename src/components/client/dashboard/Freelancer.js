import React from 'react';

const Freelancer = () => {
   const freelancers = [
    {
      name: 'Aditya Pathak',
      project: 'Corporate Website Revamp',
      myRange: '₹25,000 - ₹30,000',
      myStatus: 'Reviewed',
      myDuration: '3 Weeks',
      freelancerRange: '₹28,000',
      freelancerDuration: '3.5 Weeks',
      freelancerStatus: 'Accepted',
      createdDate: '2025-06-25',
    },
    {
      name: 'Aditya Pathak',
      project: 'Mobile App UI Enhancement',
      myRange: '₹15,000 - ₹18,000',
      myStatus: 'Pending',
      myDuration: '2 Weeks',
      freelancerRange: '₹17,000',
      freelancerDuration: '2 Weeks',
      freelancerStatus: 'Applied',
      createdDate: '2025-07-05',
    },
  ];
  return (
    <main className="flex-1 space-y-6 bg-gray-100 min-h-screen">

      {/* Client Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-3xl font-bold">Client Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Client Information</h3>
            <p><strong>Name:</strong> Pathak Aditya</p>
            <p><strong>Client ID:</strong> CL12345</p>
            <p><strong>Email:</strong> adityapathak@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
          </div>
        </div>
      </section>

      {/* Freelancer Table */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-4">Freelancer's Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Freelancer Name</th>
                <th className="px-4 py-2">Project</th>
                <th className="px-4 py-2">My Range</th>
                <th className="px-4 py-2">My Status</th>
                <th className="px-4 py-2">My Duration</th>
                <th className="px-4 py-2">Freelancer Range</th>
                <th className="px-4 py-2">Freelancer Duration</th>
                <th className="px-4 py-2">Freelancer Status</th>
                <th className="px-4 py-2">Created Date</th>
                <th className="px-4 py-2">View</th>
                <th className="px-4 py-2">Reject</th>
              </tr>
            </thead>
            <tbody>
              {freelancers.length > 0 ? (
                freelancers.map((f, idx) => (
                  <tr key={idx} className="border-b border-indigo-200 hover:bg-indigo-50 transition">
                    <td className="px-5 py-3 font-medium">{f.name}</td>
                    <td className="px-5 py-3">{f.project}</td>
                    <td className="px-5 py-3">{f.myRange}</td>
                    <td className={`px-5 py-3 font-semibold ${f.myStatus === 'Reviewed' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                      {f.myStatus}
                    </td>
                    <td className="px-5 py-3">{f.myDuration}</td>
                    <td className="px-5 py-3">{f.freelancerRange}</td>
                    <td className="px-5 py-3">{f.freelancerDuration}</td>
                    <td className={`px-5 py-3 font-semibold ${f.freelancerStatus === 'Accepted' ? 'text-green-700' :
                        f.freelancerStatus === 'Applied' ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                      {f.freelancerStatus}
                    </td>
                    <td className="px-5 py-3">{f.createdDate}</td>
                    <td className="px-5 py-3 text-center">
                      <button
                        aria-label="View details"
                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                      >
                        <i className="ri-eye-line text-xl"></i>
                      </button>
                    </td>
                    <td className="px-5 py-3 text-center">
                      <button
                        aria-label="Reject freelancer"
                        className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                      >
                        <i className="ri-close-line text-xl"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="text-center py-6 text-gray-500 italic">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Work In Progress */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-4">Work in Progress</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Freelancer Name</th>
                <th className="px-4 py-2">Project</th>
                <th className="px-4 py-2">Range</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Post Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 text-center" colSpan="6">No data found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Completed Tasks */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-4">Completed Task Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Freelancer Name</th>
                <th className="px-4 py-2">Project</th>
                <th className="px-4 py-2">Range</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Post Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 text-center" colSpan="6">No data found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
};

export default Freelancer;
