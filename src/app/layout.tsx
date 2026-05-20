import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
