import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-[#20639E] text-white py-8 px-4 md:px-8 lg:px-32 flex flex-col md:flex-row items-center justify-center mx-auto gap-8 md:gap-12">
      <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
          Get expert guidance—call or WhatsApp us today!!
        </h2>
        <p className="mb-6 md:mb-8 font-semibold text-base md:text-lg">
          A roadmap for readying key roles in your organization for business in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <p className="mb-1 font-medium">Call</p>
            <a
              href="tel:+917070905090"
              className="bg-white text-blue-700 rounded-md py-3 px-4 inline-flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition w-full sm:w-auto min-w-[200px]"
            >
              <PhoneCall className="w-5 h-5 text-green-600" />
              +91-7070905090
            </a>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <p className="mb-1 font-medium">WhatsApp</p>
            <a
              href="https://wa.me/918742993469"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 rounded-md py-3 px-4 inline-flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition w-full sm:w-auto min-w-[200px]"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              +91-8742993469
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fcorporate%2FIf_You_Are_Enroll.png&w=750&q=75"
          alt="Contact illustration"
          className="w-full max-w-[280px] md:max-w-xs lg:max-w-md object-contain"
        />
      </div>
    </section>
  );
}