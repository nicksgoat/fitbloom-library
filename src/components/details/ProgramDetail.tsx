
import React, { useState } from 'react';
import { ItemType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Heart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import LeaderboardTab from './LeaderboardTab';

interface ProgramDetailProps {
  item: ItemType;
  onClose: () => void;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("details");
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const totalWeeks = 3; // This could be dynamic based on the program data

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

            {/* Workouts in this program by week - with tabs */}
            <div className="mt-6 space-y-4">
              <h2 className="font-semibold">Weekly Workouts</h2>
              
              <Tabs value={activeWeek.toString()} onValueChange={(value) => setActiveWeek(Number(value))} className="w-full">
                <TabsList className="bg-gray-900 w-full justify-between overflow-x-auto flex mb-4">
                  {Array.from({ length: totalWeeks }).map((_, index) => (
                    <TabsTrigger
                      key={index}
                      value={(index + 1).toString()}
                      className="flex-1 data-[state=active]:bg-gray-800 data-[state=active]:text-white rounded-sm text-sm py-2"
                    >
                      Week {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {Array.from({ length: totalWeeks }).map((_, weekIndex) => (
                  <TabsContent key={weekIndex} value={(weekIndex + 1).toString()} className="mt-0">
                    <div className="space-y-3">
                      {[1, 2].map((workoutNum) => (
                        <div key={`${weekIndex+1}-${workoutNum}`} className="flex items-center gap-3 bg-gray-900 rounded-lg p-3">
                          <div className="h-10 w-10 rounded-md bg-gray-800 flex items-center justify-center font-medium">
                            W{workoutNum}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">
                              {weekIndex === 0 
                                ? ["Upper Body Focus", "Lower Body Power"][workoutNum-1] 
                                : weekIndex === 1 
                                  ? ["Full Body HIIT", "Recovery & Mobility"][workoutNum-1]
                                  : ["Strength Circuit", "Conditioning"][workoutNum-1]}
                            </h3>
                            <p className="text-xs text-fitbloom-text-medium mt-1">
                              {["7 exercises • 45 min", "6 exercises • 50 min", "8 exercises • 30 min", "5 exercises • 40 min", "6 exercises • 35 min", "7 exercises • 45 min"][weekIndex+workoutNum-1]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
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
          Start Program
        </Button>
      </div>
    </div>
  );
};

export default ProgramDetail;
