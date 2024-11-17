'use client';

import { usePathname } from 'next/navigation';
import { NavBar } from "@/components/navbar";

const NavBarWrapper = () => {
  const pathname = usePathname();
  const isGameRoute = pathname.includes('/game') || pathname.includes('/board');

  if (isGameRoute) {
    return null;
  }

  return <NavBar />;
};

export default NavBarWrapper;