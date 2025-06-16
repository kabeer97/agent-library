import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  placeholder = "Search" 
}) => {
  return (
    <div className="items-center rounded border border-[color:var(--base-border,#E4E4E7)] flex w-full gap-2 text-sm text-[#838B9C] font-normal whitespace-nowrap leading-none flex-wrap p-2 border-solid max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/15d246f6be071014d5c16b7ce4d5d25d35f1d994?placeholderIfAbsent=true"
        alt="Search icon"
        className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-[#838B9C] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent border-none outline-none"
      />
    </div>
  );
};
