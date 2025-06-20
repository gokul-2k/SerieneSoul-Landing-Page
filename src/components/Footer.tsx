import React from 'react';
import { Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Trust Section */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center -mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-12">
            Trusted. Backed. Secure.
          </h2>
          
          {/* Trust Badges with Animation */}
          <div className="overflow-hidden relative">
            <div 
              className="flex space-x-20 items-center justify-center marquee"
              style={{ width: 'max-content' }}
            >
              {/* NVIDIA */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/nvidia-logo.png" 
                  alt="NVIDIA" 
                  className="h-24 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">INCEPTION PROGRAM</span> */}
              </div>
              
              {/* Kerala Startup Mission */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/kerala-startup-mission-logo.png" 
                  alt="Kerala Startup Mission" 
                  className="h-24 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">STARTUP MISSION</span> */}
              </div>
              
              {/* MeitY Startup Hub */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/MeitY.png" 
                  alt="MeitY Startup Hub" 
                  className="h-28 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">Startup Hub</span> */}
              </div>
              
              {/* SBI */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/sbi-logo.png" 
                  alt="SBI" 
                  className="h-12 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">Startup Cell</span> */}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/nvidia-logo.png" 
                  alt="NVIDIA" 
                  className="h-24 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">INCEPTION PROGRAM</span> */}
              </div>
              
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/kerala-startup-mission-logo.png" 
                  alt="Kerala Startup Mission" 
                  className="h-24 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">STARTUP MISSION</span> */}
              </div>
              
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/MeitY.png" 
                  alt="MeitY Startup Hub" 
                  className="h-28 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">Startup Hub</span> */}
              </div>
              
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <img 
                  src="/images/sbi-logo.png" 
                  alt="SBI" 
                  className="h-16 w-auto object-contain"
                />
                {/* <span className="text-xs text-gray-600 uppercase tracking-wide">Startup Cell</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-blue-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo and Company Info */}
            <div className="flex flex-col items-center md:items-start space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-600 text-xl font-bold">SereinSoul.ai</span>
              </div>
              
              <div className="text-sm text-gray-600 text-center md:text-left leading-relaxed">
                <p>Technopark, Phase I,</p>
                <p>Kazhakoottam, Trivandrum</p>
                <p>📧 Contact@zenturiotech.com</p>
              </div>
            </div>
            
            {/* Powered by Section */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-600">Powered by</span>
              <div className="text-blue-600 font-bold text-xl">
                ZenturioTECH
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;