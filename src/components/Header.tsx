
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="flex w-full items-center justify-between px-[150px] py-4 max-md:px-5">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a592365c3de9beb11e3720e5ac6755bd8fd26812?placeholderIfAbsent=true"
            alt="Aisera Logo"
            className="h-8 w-auto"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-900 rounded-full hover:bg-gray-50 transition-colors">
            AiseraPlay
          </button>
          <button className="px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
            Get a Demo
          </button>
        </div>
      </nav>
    </header>
  );
};
