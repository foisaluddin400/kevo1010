import React from "react";
import Man from "../../components/LayoutComponents/Man";
import Services from "../../components/LayoutComponents/Services";
import Bag from "../../components/LayoutComponents/Bag";
import ManageRefundUser from "./ManageRefundUser";
import { FaRegCircleUser } from "react-icons/fa6";

const ManageRefund = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#2dbcff3f] to-[#ffffff] rounded-2xl  border border-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-black">
          {/* Total Users Card */}
          <div className="flex items-center justify-center py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center bg-[#2DBEFF33] text-4xl rounded-lg justify-center">
                  <FaRegCircleUser />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-medium text-[#6B7280] mb-1">
                  Total Users
                </h3>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  10
                </p>
              </div>
            </div>
          </div>

          {/* Total Task Providers Card */}
          <div className="flex items-center justify-center py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t md:border-t-0 border-black/10">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Services></Services>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-1">
                  Total Task Providers
                </h3>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  34
                </p>
              </div>
            </div>
          </div>

          {/* Active Tasks Card */}
          <div className="flex items-center justify-center py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t md:border-t-0 border-gray-200">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <Bag></Bag>
                  </div>
                  {/* Decorative checklist lines */}
                  <div className="absolute top-2 left-2 w-3 h-0.5 bg-green-400 rounded"></div>
                  <div className="absolute top-4 left-2 w-4 h-0.5 bg-yellow-400 rounded"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-1">
                  Active Tasks
                </h3>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ManageRefundUser></ManageRefundUser>
    </div>
  );
};

export default ManageRefund;
