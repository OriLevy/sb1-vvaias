import { create } from 'zustand';

interface TripStore {
  step: number;
  destination: string;
  startDate: Date | null;
  endDate: Date | null;
  setStep: (step: number) => void;
  setDestination: (destination: string) => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

export const useTripStore = create<TripStore>((set) => ({
  step: 1,
  destination: '',
  startDate: null,
  endDate: null,
  setStep: (step) => set({ step }),
  setDestination: (destination) => set({ destination }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));