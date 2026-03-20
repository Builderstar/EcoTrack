import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { MOCK_USER, MOCK_RECENT_TRIPS, UserData, Trip, RouteOption } from '../constants/mockData';

interface UserDataContextType {
  user: UserData;
  recentTrips: Trip[];
  addTrip: (trip: Omit<Trip, 'id' | 'date'>) => void;
  completeRoute: (route: RouteOption, destination: string) => { pointsEarned: number; co2Saved: number };
  updateStreak: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

interface UserDataProviderProps {
  children: ReactNode;
}

export function UserDataProvider({ children }: UserDataProviderProps) {
  const [user, setUser] = useState<UserData>(MOCK_USER);
  const [recentTrips, setRecentTrips] = useState<Trip[]>(MOCK_RECENT_TRIPS);

  const addTrip = useCallback((tripData: Omit<Trip, 'id' | 'date'>) => {
    const newTrip: Trip = {
      ...tripData,
      id: Date.now().toString(),
      date: new Date(),
    };

    setRecentTrips(prev => [newTrip, ...prev.slice(0, 4)]);

    setUser(prev => ({
      ...prev,
      totalTrips: prev.totalTrips + 1,
      totalPoints: prev.totalPoints + tripData.points,
      co2SavedGrams: prev.co2SavedGrams + tripData.co2SavedGrams,
    }));
  }, []);

  const completeRoute = useCallback((route: RouteOption, destination: string) => {
    // Calculate CO2 saved compared to driving an average car
    const carCo2 = 170 * parseFloat(route.distance); // 170g/km for average car
    const co2Saved = Math.max(0, carCo2 - route.co2Grams);

    addTrip({
      destination,
      mode: route.label,
      modeIcon: route.icon,
      time: route.time,
      co2SavedGrams: co2Saved,
      points: route.points,
    });

    return {
      pointsEarned: route.points,
      co2Saved,
    };
  }, [addTrip]);

  const updateStreak = useCallback(() => {
    setUser(prev => ({
      ...prev,
      currentStreak: prev.currentStreak + 1,
    }));
  }, []);

  return (
    <UserDataContext.Provider value={{ user, recentTrips, addTrip, completeRoute, updateStreak }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData(): UserDataContextType {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
}
