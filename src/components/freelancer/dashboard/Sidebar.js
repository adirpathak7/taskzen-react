import React from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import img from '../../../images/adi.jpg'

export default function Sidebar() {
    const navigate = useNavigate()

    const logoutFreelancer = () => {
        sessionStorage.clear()
        navigate('/login')
    }

    return (
        <div className="min-h-screen flex flex-col flex-auto antialiased">

            {/* Header */}
            <header className="fixed w-full flex items-center justify-between h-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 shadow-lg z-10">
                <div className="flex items-center space-x-4">
                    <img src={img} alt="Freelancer" className="w-10 h-10 rounded-full border-2 border-gray-300" />
                    <span className="text-2xl font-semibold">Freelancer</span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={logoutFreelancer}
                        className="flex items-center hover:text-gray-300"
                    >
                        Logout &nbsp;
                        <i className="ri-logout-circle-r-line text-xl"></i>
                    </button>
                </div>
            </header>

            {/* Sidebar */}
            <aside className="fixed top-16 left-0 h-full w-14 hover:w-64 md:w-64 bg-gradient-to-b from-indigo-700 to-purple-700 text-white transition-all duration-300 shadow-lg z-10">
                <ul className="flex flex-col py-6 space-y-3">

                    <SidebarItem to="/freelancer/dashboard" icon="ri-dashboard-line" label="Dashboard" />
                    <SidebarItem to="/freelancer/dashboard/browse-projects" icon="ri-search-eye-line" label="Browse Projects" />
                    <SidebarItem to="/freelancer/dashboard/my-bids" icon="ri-auction-line" label="My Bids" />
                    <SidebarItem to="/freelancer/dashboard/my-earnings" icon="ri-money-dollar-circle-line" label="My Earnings" />
                    <SidebarItem to="/freelancer/dashboard/profile" icon="ri-user-line" label="Profile" />
                    <SidebarItem to="/freelancer/dashboard/help" icon="ri-question-line" label="Help" />
                    <SidebarItem to="/freelancer/dashboard/setting" icon="ri-settings-3-line" label="Settings" />

                </ul>
            </aside>

            {/* Main Content */}
            <main className="ml-14 md:ml-64 p-8 pt-24 bg-gray-100 min-h-screen">
                <div className="content h-full mb-10 p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

// Reusable Sidebar Item
function SidebarItem({ to, icon, label }) {
    return (
        <li className="menu-item relative cursor-pointer group">
            <Link to={to}>
                <span className="flex items-center p-4 hover:bg-purple-600 transition-all duration-300 rounded-lg">
                    <i className={`${icon} text-xl`}></i>
                    <span className="ml-4 hidden md:block">{label}</span>
                </span>
            </Link>
        </li>
    );
}
