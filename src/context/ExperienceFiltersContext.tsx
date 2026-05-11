'use client';

import { createContext, useContext } from 'react';
import { useExperienceFilters } from '@/hooks/useExperienceFilters';
import { Experience } from '@/types';

interface CurrentFilters {
  search: string;
  category: string;
  destination: string;
}

interface ExperienceFiltersContextValue {
  filtered: Experience[];
  updateFilters: (key: string, value: string) => void;
  filters: CurrentFilters;
}

const ExperienceFiltersContext = createContext<ExperienceFiltersContextValue | undefined>(undefined);

interface ExperienceFiltersProviderProps {
  children: React.ReactNode;
}

export const ExperienceFiltersProvider = ({ children }: ExperienceFiltersProviderProps) => {
  const { filtered, updateFilters, filters } = useExperienceFilters();

  return (
    <ExperienceFiltersContext.Provider
      value={{
        filtered,
        updateFilters,
        filters,
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
