import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3" 
              alt="Office Space" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <span className="text-yellow-500">About Us</span>
            <h2 className="text-4xl font-bold text-gray-800">
              LEVELING UP YOUR CREATIVE MIND
            </h2>
            <p className="text-gray-600">
              We provide the perfect environment for creative professionals and startups to thrive. 
              Our modern facilities and collaborative atmosphere help foster innovation and productivity.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="bg-green-600 p-4 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl">Community Focused</h3>
                <p className="text-gray-600">Join our thriving community of professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
