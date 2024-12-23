import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-yellow-500">SPACEHUB</Link>
            <p className="text-gray-400">
              Transform your workspace into a hub of creativity and innovation. Join our community of forward-thinking professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-yellow-500 transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Private Office</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Coworking Space</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Meeting Room</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Virtual Office</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Event Space</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <span className="text-gray-400">Jl. Raya Campuhan No.66, Gianyar, Bali</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-yellow-500" />
                <span className="text-gray-400">+62 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-500" />
                <span className="text-gray-400">info@spacehub.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 SpaceHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
