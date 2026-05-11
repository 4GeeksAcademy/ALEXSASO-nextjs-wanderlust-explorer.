'use client';

import { createContext, useContext } from 'react';
import { FilterKey, useExperienceFilters } from '@/hooks/useExperienceFilters';
import { Experience } from '@/types';

interface CurrentFilters {
  search: string;
  category: string;
  destination: string;
}

interface ExperienceFiltersContextValue {
  filtered: Experience[];
  handleFilterChange: (key: FilterKey, value: string) => void;
  currentFilters: CurrentFilters;
}

const ExperienceFiltersContext = createContext<ExperienceFiltersContextValue | undefined>(undefined);

interface ExperienceFiltersProviderProps {
  children: React.ReactNode;
}

export const ExperienceFiltersProvider = ({ children }: ExperienceFiltersProviderProps) => {
  const { filtered, handleFilterChange, currentFilters } = useExperienceFilters();

  return (
    <ExperienceFiltersContext.Provider
      value={{
        filtered,
        handleFilterChange,
        currentFilters,
      }}
    >
      {children}
    </ExperienceFiltersContext.Provider>
  );
};

export const useExperienceFiltersContext = (): ExperienceFiltersContextValue => {
  const context = useContext(ExperienceFiltersContext);

  if (!context) {
    throw new Error('useExperienceFiltersContext must be used within an ExperienceFiltersProvider');
  }

  return context;
};
