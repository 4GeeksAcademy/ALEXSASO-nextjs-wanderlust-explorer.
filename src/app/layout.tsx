import type { ReactNode } from 'react';
import Providers from './providers';
import './globals.css';

export const metadata = {
  title: 'Wanderlust Explorer',
  description: 'Explora experiencias de viaje personalizadas.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
