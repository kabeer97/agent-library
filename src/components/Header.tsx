import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      <nav className="bg-[rgba(255,254,250,1)] flex w-full items-center gap-[40px_45px] justify-between flex-wrap px-[150px] py-2.5 border-[rgba(216,219,226,1)] border-t border-b max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 items-center gap-[40px_54px] w-[825px] my-auto py-4 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a592365c3de9beb11e3720e5ac6755bd8fd26812?placeholderIfAbsent=true"
            alt="Company Logo"
            className="aspect-[4.59] object-contain w-[124px] self-stretch my-auto"
          />
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-2 text-base font-bold text-center my-auto">
          <button className="shadow-[0px_3px_4px_rgba(0,0,0,0.25)] border self-stretch text-black whitespace-nowrap w-[131px] my-auto px-[25px] py-[9px] rounded-[20px] border-black border-solid max-md:px-5 hover:bg-gray-50 transition-colors">
            AiseraPlay
          </button>
          <button className="self-stretch w-[131px] bg-[rgba(185,64,250,1)] shadow-[0px_3px_4px_rgba(0,0,0,0.25)] border gap-2.5 text-white my-auto pl-5 py-2.5 rounded-[20px] border-[rgba(174,38,247,1)] border-solid hover:bg-[rgba(174,38,247,1)] transition-colors">
            Get a Demo
          </button>
        </div>
      </nav>
    </header>
  );
};
