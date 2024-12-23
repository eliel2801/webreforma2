import React, { useRef, useState, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
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
      const bounded = Math.max(0, Math.min(100, percent));
      setPosition(bounded);
    }
  };

  const handleTouchMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percent = (x / rect.width) * 100;
      const bounded = Math.max(0, Math.min(100, percent));
      setPosition(bounded);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isResizing]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden select-none"
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Before Image (Foreground) */}
      <div 
        className="absolute inset-0"
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
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
