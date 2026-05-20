import { Room } from '@/types';
import { AmenitiesGrid } from '@/components/AmenitiesGrid';
import { HostSummary } from '@/components/HostSummary';

interface RoomSummaryProps {
  room: Room;
}

export const RoomSummary = ({ room }: RoomSummaryProps) => {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">{room.title}</h1>
        <p className="text-sm text-slate-600">
          {room.rating.toFixed(2)} ({room.reviewsCount} resenas) · {room.location.city}, {room.location.country}
        </p>
        <p className="text-slate-700">{room.description}</p>
      </header>

      <HostSummary host={room.host} />
      <AmenitiesGrid amenities={room.amenities} />
    </div>
  );
};