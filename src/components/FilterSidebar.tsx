
import React, { useState, useMemo } from 'react';
import { useCases } from '@/data/useCases';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

interface FilterSection {
  title: string;
  searchPlaceholder: string;
  options: FilterOption[];
}

interface FilterSidebarProps {
  onFilterChange: (sectionTitle: string, optionId: string, checked: boolean) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [searchValues, setSearchValues] = useState<Record<string, string>>({
    Domain: '',
    Integrations: '',
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    Domain: true,
    Integrations: true,
  });

  // Generate dynamic filter options from use cases data
  const filterSections: FilterSection[] = useMemo(() => {
    // Get unique domains
    const domains = Array.from(new Set(useCases.map(useCase => useCase.domain))).sort();
    
    // Get unique integrations (split by comma and flatten)
    const allIntegrations = useCases.flatMap(useCase => 
      useCase.integrations.split(',').map(integration => integration.trim())
    );
    const uniqueIntegrations = Array.from(new Set(allIntegrations)).sort();

    return [
      {
        title: 'Domain',
        searchPlaceholder: 'Search domains',
        options: [
          { id: 'all', label: 'All', checked: true },
          ...domains.map(domain => ({ 
            id: domain.toLowerCase(), 
            label: domain, 
            checked: false 
          }))
        ]
      },
      {
        title: 'Integrations',
        searchPlaceholder: 'Search integrations',
        options: [
          { id: 'all', label: 'All', checked: true },
          ...uniqueIntegrations.slice(0, 20).map(integration => ({ 
            id: integration.toLowerCase().replace(/\s+/g, '-'), 
            label: integration, 
            checked: false 
          }))
        ]
      }
    ];
  }, []);

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
          
          <div className="w-full text-xs text-black font-light leading-loose mt-3 max-h-60 overflow-y-auto">
            {section.options
              .filter(option => 
                option.label.toLowerCase().includes((searchValues[section.title] || '').toLowerCase())
              )
              .map((option) => (
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
          </div>
        </div>
      )}
    </div>
  );

  return (
    <aside className="rounded border border-[color:var(--base-border,#E4E4E7)] min-w-60 grow shrink w-[214px] p-4 border-solid">
      {filterSections.map(renderFilterSection)}
    </aside>
  );
};
