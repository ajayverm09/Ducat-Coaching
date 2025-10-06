import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../Components/BlogsData';
import { BookOpen, Users, Award, Clock, Star, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CoachingSection = () => {
  // Get featured courses
  const featuredCourses = blogData.filter(course => course.featured);
  
  // Get all unique categories
  const categories = [...new Set(blogData.map(course => course.category))];
  
  // Stats data
  const stats = [
    { icon: <BookOpen className="w-8 h-8" />, value: "12+", label: "Courses" },
    { icon: <Users className="w-8 h-8" />, value: "5000+", label: "Students" },
    { icon: <Award className="w-8 h-8" />, value: "95%", label: "Success Rate" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support" }
  ];

  // Set up intersection observer for stats section
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1,    // Trigger when 10% is visible
  });

  // Helper function to render stat value with count-up animation
  const renderStatValue = (value) => {
    // Handle non-numeric values like "24/7"
    if (value === "24/7") {
      return value;
    }
    
    // Extract numeric value and suffix
    const match = value.match(/^(\d+)([^\d]*)$/);
    if (match) {
      const number = parseInt(match[1], 10);
      const suffix = match[2];
      
      return (
        <CountUp
          start={0}
          end={number}
          suffix={suffix}
          duration={2.5}
          delay={0}
          redraw={false}
        >
          {({ countUpRef }) => (
            <span ref={countUpRef} />
          )}
        </CountUp>
      );
    }
    
    return value;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Career with <span className="text-indigo-600">Expert Training</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful professionals who have advanced their careers through our industry-focused courses. 
            Learn from expert instructors and gain hands-on experience with cutting-edge technologies.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="flex justify-center text-indigo-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {inView ? renderStatValue(stat.value) : stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Courses</h3>
            <Link 
              to="/blogs" 
              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
            >
              View All Courses <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {course.category}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{course.author}</span>
                    <Link 
                      to={`/blog/${course.id}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center"
                    >
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Our All Course Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/blogs`}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="font-medium text-gray-900">{category}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The MERN Stack course completely transformed my career. The instructors were knowledgeable and the hands-on projects helped me land my dream job as a full-stack developer."
              </p>
              <div className="font-medium text-gray-900">Rajesh Kumar</div>
              <div className="text-sm text-gray-500">Full Stack Developer</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The AWS training was comprehensive and practical. I passed my certification exam on the first try and received a promotion shortly after completing the course."
              </p>
              <div className="font-medium text-gray-900">Priya Singh</div>
              <div className="text-sm text-gray-500">Cloud Architect</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The Python course was well-structured and covered everything from basics to advanced topics. The projects helped me build a strong portfolio that impressed employers."
              </p>
              <div className="font-medium text-gray-900">Amit Patel</div>
              <div className="text-sm text-gray-500">Data Scientist</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Advance Your Career?
          </h3>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Join thousands of students who have transformed their careers with our expert-led courses. 
            Enroll today and get started on your learning journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/blogs" 
              className="px-8 py-3 bg-white text-indigo-600 font-medium border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-colors duration-300"
            >
              Explore Courses
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;