'use client';

import { useFavorites } from '@/context/FavoritesContext';

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Perfil / Profile</h1>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600">Resumen de cuenta / Account summary</p>
        <p className="mt-3 text-lg font-semibold text-slate-900">
          Favoritos guardados / Saved favorites: {favorites.length}
        </p>
      </section>
    </main>
  );
}
