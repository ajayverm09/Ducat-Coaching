import React from 'react';

const courses = [
  {
    id: 1,
    title: "JAVA EXPERT",
    duration: "6 Months",
    eligibility: "BCA, BSc & B.Tech",
    image: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75",
    reviews: 11237,
    brochure: "/brochures/java-expert.pdf", // local or hosted URL
  },
  {
    id: 2,
    title: "ADVANCE DIGITAL MARKETING",
    duration: "6 Months",
    eligibility: "Any Graduate",
    image: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1721644964282Digital%20Marketing.png&w=256&q=75",
    reviews: 10646,
    brochure: "/brochures/digital-marketing.pdf",
  },
  {
    id: 3,
    title: "UI & UX",
    duration: "6 Months",
    eligibility: "Any Graduate",
    image: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1751706954203ChatGPT%20Image%20Jul%201%2C%202025%2C%2012_30_47%20PM.png&w=256&q=75",
    reviews: 14618,
    brochure: "/brochures/ui-ux.pdf",
  },
  {
    id: 4,
    title: ".NET",
    duration: "4 Months",
    eligibility: "Any Graduate",
    image: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1718714811576dot-net-png.png&w=256&q=75",
    reviews: 9475,
    brochure: "/brochures/dot-net.pdf",
  },
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300">
    {/* Stars and Reviews */}
    <div className="w-full flex justify-between items-center mb-2">
      <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
      <span className="text-sm bg-blue-600 text-white px-2 py-0.5 rounded-full">{course.reviews.toLocaleString()} Reviews</span>
    </div>

    {/* Course Image */}
    <img src={course.image} alt={course.title} className="h-24 w-24 object-contain mb-4" />

    {/* Title */}
    <h3 className="text-lg font-bold text-blue-800 mb-2">{course.title}</h3>

    {/* Duration and Eligibility */}
    <p className="text-sm"><span className="font-bold text-orange-600">Duration:</span> {course.duration}</p>
    <p className="text-sm mb-4"><span className="font-bold text-orange-600">Eligibility:</span> {course.eligibility}</p>

    {/* Download Button */}
    <a
      href={course.brochure}
      download
      className="mt-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded flex items-center justify-center space-x-2"
    >
      <svg className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 10V3H7v7H4l6 6 6-6h-3z" /></svg>
      <span>Download Brochure</span>
    </a>
  </div>
);

const CoursesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-b-4 border-orange-500 inline-block">
        Find the Right Course for You
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
