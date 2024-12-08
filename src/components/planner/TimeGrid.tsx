import React from 'react';

interface TimeGridProps {
  className?: string;
  showLabelsOnly?: boolean;
}

export function TimeGrid({ className = '', showLabelsOnly = false }: TimeGridProps) {
  // Only show every other hour to reduce clutter
  const hours = Array.from({ length: 12 }, (_, i) => i * 2);

  return (
    <div className={`h-[1440px] ${className}`}>
      {hours.map((hour) => (
        <div
          key={hour}
          className={`relative ${!showLabelsOnly ? 'border-t border-gray-700' : ''}`}
          style={{ height: 'calc(100% / 12)' }}
        >
          <span className="absolute -top-3 left-2 text-xs text-gray-400">
            {`${hour.toString().padStart(2, '0')}:00`}
          </span>
        </div>
      ))}
    </div>
  );
}