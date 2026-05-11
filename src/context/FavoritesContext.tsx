'use client';

import { createContext, useContext, useMemo, useState } from 'react';

interface FavoritesContextValue {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

interface FavoritesProviderProps {
  children: React.ReactNode;
  value?: FavoritesContextValue;
}

export const FavoritesProvider = ({ children, value: externalValue }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string): void => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((favoriteId) => favoriteId !== id) : [...prev, id]));
  };

  const internalValue = useMemo(
    () => ({
      favorites,
      toggleFavorite,
    }),
    [favorites],
  );

  const value = externalValue ?? internalValue;

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = (): FavoritesContextValue => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};
