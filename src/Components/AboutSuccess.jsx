import React from 'react';
import CountUp from 'react-countup';

const SuccessSection = () => {
  return (
    <section className="text-center">
      {/* Title Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-widest mb-2">
          Our Success
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-8" />
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#2E3676] to-[#510C6C] text-white pt-15 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Stat 1 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500">
              <CountUp end={24} duration={2} suffix="+" />
            </h3>
            <p className="mt-2 text-sm">Years of IT Training</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500">
              <CountUp end={400000} duration={3} separator="," suffix="+" />
            </h3>
            <p className="mt-2 text-sm">Professionals Trained</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-4xl font-bold text-orange-500">
              <CountUp end={1000} duration={2.5} separator="," suffix="+" />
            </h3>
            <p className="mt-2 text-sm">Workshops</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
