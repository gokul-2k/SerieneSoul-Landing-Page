'use client'
import React, { useState, useEffect } from 'react';
import { Check, Shield, Brain, Heart, Cpu, Globe } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Brain className="w-5 h-5 text-blue-600" />,
    text: "India's 1st AI model for mental wellness"
  },
  {
    icon: <Heart className="w-5 h-5 text-blue-600" />,
    text: "Real-time emotion detection"
  },
  {
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    text: "Personalized stress relief routines"
  },
  {
    icon: <Shield className="w-5 h-5 text-blue-600" />,
    text: "NVIDIA-supported tech"
  },
  {
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    text: "Govt of India-backed innovation"
  },
  {
    icon: <Check className="w-5 h-5 text-blue-600" />,
    text: "Safe, secure & stigma-free"
  }
];

const images = [
  '/images/girl.jpg',
  '/images/med.jpeg',
  '/images/women2.png',
];

// Custom hook to detect mobile view
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  return isMobile;
}

const DifferentSection = () => {
  const [tickerOpen, setTickerOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isMobile = useIsMobile();

  const getImagePosition = (index: number, activeImageIndex: number) => {
    // Use smaller translate values for mobile
    const mobilePositions = [
      { transform: 'translate(-60px, 0) scale(1)', zIndex: 30, size: 'w-40 h-40' },
      { transform: 'translate(100px, -80px) scale(0.7)', zIndex: 20, size: 'w-25 h-25' },
      { transform: 'translate(100px, 80px) scale(0.7)', zIndex: 20, size: 'w-25 h-25' },
    ];
    const desktopPositions = [
      { transform: 'translate(-200px, 0) scale(1)', zIndex: 30, size: 'w-75 h-75' },
      { transform: 'translate(160px, -100px) scale(0.7)', zIndex: 20, size: 'w-50 h-50' },
      { transform: 'translate(160px, 100px) scale(0.7)', zIndex: 20, size: 'w-50 h-50' },
    ];
    const positions = isMobile ? mobilePositions : desktopPositions;
    const adjustedIndex = (index - activeImageIndex + 3) % 3;
    return positions[adjustedIndex];
  };

  return (
    <div className="bg-white py-16 px-4 relative overflow-x-hidden">
      {/* Ticker Button and Popout */}
      <div className="absolute left-10 top-8 z-20 flex items-center">
        {/* Ticker Button */}
        <button
          className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-sm flex items-center justify-center shadow-lg focus:outline-none"
          onClick={() => setTickerOpen((open) => !open)}
          aria-label="Open ticker"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        {/* Ticker Popout */}
        <div
          className={`transition-all duration-500 ease-in-out h-12 flex items-center pl-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-r-2xl shadow-lg ml-[-8px] ${tickerOpen ? 'w-[50vw] opacity-100' : 'w-0 opacity-0'} overflow-hidden`}
          style={{ minWidth: tickerOpen ? '300px' : '0' }}
        >
          <span className="text-white font-semibold text-lg">Why SereinSoul is Different</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side with inward right curve */}
          <div className="relative z-10">
            {/* Inward right curve (circle) now above the box */}
            <div className="hidden lg:block absolute top-1/2 right-[-300px] -translate-y-1/2 w-[440px] h-[440px] bg-white rounded-full z-20"></div>
            <div className="space-y-8 bg-blue-50 rounded-3xl shadow-md p-10 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
                Why SereinSoul is Different
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side - Circular Animated Images with Click Cycling */}
          <div className="relative h-96 lg:h-[420px] flex items-center justify-center">
            {images.map((image, index) => {
              const position = getImagePosition(index, activeImageIndex);
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${position.size}`}
                  style={{
                    transform: position.transform,
                    zIndex: position.zIndex,
                  }}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 sm:border-6 lg:border-8 border-white hover:border-blue-300 transition-all duration-300">
                    <Image
                      src={image}
                      alt={`Person ${index + 1}`}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentSection;