"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { MapPlaceholder } from '@/components/MapPlaceholder';
import { PropertyCard } from '@/components/PropertyCard';
import { ResultsHeader } from '@/components/ResultsHeader';
import { properties } from '@/data/properties';

type SortOrder = 'asc' | 'desc';

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedProperties = useMemo(() => {
    return [...properties].sort((a, b) =>
      sortOrder === 'asc' ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
    );
  }, [sortOrder]);

  return (
    <main className="mx-auto max-w-7xl space-y-4 px-4 py-6 pb-24 lg:pb-6 animate-fade-in">
      <div className="flex items-center justify-between animate-rise-in">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Catalogo de alojamientos</h1>
        <Link href="/" className="text-sm font-semibold text-rose-600 underline-offset-4 hover:underline">
          Inicio
        </Link>
      </div>

      <div className="animate-rise-in delay-100">
        <ResultsHeader resultsCount={sortedProperties.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_360px] animate-rise-in delay-150">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sortedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <MapPlaceholder />
      </section>
    </main>
  );
}