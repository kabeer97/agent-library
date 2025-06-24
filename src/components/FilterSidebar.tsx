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
}

interface FilterSidebarProps {
  filters: Record<string, Record<string, boolean>>;
  onFilterChange: (sectionTitle: string, optionId: string, checked: boolean) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  const [searchValues, setSearchValues] = useState<Record<string, string>>({
    Domain: '',
    Integrations: '',
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    Domain: true,
    Integrations: true,
  });

  const getFilterSections = (): FilterSection[] => [
    {
      title: 'Domain',
      searchPlaceholder: 'Search domains',
      options: [
        { id: 'all', label: 'All', checked: filters.Domain?.all || false },
        { id: 'it', label: 'IT', checked: filters.Domain?.it || false },
        { id: 'hr', label: 'HR', checked: filters.Domain?.hr || false },
        { id: 'sales', label: 'Sales', checked: filters.Domain?.sales || false },
        { id: 'finance', label: 'Finance', checked: filters.Domain?.finance || false },
      ],
    },
    {
      title: 'Integrations',
      searchPlaceholder: 'Search integrations',
      options: [
        { id: 'all', label: 'All', checked: filters.Integrations?.all || false },
        { id: 'servicenow', label: 'ServiceNow', checked: filters.Integrations?.servicenow || false },
        { id: 'microsoft-teams', label: 'Microsoft Teams', checked: filters.Integrations?.['microsoft-teams'] || false },
        { id: 'jira', label: 'Jira', checked: filters.Integrations?.jira || false },
        { id: 'slack', label: 'Slack', checked: filters.Integrations?.slack || false },
        { id: 'okta', label: 'Okta', checked: filters.Integrations?.okta || false },
        { id: 'microsoft-365', label: 'Microsoft 365', checked: filters.Integrations?.['microsoft-365'] || false },
        { id: 'zoom', label: 'Zoom', checked: filters.Integrations?.zoom || false },
        { id: 'sharepoint', label: 'SharePoint', checked: filters.Integrations?.sharepoint || false },
        { id: 'outlook', label: 'Outlook', checked: filters.Integrations?.outlook || false },
        { id: 'adobe-sign', label: 'Adobe Sign', checked: filters.Integrations?.['adobe-sign'] || false },
        { id: 'google-workspace', label: 'Google Workspace', checked: filters.Integrations?.['google-workspace'] || false },
        { id: 'microsoft-defender', label: 'Microsoft Defender', checked: filters.Integrations?.['microsoft-defender'] || false },
        { id: 'crowdstrike', label: 'CrowdStrike', checked: filters.Integrations?.crowdstrike || false },
        { id: 'vmware', label: 'VMware', checked: filters.Integrations?.vmware || false },
        { id: 'cisco', label: 'Cisco', checked: filters.Integrations?.cisco || false },
        { id: 'palo-alto', label: 'Palo Alto', checked: filters.Integrations?.['palo-alto'] || false },
        { id: 'microsoft-intune', label: 'Microsoft Intune', checked: filters.Integrations?.['microsoft-intune'] || false },
        { id: 'ping-identity', label: 'Ping Identity', checked: filters.Integrations?.['ping-identity'] || false },
        { id: 'duo-security', label: 'Duo Security', checked: filters.Integrations?.['duo-security'] || false },
      ],
    },
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

  const getFilteredOptions = (section: FilterSection) => {
    const searchTerm = searchValues[section.title]?.toLowerCase() || '';
    if (!searchTerm) return section.options;
    
    return section.options.filter(option => 
      option.label.toLowerCase().includes(searchTerm)
    );
  };

  const renderFilterSection = (section: FilterSection) => {
    const filteredOptions = getFilteredOptions(section);
    
    return (
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
              {filteredOptions.map((option) => (
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
  };

  return (
    <aside className="rounded border border-[color:var(--base-border,#E4E4E7)] min-w-60 grow shrink w-[214px] p-4 border-solid">
      {getFilterSections().map(renderFilterSection)}
    </aside>
  );
};
