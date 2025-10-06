import React from 'react';

const programs = [
  {
    title: 'MERN STACK + GEN AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1739790191984mern-removebg-preview%20(1).png&w=256&q=75',
  },
  {
    title: 'CYBER SECURITY + GEN AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707561125125Cyber%20Security.png&w=256&q=75',
  },
  {
    title: 'JAVA EXPERT',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033964060Java.png&w=256&q=75',
  },
  {
    title: 'ADVANCE DIGITAL MARKETING',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1751706954203ChatGPT%20Image%20Jul%201%2C%202025%2C%2012_30_47%20PM.png&w=256&q=75',
  },
  {
    title: 'UI & UX',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1751706954203ChatGPT%20Image%20Jul%201%2C%202025%2C%2012_30_47%20PM.png&w=256&q=75',
  },
  {
    title: '.NET',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1718714811576dot-net-png.png&w=256&q=75',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033964060Java.png&w=256&q=75',
  },
  {
    title: 'DATA SCIENCE PROFESSIONAL TRAINING',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559465273Data%20Science%20Training%20in%20Delhi.png&w=256&q=75',
  },
  {
    title: 'PYTHON TRAINING COURSE',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1710312728346Python.png&w=256&q=75',
  },
  {
    title: 'BUSINESS ANALYTICS',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709621420973Business%20Analytics.png&w=256&q=75',
  },
  {
    title: 'AWS PROFESSIONAL TRAINING',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665262800aws.png&w=256&q=75',
  },
  {
    title: 'SOFTWARE TESTING COURSE',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
  },
  {
    title: 'DATA ANALYTICS USING PYTHON',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559446250Data%20Analytics%20Using%20Python.png&w=256&q=75',
  },
  {
    title: 'GENERATIVE AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F17337437858871712321102440Generative%20Ai(1).png&w=256&q=75',
  },
  {
    title: 'POWER BI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709096257414Power%20BI.png&w=256&q=75',
  },
  {
    title: 'AUTOCAD',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709383439715AutoCAD.png&w=256&q=75',
  },
];

const TopPrograms = () => {
  return (
    <section className="px-32 py-10  bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-orange-400 inline-block">
        Explore Top Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 hover:shadow-md transition-shadow"
          >
            <img src={program.image} alt={program.title} className="w-12 h-12 object-contain" />
            <span className="text-sm font-bold text-gray-800">{program.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPrograms;
