import Naviga from './Naviga'
import { useState } from 'react';
import { HiOutlineBookOpen } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
     // Sample course data with enhanced details
  const courses = [
    {
      id: 1,
      name: "Introduction to Computer Science",
      duration: "12 Weeks",
      fees: "$499",
      instructor: "Dr. Sarah Johnson",
      assignments: "5 Assignments, 1 Final Project",
      rating: 4.8,
      students: 1250,
      level: "Beginner",
      category: "Computer Science",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      topics: [
        "Programming Fundamentals",
        "Data Structures",
        "Algorithms",
        "Web Development Basics",
      ],
      description: "Master the fundamentals of computer science with hands-on programming exercises and real-world projects."
    },
    {
      id: 2,
      name: "Advanced Machine Learning",
      duration: "16 Weeks",
      fees: "$899",
      instructor: "Prof. David Lee",
      assignments: "8 Assignments, 2 Research Papers",
      rating: 4.9,
      students: 890,
      level: "Advanced",
      category: "Data Science",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      topics: [
        "Neural Networks",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
      description: "Dive deep into advanced ML techniques and build sophisticated AI models for real-world applications."
    },
    {
      id: 3,
      name: "Digital Marketing Strategy",
      duration: "10 Weeks",
      fees: "$399",
      instructor: "Ms. Emily Chen",
      assignments: "6 Assignments, 1 Campaign Project",
      rating: 4.7,
      students: 2100,
      level: "Intermediate",
      category: "Business",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      topics: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & ROI",
      ],
      description: "Learn to create and execute effective digital marketing campaigns that drive real business results."
    },
    {
      id: 4,
      name: "Web Development Bootcamp",
      duration: "20 Weeks",
      fees: "$1299",
      instructor: "Mr. Alex Rodriguez",
      assignments: "12 Projects, 1 Capstone",
      rating: 4.9,
      students: 1850,
      level: "Beginner",
      category: "Computer Science",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      topics: [
        "HTML, CSS, JavaScript",
        "React & Node.js",
        "Database Design",
        "Deployment & DevOps",
      ],
      description: "Comprehensive full-stack web development program from basics to advanced deployment strategies."
    },
    {
      id: 5,
      name: "Financial Analysis & Modeling",
      duration: "14 Weeks",
      fees: "$699",
      instructor: "Dr. Michael Thompson",
      assignments: "7 Case Studies, 1 Final Model",
      rating: 4.6,
      students: 750,
      level: "Intermediate",
      category: "Finance",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      topics: [
        "Financial Statements",
        "Valuation Methods",
        "Risk Assessment",
        "Excel Modeling",
      ],
      description: "Master financial analysis techniques and build sophisticated models for investment decisions."
    },
    {
      id: 6,
      name: "UX/UI Design Fundamentals",
      duration: "12 Weeks",
      fees: "$549",
      instructor: "Ms. Jessica Park",
      assignments: "8 Design Projects, 1 Portfolio",
      rating: 4.8,
      students: 1400,
      level: "Beginner",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      topics: [
        "Design Principles",
        "User Research",
        "Prototyping",
        "Usability Testing",
      ],
      description: "Learn to create intuitive and beautiful user experiences through research-driven design processes."
    },
  ];

 const categories = ['All', 'Computer Science', 'Data Science', 'Business', 'Finance', 'Design'];
 const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
 
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
     <Naviga/>
     {/* copy */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg mb-6">
            <HiOutlineBookOpen className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Discover Your Next Learning Adventure</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              Explore Our Courses
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of courses designed by industry experts 
            to accelerate your career and expand your knowledge.
          </p>
        </div>
        {/* Search and Filter Section */}
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 items-center  justify-between w-full">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"/>
            </div>
             {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <CiFilter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          </div>
           {/* Results Count */}
           <div className="mb-8 pt-6 md:pl-2 md:pt-2 flex justify-center md:justify-start">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredCourses.length}</span> courses
            {selectedCategory !== 'All' && (
              <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
            )}
          </p>
            </div>


            {/* Course Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <FaStar className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold text-gray-800">{course.rating}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaRegClock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-800">{course.fees}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserFriends className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600 truncate">{course.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                {/* Assignments */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start space-x-2">
                    <FaAward className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Assignments</p>
                      <p className="text-xs text-blue-600">{course.assignments}</p>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <FaBookOpen className="h-4 w-4 mr-2 text-gray-600" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full border border-blue-200/50"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>
            </div>
           ))} 
        </div>
        
          {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <FaBookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
         )} 
      </div>

        </div></div>
    </div>
  )
}

export default Courses
