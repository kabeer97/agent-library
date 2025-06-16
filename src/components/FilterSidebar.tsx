import React, { useState } from 'react';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

interface FilterSection {
  title: string;
  searchPlaceholder: string;
  options: FilterOption[];
  moreCount?: number;
}

interface FilterSidebarProps {
  onFilterChange: (sectionTitle: string, optionId: string, checked: boolean) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [searchValues, setSearchValues] = useState<Record<string, string>>({
    System: '',
    Solutions: '',
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    System: true,
    Solutions: true,
    Type: true,
  });

  const filterSections: FilterSection[] = [
    {
      title: 'System',
      searchPlaceholder: 'Search',
      options: [
        { id: 'all', label: 'All', checked: true },
        { id: '8x8', label: '8x8', checked: false },
        { id: 'adp', label: 'ADP', checked: false },
        { id: 'asana', label: 'Asana', checked: false },
        { id: 'atlan', label: 'Atlan', checked: false },
      ],
      moreCount: 500,
    },
    {
      title: 'Solutions',
      searchPlaceholder: 'Search',
      options: [
        { id: 'all', label: 'All', checked: true },
        { id: 'ai-itsm', label: 'AI for ITSM', checked: false },
        { id: 'ai-service-desk', label: 'AI Service Desk', checked: false },
        { id: 'it', label: 'IT', checked: false },
        { id: 'hr', label: 'HR', checked: false },
      ],
      moreCount: 24,
    },
  ];

  const typeOptions: FilterOption[] = [
    { id: 'all', label: 'All', checked: true },
    { id: 'ai-itsm-type', label: 'AI for ITSM', checked: false },
    { id: 'built-in', label: 'Built in', checked: false },
    { id: 'guide', label: 'Guide', checked: false },
    { id: 'installable', label: 'Installable', checked: false },
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const handleSearchChange = (section: string, value: string) => {
    setSearchValues(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const handleOptionChange = (sectionTitle: string, optionId: string, checked: boolean) => {
    onFilterChange(sectionTitle, optionId, checked);
  };

  const renderFilterSection = (section: FilterSection) => (
    <div key={section.title} className="border-b-[color:var(--grey-gradient,rgba(0,0,0,0.20))] w-full pb-5 border-b-[1.5px] border-solid">
      <button
        onClick={() => toggleSection(section.title)}
        className="flex w-full items-center gap-[40px_100px] text-sm text-black font-normal whitespace-nowrap leading-loose justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="self-stretch my-auto">{section.title}</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45fd1c2a634f3477d157d435ba05688ffe036c42?placeholderIfAbsent=true"
          alt="Toggle icon"
          className={`aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto transition-transform ${
            expandedSections[section.title] ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {expandedSections[section.title] && (
        <div className="w-full mt-4">
          <div className="items-center rounded border border-[color:var(--base-border,#E4E4E7)] bg-white flex w-full gap-2 text-sm text-[#838B9C] font-normal whitespace-nowrap leading-none p-2 border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25c55a4ed8a5105b7d44b875aa14e7dde6aa6d3?placeholderIfAbsent=true"
              alt="Search icon"
              className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
            />
            <input
              type="text"
              value={searchValues[section.title] || ''}
              onChange={(e) => handleSearchChange(section.title, e.target.value)}
              placeholder={section.searchPlaceholder}
              className="text-[#838B9C] self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent border-none outline-none"
            />
          </div>
          
          <div className="w-full text-xs text-black font-light leading-loose mt-3">
            {section.options.map((option) => (
              <label key={option.id} className="flex w-full items-center gap-2 whitespace-nowrap mt-2 cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={(e) => handleOptionChange(section.title, option.id, e.target.checked)}
                  className="sr-only"
                />
                <img
                  src={option.checked ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea9681c9b19a1eb2ff56bfa792a6e153d92594b?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/d7b03fc08a96d5b80966f7b4e7f6bf9119274cce?placeholderIfAbsent=true"}
                  alt="Checkbox"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <span className="self-stretch my-auto">{option.label}</span>
              </label>
            ))}
            {section.moreCount && (
              <button className="text-[#B940FA] font-bold mt-2 hover:underline">
                + {section.moreCount} more
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <aside className="rounded border border-[color:var(--base-border,#E4E4E7)] min-w-60 grow shrink w-[214px] p-4 border-solid">
      {filterSections.map(renderFilterSection)}
      
      <div className="w-full text-black mt-4">
        <button
          onClick={() => toggleSection('Type')}
          className="flex w-full items-center gap-[40px_100px] text-sm font-normal whitespace-nowrap leading-loose justify-between hover:bg-gray-50 transition-colors"
        >
          <span className="self-stretch my-auto">Type</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45fd1c2a634f3477d157d435ba05688ffe036c42?placeholderIfAbsent=true"
            alt="Toggle icon"
            className={`aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto transition-transform ${
              expandedSections.Type ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {expandedSections.Type && (
          <div className="w-full text-xs font-light leading-loose mt-4">
            <div className="w-full">
              {typeOptions.map((option) => (
                <label key={option.id} className="flex w-full items-center gap-2 whitespace-nowrap mt-2 cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="type"
                    checked={option.checked}
                    onChange={(e) => handleOptionChange('Type', option.id, e.target.checked)}
                    className="sr-only"
                  />
                  <img
                    src={option.checked ? "https://cdn.builder.io/api/v1/image/assets/TEMP/b8842c275bb8bad627576b9a08b25a97896689b7?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/615b5e7f8c6b3a214beb4ae05b8a1e5db7995edd?placeholderIfAbsent=true"}
                    alt="Radio button"
                    className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  />
                  <span className="self-stretch my-auto">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
