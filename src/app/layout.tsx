'use client';

import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import SidebarWrapper from '@/components/SidebarWrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  // Load sidebar state from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem('sidebar-collapsed');
    if (stored === 'true') setCollapsed(true);

    // Listener for global toggle event
    const handleToggle = () => {
      const updated = localStorage.getItem('sidebar-collapsed') === 'true';
      setCollapsed(updated);
    };

    window.addEventListener('toggle-sidebar', handleToggle);
    return () => window.removeEventListener('toggle-sidebar', handleToggle);
  }, []);

  return (
    <html lang="en">
      <body className="flex min-h-screen bg-[#DCD0FF] dark:bg-gray-700">
        {/* Sidebar */}
        <SidebarWrapper collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main content area that resizes dynamically based on sidebar */}
        <main
          className={`
            transition-all duration-300 max-w-screen-xl
            bg-[#DCD0FF] dark:bg-gray-700 text-black dark:text-white 
            w-full max-w-[90%] mr-auto rounded-xl
            ${collapsed ? 'ml-0' : 'ml-0'}
          `}
        >
          {/* Add padding only inside child pages */}
          <div className="pl-3 p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
