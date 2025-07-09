import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2"; // For easier integration with React

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
    const [clientData, setClientData] = useState(null);
    const [sumRangeData, setSumRangeData] = useState(null);
    const [countData, setCountData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [animatedTotalRevenue, setAnimatedTotalRevenue] = useState(0);
    const [animatedTotalProfit, setAnimatedTotalProfit] = useState(0);
    const [animatedTotalProject, setAnimatedTotalProject] = useState(0);
    const [animatedTotalFreelancers, setAnimatedTotalFreelancers] = useState(0);

    const lineChartRef = useRef(null);
    const barChartRef = useRef(null);

    // Fetch Data from API
    const fetchCounterInClientDashboard = async () => {
        const apiUrls = [
            "http://localhost:8000/api/client/countAndSumProjects",
            "http://localhost:8000/api/freelancer/appliedProjects/sumRanges",
            "http://localhost:8000/api/freelancer/appliedProjects/count"
        ];

        const token = sessionStorage.getItem('authToken');

        if (!token) {
            alert('Your token is expired. Please Login again!');
            return;
        }

        try {
            const responses = await Promise.all(
                apiUrls.map(url =>
                    axios.get(url, {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    })
                )
            );

            const [clientDataResponse, sumRangeResponse, countResponse] = responses;

            if (
                clientDataResponse.status !== 200 ||
                sumRangeResponse.status !== 200 ||
                countResponse.status !== 200
            ) {
                throw new Error("Failed to fetch data.");
            }

            setClientData(clientDataResponse.data);
            setSumRangeData(sumRangeResponse.data);
            setCountData(countResponse.data);

            setLoading(false);
        } catch (error) {
            setError("Error fetching data: " + error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCounterInClientDashboard();
    }, []);

    useEffect(() => {
        if (clientData && sumRangeData && countData) {
            const { projectCount = 0, totalRangeSum = 0 } = clientData || {};
            const firstProfit = sumRangeData || 0;
            const totalFreelancers = countData || 0;
            const originalProfit = totalRangeSum - firstProfit;

            // Start animations for counters
            animateCounter(totalRangeSum, setAnimatedTotalRevenue);
            animateCounter(originalProfit, setAnimatedTotalProfit);
            animateCounter(projectCount, setAnimatedTotalProject);
            animateCounter(totalFreelancers, setAnimatedTotalFreelancers);
        }
    }, [clientData, sumRangeData, countData]);

    function animateCounter(target, setValue) {
        let currentCount = 0;
        const increment = target / 100;
        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                currentCount = target;
                clearInterval(interval);
            }
            setValue(Math.floor(currentCount)); // Update state to trigger re-render
        }, 25);
    }

    const {
        projectCount = 0,
        totalRangeSum = 0
    } = clientData || {};

    const firstProfit = sumRangeData || 0;
    const totalFreelancers = countData || 0;

    const originalProfit = totalRangeSum - firstProfit;

    // Dynamically create chart data
    const lineChartData = {
        labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                label: "Total Revenue",
                data: [totalRangeSum], // Single value for Total Revenue
                borderColor: "#6b21a8",
                backgroundColor: "rgba(107, 33, 168, 0.1)",
                fill: true,
            },
        ],
    };

    const barChartData = {
        labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                label: "Profit",
                data: [originalProfit], // Single value for Total Profit
                backgroundColor: "#6b21a8",
            },
        ],
    };

    useEffect(() => {
        if (clientData && sumRangeData && countData) {
            // Update charts after data is fetched
            if (lineChartRef.current) {
                lineChartRef.current.update();
            }
            if (barChartRef.current) {
                barChartRef.current.update();
            }
        }
    }, [clientData, sumRangeData, countData]);

    if (loading || error) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-eye-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Revenue</div>
                        <div className="text-2xl font-semibold text-white">{animatedTotalRevenue}</div>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-bar-chart-grouped-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Profit</div>
                        <div className="text-2xl font-semibold text-white">{animatedTotalProfit}</div>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-product-hunt-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Project</div>
                        <div className="text-2xl font-semibold text-white">{animatedTotalProject}</div>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-user-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Freelancer</div>
                        <div className="text-2xl font-semibold text-white">{animatedTotalFreelancers}</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Revenue</h2>
                    <Chart ref={lineChartRef} type="line" data={lineChartData} options={{ responsive: true }} />
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Profit</h2>
                    <Chart ref={barChartRef} type="bar" data={barChartData} options={{ responsive: true }} />
                </div>
            </div>
        </>
    );
}
