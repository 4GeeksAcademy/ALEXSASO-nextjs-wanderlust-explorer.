import Link from 'next/link';
import { Experience } from '@/types';

type Locale = 'es' | 'en';

const cardText = {
  es: {
    removeFavorite: 'Quitar de favoritos',
    addFavorite: 'Agregar a favoritos',
    saved: 'Guardado',
    save: 'Guardar',
    rating: 'Valoracion',
  },
  en: {
    removeFavorite: 'Remove from favorites',
    addFavorite: 'Add to favorites',
    saved: 'Saved',
    save: 'Save',
    rating: 'Rating',
  },
} as const;

interface Props {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  language: Locale;
}

export const ExperienceCard = ({ experience, isFavorite, onToggleFavorite, language }: Props) => {
  const t = cardText[language];

  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg">
      <div className="relative h-48">
        <img src={experience.imageUrl} alt={experience.title} className="h-full w-full object-cover" />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            onToggleFavorite(experience.id);
          }}
          className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm transition hover:bg-white"
          aria-label={isFavorite ? t.removeFavorite : t.addFavorite}
        >
          {isFavorite ? t.saved : t.save}
        </button>
      </div>

      <Link href={`/experiences/${experience.id}`} className="block p-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{experience.category}</span>
        <h3 className="mt-1 text-lg font-bold transition group-hover:text-blue-600">{experience.title}</h3>
        <p className="text-sm text-slate-500">{experience.destination}</p>

        <div className="mt-4 flex items-center justify-between border-t pt-3">
          <span className="font-bold text-slate-900">${experience.price}</span>
          <span className="text-sm font-medium">
            {t.rating} {experience.rating}
          </span>
        </div>
      </Link>
    </div>
  );
};
