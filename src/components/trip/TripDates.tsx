import React from 'react';
import { Calendar } from 'lucide-react';
import { useTripStore } from '../../stores/tripStore';
import { DatePicker } from './DatePicker';

interface TripDatesProps {
  onComplete: () => void;
}

export function TripDates({ onComplete }: TripDatesProps) {
  const { destination, startDate, endDate, setStartDate, setEndDate } = useTripStore();

  const handleContinue = () => {
    if (startDate && endDate) {
      onComplete();
    }
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-2">When are you traveling?</h1>
      <p className="text-gray-400 mb-8">Planning your trip to {destination}</p>

      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-semibold text-white">Select your dates</h2>
          </div>

          <div className="grid gap-6">
            <DatePicker
              label="Start Date"
              selected={startDate}
              onChange={setStartDate}
              minDate={new Date()}
            />
            <DatePicker
              label="End Date"
              selected={endDate}
              onChange={setEndDate}
              minDate={startDate || new Date()}
              disabled={!startDate}
            />
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!startDate || !endDate}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors duration-300"
        >
          Continue to Planning
        </button>
      </div>
    </div>
  );
}