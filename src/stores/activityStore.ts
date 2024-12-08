import { create } from 'zustand';
import { Activity } from '../types/activity';

interface ActivityStore {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  updateActivity: (id: string, activity: Activity) => void;
  deleteActivity: (id: string) => void;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],
  addActivity: (activity) =>
    set((state) => ({
      activities: [...state.activities, activity],
    })),
  updateActivity: (id, updatedActivity) =>
    set((state) => ({
      activities: state.activities.map((activity) =>
        activity.id === id ? updatedActivity : activity
      ),
    })),
  deleteActivity: (id) =>
    set((state) => ({
      activities: state.activities.filter((activity) => activity.id !== id),
    })),
}));