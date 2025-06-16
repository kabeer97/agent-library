
import React from 'react';

export const Banner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-50 via-green-100 to-green-150 relative overflow-hidden">
      <div className="px-[150px] py-20 max-md:px-5 max-md:py-12 relative z-10">
        <h1 className="text-6xl font-bold text-gray-900 max-md:text-4xl">
          AI Agent Library
        </h1>
      </div>
      
      {/* Organic curved background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main curved shape */}
        <div className="absolute top-0 right-0 w-full h-full">
          <svg 
            viewBox="0 0 1400 400" 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="greenGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(187, 247, 208, 0.8)" />
                <stop offset="50%" stopColor="rgba(134, 239, 172, 0.6)" />
                <stop offset="100%" stopColor="rgba(74, 222, 128, 0.4)" />
              </linearGradient>
            </defs>
            <path 
              d="M800,0 C1000,50 1200,100 1400,80 L1400,400 L600,400 C700,350 750,200 800,0 Z" 
              fill="url(#greenGradient1)"
            />
          </svg>
        </div>
        
        {/* Secondary curved shape */}
        <div className="absolute top-10 right-20 w-3/4 h-3/4">
          <svg 
            viewBox="0 0 800 300" 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="greenGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(134, 239, 172, 0.5)" />
                <stop offset="100%" stopColor="rgba(74, 222, 128, 0.3)" />
              </linearGradient>
            </defs>
            <path 
              d="M400,0 C550,30 650,80 800,60 L800,300 L200,300 C300,250 350,120 400,0 Z" 
              fill="url(#greenGradient2)"
            />
          </svg>
        </div>
        
        {/* Accent curved shape */}
        <div className="absolute top-20 right-40 w-1/2 h-1/2">
          <svg 
            viewBox="0 0 400 200" 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="greenGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(74, 222, 128, 0.4)" />
                <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
              </linearGradient>
            </defs>
            <path 
              d="M200,0 C280,20 340,50 400,40 L400,200 L100,200 C150,170 180,80 200,0 Z" 
              fill="url(#greenGradient3)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
