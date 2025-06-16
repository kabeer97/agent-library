
import React from 'react';

export const Banner: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/e117793d-d303-4acc-b49b-d6723b947e11.png)` }}
      />
      
      <div className="px-[150px] py-20 max-md:px-5 max-md:py-12 relative z-10">
        <h1 className="text-6xl font-bold text-gray-900 max-md:text-4xl">
          AI Agent Library
        </h1>
      </div>
    </div>
  );
};
