import React from 'react';
import { ItemType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Heart, Share2 } from 'lucide-react';
interface ProgramDetailProps {
  item: ItemType;
  onClose: () => void;
}
const ProgramDetail: React.FC<ProgramDetailProps> = ({
  item,
  onClose
}) => {
  return <div className="flex flex-col h-[80vh] overflow-y-auto pb-safe">
      {/* Header Image */}
      <div className="relative w-full h-48 md:h-64">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/70 h-10 w-10" onClick={() => {}}>
          <Heart className={item.isFavorite ? "h-5 w-5 fill-fitbloom-purple text-fitbloom-purple" : "h-5 w-5 text-white"} />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 flex-1">
        <div>
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-medium uppercase text-fitbloom-text-medium">{item.type}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-fitbloom-text-medium" />
              <span className="text-xs text-fitbloom-text-medium">{item.duration}</span>
            </div>
          </div>
          <h1 className="text-xl font-bold mb-1">{item.title}</h1>
          <p className="text-sm text-fitbloom-text-medium">{item.creator}</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {item.tags?.map((tag, index) => <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
              {tag}
            </Badge>)}
          <Badge variant={item.difficulty === 'beginner' ? 'secondary' : item.difficulty === 'intermediate' ? 'default' : 'destructive'} className="text-xs px-2 py-0.5">
            {item.difficulty}
          </Badge>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">Description</h2>
          <p className="text-sm text-gray-300">
            {item.description || "This comprehensive program is designed to help you achieve your fitness goals over the course of several weeks. Follow the structured workouts for the best results."}
          </p>
        </div>

        {/* Program Duration */}
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Duration</h2>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-fitbloom-purple" />
            <span className="text-sm">6 weeks program</span>
          </div>
        </div>

        {/* Program Progress */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">Progress</h2>
            <span className="text-sm text-fitbloom-purple">0%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-fitbloom-purple h-2 rounded-full w-0"></div>
          </div>
        </div>

        {/* Workouts in this program */}
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Workouts</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((_, index) => <div key={index} className="flex items-center gap-3 bg-gray-900 rounded-lg p-3">
                <div className="h-10 w-10 rounded-md bg-gray-800 flex items-center justify-center font-medium">
                  W{index + 1}
                </div>
                <div className="flex-1">
                  
                  <p className="text-xs text-fitbloom-text-medium mt-1">
                    {["7 exercises • 45 min", "6 exercises • 50 min", "8 exercises • 30 min", "5 exercises • 40 min"][index]}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="sticky bottom-0 w-full bg-black bg-opacity-80 backdrop-blur-sm p-4 border-t border-gray-800 flex gap-3">
        <Button variant="outline" size="lg" className="flex-1" onClick={onClose}>
          Close
        </Button>
        <Button className="flex-1 bg-fitbloom-purple hover:bg-fitbloom-purple/90">
          Start Program
        </Button>
      </div>
    </div>;
};
export default ProgramDetail;