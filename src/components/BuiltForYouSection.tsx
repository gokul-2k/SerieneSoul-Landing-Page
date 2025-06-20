import React from 'react';

const BuiltForYouSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built for You,<br />
              <span className="text-blue-600">Backed by Experts</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Whether you're a student, working professional, 
              caregiver or leader - Sereinsoul.ai is for anyone 
              who wants to be more present, resilient and 
              balanced.
            </p>
          </div>
          
          {/* Image Side */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative">
              <img 
                src="/images/women2.png" 
                alt="Woman with laptop"
                className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Floating Chat Bubble */}
              <div className="absolute -top-23 left-4 max-w-[calc(100%-2rem)] lg:max-w-xs lg:-left-45 lg:-top-10 bg-white rounded-2xl p-3 shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">SereinSoul</span>
                </div>
                <p className="text-xs text-gray-600">
                  "How are you feeling today? I'm here to help you navigate through your emotions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltForYouSection;