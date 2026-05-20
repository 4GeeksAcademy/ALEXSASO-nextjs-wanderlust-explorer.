import Link from 'next/link';

export const RoomNotFoundState = () => {
  return (
    <main className="mx-auto max-w-7xl space-y-3 px-4 py-8 animate-fade-in">
      <p className="text-lg font-semibold text-slate-900">No encontramos este alojamiento.</p>
      <Link href="/catalog" className="text-sm font-semibold text-rose-600 underline-offset-4 hover:underline">
        Volver al catalogo
      </Link>
    </main>
  );
};