
import React from 'react';
import { Header } from '@/components/Header';
import { Banner } from '@/components/Banner';
import { SearchBar } from '@/components/SearchBar';
import { FilterSidebar } from '@/components/FilterSidebar';
import { UseCaseCard } from '@/components/UseCaseCard';
import { SortControls } from '@/components/SortControls';
import { useCases } from '@/data/useCases';
import { useUseCaseFilters } from '@/hooks/useUseCaseFilters';

const Index: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    currentSort,
    setCurrentSort,
    filters,
    handleFilterChange,
    filteredAndSortedUseCases,
  } = useUseCaseFilters(useCases);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Banner />
      
      <main className="max-w-[1440px] mx-auto px-5 py-12">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search"
        />
        
        <div className="flex gap-6 mt-6 max-md:flex-col">
          <div className="hidden lg:block w-1/4">
            <FilterSidebar 
              filters={filters}
              onFilterChange={handleFilterChange} 
            />
          </div>
          
          <div className="w-3/4 max-md:w-full">
            <SortControls
              itemCount={filteredAndSortedUseCases.length}
              currentSort={currentSort}
              onSortChange={setCurrentSort}
            />
            
            <div className="grid gap-6 mt-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
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
