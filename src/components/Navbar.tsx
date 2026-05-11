'use client';

import Link from 'next/link';

interface NavbarProps {
  favoriteCount: number;
}

export const Navbar = ({ favoriteCount }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/experiences" className="text-lg font-black tracking-tight text-slate-900">
          Wanderlust Explorer
        </Link>

        <div className="flex items-center gap-5 text-sm font-semibold text-slate-700">
          <Link href="/experiences" className="hover:text-blue-600">
            Explorar / Explore
          </Link>
          <Link href="/favorites" className="hover:text-blue-600">
            Favoritos / Favorites ({favoriteCount})
          </Link>
        </div>
      </nav>
    </header>
  );
};
