
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';

// Types for metrics and records
type MetricType = 'All Metrics' | 'Weight' | 'Time' | 'Distance' | 'Custom';
type LeaderboardRecord = {
  id: number;
  rank: number;
  user: {
    name: string;
    avatar?: string;
  };
  value: string;
  unit: string;
  change?: number;
};

// Sample data for the leaderboard
const sampleData: Record<MetricType, LeaderboardRecord[]> = {
  'All Metrics': [
    { id: 1, rank: 1, user: { name: 'AlexStrong' }, value: '315', unit: 'lbs', change: 2 },
    { id: 2, rank: 2, user: { name: 'FitnessFan' }, value: '300', unit: 'lbs', change: -1 },
    { id: 3, rank: 3, user: { name: 'GymRat' }, value: '285', unit: 'lbs', change: 1 },
  ],
  'Weight': [
    { id: 1, rank: 1, user: { name: 'AlexStrong' }, value: '315', unit: 'lbs', change: 2 },
    { id: 2, rank: 2, user: { name: 'PowerLifter' }, value: '305', unit: 'lbs', change: 0 },
    { id: 3, rank: 3, user: { name: 'WeightCrusher' }, value: '290', unit: 'lbs', change: 0 },
  ],
  'Time': [
    { id: 1, rank: 1, user: { name: 'SpeedDemon' }, value: '1:45', unit: 'min', change: 0 },
    { id: 2, rank: 2, user: { name: 'QuickRunner' }, value: '1:52', unit: 'min', change: 1 },
    { id: 3, rank: 3, user: { name: 'FastPacer' }, value: '2:05', unit: 'min', change: -1 },
  ],
  'Distance': [
    { id: 1, rank: 1, user: { name: 'MarathonMan' }, value: '26.2', unit: 'miles', change: 0 },
    { id: 2, rank: 2, user: { name: 'LongRunner' }, value: '23.5', unit: 'miles', change: 0 },
    { id: 3, rank: 3, user: { name: 'DistanceKing' }, value: '21.8', unit: 'miles', change: 2 },
  ],
  'Custom': [
    { id: 1, rank: 1, user: { name: 'CustomChamp' }, value: '45', unit: 'reps', change: 1 },
    { id: 2, rank: 2, user: { name: 'RepMaster' }, value: '42', unit: 'reps', change: -1 },
    { id: 3, rank: 3, user: { name: 'EnduranceKing' }, value: '38', unit: 'reps', change: 0 },
  ],
};

interface LeaderboardTabProps {
  itemTitle: string;
  itemType: 'exercise' | 'workout' | 'program';
}

const LeaderboardTab: React.FC<LeaderboardTabProps> = ({ itemTitle, itemType }) => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('Weight');
  const metrics: MetricType[] = ['All Metrics', 'Weight', 'Time', 'Distance', 'Custom'];
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">{itemTitle} Leaderboard</h2>
        <p className="text-sm text-fitbloom-text-medium">See who's leading in this {itemType}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {metrics.map((metric) => (
          <Badge
            key={metric}
            variant={activeMetric === metric ? "default" : "outline"}
            className={`cursor-pointer ${activeMetric === metric ? 'bg-fitbloom-purple' : ''}`}
            onClick={() => setActiveMetric(metric)}
          >
            {metric}
          </Badge>
        ))}
      </div>

      <div className="bg-gray-900 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-800">
              <TableHead className="w-16 text-center">Rank</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="text-right">Record</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData[activeMetric].map((record) => (
              <TableRow key={record.id} className="border-gray-800">
                <TableCell className="text-center">
                  {record.rank === 1 ? (
                    <div className="flex justify-center">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                    </div>
                  ) : (
                    record.rank
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <span>{record.user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="font-medium">{record.value} {record.unit}</span>
                    {record.change !== undefined && record.change !== 0 && (
                      <span className={`text-xs ${record.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {record.change > 0 ? `↑${record.change}` : `↓${Math.abs(record.change)}`}
                      </span>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderboardTab;
