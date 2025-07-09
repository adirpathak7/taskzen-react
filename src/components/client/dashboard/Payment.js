import React from 'react';

const Payment = () => {
  const client = {
    name: 'Aditya Pathak',
    email: 'aditya.pathak@example.com',
    phone: '+91 98765 43210',
    id: 'CL-786001',
  };

  const payments = [
    {
      freelancer: 'Ankit Sharma',
      project: 'Landing Page Design',
      amount: '₹5,000',
      status: 'Paid',
      paymentDate: '2025-07-07',
      method: 'UPI',
    },
    {
      freelancer: 'Priya Mehta',
      project: 'Mobile App UI/UX',
      amount: '₹8,500',
      status: 'Pending',
      paymentDate: '2025-07-10',
      method: 'Bank Transfer',
    },
    {
      freelancer: 'Rohit Verma',
      project: 'Backend API Setup',
      amount: '₹12,000',
      status: 'Paid',
      paymentDate: '2025-07-02',
      method: 'PayPal',
    },
  ];

  return (
    <main className="flex-1 bg-gray-100 min-h-screen space-y-8">

      {/* Client Info */}
      <section className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Client Info</h2>
          <p><strong>Name:</strong> {client.name}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Phone:</strong> {client.phone}</p>
        </div>
        <div className="self-end md:self-center text-right">
          <p className="text-sm text-gray-500">Client ID</p>
          <p className="font-bold text-lg text-indigo-600">{client.id}</p>
        </div>
      </section>

      {/* Payment History */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Payment History</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-800 border border-gray-200">
            <thead className="bg-gray-100 text-xs uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Freelancer</th>
                <th className="px-4 py-3 text-left">Project</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Payment Date</th>
                <th className="px-4 py-3 text-left">Method</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{payment.freelancer}</td>
                  <td className="px-4 py-3">{payment.project}</td>
                  <td className="px-4 py-3 font-medium">{payment.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        payment.status === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{payment.paymentDate}</td>
                  <td className="px-4 py-3">{payment.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Payment;
