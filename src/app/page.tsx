"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { CategoryChips } from '@/components/CategoryChips';
import { PropertyCard } from '@/components/PropertyCard';
import { PropertyGridSkeleton } from '@/components/PropertyGridSkeleton';
import { homeCategories, homeCategoryMap } from '@/data/homeCategories';
import { properties } from '@/data/properties';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const filteredProperties = useMemo(() => {
    const selected = homeCategoryMap[activeCategory];
    const normalized = search.trim().toLowerCase();

    return properties.filter((property) => {
      const byCategory = selected ? property.category === selected : true;
      const bySearch =
        normalized.length === 0 ||
        property.title.toLowerCase().includes(normalized) ||
        property.location.city.toLowerCase().includes(normalized) ||
        property.location.country.toLowerCase().includes(normalized);

      return byCategory && bySearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 animate-fade-in">
      <header className="space-y-4 rounded-3xl border border-rose-100 bg-gradient-to-r from-white via-rose-50/50 to-orange-50/60 p-4 shadow-sm animate-rise-in">
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-bold tracking-tight text-slate-900">Encuentra tu proxima estancia</p>
          <Link href="/catalog" className="text-sm font-semibold text-rose-600 underline-offset-4 hover:underline">
            Ver catalogo
          </Link>
        </div>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Busca playa, ciudad o tipo de alojamiento"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
        />
      </header>

      <div className="animate-rise-in delay-100">
        <CategoryChips categories={homeCategories} activeCategory={activeCategory} onChange={setActiveCategory} />
      </div>

      {isLoading ? (
        <PropertyGridSkeleton count={8} />
      ) : (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-rise-in delay-150">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </section>
      )}
    </main>
  );
}
