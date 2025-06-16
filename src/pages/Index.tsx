import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { FilterSidebar } from '@/components/FilterSidebar';
import { UseCaseCard } from '@/components/UseCaseCard';
import { SortControls } from '@/components/SortControls';

interface UseCase {
  id: string;
  title: string;
  badges: Array<{ text: string; color?: string }>;
  description: string;
  integrations: Array<{
    src: string;
    alt: string;
    type?: 'image' | 'placeholder';
    backgroundColor?: string;
  }>;
  category: string[];
  type: string;
}

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSort, setCurrentSort] = useState('recommended');
  const [filters, setFilters] = useState<Record<string, Record<string, boolean>>>({
    System: { all: true },
    Solutions: { all: true },
    Type: { all: true },
  });

  const useCases: UseCase[] = [
    {
      id: '1',
      title: 'Ticket Creation & Submission',
      badges: [{ text: 'IT' }],
      description: 'Enabling users to create and submit IT support tickets through various channels, with proper categorization for efficient routing.',
      integrations: [
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b50144770cf8a69b0fb3936521dbb8bbf19f1cd1?placeholderIfAbsent=true', alt: 'Integration 1' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f792bfda0058085093fafa34153aee868569f?placeholderIfAbsent=true', alt: 'Integration 2' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6d633b5c981508aa4ccc9be0146206808d20d6b4?placeholderIfAbsent=true', alt: 'Integration 3' },
      ],
      category: ['IT'],
      type: 'Built in',
    },
    {
      id: '2',
      title: 'Reset Password Flow',
      badges: [{ text: 'IT' }],
      description: 'A flow that allows users to securely reset their passwords for enterprise systems and applications.',
      integrations: [
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2a5675a9587cbc21c81812c2b599c4e771aa569c?placeholderIfAbsent=true', alt: 'Integration 1' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9c4da67f8947030a94b2915db28c935c6007092d?placeholderIfAbsent=true', alt: 'Integration 2' },
      ],
      category: ['IT'],
      type: 'Guide',
    },
    {
      id: '3',
      title: 'PTO Flow',
      badges: [{ text: 'HR' }, { text: 'HR Time and Absence' }],
      description: 'A flow that allows a manager to get a list of their team members who are on PTO on a given date.',
      integrations: [
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bf385915a5ed00deb1a62b7f10db29203f8a5e69?placeholderIfAbsent=true', alt: 'Integration 1' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb4c218983bd7045c4e4e56a0188c465566dbd6a?placeholderIfAbsent=true', alt: 'Integration 2' },
        { 
          src: '', 
          alt: 'Slack', 
          type: 'placeholder', 
          backgroundColor: 'rgba(40,127,206,0.05)' 
        },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02ea238334124d2955476290c6dbdeeb4b0187b4?placeholderIfAbsent=true', alt: 'Integration 4' },
      ],
      category: ['HR'],
      type: 'Installable',
    },
    {
      id: '4',
      title: 'PTO Flow',
      badges: [{ text: 'HR' }, { text: 'HR Time and Absence' }],
      description: 'A flow that allows a manager to get a list of their team members who are on PTO on a given date.',
      integrations: [
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bf385915a5ed00deb1a62b7f10db29203f8a5e69?placeholderIfAbsent=true', alt: 'Integration 1' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2b3e40cdb3a4ea9b6f98d2fd9955e4ed1c3fd830?placeholderIfAbsent=true', alt: 'Integration 2' },
        { 
          src: '', 
          alt: 'Slack', 
          type: 'placeholder', 
          backgroundColor: 'rgba(40,127,206,0.05)' 
        },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f620467225d740eefc30300f840ec35b560b9025?placeholderIfAbsent=true', alt: 'Integration 4' },
      ],
      category: ['HR'],
      type: 'Built in',
    },
    {
      id: '5',
      title: 'Create Job Description Flow',
      badges: [{ text: 'HR' }, { text: 'Finance' }],
      description: 'A flow that helps hiring managers or HR create and submit job descriptions for new or replacement roles.',
      integrations: [
        { 
          src: '', 
          alt: 'Google Drive', 
          type: 'placeholder', 
          backgroundColor: 'rgba(62,183,172,0.05)' 
        },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/af586f458ed7acfaf8d8ec36f8047718c49f53fb?placeholderIfAbsent=true', alt: 'Integration 2' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f3ec634320c7b0139ba903173e290e894b21770?placeholderIfAbsent=true', alt: 'Integration 3' },
      ],
      category: ['HR', 'Finance'],
      type: 'Guide',
    },
    {
      id: '6',
      title: 'Create Job Description Flow',
      badges: [{ text: 'HR' }, { text: 'Finance' }],
      description: 'A flow that helps hiring managers or HR create and submit job descriptions for new or replacement roles.',
      integrations: [
        { 
          src: '', 
          alt: 'Google Drive', 
          type: 'placeholder', 
          backgroundColor: 'rgba(62,183,172,0.05)' 
        },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/af586f458ed7acfaf8d8ec36f8047718c49f53fb?placeholderIfAbsent=true', alt: 'Integration 2' },
        { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f3ec634320c7b0139ba903173e290e894b21770?placeholderIfAbsent=true', alt: 'Integration 3' },
      ],
      category: ['HR', 'Finance'],
      type: 'Installable',
    },
    {
      id: '7',
      title: 'APM(App performance mgmt) Diagnostic Flow',
      badges: [{ text: 'IT' }],
      description: 'Application performance monitoring and diagnostic flow for enterprise systems.',
      integrations: [],
      category: ['IT'],
      type: 'Built in',
    },
    {
      id: '8',
      title: 'APM(App performance mgmt) Diagnostic Flow',
      badges: [{ text: 'IT' }],
      description: 'Application performance monitoring and diagnostic flow for enterprise systems.',
      integrations: [],
      category: ['IT'],
      type: 'Guide',
    },
  ];

  const handleFilterChange = (sectionTitle: string, optionId: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [sectionTitle]: {
        ...prev[sectionTitle],
        [optionId]: checked,
      },
    }));
  };

  const filteredAndSortedUseCases = useMemo(() => {
    let filtered = useCases.filter(useCase => {
      // Search filter
      if (searchQuery && !useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !useCase.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filters (System and Solutions are treated as categories)
      const systemFilter = filters.System;
      const solutionsFilter = filters.Solutions;
      const typeFilter = filters.Type;

      // Check if any specific filters are selected (not just "all")
      const hasSystemFilter = Object.keys(systemFilter).some(key => key !== 'all' && systemFilter[key]);
      const hasSolutionsFilter = Object.keys(solutionsFilter).some(key => key !== 'all' && solutionsFilter[key]);
      const hasTypeFilter = Object.keys(typeFilter).some(key => key !== 'all' && typeFilter[key]);

      // Apply filters only if specific options are selected
      if (hasSystemFilter || hasSolutionsFilter || hasTypeFilter) {
        // For now, we'll just filter by type since the data structure matches
        if (hasTypeFilter && !typeFilter[useCase.type.toLowerCase().replace(' ', '-')]) {
          return false;
        }
      }

      return true;
    });

    // Sort
    switch (currentSort) {
      case 'alphabetical':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'newest':
        // For demo purposes, reverse order
        filtered.reverse();
        break;
      case 'oldest':
        // Keep original order
        break;
      default: // recommended
        // Keep original order as recommended
        break;
    }

    return filtered;
  }, [useCases, searchQuery, filters, currentSort]);

  return (
    <div className="bg-[rgba(255,254,250,1)] min-h-screen">
      <Header />
      
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2043716e4cb7f38145f40fd52ae459059be32471?placeholderIfAbsent=true"
        alt="Hero banner"
        className="aspect-[6.21] object-contain w-full pt-[60px] max-md:max-w-full"
      />
      
      <main className="px-[150px] py-[60px] max-md:px-5">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search"
        />
        
        <div className="flex gap-6 mt-6 max-md:flex-col">
          <FilterSidebar onFilterChange={handleFilterChange} />
          
          <div className="flex-1">
            <SortControls
              itemCount={filteredAndSortedUseCases.length}
              currentSort={currentSort}
              onSortChange={setCurrentSort}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              {filteredAndSortedUseCases.map((useCase) => (
                <UseCaseCard
                  key={useCase.id}
                  title={useCase.title}
                  badges={useCase.badges}
                  description={useCase.description}
                  integrations={useCase.integrations}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
