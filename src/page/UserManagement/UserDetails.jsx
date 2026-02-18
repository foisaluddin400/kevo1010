import React from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaBan, FaCheckCircle } from 'react-icons/fa';

const UserDetails = () => {
  // Example user data (in real app, this would come from props / API / Redux)
  const user = {
    fullName: "Rahim Khan",
    email: "rahim.khan@example.com",
    phone: "+880 1712-345678",
    address: "House 42, Road 12, Block C, Halishahar",
    city: "Chittagong",
    country: "Bangladesh",
    joinedDate: "March 15, 2024",
    profilePic: null, // can be URL or null → shows default icon
    isBlocked: false,
    isHostApproved: false,
  };

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      <div className="  max-w-5xl m-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-10 text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <FaUserCircle className="w-28 h-28 text-white opacity-90" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{user.fullName}</h1>
              <p className="mt-2 text-blue-100 flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Full Name</label>
              <div className="text-lg font-semibold text-gray-900">{user.fullName}</div>
            </div>

            {/* Email */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Email Address</label>
              <div className="text-lg font-semibold text-gray-900">{user.email}</div>
            </div>

            {/* Phone */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Phone Number</label>
              <div className="text-lg font-semibold text-gray-900">{user.phone || 'Not provided'}</div>
            </div>

            {/* Address */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Address</label>
              <div className="text-lg font-semibold text-gray-900">{user.address || 'Not provided'}</div>
            </div>

            {/* City */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">City</label>
              <div className="text-lg font-semibold text-gray-900">{user.city}</div>
            </div>

            {/* Country */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow">
              <label className="text-sm font-medium text-gray-500 block mb-1">Country</label>
              <div className="text-lg font-semibold text-gray-900">{user.country}</div>
            </div>

            {/* Joined Date */}
            <div className="border border-gray-300 rounded-lg p-5 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <label className="text-sm font-medium text-gray-500 block mb-1">Joined Date</label>
              <div className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" />
                {user.joinedDate}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`
                flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-lg transition-all
                ${user.isBlocked 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg'
                }
              `}
              disabled={user.isBlocked}
            >
              <FaBan />
              {user.isBlocked ? 'User is Blocked' : 'Block The User'}
            </button>

            <button
              className={`
                flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-lg transition-all
                ${user.isHostApproved 
                  ? 'bg-green-600 text-white cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                }
              `}
              disabled={user.isHostApproved}
            >
              <FaCheckCircle />
              {user.isHostApproved ? 'Host Already Approved' : 'Approve as Host'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;