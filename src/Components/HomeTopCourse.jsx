import React from 'react';

const courses = [
  "Cloud Computing",
  "Java + AI",
  "Data Science",
  "Digital Marketing + AI",
  "Devops",
  "Mern Stack + AI",
  "Data Analytics",
  "Software Testing",
  "Cyber Security + AI",
  "Python",
  "Generative AI",
  "AuoCAD",
  "Full Stack Development + AI",
  "UI / UX",
  "Machine learning",
  "ERP",
  "Dot Net Core + AI",
  "Business Analytics",
  "AWS",
  "Azure",
];

export default function TopCourses() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-center text-blue-900 font-bold text-lg mb-4 border-b-4 border-orange-500 inline-block px-3">
        TOP COURSES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-md shadow cursor-pointer text-blue-900 font-semibold
              hover:bg-blue-900 hover:text-white transition-colors duration-300"
          >
            {course}
          </div>
        ))}
      </div>
    </section>
  );
}
