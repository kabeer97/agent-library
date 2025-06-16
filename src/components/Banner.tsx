
import React from 'react';

export const Banner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-100 via-green-200 to-green-300 relative overflow-hidden">
      <div className="px-[150px] py-20 max-md:px-5 max-md:py-12">
        <h1 className="text-6xl font-bold text-gray-900 max-md:text-4xl">
          AI Agent Library
        </h1>
      </div>
      {/* Decorative curved elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <path d="M0,100 Q200,0 400,100 L400,200 L0,200 Z" fill="rgba(34,197,94,0.3)" />
        </svg>
      </div>
    </div>
  );
};
