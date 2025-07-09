import React, { useEffect, useState, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2"; 

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
    // Commenting out API data states
    // const [clientData, setClientData] = useState(null);
    // const [sumRangeData, setSumRangeData] = useState(null);
    // const [countData, setCountData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // Use static data for demo
    const clientData = { projectCount: 25, totalRangeSum: 120000 };
    const sumRangeData = 30000;
    const countData = 45;

    const [animatedTotalRevenue, setAnimatedTotalRevenue] = useState(0);
    const [animatedTotalProfit, setAnimatedTotalProfit] = useState(0);
    const [animatedTotalProject, setAnimatedTotalProject] = useState(0);
    const [animatedTotalFreelancers, setAnimatedTotalFreelancers] = useState(0);

    const lineChartRef = useRef(null);
    const barChartRef = useRef(null);

    // Commenting out API fetch function
    /*
    const fetchCounterInClientDashboard = async () => {
        // API call logic here...
    };
    useEffect(() => {
        fetchCounterInClientDashboard();
    }, []);
    */

    useEffect(() => {
        if (clientData && sumRangeData && countData) {
            const { projectCount = 0, totalRangeSum = 0 } = clientData;
            const firstProfit = sumRangeData;
            const totalFreelancers = countData;
            const originalProfit = totalRangeSum - firstProfit;

            animateCounter(totalRangeSum, setAnimatedTotalRevenue);
            animateCounter(originalProfit, setAnimatedTotalProfit);
            animateCounter(projectCount, setAnimatedTotalProject);
            animateCounter(totalFreelancers, setAnimatedTotalFreelancers);
        }
    }, [clientData, sumRangeData, countData]);

    function animateCounter(target, setValue) {
        let currentCount = 0;
        const increment = target / 50;
        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                currentCount = target;
                clearInterval(interval);
            }
            setValue(Math.floor(currentCount));
        }, 20);
    }

    const { projectCount = 0, totalRangeSum = 0 } = clientData;
    const firstProfit = sumRangeData;
    const totalFreelancers = countData;
    const originalProfit = totalRangeSum - firstProfit;

    const lineChartData = {
        labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                label: "Total Revenue",
                data: [totalRangeSum], // static single value
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
                data: [originalProfit], // static single value
                backgroundColor: "#6b21a8",
            },
        ],
    };

    useEffect(() => {
        if (lineChartRef.current) lineChartRef.current.update();
        if (barChartRef.current) barChartRef.current.update();
    }, [animatedTotalRevenue, animatedTotalProfit]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-eye-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Revenue</div>
                        <div className="text-2xl font-semibold text-white">2400</div>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-bar-chart-grouped-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Profit</div>
                        <div className="text-2xl font-semibold text-white">80000</div>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-product-hunt-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Project</div>
                        <div className="text-2xl font-semibold text-white">70</div>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-purple-700 rounded-lg shadow-md">
                    <i className="ri-user-line text-4xl text-white"></i>
                    <div className="ml-4">
                        <div className="text-white">Total Freelancer</div>
                        <div className="text-2xl font-semibold text-white">100</div>
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
