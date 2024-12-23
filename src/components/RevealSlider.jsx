import React, { useRef, useState, useEffect } from 'react';

const RevealSlider = ({ beforeImage, afterImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const updateSliderPosition = (clientX) => {
    if (!containerRef.current || !sliderRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
    const percentage = (x / rect.width) * 100;

    sliderRef.current.style.left = `${percentage}%`;
    container.style.setProperty('--clip-position', `${percentage}%`);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', stopDragging);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div 
        ref={containerRef}
        className="relative w-full select-none overflow-hidden cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          '--clip-position': '50%',
          aspectRatio: '3/2', // Define a proporção 3:2
        }}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image with Clip */}
        <div 
          className="absolute inset-0 [clip-path:inset(0_calc(100%-var(--clip-position))_0_0)]"
        >
          <img 
            src={beforeImage} 
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider */}
        <div 
          ref={sliderRef}
          className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white cursor-ew-resize group"
          style={{ transform: 'translateX(-50%)' }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg 
              className="w-4 h-4 text-gray-600" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div 
          className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
          style={{ opacity: `calc(1 - var(--clip-position) / 100)` }}
        >
          Before
        </div>
        <div 
          className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
          style={{ opacity: `calc(var(--clip-position) / 100)` }}
        >
          After
        </div>
      </div>
    </div>
  );
};

export default RevealSlider;
