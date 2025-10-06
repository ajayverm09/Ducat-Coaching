import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-[#20639E] text-white py-8 px-32 flex flex-col md:flex-row items-center mx-auto gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">
          Get expert guidance—call or WhatsApp us today!!
        </h2>
        <p className="mb-6 font-semibold">
          A roadmap for readying key roles in your organization for business in the digital age.
        </p>
        <div className="flex flex-col items-center md:items-start space-y-4 max-w-xs mx-auto md:mx-0">
          <div className="w-full flex flex-col items-center">
            <p className="mb-1">Call</p>
            <a
              href="tel:+917070905090"
              className="bg-white text-blue-700 rounded-md py-2 px-4 inline-flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition w-full max-w-xs"
            >
              <PhoneCall className="w-5 h-5 text-green-600" />
              +91-7070905090
            </a>
          </div>
          <div className="w-full flex flex-col items-center">
            <p className="mb-1">WhatsApp</p>
            <a
              href="https://wa.me/918742993469"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 rounded-md py-2 px-4 inline-flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition w-full max-w-xs"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              +91-8742993469
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fcorporate%2FIf_You_Are_Enroll.png&w=750&q=75"
          alt="Contact illustration"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
}
