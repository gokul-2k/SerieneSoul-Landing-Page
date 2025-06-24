'use client';

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);

  // Wait for the page to be fully loaded
  useEffect(() => {
    const checkPageReady = () => {
      // Check if all required sections exist
      const requiredSections = ['hero', 'why-sereinsoul', 'community', 'partners', 'contact'];
      const allSectionsExist = requiredSections.every(id => document.getElementById(id) !== null);
      
      if (allSectionsExist) {
        setIsPageReady(true);
        console.log('All sections found, page ready for navigation');
      } else {
        console.log('Some sections missing, retrying...');
        setTimeout(checkPageReady, 100);
      }
    };

    // Initial check after a small delay
    setTimeout(checkPageReady, 100);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Attempting to scroll to:', sectionId);
    
    if (!isPageReady) {
      console.log('Page not ready yet, waiting...');
      // Wait for page to be ready, then try again
      const waitForReady = () => {
        if (isPageReady) {
          scrollToSection(sectionId);
        } else {
          setTimeout(waitForReady, 100);
        }
      };
      waitForReady();
      return;
    }
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      console.log('Element found:', element);
      
      // Close mobile menu first if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Add a delay to ensure any mobile menu animations complete
      setTimeout(() => {
        try {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          console.log('Successfully scrolled to:', sectionId);
        } catch (error) {
          console.log('scrollIntoView failed, trying window.scrollTo:', error);
          
          // Fallback method
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const headerOffset = 100;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, isMobileMenuOpen ? 500 : 100);
    } else {
      console.error('Element still not found:', sectionId);
      // Debug: list all elements with IDs
      const allElementsWithIds = document.querySelectorAll('[id]');
      console.log('Available elements with IDs:', Array.from(allElementsWithIds).map(el => el.id));
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
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
      
      {/* Overlay*/}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/25 bg-opacity-40"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 flex flex-col items-center justify-center px-4 pt-8 pb-4">
        {/* Mobile Hamburger Menu - Top Left */}
        <div className="absolute top-6 left-4 z-[60] lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-black/30"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-[55] w-80 bg-black/30 backdrop-blur-xl border-r border-white/20 transform transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <div className="flex-1">
              <ul className="space-y-6">
                <li>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Home button clicked'); // Debug log
                      scrollToSection('hero');
                    }}
                    className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 w-full text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Why Sereinsoul button clicked'); // Debug log
                      scrollToSection('why-sereinsoul');
                    }}
                    className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 w-full text-left"
                  >
                    Why Sereinsoul
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Community button clicked'); // Debug log
                      scrollToSection('community');
                    }}
                    className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 w-full text-left"
                  >
                    Community
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Partners button clicked'); // Debug log
                      scrollToSection('contact');
                    }}
                    className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 w-full text-left"
                  >
                    Partners & Recognition
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Contact button clicked'); // Debug log
                      scrollToSection('contact');
                    }}
                    className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 w-full text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-[45] lg:hidden transition-opacity duration-300"
            onClick={toggleMobileMenu}
          ></div>
        )}

        {/* Logo centered at the top */}
        <div className="flex flex-col items-center mb-0 mt-2">
           <img src="/images/logo.png" alt="Sereinsoul Logo" width={320} height={110} className="w-[320px] h-auto -mb-10 mt-0" />
        </div>
        
        {/* Desktop Navigation - hidden on mobile and tablet */}
        <div className="hidden lg:flex bg-black/30 backdrop-blur-md rounded-full px-10 py-3 items-center border border-white/20 mb-4">
          <ul className="flex space-x-6 text-lg justify-center">
            <li><button onClick={(e) => { e.preventDefault(); console.log('Desktop Home clicked'); scrollToSection('hero'); }} className="text-white hover:text-blue-400 transition-colors duration-500 block px-3 py-2" style={{color: 'white'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = 'white'}>Home</button></li>
            <li><button onClick={(e) => { e.preventDefault(); console.log('Desktop Why Sereinsoul clicked'); scrollToSection('why-sereinsoul'); }} className="text-white hover:text-blue-400 transition-colors duration-500 block px-3 py-2" style={{color: 'white'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = 'white'}>Why Sereinsoul</button></li>
            <li><button onClick={(e) => { e.preventDefault(); console.log('Desktop Community clicked'); scrollToSection('community'); }} className="text-white hover:text-blue-400 transition-colors duration-500 block px-3 py-2" style={{color: 'white'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = 'white'}>Community</button></li>
            <li><button onClick={(e) => { e.preventDefault(); console.log('Desktop Partners clicked'); scrollToSection('contact'); }} className="text-white hover:text-blue-400 transition-colors duration-500 block px-3 py-2" style={{color: 'white'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = 'white'}>Partners & Recognition</button></li>
            <li><button onClick={(e) => { e.preventDefault(); console.log('Desktop Contact clicked'); scrollToSection('contact'); }} className="text-white hover:text-blue-400 transition-colors duration-500 block px-3 py-2" style={{color: 'white'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = 'white'}>Contact Us</button></li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          You Deserve Someone Who Listens
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          India&apos;s first AI-powered digital twin platform for<br />
          sustainable mental well-being.
        </p>
      </div>
    </div>
  );
};

export default Hero;