'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  favoriteCount: number;
}

export const Navbar = ({ favoriteCount }: NavbarProps) => {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Explorar', href: '/experiences' },
    { name: 'Favoritos', href: '/favorites' },
    { name: 'Perfil', href: '/profile' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-between border-b bg-white p-6">
      <h2 className="text-xl font-bold">Wanderlust Explorer</h2>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'font-bold text-blue-600' : 'text-gray-600'}
          >
            {link.name} {link.name === 'Favoritos' ? `(${favoriteCount})` : ''}
          </Link>
        ))}
      </div>
    </nav>
  );
};
