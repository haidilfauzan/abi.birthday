
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-[#fff2e6] to-[#fff9f5]">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="z-10 animate-fade-in-up">
        <h2 className="text-xl md:text-2xl font-medium tracking-widest text-orange-400 uppercase mb-4">Kamu di undang</h2>
        <h1 className="text-7xl md:text-9xl font-cursive text-orange-600 mb-2 drop-shadow-sm">Abi's</h1>
        <div className="flex items-center justify-center gap-4 mb-8">
           <div className="h-px w-12 bg-orange-200"></div>
           <p className="text-3xl md:text-4xl font-light text-gray-500 uppercase tracking-[0.2em]">First Birthday</p>
           <div className="h-px w-12 bg-orange-200"></div>
        </div>
        
        <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed mb-12">
          mari ramaikan ulang tahun pertama Abi!
        </p>

        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <p className="text-xs text-orange-300 mt-2 uppercase tracking-widest">Scroll to see his journey</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
