'use client';

import { ExperienceCard } from '@/components/ExperienceCard';
import { FilterBar } from '@/components/FilterBar';
import { SearchBar } from '@/components/SearchBar';
import { useExperienceFiltersContext } from '@/context/ExperienceFiltersContext';
import { useFavorites } from '@/context/FavoritesContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Locale = 'es' | 'en';

const uiText = {
  es: {
    title: 'Descubre Experiencias',
    searchPlaceholder: 'Buscar experiencia...',
    categoryAll: 'Todas las categorias',
    destinationPlaceholder: 'Filtrar por destino...',
    noResults: 'No se encontraron resultados para tu busqueda.',
    clearFilters: 'Limpiar filtros',
    languageLabel: 'Idioma',
  },
  en: {
    title: 'Discover Experiences',
    searchPlaceholder: 'Search experiences...',
    categoryAll: 'All categories',
    destinationPlaceholder: 'Filter by destination...',
    noResults: 'No results were found for your search.',
    clearFilters: 'Clear filters',
    languageLabel: 'Language',
  },
} as const;

export default function ExplorerPage() {
  const { filtered, handleFilterChange, currentFilters } = useExperienceFiltersContext();
  const { favorites, toggleFavorite } = useFavorites();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const rawLang = searchParams.get('lang');
  const language: Locale = rawLang === 'en' ? 'en' : 'es';
  const t = uiText[language];

  const handleLanguageChange = (value: Locale): void => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', value);
    const query = params.toString();
    replace(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">{t.title}</h1>

        <div className="flex items-center gap-2">
          <label htmlFor="language" className="text-sm font-medium text-slate-600">
            {t.languageLabel}
          </label>
          <select
            id="language"
            value={language}
            onChange={(event) => handleLanguageChange(event.target.value as Locale)}
            className="rounded-lg border bg-white px-3 py-2"
          >
            <option value="es">Espanol</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div className="mb-10 flex flex-col gap-4 md:flex-row">
        <SearchBar
          placeholder={t.searchPlaceholder}
          defaultValue={currentFilters.search}
          onSearch={(value) => handleFilterChange('search', value)}
        />

        <FilterBar
          currentCategory={currentFilters.category}
          onCategoryChange={(value) => handleFilterChange('category', value)}
          allLabel={t.categoryAll}
        />

        <input
          type="text"
          placeholder={t.destinationPlaceholder}
          defaultValue={currentFilters.destination}
          onChange={(event) => handleFilterChange('destination', event.target.value)}
          className="flex-1 rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favorites.includes(experience.id)}
              onToggleFavorite={toggleFavorite}
              language={language}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-xl text-slate-500">{t.noResults}</p>
          <button
            type="button"
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.delete('search');
              params.delete('category');
              params.delete('destination');

              const query = params.toString();
              replace(query ? `${pathname}?${query}` : pathname);
            }}
            className="mt-4 text-blue-600 underline"
          >
            {t.clearFilters}
          </button>
        </div>
      )}
    </main>
  );
}
