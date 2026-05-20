import Link from 'next/link';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const hasThumbnail = property.thumbnailUrl.trim().length > 0;

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <Link href={`/rooms/${property.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2">
        <div className="relative h-52 w-full bg-slate-100 sm:h-56">
          {hasThumbnail ? (
            <img src={property.thumbnailUrl} alt={property.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-sm font-medium text-slate-500">
              Imagen no disponible
            </div>
          )}
        </div>

        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-base font-semibold text-slate-900">{property.title}</h3>
            <p className="shrink-0 text-sm font-semibold text-slate-900">★ {property.rating.toFixed(1)}</p>
          </div>

          <p className="text-sm text-slate-500">
            {property.location.city}, {property.location.country}
          </p>

          <p className="text-sm text-slate-700">
            <span className="font-semibold text-slate-900">${property.pricePerNight}</span> noche
          </p>
        </div>
      </Link>
    </article>
  );
};