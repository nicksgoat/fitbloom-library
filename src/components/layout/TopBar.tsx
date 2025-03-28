
import React, { useState } from 'react';
import { Search, Bell, User, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const TopBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const isMobile = useIsMobile();

  return (
    <header className="p-4 flex items-center justify-between border-b border-gray-900">
      {!isMobile && (
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for exercises, workouts..."
            className="pl-10 bg-gray-900 border-none text-white"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )}

      {isMobile && (
        <h1 className="text-xl font-bold flex items-center">
          <span className="text-fitbloom-purple">Fit</span>
          <span className="text-white">Bloom</span>
        </h1>
      )}

      <div className="flex items-center space-x-4">
        {!isMobile && (
          <>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-900">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-900">
              <Bell className="h-4 w-4" />
            </Button>
          </>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-900">
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-800" />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopBar;
