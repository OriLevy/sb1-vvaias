import React from 'react';
import { format } from 'date-fns';
import { MapPin, Clock } from 'lucide-react';
import { Activity } from '../../types/activity';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div className="p-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-md transition-colors duration-300 cursor-pointer group h-full overflow-hidden backdrop-blur-sm">
      <h4 className="font-medium text-emerald-400 text-xs mb-0.5 truncate group-hover:text-emerald-300 transition-colors duration-300">
        {activity.title}
      </h4>
      
      <div className="space-y-0.5">
        <div className="flex items-center text-[10px] text-emerald-300/70">
          <Clock className="w-2.5 h-2.5 mr-0.5 flex-shrink-0" />
          <span className="truncate">
            {format(new Date(activity.startTime), 'HH:mm')} -{' '}
            {format(new Date(activity.endTime), 'HH:mm')}
          </span>
        </div>
        
        {activity.location && (
          <div className="flex items-center text-[10px] text-emerald-300/70">
            <MapPin className="w-2.5 h-2.5 mr-0.5 flex-shrink-0" />
            <span className="truncate">{activity.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}