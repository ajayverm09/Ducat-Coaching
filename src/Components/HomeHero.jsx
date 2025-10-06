// Filename: AIpoweredCourses.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

const HomeHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[400px] bg-white px-8 py-16 relative">
      {/* Left: Text and Search */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Learn from the future:
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Explore our AI-powered courses
        </h3>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Search Your Favourite Course Today."
            className="bg-blue-50 px-4 py-2 rounded-l-lg text-base w-full outline-none"
          />
          <button className="bg-blue-400 px-4 rounded-r-lg flex items-center justify-center">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
      {/* Right: Image and Tag */}
      <div className="flex-1 flex flex-col pt-10 md:pt-0 items-center relative">
        <div className="relative inline-block">
          <img
            src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fbanner%2Fpic3.png&w=640&q=75"
            alt="Cloud Computing Girl"
            className="w-96 h-96 object-fill  "
          />
          {/* Decorative border using absolute div */}
          <span className="absolute inset-0 rounded-[2.5rem] border-4 border-orange-200 z-[-1]" />
        </div>
        {/* Course Label */}
        <div className="mt-4 flex flex-col items-center">
          <div className="bg-purple-700 rounded-xl shadow px-4 py-2 text-white text-lg font-semibold -mb-2 z-10">
            Cloud Computing
          </div>
          <div className="flex items-center mt-2 bg-white rounded-full shadow px-4 py-1">
            <span className="text-yellow-500 text-xl mr-2">🪙</span>
            <span className="font-semibold text-purple-800 text-base">
              16 LPA
            </span>
          </div>
        </div>
      </div>
      {/* Optional: Decorative shapes (can be added with absolutely positioned divs or svg for details) */}
    </div>
  );
};

export default HomeHero;