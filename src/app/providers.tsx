'use client';

import type { ReactNode } from 'react';
import { FavoritesProvider } from '@/context/FavoritesContext';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
