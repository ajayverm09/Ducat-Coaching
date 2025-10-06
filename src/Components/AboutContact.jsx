import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="relative bg-cover bg-center min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12"
         style={{ backgroundImage: 'url("https://www.ducatindia.com/_next/static/media/bgform.74be8bf9.jpg")' }}>
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start w-full max-w-6xl text-white gap-8 lg:gap-12">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
            Ready to empower your <br /><span className="text-white">Workforce?</span>
          </h2>
          <p className="mb-3 text-gray-300 text-sm sm:text-base">
            Fill the details in the form to know all about our IT Training
          </p>
          <p className="mb-6 text-gray-300 text-sm sm:text-base">
            Take your first step towards the success with the world-leading IT training company in India where employees not only acquire the skills but we help them to become future-ready.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 sm:mt-0">
                <Phone className="text-orange-500 h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-orange-400 font-semibold text-sm sm:text-base">Phone Number</p>
                <p className="text-sm sm:text-base">+91-7070905090</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 sm:mt-0">
                <Mail className="text-orange-500 h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-orange-400 font-semibold text-sm sm:text-base">E-mail</p>
                <p className="text-sm sm:text-base">info@ducatindia.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 sm:mt-0">
                <MapPin className="text-orange-500 h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-orange-400 font-semibold text-sm sm:text-base">Corporate Address</p>
                <p className="text-sm sm:text-base">A-43 & A-52, Noida Sector 16, Behind MacD, 201301, UP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white text-black rounded-lg shadow-lg w-full lg:w-[400px] p-6 sm:p-8">
          <h3 className="text-center font-semibold text-lg sm:text-xl text-gray-800 mb-4 border-b-2 border-orange-400 inline-block pb-2">
            ENQUIRE NOW
          </h3>
          <form className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
            />
            <select className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base">
              <option>Select a Course</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>AI/ML</option>
            </select>
            <select className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base">
              <option>Select a Branch</option>
              <option>Noida</option>
              <option>Delhi</option>
              <option>Gurgaon</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 sm:py-3 rounded text-sm sm:text-base transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;