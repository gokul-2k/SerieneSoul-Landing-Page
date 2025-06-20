"use client"
import React from 'react';
import Lottie from 'lottie-react';
import trackAnimation from '../../public/images/track.json';
import understandAnimation from '../../public/images/understand.json';
import healAnimation from '../../public/images/heal.json';
import Image from 'next/image';

const WhySereinsoulSection = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Character Image with Blended Background */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Soft background circles for blending */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-60"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-tr from-white to-blue-50 rounded-full opacity-80"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full opacity-90 shadow-lg"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-12 left-4 w-6 h-6 bg-indigo-100 rounded-full opacity-70"></div>
              <div className="absolute top-20 left-8 w-3 h-3 bg-blue-300 rounded-full opacity-50"></div>
              
              {/* Main image with enhanced styling */}
              <div className="relative z-10 p-8">
                <Image 
                  src="/images/boy.png" 
                  alt="Mental wellness companion illustration"
                  width={320}
                  height={320}
                  className="w-80 h-80 object-contain filter drop-shadow-sm relative z-10"
                  style={{
                    filter: 'drop-shadow(0 10px 20px rgba(59, 130, 246, 0.1))'
                  }}
                />
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-indigo-50/50 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why <span className="text-blue-500">Sereinsoul.ai</span> ?
            </h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-500">
                Your Daily buddy for mental Wellness
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-justify">
                Sereinsoul blends AI to understand your stress or similar 
                situations - guide you through it, and help you feel lighter. 
                Unlike typical mental health apps, we go beyond. AI will 
                talk with you and adapts your world to support you. 
                Designed with inputs from psychologists, tech experts & 
                everyday user.
              </p>
              
            </div>
          </div>
        </div>
        
        {/* Single Feature Box with Light Fade Background */}
        <div className="mt-24 relative">
          
          {/* How it Works Button - Positioned to overlap the box below */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <button className="bg-blue-500 font-bold hover:bg-blue-600 text-white px-12 py-3 rounded-full transition-colors shadow-lg -translate-y-1/2">
              How it Works
            </button>
          </div>
          
          {/* Single Feature Box */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Track Card */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lottie animationData={trackAnimation} loop={true} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Track</h3>
                <p className="text-gray-600 text-sm">
                  Track your<br />
                  stress and emotions
                </p>
              </div>
              
              {/* Understand Card */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lottie animationData={understandAnimation} loop={true} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-2">Understand</h3>
                <p className="text-gray-600 text-sm">
                  AI offers daily<br />
                  emotional insights
                </p>
              </div>
              
              {/* Heal Card */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lottie animationData={healAnimation} loop={true} className="w-14 h-14" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Heal</h3>
                <p className="text-gray-600 text-sm">
                  Smart guidance,<br />
                  meditation & mood<br />
                  booster
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySereinsoulSection;