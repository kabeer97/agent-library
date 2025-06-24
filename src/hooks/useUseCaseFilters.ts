
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
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (optionId === 'all') {
        // If "All" is checked, uncheck all other options
        if (checked) {
          newFilters[sectionTitle] = { all: true };
        } else {
          newFilters[sectionTitle] = { all: false };
        }
      } else {
        // If a specific option is checked, uncheck "All"
        newFilters[sectionTitle] = {
          ...prev[sectionTitle],
          all: false,
          [optionId]: checked,
        };
        
        // If no specific options are checked, check "All"
        const specificOptions = Object.keys(newFilters[sectionTitle]).filter(key => key !== 'all');
        const hasAnyChecked = specificOptions.some(key => newFilters[sectionTitle][key]);
        
        if (!hasAnyChecked) {
          newFilters[sectionTitle] = { all: true };
        }
      }
      
      return newFilters;
    });
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
      if (!domainFilter.all) {
        const hasSpecificDomainFilter = Object.keys(domainFilter).some(key => key !== 'all' && domainFilter[key]);
        
        if (hasSpecificDomainFilter) {
          const matchesDomain = useCase.category.some(cat => {
            const categoryLower = cat.toLowerCase();
            return (domainFilter.it && categoryLower === 'it') ||
                   (domainFilter.hr && categoryLower === 'hr') ||
                   (domainFilter.sales && categoryLower === 'sales') ||
                   (domainFilter.finance && categoryLower === 'finance');
          });
          
          if (!matchesDomain) {
            return false;
          }
        }
      }

      // Integrations filter
      const integrationsFilter = filters.Integrations;
      if (!integrationsFilter.all) {
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
