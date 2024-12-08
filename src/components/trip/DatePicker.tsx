import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  label: string;
  selected: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  disabled?: boolean;
}

export function DatePicker({ label, selected, onChange, minDate, disabled }: DatePickerProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        disabled={disabled}
        dateFormat="MMMM d, yyyy"
        className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
        wrapperClassName="w-full"
        calendarClassName="bg-gray-800 border border-gray-700 text-white rounded-lg shadow-lg"
        showPopperArrow={false}
      />
    </div>
  );
}