import React from 'react'
import faqImage from '../images/faq.jpg'
export default function Faq() {
    return (
        <>
            <section className="min-h-full md:ml-[40%] ml-36 mt-3 flex justify-self-center items-center bg-[#e5e7eb] overflow-hidden">
                <div className=" relative text-3xl font-bold text-blue-800">
                    <span className="relative ">Frequently Asked</span>
                    <span className="text secondtext ">Questions</span>
                </div>
            </section>
            <div className="border-2 shadow-inner rounded-md bg-white flex justify-center items-center">
                <div className="mt-8 opacity-100 ">
                    <img src={faqImage} alt="" className="mx-auto" />
                </div>

                <main className="container mx-auto p-6">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Freelancers</h2>
                        <div className="bg-purple-600 shadow-md rounded-lg p-6">
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">1. How can I find projects?</h3>
                                <p className="text-gray-700">Browse through the project listings on our platform and apply to the ones that match your skills.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">2. How do I get paid?</h3>
                                <p className="text-gray-700">Payments are processed securely through our platform once the client approves your work.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">3. Are there any fees for freelancers?</h3>
                                <p className="text-gray-700">Yes, a small service fee is deducted from your earnings for using the platform.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">4. Can I work on multiple projects simultaneously?</h3>
                                <p className="text-gray-700">Yes, as long as you can manage your time effectively and meet all deadlines.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">5. What happens if a client doesn’t respond?</h3>
                                <p className="text-gray-700">You can report the issue to our support team, and we will assist in resolving the matter.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Companies</h2>
                        <div className="bg-purple-600 shadow-md rounded-lg p-6">
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">1. How do I post a project?</h3>
                                <p className="text-gray-700">Log in to your account, navigate to the "Post a Project" section, and provide details about your requirements.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">2. How are freelancers selected?</h3>
                                <p className="text-gray-700">You can review proposals from freelancers and choose the one that best fits your needs.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">3. What happens if I am not satisfied with the work?</h3>
                                <p className="text-gray-700">You can request revisions or use the dispute resolution feature on our platform.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">4. Can I track the progress of my project?</h3>
                                <p className="text-gray-700">Yes, you can communicate with the freelancer and request regular updates through the platform.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">5. Are there any hidden costs?</h3>
                                <p className="text-gray-700">No, all fees and charges are clearly outlined before you hire a freelancer.</p>
                            </div>

                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Admin</h2>
                        <div className="bg-purple-600 shadow-md rounded-lg p-6">
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">1. How do I manage user accounts?</h3>
                                <p className="text-gray-700">Admins can manage user accounts through the admin dashboard, where they can activate, deactivate, or edit accounts.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">2. Can I monitor platform activity?</h3>
                                <p className="text-gray-700">Yes, the admin dashboard provides detailed insights into user activity and project progress.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">3. How do I resolve disputes?</h3>
                                <p className="text-gray-700">Admins can mediate disputes through the platform's resolution center by reviewing evidence from both parties.</p>
                            </div>
                            <div className="mb-4 bg-white p-2 border-2 rounded-lg">
                                <h3 className="font-medium text-lg">4. Can I customize platform settings?</h3>
                                <p className="text-gray-700">Yes, admins can adjust platform settings such as fees, project categories, and user permissions.</p>
                            </div>

                        </div>
                    </section>


                </main>

            </div>
        </>
    )
}
