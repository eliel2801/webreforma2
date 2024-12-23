import React from 'react';

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
