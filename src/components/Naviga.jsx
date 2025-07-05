import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { MdCloseFullscreen } from "react-icons/md";

const Naviga = () => {
   const [isOpen, setIsOpen] = useState(false);
  
    const navItems = [
      { name: 'Home', link: 'home' },
      { name: 'Courses', link: 'courses' },
      { name: 'Lectures', link: 'lectures' },
      { name: 'Services', link: 'services' },
      { name: 'Login', link: 'login' },
      
    ];
  return (
    <div className=''>
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
            {/* 3-div section */}
              <div className="flex justify-between items-center h-16">
                {/* 1st Logo Section */}
                <div className="flex-shrink-0 flex items-center group">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 shadow-lg">
                      <GiBrain className="h-5 w-5 text-white"  />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      MasterBrain
                    </span>
                  </div>
                </div>
                
               {/* 2nd Desktop Navigation Links Section*/}
                  <div className="hidden md:flex gap-6 text-gray-700 font-medium text-sm transition-all duration-300">
                     {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="relative px-4 py-2 text-gray-700 font-medium text-sm transition-all duration-300 hover:text-blue-600 group"
                    >
                      {item.name}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  ))} 
                  </div>
      
                {/* 3th Right Icons Section*/}
                 <div className="hidden md:flex items-center space-x-4">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 group">
                    <CiSearch className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 group relative">
                    <IoBagAddOutline className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <FaRegUser className="h-4 w-4" />
                    <span className="text-sm font-medium">Login</span>
                  </button>
                </div>
      
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                  >
                    {isOpen ? (
                      <MdCloseFullscreen className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
                    ) : (
                      <BsMenuButtonWideFill className="h-6 w-6 transition-transform duration-300" />
                    )}
                  </button>
                </div>
                </div>
                </div>
      
                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="px-4 py-3 space-y-2 bg-white border-t border-gray-100 shadow-lg">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block px-4 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Icons */}
                <div className="flex items-center justify-around pt-4 pb-2 border-t border-gray-100 mt-4">
                  <button className="flex flex-col items-center space-y-1 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
                    <CiSearch className="h-5 w-5" />
                    <span className="text-xs">Search</span>
                  </button>
                  <button className="flex flex-col items-center space-y-1 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 relative">
                    <IoBagAddOutline className="h-5 w-5" />
                    <span className="text-xs">Cart</span>
                    <span className="absolute -top-1 right-2 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <Link to="/login">
                  <button  className="flex flex-col items-center space-y-1 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                    <FaRegUser className="h-5 w-5" />
                    <span className="text-xs">
                     Login</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
           </nav>
      {/* <nav className='flex gap-5 bg-blue-600 p-2 '>
        <div className='p-6 border'><Link to="/hero">hero</Link></div>
        <div className='p-6 border'><Link to="/home">Home</Link></div>
      </nav> */}
    </div>
  )
}

export default Naviga
