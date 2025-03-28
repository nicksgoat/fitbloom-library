
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Library, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Explore', path: '/explore', icon: <Compass className="h-5 w-5" /> },
    { name: 'My Library', path: '/library', icon: <Library className="h-5 w-5" /> },
  ];

  return (
    <div className="bg-black w-64 h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="text-fitbloom-purple">Fit</span>
          <span className="text-white">Bloom</span>
        </h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-white hover:bg-gray-900 hover:text-white",
                    location.pathname === item.path && "bg-gray-900 text-primary font-medium"
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
