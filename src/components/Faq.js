import React from 'react';
import faqImage from '../images/faq.jpg';
import Footer from './Footer';

export default function Faq() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-200 py-12 pt-20 text-center">
        <h1 className="text-4xl font-bold text-blue-800">
          Frequently Asked <span className="text-purple-600">Questions</span>
        </h1>
      </section>

      {/* Image */}
      <div className="flex justify-center bg-white py-6">
        <img src={faqImage} alt="FAQ illustration" className="w-full max-w-3xl rounded-lg shadow-md" />
      </div>

      {/* FAQ Sections */}
      <main className="container mx-auto px-4 py-10">
        {/* Freelancers Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Freelancers</h2>
          <div className="bg-purple-600 shadow-md rounded-lg p-6">
            {[
              {
                q: "1. How can I find projects?",
                a: "Browse through the project listings on our platform and apply to the ones that match your skills.",
              },
              {
                q: "2. How do I get paid?",
                a: "Payments are processed securely through our platform once the client approves your work.",
              },
              {
                q: "3. Are there any fees for freelancers?",
                a: "Yes, a small service fee is deducted from your earnings for using the platform.",
              },
              {
                q: "4. Can I work on multiple projects simultaneously?",
                a: "Yes, as long as you can manage your time effectively and meet all deadlines.",
              },
              {
                q: "5. What happens if a client doesn’t respond?",
                a: "You can report the issue to our support team, and we will assist in resolving the matter.",
              },
            ].map((item, index) => (
              <div key={index} className="mb-4 bg-white p-4 border-2 rounded-lg">
                <h3 className="font-medium text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Companies Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Companies</h2>
          <div className="bg-purple-600 shadow-md rounded-lg p-6">
            {[
              {
                q: "1. How do I post a project?",
                a: 'Log in to your account, navigate to the "Post a Project" section, and provide details about your requirements.',
              },
              {
                q: "2. How are freelancers selected?",
                a: "You can review proposals from freelancers and choose the one that best fits your needs.",
              },
              {
                q: "3. What happens if I am not satisfied with the work?",
                a: "You can request revisions or use the dispute resolution feature on our platform.",
              },
              {
                q: "4. Can I track the progress of my project?",
                a: "Yes, you can communicate with the freelancer and request regular updates through the platform.",
              },
              {
                q: "5. Are there any hidden costs?",
                a: "No, all fees and charges are clearly outlined before you hire a freelancer.",
              },
            ].map((item, index) => (
              <div key={index} className="mb-4 bg-white p-4 border-2 rounded-lg">
                <h3 className="font-medium text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Admin Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Admin</h2>
          <div className="bg-purple-600 shadow-md rounded-lg p-6">
            {[
              {
                q: "1. How do I manage user accounts?",
                a: "Admins can manage user accounts through the admin dashboard, where they can activate, deactivate, or edit accounts.",
              },
              {
                q: "2. Can I monitor platform activity?",
                a: "Yes, the admin dashboard provides detailed insights into user activity and project progress.",
              },
              {
                q: "3. How do I resolve disputes?",
                a: "Admins can mediate disputes through the platform's resolution center by reviewing evidence from both parties.",
              },
              {
                q: "4. Can I customize platform settings?",
                a: "Yes, admins can adjust platform settings such as fees, project categories, and user permissions.",
              },
            ].map((item, index) => (
              <div key={index} className="mb-4 bg-white p-4 border-2 rounded-lg">
                <h3 className="font-medium text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
