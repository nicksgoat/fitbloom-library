
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentCard from '@/components/ui/ContentCard';
import CategoryButton from '@/components/ui/CategoryButton';
import ContentCarousel from '@/components/ui/ContentCarousel';
import { mockExercises, mockWorkouts, mockPrograms } from '@/lib/mockData';

const Explore = () => {
  const allCategories = [
    "Strength", "Cardio", "Flexibility", "HIIT", 
    "Sports", "Rehabilitation", "Mobility", "Functional"
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Browse Categories</h2>
          <a href="#" className="text-fitbloom-purple hover:underline">See All</a>
        </div>
        <div className="flex flex-wrap gap-3">
          {allCategories.map((category) => (
            <CategoryButton key={category} name={category} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Recommended For You</h2>
          <a href="#" className="text-fitbloom-purple hover:underline">More</a>
        </div>
        <Tabs defaultValue="workouts" className="w-full">
          <TabsList>
            <TabsTrigger value="exercises">Exercises</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
          </TabsList>
          <TabsContent value="exercises" className="mt-4">
            <ContentCarousel items={mockExercises} />
          </TabsContent>
          <TabsContent value="workouts" className="mt-4">
            <ContentCarousel items={mockWorkouts} />
          </TabsContent>
          <TabsContent value="programs" className="mt-4">
            <ContentCarousel items={mockPrograms} />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Trending Workouts</h2>
          <a href="#" className="text-fitbloom-purple hover:underline">More</a>
        </div>
        <ContentCarousel items={mockWorkouts.slice(0, 6)} />
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">New Releases</h2>
          <a href="#" className="text-fitbloom-purple hover:underline">More</a>
        </div>
        <ContentCarousel items={[...mockExercises, ...mockWorkouts, ...mockPrograms].slice(0, 6)} />
      </section>
    </div>
  );
};

export default Explore;
