import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTripStore } from '../../stores/tripStore';
import { countries } from '../../data/countries';

interface TripDestinationProps {
  onComplete: () => void;
}

export function TripDestination({ onComplete }: TripDestinationProps) {
  const [search, setSearch] = useState('');
  const { setDestination } = useTripStore();

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectCountry = (country: string) => {
    setDestination(country);
    onComplete();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-6">Where would you like to go?</h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search countries..."
          className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {filteredCountries.map((country) => (
          <button
            key={country.code}
            onClick={() => handleSelectCountry(country.name)}
            className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <img
              src={`https://flagcdn.com/48x36/${country.code.toLowerCase()}.png`}
              alt={`${country.name} flag`}
              className="w-8 h-6 object-cover rounded"
            />
            <span className="text-white">{country.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}