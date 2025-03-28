
import React from 'react';
import ContentCard from './ContentCard';
import { ItemType } from '@/lib/types';

interface ContentGridProps {
  items: ItemType[];
}

const ContentGrid = ({ items }: ContentGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContentGrid;
