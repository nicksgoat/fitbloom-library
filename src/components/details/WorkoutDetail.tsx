
import React, { useState } from 'react';
import { ItemType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Heart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LeaderboardTab from './LeaderboardTab';

interface WorkoutDetailProps {
  item: ItemType;
  onClose: () => void;
}

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("details");

  return (
    <div className="flex flex-col h-[80vh] overflow-y-auto pb-safe">
      {/* Header Image */}
      <div className="relative w-full h-48 md:h-64">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/70 h-10 w-10"
          onClick={() => {}}
        >
          <Heart className={item.isFavorite ? "h-5 w-5 fill-fitbloom-purple text-fitbloom-purple" : "h-5 w-5 text-white"} />
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <Tabs defaultValue="details" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-transparent h-14 p-0 w-full flex justify-start">
            <TabsTrigger 
              value="details"
              className="flex-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-fitbloom-purple rounded-none h-full"
            >
              Details
            </TabsTrigger>
            <TabsTrigger 
              value="leaderboard"
              className="flex-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-fitbloom-purple rounded-none h-full"
            >
              Leaderboard
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 flex-1">
        {activeTab === "details" ? (
          <>
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
              {item.tags?.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
              <Badge variant={item.difficulty === 'beginner' ? 'secondary' : item.difficulty === 'intermediate' ? 'default' : 'destructive'} 
                    className="text-xs px-2 py-0.5">
                {item.difficulty}
              </Badge>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold mb-2">Description</h2>
              <p className="text-sm text-gray-300">
                {item.description || "This workout combines multiple exercises for a complete training session. Follow the exercise sequence for maximum efficiency."}
              </p>
            </div>

            {/* Exercises in this workout */}
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Exercises</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-900 rounded-lg p-2">
                    <div className="h-10 w-10 rounded bg-gray-800 flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">
                        {["Push-ups", "Squats", "Planks", "Lunges"][index]}
                      </h3>
                      <p className="text-xs text-fitbloom-text-medium">
                        {["3 sets x 10 reps", "4 sets x 15 reps", "3 sets x 30 sec", "3 sets x 12 reps"][index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <LeaderboardTab itemTitle={item.title} itemType={item.type} />
        )}
      </div>

      {/* Action Buttons */}
      <div className="sticky bottom-0 w-full bg-black bg-opacity-80 backdrop-blur-sm p-4 border-t border-gray-800 flex gap-3">
        <Button variant="outline" size="lg" className="flex-1" onClick={onClose}>
          Close
        </Button>
        <Button className="flex-1 bg-fitbloom-purple hover:bg-fitbloom-purple/90">
          Start Workout
        </Button>
      </div>
    </div>
  );
};

export default WorkoutDetail;
