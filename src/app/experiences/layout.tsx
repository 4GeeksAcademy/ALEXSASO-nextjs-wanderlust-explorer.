import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { ExperienceFiltersProvider } from '@/context/ExperienceFiltersContext';

interface ExperiencesLayoutProps {
  children: ReactNode;
}

export default function ExperiencesLayout({ children }: ExperiencesLayoutProps) {
  return (
    <Suspense fallback={null}>
      <ExperienceFiltersProvider>{children}</ExperienceFiltersProvider>
    </Suspense>
  );
}
