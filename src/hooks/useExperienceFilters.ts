'use client';

import { experiences } from '@/data/experiences';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type FilterKey = 'search' | 'category' | 'destination';

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const useExperienceFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const search = searchParams.get('search') ?? '';
  const category = searchParams.get('category') ?? '';
  const destination = searchParams.get('destination') ?? '';

  const handleFilterChange = (key: FilterKey, value: string): void => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const query = params.toString();
    replace(query ? `${pathname}?${query}` : pathname);
  };

  const filtered = experiences.filter((experience) => {
    const safeSearch = escapeRegExp(search);
    const searchRegex = new RegExp(safeSearch, 'i');

    const matchesSearch = searchRegex.test(experience.title);
    const matchesCategory = !category || experience.category === category;
    const matchesDestination =
      !destination || experience.destination.toLowerCase().includes(destination.toLowerCase());

    return matchesSearch && matchesCategory && matchesDestination;
  });

  return {
    filtered,
    handleFilterChange,
    currentFilters: {
      search,
      category,
      destination,
    },
  };
};
