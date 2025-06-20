'use client';

import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div> */}
      
      {/* Navigation */}
      <nav className="relative z-10 flex flex-col items-center justify-center px-6 py-8">
        {/* Logo centered at the top */}
        <div className="flex flex-col items-center mb-4">
          <img src="/images/logo.png" alt="Sereinsoul Logo" className="w-90 h-auto mb-2 -mt-17" />
        </div>
        {/* Navigation dock centered below logo */}
        <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2 md:px-8 md:py-4 items-center border border-white/20 flex justify-center -mt-20 overflow-x-auto max-w-full">
          <ul className="flex flex-wrap space-x-3 md:space-x-8 text-white text-xs md:text-sm justify-center w-full">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Why Sereinsoul</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Partners & Recognition</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className=" -mt-48 relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          You Deserve Someone Who Listens
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          India's first AI-powered digital twin platform for<br />
          sustainable mental well-being.
        </p>
      </div>
    </div>
  );
};

export default Hero;