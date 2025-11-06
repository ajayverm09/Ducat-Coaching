// Filename: AIpoweredCourses.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaUsers,
  FaClock,
  FaPlay,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { HiSparkles, HiChip } from "react-icons/hi";

const HomeHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const scrollPosition = useRef(0);

  // Handle image load
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fbanner%2Fpic3.png&w=640&q=75";
    img.onload = () => setImageLoaded(true);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showVideoModal) {
      // Save current scroll position
      scrollPosition.current = window.scrollY;

      // Prevent body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Restore scroll position
      window.scrollTo(0, scrollPosition.current);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [showVideoModal]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showVideoModal) {
        setShowVideoModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showVideoModal]);

  const features = [
    {
      icon: <FaStar className="text-yellow-500" />,
      title: "4.8/5 Rating",
      description: "From 10,000+ students",
    },
    {
      icon: <FaUsers className="text-blue-500" />,
      title: "Expert Instructors",
      description: "Industry professionals",
    },
    {
      icon: <FaClock className="text-purple-500" />,
      title: "Self-paced Learning",
      description: "Learn at your own speed",
    },
  ];

  const handleExploreCourses = () => {
    // Navigate to blogs page
    window.location.href = "/blogs";
  };

  const handleWatchDemo = () => {
    setShowVideoModal(true);
  };

  const closeModal = () => {
    setShowVideoModal(false);
  };

  // Handle click outside modal to close
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-16 py-12 lg:py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 blur-2xl"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #4f46e5 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #7c3aed 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        {/* Left: Text */}
        <div className="flex-1 max-w-xl z-10 lg:pr-8">
          <div className="flex items-center mb-4">
            <HiSparkles className="text-orange-500 text-2xl mr-2 animate-pulse" />
            <span className="text-orange-500 font-semibold tracking-wide">
              NEW AI-POWERED LEARNING
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Learn from the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              future
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6 leading-tight">
            Explore our AI-powered courses
          </h2>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Unlock your potential with cutting-edge courses designed by industry
            experts and enhanced with AI technology. Transform your career with
            skills that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={handleExploreCourses}
              className="group px-8 py-4 cursor-pointer bg-indigo-600 hover:bg-white text-white border-2 border-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              <span className="transition-colors duration-300 group-hover:text-indigo-600">
                Explore Courses
              </span>
              <FaArrowRight className="ml-2 transition-colors duration-300 group-hover:text-indigo-600" />
            </button>

            {/* Original Watch Demo Button */}
            <div className="group">
              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 cursor-pointer bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-indigo-600 group-hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-2 border-indigo-600"
              >
                <FaPlay className="mr-2 text-indigo-600 group-hover:text-white" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Course stats with tabs */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between mb-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`flex-1 text-center py-2 px-1 rounded-lg transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm"
                      : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex justify-center mb-1">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </button>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center">
                <HiChip className="text-indigo-600 text-2xl mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    AI-Enhanced Learning
                  </h4>
                  <p className="text-sm text-gray-600">
                    Personalized recommendations based on your learning style
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image and Tag */}
        <div className="flex-1 flex flex-col pt-10 lg:pt-0 items-center relative lg:pl-12">
          <div className="relative inline-block">
            {/* Image placeholder while loading */}
            {!imageLoaded && (
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] animate-pulse shadow-2xl"></div>
            )}

            <img
              src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fbanner%2Fpic3.png&w=640&q=75"
              alt="Cloud Computing Girl"
              className={`w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-[3rem] transition-opacity duration-700 shadow-2xl ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Decorative border using absolute div */}
            <span className="absolute inset-0 rounded-[3rem] border-4 border-gradient-to-r from-orange-200 to-pink-200 z-[-1] transform rotate-3"></span>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-xl p-4 animate-bounce">
              <span className="text-3xl">🚀</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-xl p-4 animate-pulse">
              <span className="text-3xl">💡</span>
            </div>

            {/* Floating course cards */}
            <div className="absolute top-1/4 -left-16 bg-white rounded-lg shadow-lg p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300 w-32">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 text-xs font-bold">ML</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold">Machine Learning</h4>
                  <p className="text-xs text-gray-500">12 LPA</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -right-16 bg-white rounded-lg shadow-lg p-3 transform rotate-12 hover:rotate-0 transition-transform duration-300 w-32">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-purple-600 text-xs font-bold">AI</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold">AI & Deep Learning</h4>
                  <p className="text-xs text-gray-500">15 LPA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Label */}
          <div className="mt-8 flex flex-col items-center animate-fade-in">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-xl px-8 py-4 text-white text-xl font-bold -mb-2 z-10 transform hover:scale-105 transition-transform duration-300">
              Cloud Computing
            </div>
            <div className="flex items-center mt-3 bg-white rounded-full shadow-xl px-8 py-3 transform hover:scale-105 transition-transform duration-300">
              <span className="text-yellow-500 text-2xl mr-3">🪙</span>
              <span className="font-bold text-purple-800 text-lg">
                16 LPA Average Salary
              </span>
            </div>
          </div>
        </div>

        {/* Add custom styles for animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999]"
          onClick={handleModalBackdropClick}
        >
          <div className="relative w-full max-w-4xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close video modal"
            >
              <FaTimes className="text-3xl" />
            </button>

            {/* Video container */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="AI-Powered Learning Platform Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                AI-Powered Learning Platform Demo
              </h3>
              <p className="text-gray-300">
                Discover how our AI-enhanced courses can transform your learning
                journey
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeHero;
