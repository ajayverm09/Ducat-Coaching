import React from 'react';

const testimonials = [
  {
    name: 'Mohammad Saquib',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Ftestimonial%2F1717497795694saquib.jpg&w=128&q=75',
    text: "It's an ok institute in a good location. I joined this institute for Linux training. Our Linux trainer Mohammad Asif is doing great job to trained us Linux.",
  },
  {
    name: 'Jitendra Kumar',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Ftestimonial%2F1677906061532Jitendra.jpg&w=128&q=75',
    text: "I am Jitendra & taking coaching in .Net. Ducat is best coaching institute for .Net Technology & Aslam sir is also very good trainer for .Net.",
  },
  {
    name: 'Aaquib',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Ftestimonial%2F1717499086508Aaquib.jpg&w=128&q=75',
    text: "Ducat is one of the best institute for learning any technology in NCR region. Here all the facilities are well experienced and have proper knowledge about the particul",
    readMore: true,
  },
  {
    name: 'Randeep Singh',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Ftestimonial%2F1717500526080randeep.jpg&w=128&q=75',
    text: "This is a new testimonial added to the list. The institute provided me with excellent training and support throughout my course.",
  },
];

export default function Testimonials() {
  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1">Testimonials</h2>
      <div className="flex flex-wrap gap-6">
        {testimonials.map(({ name, image, text, readMore }, idx) => (
          <div
            key={idx}
            className="bg-blue-200 rounded-xl p-6 w-full sm:w-72 relative flex flex-col gap-3"
          >
            <span className="text-4xl text-orange-300 absolute top-4 left-4 select-none">“</span>
            <h3 className="font-bold text-blue-900 z-10 flex items-center gap-3">
              {name}
              <img
                src={image}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-orange-500 object-cover"
              />
            </h3>
            <div className="text-sm italic text-blue-900 z-10">{text}</div>
            {readMore && (
              <p className="text-orange-600 italic cursor-pointer self-end mt-auto">Read more</p>
            )}
            <div className="absolute top-6 left-4 text-orange-300 opacity-40 pointer-events-none select-none">“</div>
          </div>
        ))}
      </div>
    </section>
  );
}
