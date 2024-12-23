import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`
        fixed left-0 right-0 z-40 transition-all duration-300
        ${scrolled ? 'top-0' : 'top-10'}
        ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-yellow-500">
            SPACEHUB
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              About us
            </Link>
            <Link 
              to="/services" 
              className={`${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
