'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NavBar } from "@/components/navbar"
import Sidebar from "@/components/sidebar"

// Route configuration for your specific routes
const routeConfig = {
  '/create-transactions': { showSidebar: true },
  '/transactions': { showSidebar: true },
  '/home': { showSidebar: true},
  // Add other routes as needed
}

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const config = routeConfig[pathname] || { showSidebar: true };
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-customWhiteBackground">
      {/* {config.showNav && (
        <>
          <NavBar />
          <div className="h-14" />
        </>
      )} */}
      {/* Mobile Toggle Button - Visible only on small screens */}
      {config.showSidebar && (
        <button
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          className="fixed top-0 left-0 z-50 p-4 text-black lg:hidden" // Hidden on md and larger screens
          aria-label="Toggle Sidebar"
        >
          {showMobileSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      <div className="flex flex-1 relative">
        {/* Desktop Sidebar - Visible only on medium screens and up */}
        {config.showSidebar && (
          <div className={`hidden lg:flex transition-all duration-300 ease-in-out ${isExpanded || isHovered ? 'w-64' : 'w-16'}`}>
            <Sidebar
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
            />
          </div>
        )}

        {/* Mobile Sidebar - Visible only on small screens */}
        {config.showSidebar && showMobileSidebar && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setShowMobileSidebar(false)}
            />
            <div className="fixed left-0 top-15 h-[calc(100vh-4rem)] w-64 z-40 lg:hidden">
              <Sidebar
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            </div>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}