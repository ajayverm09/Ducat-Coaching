import React from 'react';

// --- Logo Data ---
const logoData = [
  { name: 'iBilt', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060440576Ibilt.png&w=640&q=75' },
  { name: 'Accenture', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060458759Accenture.png&w=640&q=75' },
  { name: 'Aditya Birla Group', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060406072Aditya%20Birla%20Group.png&w=640&q=75' },
  { name: 'Algoscale', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060469084Algoscale.png&w=640&q=75' },
  { name: 'Bajaj', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060480490Bajaj.png&w=640&q=75' },
  { name: 'Birlasoft', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060491701Birlasoft.png&w=640&q=75' },
  { name: 'CSC', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060501852CSC.png&w=640&q=75' },
  { name: 'Cognizant', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060518401Cognizant%20Logo.png&w=640&q=75' },
  { name: 'Hewitt', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060528527Hewitt.png&w=640&q=75' },
  { name: 'IBM', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060536963IBM.png&w=640&q=75' },
  { name: 'Sopra Steria', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060621133Steria.png&w=640&q=75' },
  { name: 'TCS', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060662910TATA%20Consultancy%20Services.png&w=640&q=75' },
  { name: 'Jubilant FoodWorks', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060632915Jubilant.png&w=640&q=75' },
  { name: 'Infosys', src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060642611Infosys.png&w=640&q=75' },
];

const LogoCard = ({ logo }) => (
  <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 group">
    <div className="bg-white p-4 border rounded-md shadow-sm h-24 flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-md group-hover:border-orange-300">
      <img
        src={logo.src} 
        alt={logo.name + ' Logo'}
        className="max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-90"
        // style={{ filter: logo.src.includes('fff?text') ? 'none' : 'grayscale(100%) brightness(0) invert(100%)' }}
      />
    </div>
  </div>
);

const LogoCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-normal text-gray-800">Our Placement Partners</h2>
        <div className="w-20 h-1 bg-orange-500 mt-2"></div>
      </div>

      <div className="flex flex-wrap -mx-2">
        {logoData.map((logo, index) => (
          <LogoCard key={`${logo.name}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;