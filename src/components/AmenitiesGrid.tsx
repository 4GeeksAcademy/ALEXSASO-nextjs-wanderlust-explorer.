import { Amenity } from '@/types';

interface AmenitiesGridProps {
  amenities: Amenity[];
}

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-slate-900">Servicios</h2>
      <div className="grid grid-cols-1 gap-2 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <p key={amenity.id} className="text-sm text-slate-700">
            • {amenity.label}
          </p>
        ))}
      </div>
    </section>
  );
};