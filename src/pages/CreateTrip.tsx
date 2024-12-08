import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TripDestination } from '../components/trip/TripDestination';
import { TripDates } from '../components/trip/TripDates';
import { useTripStore } from '../stores/tripStore';

export function CreateTrip() {
  const navigate = useNavigate();
  const { step, setStep } = useTripStore();

  const handleDestinationComplete = () => {
    setStep(2);
  };

  const handleDatesComplete = () => {
    navigate('/trip/planner');
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24 px-4 pb-12">
      <div className="max-w-2xl mx-auto">
        {step === 1 && <TripDestination onComplete={handleDestinationComplete} />}
        {step === 2 && <TripDates onComplete={handleDatesComplete} />}
      </div>
    </div>
  );
}