"use client"
import React from 'react';
import { Mail } from 'lucide-react';

const CommunityWaitlistSection = () => {
  return (
    <div id="community" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Community Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:-mt-0 -mt-30">
          {/* Coming Soon Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/images/coming.png" 
              alt="Coming Soon" 
              className="w-100 h-100 object-contain" 
            />
          </div>
          
          {/* Community Content */}
          <div className="space-y-6 md:-mt-0 -mt-30">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-blue-500">Community:</span> You&apos;re Not Alone
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-justify">
              Connect with others on the same journey. Share 
              stories, attend healing sessions, and grow together 
              safely and anonymously.
            </p>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Be Part of the first Circle
            </button>
          </div>
        </div>
        
        {/* Waitlist Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Waitlist Content */}
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join the Waitlist
              </h2>
              
              <p className="text-blue-100 leading-relaxed">
                Be the first to experience your AI wellness twin.
              </p>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-300" />
                <span className="text-blue-100">contact@zenturiotech.com</span>
              </div>
              
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Notify Me When It Launches
              </button>
            </div>
            
            {/* Waitlist Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/images/med2.jpg" 
                  alt="Person at beach"
                  className="w-80 h-80 object-cover rounded-full shadow-2xl"
                />
                
                {/* Floating Notification */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800">Available Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityWaitlistSection;