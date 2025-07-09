import React from 'react';

const Help = () => {
  const faqs = [
    {
      question: 'How can I track my payments?',
      answer: 'You can track your payments in the Payment History section of your dashboard. It shows all completed and pending payments.',
    },
    {
      question: 'How do I add a new freelancer?',
      answer: 'Go to the Freelancers page and click on "Add New Freelancer". Fill in the required details and save.',
    },
    {
      question: 'What if there is an issue with a payment?',
      answer: 'Please contact our support team immediately via email or phone provided below. We will assist you promptly.',
    },
    {
      question: 'How can I update my profile information?',
      answer: 'Navigate to the Profile page where you can update your personal and contact information.',
    },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-100 min-h-screen">
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Help & Support</h1>

        {/* FAQ Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-indigo-300">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-gray-50 rounded p-4 cursor-pointer hover:bg-indigo-50 transition">
                <summary className="font-semibold text-indigo-600">{faq.question}</summary>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-indigo-300">
            Contact Support
          </h2>
          <p className="mb-2 text-gray-800">
            If you need further assistance, please reach out to us:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Email:</strong> support@yourcompany.com</li>
            <li><strong>Phone:</strong> +91 12345 67890</li>
            <li><strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM</li>
          </ul>
        </div>

        {/* Optional Chat Placeholder */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-indigo-300">
            Live Chat (Coming Soon)
          </h2>
          <div className="border border-gray-300 rounded p-4 text-gray-500 italic">
            Chat functionality will be available here soon. Stay tuned!
          </div>
        </div>
      </section>
    </main>
  );
};

export default Help;
