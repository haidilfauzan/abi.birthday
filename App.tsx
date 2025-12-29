
import React from 'react';
import HeroSection from './components/HeroSection';
import MilestoneCard from './components/MilestoneCard';
import EventDetails from './components/EventDetails';
import RSVPSection from './components/RSVPSection';
import { MILESTONES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fff9f5]">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
        <div id="scroll-progress" className="h-full bg-orange-400 transition-all duration-300" style={{ width: '0%' }}></div>
      </div>

      <HeroSection />

      <main className="relative">
        {/* Timeline Path Overlay */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-100 -translate-x-1/2 -z-10"></div>
        
        {MILESTONES.map((milestone, index) => (
          <MilestoneCard 
            key={milestone.month} 
            milestone={milestone} 
            index={index} 
          />
        ))}
      </main>

      <EventDetails />
      {/* <RSVPSection /> */}

      <footer className="py-12 bg-white text-center text-gray-400">
        <p className="font-cursive text-2xl text-orange-300 mb-2">Abi's First Year</p>
        <p className="text-sm uppercase tracking-widest">&copy; 2025 • Made with Love</p>
      </footer>

      {/* Basic script for scroll progress */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.onscroll = function() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("scroll-progress").style.width = scrolled + "%";
        };
      `}} />
    </div>
  );
};

export default App;
