import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl relative max-w-4xl mx-auto">
      {/* Quote Icon */}
      <div className="absolute -top-8 -left-8 text-6xl text-yellow-500 font-bold leading-none select-none">
        &ldquo;
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-justify mb-6">
        DUCAT Noida is one of the best institutes for Oracle DBA. All trainers are very polite &
        cooperative. Especially Mr. Anjeet sir, he is the one who always guided me. He is very
        hard-working & he has always been my source of inspiration. Mr. Anjeet helped me a lot in
        completing my course. I'm grateful to him for his valuable support. He was always there for
        me. Even after classes, he used to help me a lot. Although all trainers are very humble &
        generous, the kind of dedic…
        <span className="text-blue-500 cursor-pointer ml-1">See more</span>
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with actual image if needed
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold text-gray-800">AbhiShek Singh</p>
          <div className="flex text-yellow-500">
            {'★'.repeat(5)}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
         BEST STUDENT TESTIMONIAL
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-2" />
      </div>

      <TestimonialCard />
    </section>
  );
};

export default TestimonialsSection;
