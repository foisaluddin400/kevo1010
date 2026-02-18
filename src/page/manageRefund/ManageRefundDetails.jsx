import React from 'react';
import { 
  FaFileInvoiceDollar, FaIdCard, FaUser, FaUserTie, 
  FaCalendarAlt, FaFileAlt, FaBan, FaCheckCircle 
} from 'react-icons/fa';

const ManageRefundDetails = () => {
  // Example refund data (in real app → from props / API / Redux)
  const refund = {
    paymentId: "PAY-REF-987654321",
    jobId: "JOB-2025-004567",
    customer: {
      name: "Karim Ahmed",
      email: "karim.ahmed@example.com",
    },
    serviceProvider: {
      name: "Rahim Electrician",
      email: "rahim.service@example.com",
    },
    dateSubmitted: "February 10, 2026",
    spDecision: "Requested Refund – Service not completed as promised",
    supportingDocs: [
      { name: "chat_screenshot.png", url: "#" },
      { name: "invoice_copy.pdf", url: "#" },
      { name: "video_proof.mp4", url: "#" },
    ],
    status: "pending", // "pending" | "approved" | "rejected"
    refundAmount: "৳ 4,500",
  };

  const isPending = refund.status === "pending";
  const isApproved = refund.status === "approved";
  const isRejected = refund.status === "rejected";

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      <div className="max-w-5xl m-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-8 py-10 text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold">Refund Request Details</h1>
              <p className="mt-2 text-indigo-100 flex items-center gap-2 text-lg">
                <FaFileInvoiceDollar className="text-2xl" />
                Payment ID: {refund.paymentId}
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg text-center">
              <p className="text-sm uppercase tracking-wide">Refund Amount</p>
              <p className="text-2xl font-bold">{refund.refundAmount}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Payment ID */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Payment ID</label>
              <div className="text-lg font-semibold text-gray-900">{refund.paymentId}</div>
            </div>

            {/* Job ID */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Job ID</label>
              <div className="text-lg font-semibold text-gray-900">{refund.jobId}</div>
            </div>

            {/* Customer */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Customer</label>
              <div className="text-lg font-semibold text-gray-900">
                {refund.customer.name}
                <p className="text-sm text-gray-600 mt-1">{refund.customer.email}</p>
              </div>
            </div>

            {/* Service Provider */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Service Provider</label>
              <div className="text-lg font-semibold text-gray-900">
                {refund.serviceProvider.name}
                <p className="text-sm text-gray-600 mt-1">{refund.serviceProvider.email}</p>
              </div>
            </div>

            {/* Date Submitted */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Date Submitted</label>
              <div className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FaCalendarAlt className="text-indigo-600" />
                {refund.dateSubmitted}
              </div>
            </div>

            {/* Service Provider Decision / Reason */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow md:col-span-2">
              <label className="text-sm font-medium text-gray-500 block mb-1">
                Service Provider Decision / Refund Reason
              </label>
              <div className="text-lg font-semibold text-gray-900 mt-1">
                {refund.spDecision || "No decision provided yet"}
              </div>
            </div>

            {/* Supporting Documentation */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow md:col-span-2">
              <label className="text-sm font-medium text-gray-500 block mb-3">
                Supporting Documentation
              </label>
              {refund.supportingDocs.length > 0 ? (
                <div className="space-y-2">
                  {refund.supportingDocs.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 hover:underline text-base"
                    >
                      <FaFileAlt className="text-gray-500" />
                      {doc.name}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No documents attached</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`
                flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-lg transition-all w-full sm:w-auto
                ${isRejected || !isPending
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg'
                }
              `}
              disabled={!isPending}
            >
              <FaBan />
              {isRejected ? 'Already Rejected' : isApproved ? 'Cannot Reject' : 'Reject Refund'}
            </button>

            <button
              className={`
                flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-lg transition-all w-full sm:w-auto
                ${isApproved || !isPending
                  ? 'bg-green-600 text-white cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                }
              `}
              disabled={!isPending}
            >
              <FaCheckCircle />
              {isApproved ? 'Already Approved' : 'Approve Payment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRefundDetails;