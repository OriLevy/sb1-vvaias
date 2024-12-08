import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  position: 'left' | 'right';
}

export function Button({ icon: Icon, label, onClick, position }: ButtonProps) {
  const positionClasses = position === 'left' 
    ? 'left-4 md:left-8' 
    : 'right-4 md:right-8';

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-4 md:bottom-8 ${positionClasses} bg-emerald-500 hover:bg-emerald-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group text-sm md:text-base`}
    >
      <Icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="font-medium hidden xs:inline">{label}</span>
    </button>
  );
}