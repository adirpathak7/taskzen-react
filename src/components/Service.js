import React from 'react'
import { Link } from 'react-router-dom'
export default function Service() {
    return (
        <>
            <header className="bg-purple-700 text-white py-8 mt-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-extrabold">
                        Empowering Connections: Freelancers and Companies
                    </h1>
                    <p className="mt-4 text-xl">
                        Find the perfect match for your project needs, hassle-free.
                    </p>
                    <a
                        href="#explore"
                        className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 shadow-lg"
                    >Explore Services</a
                    >
                </div>
            </header>

            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-purple-600">
                        TaskZen Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        <div className="bg-purple-700 p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-white">For Freelancers</h3>
                            <ul className="mt-6 space-y-4 text-lg">
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-white"></i> Showcase your
                                    talent to companies.
                                </li>
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-white"></i> Build
                                    professional profiles with portfolios.
                                </li>
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-white"></i> Bid on projects
                                    or accept offers.
                                </li>
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-white"></i> Gain exposure to
                                    global opportunities.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-purple-700 p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-white">For Companies</h3>
                            <ul className="mt-6 space-y-4 text-lg">
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-green-500"></i> Post detailed
                                    project requirements.
                                </li>
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-green-500"></i> Review
                                    freelancer profiles and ratings.
                                </li>
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-green-500"></i> Hire the best
                                    talent for your needs.
                                </li>
                                <li className="text-white">
                                    <i className="fas fa-check-circle text-green-500"></i> Secure and
                                    efficient collaboration tools.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-purple-600 text-center">Sector and Sectors Service List</h1>


                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Hospital</h3>
                            <p className="mt-4 text-white">
                                Appointment booking,Dovtor Directory,Patient Portals,Emergency Services,Online Bill Payment,Health Packages.
                            </p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Clinic</h3>
                            <p className="mt-4 text-white">
                                Service Listings ,Teleconsultation,Location and Contact Info,Feedback and Reviews,Promotional Offers.
                            </p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Telemedicinie</h3>
                            <p className="mt-4 text-white">Virtual Consultations,E-Prescriptions,Symptom Checkers,Medication Delivery,Health Monitoring.</p>
                        </div>

                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Online Learning Platforms</h3>
                            <p className="mt-4 text-white">Course Catalog,Live classNamees,Recorded Lectures,Assessments and Quizzes,Certification,,Discussion Forums,Mobile Learning.</p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Schools</h3>
                            <p className="mt-4 text-white">Admission Portals,Homework Submission,Timetable and Calendar,Parent Portals,Learning Resources,Fee Payment.</p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Colleges and Universities</h3>
                            <p className="mt-4 text-white">Program Listings,Student Portals,Research Publications,Alumni Network,Campus Tours.</p>
                        </div>

                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Online Shopping</h3>
                            <p className="mt-4 text-white">Product Catalog,Search and Filters,Shopping Cart,Order Management,Payment Gateway Integration,Discounts and Offers,Customer Support.</p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Marketplaces</h3>
                            <p className="mt-4 text-white">Vendor Registration,Product Listings,Multi-Vendor Management,Customer Reviews and Ratings,Shipping Integration,Data Analytics.</p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Streaming Services</h3>
                            <p className="mt-4 text-white">On-Demand Content,Live Streaming,Content Recommendations,Offline Downloading,Subscription Management,Parental Controls,Multi-Device Support.</p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Gaming Platforms</h3>
                            <p className="mt-4 text-white">Game Store,Online Multiplayer,Leaderboards and Achievements,Game Streaming,In-App Purchases,Community Forums,Cloud Gaming.</p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Media Platforms</h3>
                            <p className="mt-4 text-white">Content Uploads,User Profiles,Ad-Supported Content,Playlists and Favorites,Content Monetization,Analytics for Creators,Social Sharing.</p>
                        </div>
                        <div
                            className="bg-purple-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <h3 className="text-2xl font-semibold text-white">Booking Websites</h3>
                            <p className="mt-4 text-white">Flight Booking,Hotel Reservations,Package Deals,Car Rentals,Ticket Booking,Payment Options,Cancellation and Refunds.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="explore" className="py-16 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center">How It Works</h2>
                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-blue-600">
                                For Freelancers
                            </h3>
                            <ol className="mt-6 space-y-4 text-lg list-decimal list-inside">
                                <li>Create a profile and showcase your skills.</li>
                                <li>Bid on projects matching your expertise.</li>
                                <li>Communicate directly with clients.</li>
                                <li>Deliver high-quality work and gain reviews.</li>
                                <li>Receive payments securely via the platform.</li>
                            </ol>
                        </div>

                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-blue-600">For Companies</h3>
                            <ol className="mt-6 space-y-4 text-lg list-decimal list-inside">
                                <li>Sign up and post detailed project descriptions.</li>
                                <li>Review bids and freelancer profiles.</li>
                                <li>Hire the best fit for your project.</li>
                                <li>Collaborate using our communication tools.</li>
                                <li>Release payments upon project completion.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center">Why Choose TaskZen?</h2>
                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-blue-600">
                                For Freelancers
                            </h3>
                            <ul className="mt-6 space-y-4 text-lg">
                                <li>
                                    <i className="fas fa-star text-yellow-500"></i> Access to diverse
                                    projects worldwide.
                                </li>
                                <li>
                                    <i className="fas fa-lock text-blue-500"></i> Safe and secure
                                    payment methods.
                                </li>
                                <li>
                                    <i className="fas fa-laptop text-green-500"></i> Flexibility to work
                                    on your schedule.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-blue-600">For Companies</h3>
                            <ul className="mt-6 space-y-4 text-lg">
                                <li>
                                    <i className="fas fa-users text-purple-500"></i> Access to skilled
                                    professionals globally.
                                </li>
                                <li>
                                    <i className="fas fa-clock text-gray-500"></i> Time-efficient hiring
                                    process.
                                </li>
                                <li>
                                    <i className="fas fa-chart-line text-green-500"></i> Cost-effective
                                    solutions for your projects.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold">What Our Users Say</h2>
                    <div className="mt-8">
                        <p className="text-lg italic">
                            "Hiring freelancers on TaskZen was seamless. Our project was
                            completed ahead of schedule!"
                        </p>
                        <p className="mt-4 text-lg italic">
                            "As a freelancer, TaskZen has been my go-to platform for reliable
                            work opportunities."
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-purple-600 text-white text-center">
                <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
                <p className="mt-6 text-lg">
                    Join TaskZen today and experience the future of freelancing!
                </p>
                <div className="mt-8">
                    <Link
                        to="/Register"
                        className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 shadow-lg"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </section>
        </>
    )
}
