
import React from 'react';
import { EVENT_DETAILS } from '../constants';

const EventDetails: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-8 text-orange-100 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h2 className="text-5xl font-cursive text-orange-600 mb-12">Party Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700">
          <div className="space-y-6 p-8 rounded-3xl bg-orange-50/50 border border-orange-100">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto text-white shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-lg uppercase tracking-widest text-orange-500 mb-2">When</h4>
              <p className="text-xl font-medium">{EVENT_DETAILS.date}</p>
              {/* <p className="text-gray-500">{EVENT_DETAILS.time}</p> */}
            </div>
          </div>

          <div className="space-y-6 p-8 rounded-3xl bg-orange-50/50 border border-orange-100">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto text-white shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-lg uppercase tracking-widest text-orange-500 mb-2">Where</h4>
              <p className="text-xl font-medium">{EVENT_DETAILS.location}</p>
              <p className="text-gray-500">{EVENT_DETAILS.address}</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 p-8 rounded-3xl bg-green-50/50 border border-green-100 max-w-2xl mx-auto">
           <h4 className="font-bold text-lg uppercase tracking-widest text-green-600 mb-2">The Theme</h4>
           <p className="text-2xl font-medium text-green-800">"{EVENT_DETAILS.theme}"</p>
           <p className="mt-2 text-green-600">Wear your favorite animal print or safari gear!</p>
        </div> */}
      </div>
    </section>
  );
};

export default EventDetails;
