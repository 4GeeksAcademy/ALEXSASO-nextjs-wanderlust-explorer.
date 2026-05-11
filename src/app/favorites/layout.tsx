import type { ReactNode } from 'react';
import { Suspense } from 'react';

interface FavoritesLayoutProps {
  children: ReactNode;
}

export default function FavoritesLayout({ children }: FavoritesLayoutProps) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
