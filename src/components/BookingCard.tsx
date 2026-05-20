interface BookingCardProps {
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  guests: number;
  maxGuests: number;
  onGuestsChange: (value: number) => void;
}

export const BookingCard = ({
  pricePerNight,
  cleaningFee,
  serviceFee,
  guests,
  maxGuests,
  onGuestsChange,
}: BookingCardProps) => {
  const nights = 2;
  const subtotal = pricePerNight * nights;
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg lg:sticky lg:top-24">
      <p className="text-xl font-bold text-slate-900">${pricePerNight} <span className="text-sm font-normal">/ noche</span></p>

      <div className="mt-4 rounded-xl border border-slate-200 p-3">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Huespedes</p>
        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onGuestsChange(Math.max(1, guests - 1))}
            className="rounded-md border border-slate-300 px-3 py-1 text-sm"
          >
            -
          </button>
          <span className="text-sm font-medium text-slate-700">{guests}</span>
          <button
            type="button"
            onClick={() => onGuestsChange(Math.min(maxGuests, guests + 1))}
            className="rounded-md border border-slate-300 px-3 py-1 text-sm"
          >
            +
          </button>
        </div>
      </div>

      <button type="button" className="mt-4 w-full rounded-2xl bg-rose-500 py-3 text-sm font-semibold text-white transition hover:bg-rose-600">
        Reservar
      </button>

      <div className="mt-4 space-y-1 text-sm text-slate-600">
        <p>${subtotal} por {nights} noches</p>
        <p>Tarifa de limpieza: ${cleaningFee}</p>
        <p>Tarifa de servicio: ${serviceFee}</p>
        <p className="border-t border-slate-200 pt-2 text-base font-semibold text-slate-900">Total: ${total}</p>
      </div>
    </aside>
  );
};