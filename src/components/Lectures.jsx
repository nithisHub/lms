import Naviga from './Naviga'
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import React, { useState, useMemo } from 'react';

const Lectures = () => {
  
  return (
    <div>
     <Naviga/>
     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <FaGraduationCap size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Meet Our Distinguished Faculty
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Learn from world-class educators and researchers who are passionate about 
              shaping the next generation of technology leaders.
            </p>
          </div>
         {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaUsers size={24} className="text-blue-200" />
              </div>
              {/* <div className="text-3xl font-bold">{stats.totalLecturers}</div> */}
              <div className="text-blue-200 text-sm">Expert Lecturers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaAward size={24} className="text-blue-200" />
              </div>
              {/* <div className="text-3xl font-bold">{stats.avgRating}</div> */}
              <div className="text-blue-200 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaBookOpen size={24} className="text-blue-200" />
              </div>
              {/* <div className="text-3xl font-bold">{stats.totalCourses}</div> */}
              <div className="text-blue-200 text-sm">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaGraduationCap size={24} className="text-blue-200" />
              </div>
              {/* <div className="text-3xl font-bold">{stats.totalDepartments}</div> */}
              <div className="text-blue-200 text-sm">Departments</div>
            </div>
          </div>
        </div>
      </div>
       {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        {/* <SearchAndFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
          selectedRating={selectedRating}
          onRatingChange={setSelectedRating}
          departments={departments}
          resultsCount={filteredLecturers.length}
        /> */}
        {/* Lecturers Grid */}
        {/* {filteredLecturers.length > 0 ? ( */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* {filteredLecturers.map((lecturer, index) => ( */}
              <div
                // key={lecturer.id}
                // className="opacity-0 animate-fadeInUp"
                // style={{
                //   animationDelay: `${index * 0.1}s`,
                //   animationFillMode: 'forwards'
                // }}
              >
                {/* <LecturerCard
                  lecturer={lecturer}
                  isExpanded={expandedCards.includes(lecturer.id)}
                  onToggleExpand={() => toggleCardExpansion(lecturer.id)}
                /> */}
              </div>
            {/* ))} */}
          </div>
        {/* ) : ( */}
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  {/* <Users size={32} className="text-gray-400" /> */}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No lecturers found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find lecturers.
              </p>
              <button
                // onClick={() => {
                //   setSearchQuery('');
                //   setSelectedDepartment('');
                //   setSelectedRating(0);
                // }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
    </div>
  )
}

export default Lectures
