import React, { useState, useMemo, useRef, useEffect } from 'react';

const programs = [
  {
    id: 1,
    title: 'MERN STACK + GEN AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1739790191984mern-removebg-preview%20(1).png&w=256&q=75',
    description: 'Master MongoDB, Express, React, Node.js with Generative AI integration',
    duration: '6 months',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'CYBER SECURITY + GEN AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707561125125Cyber%20Security.png&w=256&q=75',
    description: 'Learn cybersecurity fundamentals with AI-powered threat detection',
    duration: '4 months',
    category: 'Security'
  },
  {
    id: 3,
    title: 'JAVA EXPERT',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033964060Java.png&w=256&q=75',
    description: 'Become a Java expert with advanced concepts and frameworks',
    duration: '5 months',
    category: 'Programming'
  },
  {
    id: 4,
    title: 'ADVANCE DIGITAL MARKETING',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1751706954203ChatGPT%20Image%20Jul%201%2C%202025%2C%2012_30_47%20PM.png&w=256&q=75',
    description: 'Master digital marketing strategies with AI tools',
    duration: '3 months',
    category: 'Marketing'
  },
  {
    id: 5,
    title: 'UI & UX',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1751706954203ChatGPT%20Image%20Jul%201%2C%202025%2C%2012_30_47%20PM.png&w=256&q=75',
    description: 'Design beautiful interfaces and exceptional user experiences',
    duration: '4 months',
    category: 'Design'
  },
  {
    id: 6,
    title: '.NET',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1718714811576dot-net-png.png&w=256&q=75',
    description: 'Develop applications with Microsoft .NET framework',
    duration: '5 months',
    category: 'Programming'
  },
  {
    id: 7,
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033964060Java.png&w=256&q=75',
    description: 'Full-stack Java development with AI integration',
    duration: '7 months',
    category: 'Web Development'
  },
  {
    id: 8,
    title: 'DATA SCIENCE PROFESSIONAL TRAINING',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559465273Data%20Science%20Training%20in%20Delhi.png&w=256&q=75',
    description: 'Master data science techniques and tools',
    duration: '6 months',
    category: 'Data Science'
  },
  {
    id: 9,
    title: 'PYTHON TRAINING COURSE',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1710312728346Python.png&w=256&q=75',
    description: 'Learn Python programming from basics to advanced',
    duration: '3 months',
    category: 'Programming'
  },
  {
    id: 10,
    title: 'BUSINESS ANALYTICS',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709621420973Business%20Analytics.png&w=256&q=75',
    description: 'Analyze business data to drive decision making',
    duration: '4 months',
    category: 'Data Science'
  },
  {
    id: 11,
    title: 'AWS PROFESSIONAL TRAINING',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665262800aws.png&w=256&q=75',
    description: 'Master Amazon Web Services cloud platform',
    duration: '5 months',
    category: 'Cloud Computing'
  },
  {
    id: 12,
    title: 'SOFTWARE TESTING COURSE',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
    description: 'Learn manual and automated software testing',
    duration: '3 months',
    category: 'Testing'
  },
  {
    id: 13,
    title: 'DATA ANALYTICS USING PYTHON',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559446250Data%20Analytics%20Using%20Python.png&w=256&q=75',
    description: 'Analyze data using Python libraries and tools',
    duration: '4 months',
    category: 'Data Science'
  },
  {
    id: 14,
    title: 'GENERATIVE AI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F17337437858871712321102440Generative%20Ai(1).png&w=256&q=75',
    description: 'Build and implement generative AI models',
    duration: '5 months',
    category: 'AI/ML'
  },
  {
    id: 15,
    title: 'POWER BI',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709096257414Power%20BI.png&w=256&q=75',
    description: 'Create interactive dashboards with Microsoft Power BI',
    duration: '2 months',
    category: 'Data Science'
  },
  {
    id: 16,
    title: 'AUTOCAD',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709383439715AutoCAD.png&w=256&q=75',
    description: 'Master 2D and 3D design with AutoCAD',
    duration: '3 months',
    category: 'Design'
  }
];

const TopPrograms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const scrollPosition = useRef(0);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(programs.map(program => program.category))];
    return cats;
  }, []);

  // Filter programs based on search term and category
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           program.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Programs to display (with pagination)
  const displayedPrograms = filteredPrograms.slice(0, visibleCount);

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = 'https://picsum.photos/seed/program/100/100.jpg';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProgram) {
      // Save current scroll position
      scrollPosition.current = window.scrollY;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition.current);
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedProgram]);

  return (
    <section className="py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 border-b-2 border-orange-400 inline-block">
          Explore Top Programs
        </h2>
        
        {/* Search and Filter Section - Same Line */}
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex gap-2 sm:gap-3">
            {/* Search Input */}
            <div className="flex-1 min-w-0">
              <input
                type="text"
                placeholder="Search programs..."
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Mobile Dropdown Filter */}
            <div className="relative md:hidden" ref={dropdownRef}>
              <button
                className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-left flex items-center gap-2 min-w-[100px] max-w-[140px]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-sm font-medium text-gray-700 truncate">
                  {selectedCategory}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`block w-full text-left px-3 py-2 text-sm ${
                        selectedCategory === category
                          ? 'bg-orange-400 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Desktop Category Buttons */}
            <div className="hidden md:flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-orange-400 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {displayedPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProgram(program)}
            >
              <div className="p-4">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0" 
                    onError={handleImageError}
                  />
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base font-bold text-gray-800 leading-tight">
                      {program.title}
                    </h3>
                    <span className="text-xs text-gray-500">{program.category}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{program.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{program.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {filteredPrograms.length > visibleCount && (
          <div className="mt-8 text-center">
            <button
              className="px-6 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition-colors"
              onClick={() => setVisibleCount(prev => prev + 4)}
            >
              Load More
            </button>
          </div>
        )}
        
        {/* No Results Message */}
        {filteredPrograms.length === 0 && (
          <div className="mt-8 text-center py-8">
            <p className="text-gray-500">No programs found matching your criteria.</p>
          </div>
        )}
        
        {/* Program Detail Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{selectedProgram.title}</h3>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title} 
                  className="w-16 h-16 object-contain" 
                  onError={handleImageError}
                />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Category: {selectedProgram.category}</p>
                  <p className="text-sm text-gray-600">Duration: {selectedProgram.duration}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{selectedProgram.description}</p>
              <div className="flex gap-3">
                <a href='/contact' className="flex-1 px-4 py-2 text-center bg-orange-400 text-white rounded-md hover:bg-orange-500 transition-colors">
                  Enroll Now
                </a>
                <button 
                  className="flex-1 px-4 cursor-pointer py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setSelectedProgram(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopPrograms;