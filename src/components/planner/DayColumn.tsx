import React from 'react';
import { Activity } from '../../types/activity';
import { ActivityCard } from './ActivityCard';

interface DayColumnProps {
  date: Date;
  activities: Activity[];
  isDisabled: boolean;
  onAddActivity: () => void;
}

export function DayColumn({ date, activities, isDisabled }: DayColumnProps) {
  const getActivityPosition = (activity: Activity) => {
    const startTime = new Date(activity.startTime);
    const endTime = new Date(activity.endTime);
    
    const startMinutes = startTime.getHours() * 60 + startTime.getMinutes();
    const endMinutes = endTime.getHours() * 60 + endTime.getMinutes();
    
    const totalMinutesInDay = 24 * 60;
    
    const top = (startMinutes / totalMinutesInDay) * 100;
    const height = ((endMinutes - startMinutes) / totalMinutesInDay) * 100;
    
    return {
      top: `${top}%`,
      height: `${height}%`,
    };
  };

  return (
    <div
      className={`relative h-[1440px] bg-gray-800 border-r border-gray-700/50 ${
        isDisabled ? 'opacity-50' : ''
      }`}
    >
      {/* Time Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="border-t border-gray-700/30"
            style={{ height: 'calc(100% / 12)' }}
          />
        ))}
      </div>

      {/* Activities Container */}
      <div className="relative h-full px-1">
        {activities.map((activity) => {
          const position = getActivityPosition(activity);
          return (
            <div
              key={activity.id}
              className="absolute left-1 right-1"
              style={{
                top: position.top,
                height: position.height,
              }}
            >
              <ActivityCard activity={activity} />
            </div>
          );
        })}

        {activities.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500/50 text-sm">No activities</p>
          </div>
        )}
      </div>
    </div>
  );
}