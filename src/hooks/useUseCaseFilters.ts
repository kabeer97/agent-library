import { useState, useMemo } from 'react';
import { UseCase } from '@/types/useCase';

export const useUseCaseFilters = (useCases: UseCase[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSort, setCurrentSort] = useState('recommended');
  const [filters, setFilters] = useState<Record<string, Record<string, boolean>>>({
    System: { all: true },
    Solutions: { all: true },
    Type: { all: true },
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
