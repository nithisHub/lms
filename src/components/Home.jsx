import Naviga from './Naviga'
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoZap } from "react-icons/go";

const Home = () => {
  return (
    <div>
      <Naviga/>
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg">
                <MdOutlineTipsAndUpdates className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-800">Transform Your Education Experience</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
                  Empower Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Coding Brain
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                At MasterBrain University, we help beginners become pro coders through 
                expert-led training, hands-on projects, and a supportive learning 
                community. Join our family and unlock your coding potential. It's time 
                to train your brain and build your future.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaBookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Interactive Courses</p>
                  <p className="text-sm text-gray-600">Engaging content</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FaUserGroup className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Collaboration</p>
                  <p className="text-sm text-gray-600">Real-time Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg animate-bounce"></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}></div>

                {/* Central Learning Hub */}
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <GiOpenBook className="h-16 w-16 text-white" />
                    
                    {/* Orbiting Icons */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <FaAward className="h-6 w-6 text-yellow-500" />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <IoMdTrendingUp className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <FaUsers className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <GoZap className="h-6 w-6 text-purple-500" />
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-2xl font-bold text-blue-600">10K+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Floating Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <FaUserGraduate className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <BsGraphUpArrow className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      </div>
    </div>
  )
}

export default Home
