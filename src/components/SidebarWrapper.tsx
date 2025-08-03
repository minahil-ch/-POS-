'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar'; // correct if Sidebar is in /components


export default function SidebarWrapper() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
  );
}
