import React from "react";
import { CheckCircle2, Zap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-green-600 to-teal-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 mt-5 md:mt-0 leading-tight">
              Supercharge Your Productivity with Task-Trackr
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Effortlessly manage tasks, collaborate with your team, and achieve
              your goals faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-teal-100 transition duration-300 transform hover:scale-105">
                Start Tracking
              </button>
              <button className="border-2 border-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-teal-600 transition duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transform transition duration-500 hover:scale-105">
                <CheckCircle2 className="text-yellow-300" size={48} />
                <h3 className="text-2xl font-semibold mt-4">Smart Tasks</h3>
                <p className="text-teal-100 mt-2">
                  Intelligent task prioritization and scheduling
                </p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transform transition duration-500 hover:scale-105">
                <Zap className="text-yellow-300" size={48} />
                <h3 className="text-2xl font-semibold mt-4">Lightning Fast</h3>
                <p className="text-teal-100 mt-2">
                  Optimized for speed and efficiency
                </p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transform transition duration-500 hover:scale-105 sm:col-span-2">
                <Users className="text-yellow-300" size={48} />
                <h3 className="text-2xl font-semibold mt-4">Team Synergy</h3>
                <p className="text-teal-100 mt-2">
                  Seamless collaboration tools for your entire team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
