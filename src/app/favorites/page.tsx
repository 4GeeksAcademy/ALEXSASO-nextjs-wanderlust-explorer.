'use client';

import { ExperienceCard } from '@/components/ExperienceCard';
import { useFavorites } from '@/context/FavoritesContext';
import { experiences } from '@/data/experiences';
import { useSearchParams } from 'next/navigation';

type Locale = 'es' | 'en';

const pageText = {
  es: {
    title: 'Mis Favoritos',
    empty: 'Aun no has guardado ninguna experiencia.',
  },
  en: {
    title: 'My Favorites',
    empty: 'You have not saved any experiences yet.',
  },
} as const;

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const searchParams = useSearchParams();
  const language: Locale = searchParams.get('lang') === 'en' ? 'en' : 'es';
  const t = pageText[language];

  const favoriteExperiences = experiences.filter((experience) => favorites.includes(experience.id));

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">
        {t.title} {'<3'}
      </h1>

      {favoriteExperiences.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
              language={language}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-dashed bg-slate-50 py-20 text-center">
          <p className="text-lg text-slate-500">{t.empty}</p>
        </div>
      )}
    </main>
  );
}
