
import React, { useEffect, useRef, useState } from 'react';
import { Milestone } from '../types';

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`min-h-screen flex items-center justify-center py-20 px-4 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
    >
      <div className={`max-w-6xl w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
        {/* Image Container */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] bg-white p-4 shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
          <div className="w-full h-full overflow-hidden bg-gray-100 relative">
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                <svg className="w-12 h-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            )}
            <img 
              key={milestone.image}
              src={milestone.image} 
              alt={milestone.label}
              onLoad={() => setImgLoaded(true)}
              onError={() => console.error("Could not load image at:", milestone.image)}
              className={`w-full h-full object-cover transition-all duration-700 hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-orange-500 text-white p-4 rounded-full w-24 h-24 flex items-center justify-center text-center font-bold shadow-lg z-10">
            <span className="text-sm leading-tight uppercase tracking-tighter">
              {milestone.month === 0 ? 'Lahir' : `${milestone.month} Bln.`}
            </span>
          </div>
        </div>

        {/* Text Container */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-4xl md:text-5xl font-cursive text-orange-600">{milestone.label}</h3>
          <div className="h-1 w-20 bg-orange-200 mx-auto md:mx-0"></div>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            {milestone.description}
          </p>
          <div className="pt-4 flex justify-center md:justify-start gap-2">
            {[...Array(index + 1)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-orange-300"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
