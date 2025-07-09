import React from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import img from '../../../images/adi.jpg'

export default function Sidebar() {
    const navigate = useNavigate()

    const logoutClient = () => {
        sessionStorage.clear()
        navigate('/login')
    }

    return (
        <div className="min-h-screen flex flex-col flex-auto antialiased bg-gray-50">

            {/* Header */}
            <header className="fixed w-full flex items-center justify-between h-16 bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-900 text-white px-8 shadow-md z-20">
                <div className="flex items-center space-x-4">
                    <img
                      src={img}
                      alt="Client Profile"
                      className="w-11 h-11 rounded-full border-2 border-white shadow-md hover:ring-4 hover:ring-purple-400 transition duration-300 cursor-pointer"
                    />
                    <span
                      className="text-2xl font-semibold tracking-wide select-none"
                      id="mainNameOfClient"
                    >
                      Client Portal
                    </span>
                </div>
                <div className="flex items-center space-x-6">
                    <button
                      type="button"
                      onClick={logoutClient}
                      className="flex items-center space-x-2 hover:text-gray-300 transition duration-300"
                    >
                      <i className="ri-logout-circle-r-line text-xl"></i>
                      <span className="text-lg font-medium select-none">Logout</span>
                    </button>
                </div>
            </header>

            {/* Sidebar */}
            <aside
              className="fixed top-16 left-0 h-full w-14 hover:w-64 md:w-64 bg-gradient-to-b from-purple-800 via-indigo-800 to-indigo-900 text-white transition-all duration-300 shadow-xl z-10"
            >
                <ul id="sidebar-menu" className="flex flex-col py-6 space-y-3">

                    {[
                      { to: '/client/dashboard', icon: 'ri-dashboard-line', label: 'Dashboard' },
                      { to: '/client/dashboard/project', icon: 'ri-projector-fill', label: 'Project' },
                      { to: '/client/dashboard/freelancer', icon: 'ri-macbook-fill', label: 'Freelancers' },
                      { to: '/client/dashboard/payment', icon: 'ri-briefcase-fill', label: 'Payment' },
                      { to: '/client/dashboard/profile', icon: 'ri-user-fill', label: 'Profile' },
                      { to: '/client/dashboard/help', icon: 'ri-message-2-fill', label: 'Help' },
                      { to: '/client/dashboard/setting', icon: 'ri-settings-3-fill', label: 'Settings' }
                    ].map(({ to, icon, label }) => (
                        <li
                          key={to}
                          className="group relative cursor-pointer"
                        >
                            <Link
                              to={to}
                              className="flex items-center p-4 rounded-lg transition-all duration-300 hover:bg-purple-600 hover:scale-[1.03]"
                            >
                                <i className={`${icon} text-2xl group-hover:text-white`}></i>
                                <span className="ml-5 hidden md:block text-lg font-semibold select-none">{label}</span>
                            </Link>

                            {/* Active link highlight */}
                            {/* You can enhance this later by using NavLink from react-router-dom */}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="ml-14 md:ml-64 p-10 pt-28 bg-gray-100 min-h-screen">
                <div className="content h-full mb-10 bg-white">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
