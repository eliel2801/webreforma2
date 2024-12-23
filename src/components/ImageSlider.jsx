import React, { useRef, useState, useEffect } from 'react';

const ImageSlider = ({ beforeImage, afterImage }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (isResizing && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setPosition(Math.min(100, Math.max(0, percent)));
    }
  };

  const handleTouchMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setPosition(Math.min(100, Math.max(0, percent)));
    }
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden select-none"
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before"
          className="absolute inset-0 w-[100vw] h-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg 
            className="w-4 h-4 text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        After
      </div>
    </div>
  );
};

export default ImageSlider;
