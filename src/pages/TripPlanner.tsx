import React from 'react';
import { BackButton } from '../components/BackButton';
import { WeeklyCalendar } from '../components/planner/WeeklyCalendar';
import { useTripStore } from '../stores/tripStore';
import { format } from 'date-fns';

export function TripPlanner() {
  const { destination, startDate, endDate } = useTripStore();

  if (!startDate || !endDate) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 px-4 pb-12">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Trip to {destination}</h1>
          <p className="text-gray-400">
            {format(startDate, 'MMMM d, yyyy')} - {format(endDate, 'MMMM d, yyyy')}
          </p>
        </div>
        <WeeklyCalendar startDate={startDate} endDate={endDate} />
      </div>
    </div>
  );
}