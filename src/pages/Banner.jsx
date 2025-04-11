import React from 'react';
import mainImage from "../assets/images/Rectangle-1.png";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden z-0">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="ml-26 max-[880px]:ml-6 max-w-2xl">
          <p className="text-white text-lg mb-4">
            No lines, Less hassle, Lower costs.
          </p>
          <h1 className="text-white text-6xl max-[880px]:text-4xl font-bold leading-tight mb-8">
            Easy Online Suboxone Treatment for Opioid Addiction
          </h1>
          <button className="bg-emerald-400 text-white px-8 py-3 rounded-md hover:bg-emerald-500 transition-colors flex items-center space-x-2">
            <span>Download The App Today</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
