
import { useState, useMemo } from 'react';
import { UseCase } from '@/types/useCase';

export const useUseCaseFilters = (useCases: UseCase[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSort, setCurrentSort] = useState('recommended');
  const [filters, setFilters] = useState<Record<string, Record<string, boolean>>>({
    Domain: { all: true },
    Integrations: { all: true },
  });

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

      // Domain filter
      const domainFilter = filters.Domain;
      const hasSpecificDomainFilter = Object.keys(domainFilter).some(key => key !== 'all' && domainFilter[key]);
      
      if (hasSpecificDomainFilter && !domainFilter[useCase.domain.toLowerCase()]) {
        return false;
      }

      // Integrations filter
      const integrationsFilter = filters.Integrations;
      const hasSpecificIntegrationsFilter = Object.keys(integrationsFilter).some(key => key !== 'all' && integrationsFilter[key]);
      
      if (hasSpecificIntegrationsFilter) {
        const useCaseIntegrations = useCase.integrations.split(',').map(i => i.trim().toLowerCase().replace(/\s+/g, '-'));
        const hasMatchingIntegration = Object.keys(integrationsFilter).some(key => 
          key !== 'all' && integrationsFilter[key] && useCaseIntegrations.includes(key)
        );
        if (!hasMatchingIntegration) {
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
        filtered.reverse();
        break;
      case 'oldest':
        break;
      default: // recommended
        break;
    }

    return filtered;
  }, [useCases, searchQuery, filters, currentSort]);

  return {
    searchQuery,
    setSearchQuery,
    currentSort,
    setCurrentSort,
    filters,
    handleFilterChange,
    filteredAndSortedUseCases,
  };
};
