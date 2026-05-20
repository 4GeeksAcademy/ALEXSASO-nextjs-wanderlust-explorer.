interface RoomGalleryProps {
  images: string[];
  title: string;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const RoomGallery = ({ images, title, currentIndex, onPrevious, onNext }: RoomGalleryProps) => {
  const image = images[currentIndex] ?? '';

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
      <img src={image} alt={`${title} foto ${currentIndex + 1}`} className="h-64 w-full object-cover sm:h-80 lg:h-[420px]" />

      <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
        {currentIndex + 1} / {images.length}
      </div>

      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-700 shadow"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-700 shadow"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};