
import React from 'react';

interface HeroBannerProps {
  title: string;
  description: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ title, description }) => {
  return (
    <div className="relative mb-12">
      <div className="bg-gradient-to-r from-green-200 via-green-100 to-green-50 rounded-[40px] px-12 py-16 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20">
          <div className="absolute top-4 right-8 w-96 h-96 bg-green-300 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-8 right-16 w-64 h-64 bg-green-400 rounded-full transform -rotate-12"></div>
        </div>
      </div>
    </div>
  );
};
