import React, { useState } from 'react';

interface SortOption {
  value: string;
  label: string;
}

interface SortControlsProps {
  itemCount: number;
  currentSort: string;
  onSortChange: (sortValue: string) => void;
}

export const SortControls: React.FC<SortControlsProps> = ({
  itemCount,
  currentSort,
  onSortChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions: SortOption[] = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
  ];

  const currentSortLabel = sortOptions.find(option => option.value === currentSort)?.label || 'Recommended';

  const handleSortSelect = (sortValue: string) => {
    onSortChange(sortValue);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex w-full items-center gap-[40px_100px] text-xs text-black font-normal leading-[1.3] justify-between flex-wrap max-md:max-w-full">
      <div className="self-stretch my-auto">
        {itemCount} items shown
      </div>
      
      <div className="self-stretch flex items-center gap-2 my-auto relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="self-stretch my-auto flex items-center gap-2 hover:bg-gray-50 transition-colors px-2 py-1 rounded"
        >
          <span>
            Sort by:{" "}
            <span className="font-semibold text-[rgba(185,64,250,1)]">
              {currentSortLabel}
            </span>
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7260f4aaccdc2e3bfafb9de7ce5bab4c841834d9?placeholderIfAbsent=true"
            alt="Sort dropdown"
            className={`aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto transition-transform ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-[color:var(--base-border,#E4E4E7)] rounded-lg shadow-lg z-10 min-w-[150px]">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSortSelect(option.value)}
                className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentSort === option.value ? 'bg-gray-100 font-semibold text-[rgba(185,64,250,1)]' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
