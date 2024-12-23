import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaClock } from 'react-icons/fa';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlTopBar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) { // Scrolling down
        setIsVisible(false);
      } else if (window.scrollY === 0) { // At top
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlTopBar);
    return () => window.removeEventListener('scroll', controlTopBar);
  }, [lastScrollY]);

  return (
    <div 
      className={`
        fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white text-sm 
        transition-all duration-300 transform
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaClock size={14} className="text-yellow-500" />
              <span className="text-xs">Opening: Mon-Fri 08:00 - 17:00</span>
            </div>
          </div>
          
          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">
              <FaFacebook size={14} />
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">
              <FaPinterest size={14} />
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
