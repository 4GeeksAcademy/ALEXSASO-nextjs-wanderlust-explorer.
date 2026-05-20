'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const showSearch = pathname === '/';

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Catalogo', href: '/catalog' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-slate-200/80 bg-white/95 px-4 py-4 backdrop-blur">
      <h2 className="text-lg font-bold tracking-tight text-rose-500 sm:text-xl">airbnb</h2>
      {showSearch ? (
        <input
          type="text"
          aria-label="Busqueda rapida"
          placeholder="Buscar"
          className="w-full max-w-xs rounded-full border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
        />
      ) : null}
      <div className="flex gap-4 text-sm sm:text-base">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-3 py-1.5 transition ${
              pathname === link.href
                ? 'bg-rose-50 font-semibold text-rose-600'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
