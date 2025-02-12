import React from "react";
import Image from "next/image";

const DeliveriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      {/* Trips in Progress Section */}
      <div className="wrapper w-11/12 rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="capitalize text-lg font-semibold flex items-center gap-2 mb-4 text-black/40">
          <Image
            src="/truck.png"
            alt=""
            width={40}
            height={40}
            className="opacity-40"
          />
          Trips in Progress
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="wrapperdb flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4"
            >
              <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                <span role="img" aria-label="avatar">
                  👤
                </span>
              </div>
              <span className="mt-2 text-sm">Employee #{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Trips Section */}
      <div className="wrapper w-11/12 rounded-2xl shadow-lg p-6">
        <h2 className="capitalize text-lg font-medium flex items-center gap-2 mb-4 text-black/40">
          <Image
            src="/truck.png"
            alt=""
            width={40}
            height={40}
            className="opacity-40"
          />
          Recent Trips
        </h2>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="wrapperdb flex items-center justify-between bg-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                  <span role="img" aria-label="avatar">
                    👤
                  </span>
                </div>
                <div>
                  <p className="font-medium">
                    Employee #{index + 1} (Vehicle Used)
                  </p>
                  <p className="text-sm">
                    <strong>Client:</strong> Name Placeholder <br />
                    <strong>Destination:</strong> Some Place (XX km)
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveriesPage;
