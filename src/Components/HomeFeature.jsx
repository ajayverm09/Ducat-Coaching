import React from 'react';

const features = [
  {
    title: 'Learn The Essential Skills',
    image: 'https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-02.png&w=96&q=75', // Replace with your image URL
  },
  {
    title: 'Earn Certificates And Degrees',
    image: 'https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-01.png&w=96&q=75', // Replace with your image URL
  },
  {
    title: 'Get Ready for The Next Career',
    image: 'https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-04.png&w=96&q=75', // Replace with your image URL
  },
  {
    title: 'Master at Different Areas',
    image: 'https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-03.png&w=96&q=75', // Replace with your image URL
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-blue-600 py-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={feature.image} alt={feature.title} className="w-10 h-10 object-contain" />
            <p className="text-sm leading-tight">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
