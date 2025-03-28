
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ItemType } from '@/lib/types';

interface ContentCardProps {
  item: ItemType;
  className?: string;
}

const ContentCard = ({ item, className }: ContentCardProps) => {
  return (
    <Card className={cn("content-card", className)}>
      <div className="relative">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="content-card-image"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 rounded-full bg-black/30 hover:bg-black/50"
        >
          <Heart className={cn("h-4 w-4", item.isFavorite ? "fill-fitbloom-purple text-fitbloom-purple" : "text-white")} />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase text-fitbloom-text-medium">{item.type}</span>
          <span className="text-xs">{item.duration}</span>
        </div>
        <h3 className="font-semibold mt-2 line-clamp-2">{item.title}</h3>
        <p className="text-sm text-fitbloom-text-medium mt-1 line-clamp-1">{item.creator}</p>
      </CardContent>
      <CardFooter className="pt-0 px-4 pb-4 flex flex-wrap gap-1">
        {item.tags?.slice(0, 3).map((tag, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
