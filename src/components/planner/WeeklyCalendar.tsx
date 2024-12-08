import React, { useState, useRef } from 'react';
import { format, addDays, isSameDay, isWithinInterval, differenceInDays } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { ActivityForm } from './ActivityForm';
import { DayColumn } from './DayColumn';
import { TimeGrid } from './TimeGrid';
import { useActivityStore } from '../../stores/activityStore';

interface WeeklyCalendarProps {
  startDate: Date;
  endDate: Date;
}

export function WeeklyCalendar({ startDate, endDate }: WeeklyCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showActivityForm, setShowActivityForm] = useState(false);
  const activities = useActivityStore(state => state.activities);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeGridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const totalDays = differenceInDays(endDate, startDate) + 1;
  const days = Array.from({ length: totalDays }, (_, i) => addDays(startDate, i));

  const handleAddActivity = (date: Date) => {
    setSelectedDate(date);
    setShowActivityForm(true);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      scrollRef.current.scrollLeft += scrollAmount;
      if (headerRef.current) {
        headerRef.current.scrollLeft = scrollRef.current.scrollLeft;
      }
    }
  };

  const handleVerticalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (timeGridRef.current) {
      timeGridRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const handleHorizontalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (headerRef.current) {
      headerRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50">
      {/* Navigation Controls */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700/50">
        <button
          onClick={() => handleScroll('left')}
          className="p-1.5 hover:bg-gray-700/50 rounded-full transition-colors duration-300"
        >
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>
        <span className="text-sm text-gray-400">
          {format(startDate, 'MMM d')} - {format(endDate, 'MMM d, yyyy')}
        </span>
        <button
          onClick={() => handleScroll('right')}
          className="p-1.5 hover:bg-gray-700/50 rounded-full transition-colors duration-300"
        >
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="flex h-[600px]">
        {/* Time Grid */}
        <div className="flex-shrink-0 w-12 relative bg-gray-800/50 border-r border-gray-700/50">
          <div className="h-14 border-b border-gray-700/50" /> {/* Header spacing */}
          <div 
            ref={timeGridRef}
            className="h-[calc(600px-3.5rem)] overflow-y-auto overflow-x-hidden custom-scrollbar scrollbar-none"
          >
            <TimeGrid showLabelsOnly />
          </div>
        </div>

        {/* Calendar Content */}
        <div className="flex-grow overflow-hidden flex flex-col">
          {/* Calendar Header */}
          <div 
            ref={headerRef}
            className="overflow-x-hidden border-b border-gray-700/50"
          >
            <div 
              className="grid h-14"
              style={{ gridTemplateColumns: `repeat(${totalDays}, minmax(180px, 1fr))`, width: `${Math.max(totalDays * 180, 800)}px` }}
            >
              {days.map(day => {
                const isDisabled = !isWithinInterval(day, { start: startDate, end: endDate });
                return (
                  <div
                    key={day.toString()}
                    className="p-3 text-center border-r border-gray-700/50 relative group"
                  >
                    <div className="flex flex-col justify-center">
                      <div className="text-xs font-medium text-gray-400">
                        {format(day, 'EEEE')}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {format(day, 'MMM d')}
                      </div>
                    </div>
                    {!isDisabled && (
                      <button
                        onClick={() => handleAddActivity(day)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gray-700/50 hover:bg-gray-600 text-gray-400 hover:text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                        title="Add activity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calendar Body */}
          <div 
            className="flex-1 overflow-auto"
            ref={scrollRef}
            onScroll={(e) => {
              handleVerticalScroll(e);
              handleHorizontalScroll(e);
            }}
          >
            <div 
              className="grid"
              style={{ gridTemplateColumns: `repeat(${totalDays}, minmax(180px, 1fr))`, width: `${Math.max(totalDays * 180, 800)}px` }}
            >
              {days.map(day => {
                const dayActivities = activities.filter(activity =>
                  isSameDay(new Date(activity.date), day)
                );

                return (
                  <DayColumn
                    key={day.toString()}
                    date={day}
                    activities={dayActivities}
                    isDisabled={!isWithinInterval(day, { start: startDate, end: endDate })}
                    onAddActivity={() => handleAddActivity(day)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Form Modal */}
      {showActivityForm && (
        <ActivityForm
          date={selectedDate}
          onClose={() => {
            setShowActivityForm(false);
            setSelectedDate(null);
          }}
        />
      )}
    </div>
  );
}