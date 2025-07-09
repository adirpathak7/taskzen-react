import React, { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Static mock data
  const freelancerData = {
    totalBids: 52,
    projectsWon: 18,
    earnings: 95000,
    ratings: 4.7,
  };

  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  const earningsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Earnings (₹)",
        data: [5000, 12000, 15000, 10000, 18000, 25000],
        borderColor: "#6b21a8",
        backgroundColor: "rgba(107, 33, 168, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const projectsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projects Won",
        data: [1, 3, 2, 4, 5, 3],
        backgroundColor: "#8b5cf6",
      },
    ],
  };

  return (
    <>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard icon="ri-hammer-line" label="Total Bids" value={52} />
        <StatCard icon="ri-trophy-line" label="Projects Won" value={18} />
        <StatCard icon="ri-money-rupee-circle-line" label="Total Earnings" value={`₹ ${20000}`} />
        <StatCard icon="ri-star-line" label="Client Rating" value={`${4.7} / 5`} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Earnings Over Time</h2>
          <Chart ref={lineChartRef} type="line" data={earningsData} options={{ responsive: true }} />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Projects Won Per Month</h2>
          <Chart ref={barChartRef} type="bar" data={projectsData} options={{ responsive: true }} />
        </div>
      </div>
    </>
  );
}

// Reusable Card Component
function StatCard({ icon, label, value }) {
  return (
    <div className="flex items-center p-6 bg-indigo-600 rounded-lg shadow-md">
      <i className={`${icon} text-4xl text-white`}></i>
      <div className="ml-4">
        <div className="text-white">{label}</div>
        <div className="text-2xl font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}
