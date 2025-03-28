
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { mockExercises, mockWorkouts, mockPrograms, mockCollections } from '@/lib/mockData';
import ContentGrid from '@/components/ui/ContentGrid';
import CollectionCard from '@/components/ui/CollectionCard';

const Library = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Library</h1>
        <Button className="bg-fitbloom-purple hover:bg-opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>

      <Tabs defaultValue="collections" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="collections" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="exercises" className="mt-4">
          <ContentGrid items={mockExercises.slice(0, 9)} />
        </TabsContent>
        
        <TabsContent value="workouts" className="mt-4">
          <ContentGrid items={mockWorkouts.slice(0, 9)} />
        </TabsContent>
        
        <TabsContent value="programs" className="mt-4">
          <ContentGrid items={mockPrograms.slice(0, 9)} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;
