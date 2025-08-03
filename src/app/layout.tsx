import './globals.css';
import { ReactNode } from 'react';
import SidebarWrapper from '@/components/SidebarWrapper';

export const metadata = {
  title: 'POS System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 dark:bg-black">
        <SidebarWrapper />
        <main className="flex-1 p-6 bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
