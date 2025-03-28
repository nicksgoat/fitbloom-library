
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black text-white">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <Sidebar />}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
      {isMobile && (
        <div className="bg-gray-900 border-t border-gray-800">
          <Sidebar mobileFooter />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
