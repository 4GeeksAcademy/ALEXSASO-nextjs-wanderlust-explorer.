"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookingCard } from '@/components/BookingCard';
import { RoomLoadingState } from '@/components/RoomLoadingState';
import { RoomNotFoundState } from '@/components/RoomNotFoundState';
import { RoomGallery } from '@/components/RoomGallery';
import { RoomSummary } from '@/components/RoomSummary';
import { findRoomById } from '@/data/properties';
import { Room } from '@/types';

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const foundRoom = findRoomById(params.id);
      setRoom(foundRoom ?? null);
      setCurrentImageIndex(0);
      setGuests(1);
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (isLoading) {
    return <RoomLoadingState />;
  }

  if (!room) {
    return <RoomNotFoundState />;
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  const previousImage = () => setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);

  return (
    <main className="mx-auto max-w-7xl space-y-5 px-4 py-6 pb-28 lg:pb-6 animate-fade-in">
      <Link href="/catalog" className="text-sm font-semibold text-rose-600 underline-offset-4 hover:underline">
        ← Volver al catalogo
      </Link>

      <div className="animate-rise-in">
        <RoomGallery
          images={room.images}
          title={room.title}
          currentIndex={currentImageIndex}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      </div>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start animate-rise-in delay-100">
        <RoomSummary room={room} />

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 lg:static lg:border-none lg:bg-transparent lg:p-0">
          <BookingCard
            pricePerNight={room.pricePerNight}
            cleaningFee={room.cleaningFee}
            serviceFee={room.serviceFee}
            guests={guests}
            maxGuests={room.maxGuests}
            onGuestsChange={setGuests}
          />
        </div>
      </section>
    </main>
  );
}