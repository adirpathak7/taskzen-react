import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate()

    const logoutClient = () => {
        sessionStorage.clear()
        navigate('/login')
    }
    return (
        <>
            <div class="min-h-screen flex flex-col flex-auto antialiased">

                <header
                    class="fixed w-full flex items-center justify-between h-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 shadow-lg z-10">
                    <div class="flex items-center space-x-4">
                        <img id="mainImageOfClient" class="w-10 h-10 rounded-full border-2 border-gray-700" />
                        <span class="text-2xl font-semibold" id="mainNameOfClient"></span>
                    </div>
                    <div class="flex items-center space-x-4">


                        <div class="relative group">
                            <button type="button" onClick={logoutClient} class="flex items-center hover:text-gray-300">
                                Logout &nbsp;&nbsp;
                                <i class="ri-logout-circle-r-line mr-1 text-xl"></i>
                            </button>

                            <span
                                class="absolute left-1/2 transform -translate-x-1/2 top-10 bg-gray-800 text-white text-sm rounded-lg px-3 py-1 hidden group-hover:block">
                                LogOut
                            </span>
                        </div>
                    </div>

                </header>

                <aside
                    class="fixed top-16 left-0 h-full w-14 hover:w-64 md:w-64 bg-gradient-to-b from-purple-700 to-indigo-700 text-white transition-all duration-300 shadow-lg z-10">
                    <ul id="sidebar-menu" class="flex flex-col py-6 space-y-3">
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/client/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-indigo-500 transition-all duration-300 rounded-lg">
                                    <i class="ri-dashboard-line text-xl"></i><span class="ml-4 hidden md:block">Dashboard</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/client/dashboard/project'>
                                <span
                                    class="flex items-center p-4 hover:bg-indigo-500 transition-all duration-300 rounded-lg">
                                    <i class="ri-projector-fill text-xl"></i><span class="ml-4 hidden md:block">Project</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/client/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-indigo-500 transition-all duration-300 rounded-lg">
                                    <i class="ri-macbook-fill text-xl"></i><span
                                        class="ml-4 hidden md:block">Freelancers</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/client/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-indigo-500 transition-all duration-300 rounded-lg">
                                    <i class="fas fa-briefcase text-xl"></i><span class="ml-4 hidden md:block">Payment</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/client/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-indigo-500 transition-all duration-300 rounded-lg">
                                    <i class="fas fa-user text-xl"></i><span class="ml-4 hidden md:block">Profile</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/client/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-indigo-500 transition-all duration-300 rounded-lg">
                                    <i class="ri-message-2-fill text-xl"></i><span class="ml-4 hidden md:block">Help</span>
                                </span>
                            </Link>
                        </li>
                        <li class="menu-item relative cursor-pointer group">
                            <Link to='/client/dashboard' >
                                <span
                                    class="flex items-center p-4 hover:bg-indigo-500 transition-all duration-300 rounded-lg">
                                    <i class="fas fa-cog text-xl"></i><span class="ml-4 hidden md:block">Settings</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </aside>

                <main class="ml-14 md:ml-64 p-8 pt-24 bg-gray-100 min-h-screen">
                    <div class="content h-full mb-10 p-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}
