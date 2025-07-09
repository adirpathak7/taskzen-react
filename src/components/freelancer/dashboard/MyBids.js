import React from 'react';

const bids = [
  {
    id: 1,
    project: "Build an E-commerce Website",
    bidAmount: "₹18,000",
    status: "Pending",
    date: "2025-07-05"
  },
  {
    id: 2,
    project: "Logo Design for Startup",
    bidAmount: "₹2,500",
    status: "Accepted",
    date: "2025-06-28"
  },
  {
    id: 3,
    project: "Mobile App Testing",
    bidAmount: "₹5,000",
    status: "Rejected",
    date: "2025-06-25"
  }
];

export default function MyBids() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">My Bids</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-4">Project</th>
              <th className="px-6 py-4">Bid Amount</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{bid.project}</td>
                <td className="px-6 py-4 text-gray-700">{bid.bidAmount}</td>
                <td className="px-6 py-4 text-gray-600">{bid.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${bid.status === "Pending" ? "bg-yellow-100 text-yellow-800" : ""}
                    ${bid.status === "Accepted" ? "bg-green-100 text-green-800" : ""}
                    ${bid.status === "Rejected" ? "bg-red-100 text-red-800" : ""}`}
                  >
                    {bid.status}
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
