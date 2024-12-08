import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-24 left-4 md:left-8 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group z-20"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="font-medium">Back</span>
    </button>
  );
}