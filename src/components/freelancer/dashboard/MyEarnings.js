import React from 'react';

const earningsData = [
  {
    id: 1,
    project: "Portfolio Website Design",
    amount: 12000,
    date: "2025-07-05",
    status: "Paid"
  },
  {
    id: 2,
    project: "Mobile App UI",
    amount: 8000,
    date: "2025-06-30",
    status: "Paid"
  },
  {
    id: 3,
    project: "SEO Optimization",
    amount: 6000,
    date: "2025-06-27",
    status: "Pending"
  }
];

export default function MyEarnings() {
  const totalEarnings = earningsData
    .filter(e => e.status === "Paid")
    .reduce((sum, item) => sum + item.amount, 0);

  const pendingEarnings = earningsData
    .filter(e => e.status === "Pending")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">My Earnings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Earnings</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">₹{totalEarnings}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Pending Earnings</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">₹{pendingEarnings}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-4">Project</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {earningsData.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{item.project}</td>
                <td className="px-6 py-4 text-gray-700">₹{item.amount}</td>
                <td className="px-6 py-4 text-gray-600">{item.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${item.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
