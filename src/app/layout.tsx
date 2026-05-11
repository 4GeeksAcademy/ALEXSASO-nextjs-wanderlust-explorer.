'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { FavoritesProvider } from '@/context/FavoritesContext';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string): void => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]));
  };

  const favoritesValue = useMemo(
    () => ({
      favorites,
      toggleFavorite,
    }),
    [favorites],
  );

  return (
    <html lang="es">
      <body>
        <FavoritesProvider value={favoritesValue}>
          <Navbar favoriteCount={favorites.length} />
          <div className="content">{children}</div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
