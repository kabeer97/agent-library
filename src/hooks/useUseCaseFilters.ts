
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
      
      if (hasSpecificDomainFilter) {
        const matchesDomain = useCase.category.some(cat => {
          const categoryLower = cat.toLowerCase();
          return (domainFilter.it && categoryLower === 'it') ||
                 (domainFilter.hr && categoryLower === 'hr') ||
                 (domainFilter.sales && categoryLower === 'sales');
        });
        
        if (!matchesDomain) {
          return false;
        }
      }

      // Integrations filter
      const integrationsFilter = filters.Integrations;
      const hasSpecificIntegrationFilter = Object.keys(integrationsFilter).some(key => key !== 'all' && integrationsFilter[key]);
      
      if (hasSpecificIntegrationFilter) {
        const matchesIntegration = useCase.integrations.some(integration => {
          const integrationName = integration.alt.toLowerCase();
          return Object.keys(integrationsFilter).some(filterKey => {
            if (filterKey === 'all') return false;
            return integrationsFilter[filterKey] && integrationName.includes(filterKey.replace('-', ' '));
          });
        });
        
        if (!matchesIntegration) {
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
