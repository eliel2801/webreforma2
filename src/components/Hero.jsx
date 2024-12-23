import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3')`
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <div className="text-white space-y-4">
            <p className="text-yellow-500 text-xl">SpaceHub Coworking Space</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              THE SPACE FOR CREATIVITY
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">IT Start Up</h3>
                    <p className="text-sm text-gray-300">Perfect space for your startup</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Creative Studio</h3>
                    <p className="text-sm text-gray-300">Inspire your creativity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
