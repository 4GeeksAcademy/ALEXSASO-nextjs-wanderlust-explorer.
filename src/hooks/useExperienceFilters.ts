'use client';

import { experiences } from '@/data/experiences';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useExperienceFilters = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const destination = searchParams.get('destination') || '';

  const updateFilters = (key: string, value: string): void => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const filtered = experiences.filter((experience) => {
    const titleMatch = new RegExp(search, 'i').test(experience.title);
    const categoryMatch = !category || experience.category === category;
    const destinationMatch =
      !destination || experience.destination.toLowerCase().includes(destination.toLowerCase());

    return titleMatch && categoryMatch && destinationMatch;
  });

  return {
    filtered,
    updateFilters,
    filters: {
      search,
      category,
      destination,
    },
  };
};
