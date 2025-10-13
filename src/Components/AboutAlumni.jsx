import React from 'react';

const companies = [
  { name: "iBilt", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060440576Ibilt.png&w=640&q=75" },
  { name: "Accenture", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060458759Accenture.png&w=640&q=75" },
  { name: "Aditya Birla", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060406072Aditya%20Birla%20Group.png&w=640&q=75" },
  { name: "Algoscale", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060469084Algoscale.png&w=640&q=75" },
  { name: "Bajaj", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060480490Bajaj.png&w=640&q=75" },
  { name: "Birlasoft", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060491701Birlasoft.png&w=640&q=75" },
  { name: "CSC", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060501852CSC.png&w=640&q=75" },
  { name: "Cognizant", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060518401Cognizant%20Logo.png&w=640&q=75" },
  { name: "Hewitt", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060528527Hewitt.png&w=640&q=75" },
  { name: "IBM", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060536963IBM.png&w=640&q=75" },
  { name: "Sopra Steria", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060621133Steria.png&w=640&q=75" },
  { name: "TCS", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060662910TATA%20Consultancy%20Services.png&w=640&q=75" },
  { name: "Jubilant", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060632915Jubilant.png&w=640&q=75" },
  { name: "Infosys", logo: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060642611Infosys.png&w=640&q=75" },
];

const AlumniPlaced = () => {
  return (
    <section
      className="text-white py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.ducatindia.com/_next/static/media/bg6.8864915a.jpg')`, // Replace this URL with your actual image link
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold uppercase mb-2">Alumni Placed</h2>
          <div className="w-12 rounded-3xl h-[2px] bg-white mb-4" />

          <h3 className="text-yellow-400 text-lg font-semibold mb-4">
            IT Training Accelerates Your Skills!
          </h3>

          <p className="text-gray-300 mb-8">
            We believe in interactive learning that is 7 times more effective than passive learning. 
            Today, every company requires digital transformation and they are looking for effective 
            ways to minimize the skills gap. We help corporates with best training programs to align 
            cutting-edge technologies and employees together.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href='/contact' className="bg-orange-500 text-white font-bold px-6 py-3 border-2 border-orange-500 rounded shadow hover:bg-white hover:text-orange-500 transition">
              ASK A DEMO →
            </a>
            <a href='/blogs' className="border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-black transition">
              EXPLORE MORE →
            </a>
          </div>
        </div>

        {/* Logos Grid */}
        <div className="md:w-1/2 grid grid-cols-3 sm:grid-cols-3 gap-4">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded border-2 border-orange-400 flex items-center justify-center h-20 shadow"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-full max-w-[90%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniPlaced;
