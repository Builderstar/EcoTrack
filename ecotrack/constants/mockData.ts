// CO2 Emissions data based on Gemini's research
// Sources: UK DEFRA 2023, EEA, European Cyclists' Federation

export interface TransportType {
  id: string;
  type: 'walking' | 'bike' | 'ebike' | 'bus' | 'metro' | 'train' | 'car_small' | 'car_average' | 'car_suv' | 'rideshare';
  label: string;
  icon: string;
  co2PerKm: number; // grams
  ecoRating: number; // 1-5
  badgeLabel: string;
}

export const TRANSPORT_TYPES: TransportType[] = [
  { id: 'walking', type: 'walking', label: 'Walk', icon: 'walk', co2PerKm: 0, ecoRating: 5, badgeLabel: 'Zero emission' },
  { id: 'bike', type: 'bike', label: 'Bike', icon: 'bicycle', co2PerKm: 0, ecoRating: 5, badgeLabel: 'Zero emission' },
  { id: 'ebike', type: 'ebike', label: 'E-Bike', icon: 'bicycle', co2PerKm: 15, ecoRating: 5, badgeLabel: 'Ultra low' },
  { id: 'metro', type: 'metro', label: 'Metro', icon: 'subway', co2PerKm: 35, ecoRating: 4, badgeLabel: 'Low impact' },
  { id: 'train', type: 'train', label: 'Train', icon: 'train', co2PerKm: 41, ecoRating: 4, badgeLabel: 'Low impact' },
  { id: 'bus', type: 'bus', label: 'Bus', icon: 'bus', co2PerKm: 105, ecoRating: 3, badgeLabel: 'Shared transit' },
  { id: 'car_small', type: 'car_small', label: 'Small Car', icon: 'car-sport', co2PerKm: 130, ecoRating: 2, badgeLabel: 'Moderate' },
  { id: 'car_average', type: 'car_average', label: 'Car', icon: 'car', co2PerKm: 170, ecoRating: 2, badgeLabel: 'Higher impact' },
  { id: 'car_suv', type: 'car_suv', label: 'SUV', icon: 'car', co2PerKm: 220, ecoRating: 1, badgeLabel: 'High emissions' },
  { id: 'rideshare', type: 'rideshare', label: 'Rideshare', icon: 'car', co2PerKm: 255, ecoRating: 1, badgeLabel: 'Highest impact' },
];

// Demo locations with pre-calculated routes
export interface DemoLocation {
  id: string;
  name: string;
  distance: number; // km
}

export const DEMO_LOCATIONS: DemoLocation[] = [
  { id: 'central_park', name: 'Central Park', distance: 3.2 },
  { id: 'downtown_office', name: 'Downtown Office', distance: 5.8 },
  { id: 'university', name: 'University Campus', distance: 2.1 },
];

// Calculate route options for a destination
export interface RouteOption {
  id: string;
  type: string;
  label: string;
  icon: string;
  time: string;
  distance: string;
  co2: string;
  co2Grams: number;
  points: number;
  ecoRating: number;
  badgeLabel: string;
}

// Average speeds (km/h) for time estimation
const AVERAGE_SPEEDS: Record<string, number> = {
  walking: 5,
  bike: 15,
  ebike: 20,
  metro: 30,
  train: 40,
  bus: 20,
  car_small: 35,
  car_average: 35,
  car_suv: 35,
  rideshare: 30,
};

export function calculateRouteOptions(distanceKm: number): RouteOption[] {
  return TRANSPORT_TYPES.map((transport) => {
    const timeMinutes = Math.round((distanceKm / AVERAGE_SPEEDS[transport.type]) * 60);
    const co2Grams = Math.round(transport.co2PerKm * distanceKm);

    // Points calculation: more points for greener choices
    // Base points + eco bonus
    const basePoints = 10;
    const ecoBonus = transport.ecoRating * 10;
    const distanceBonus = Math.round(distanceKm * 2);
    const points = basePoints + ecoBonus + distanceBonus;

    return {
      id: transport.id,
      type: transport.type,
      label: transport.label,
      icon: transport.icon,
      time: `${timeMinutes} min`,
      distance: `${distanceKm.toFixed(1)} km`,
      co2: co2Grams === 0 ? '0 g' : co2Grams < 1000 ? `${co2Grams} g` : `${(co2Grams / 1000).toFixed(1)} kg`,
      co2Grams,
      points,
      ecoRating: transport.ecoRating,
      badgeLabel: transport.badgeLabel,
    };
  });
}

// CO2 comparison helpers (based on Gemini's research)
// A mature tree absorbs ~22kg CO2/year = ~60g/day
export function co2ToTreeDays(co2Grams: number): number {
  return Math.round(co2Grams / 60);
}

export function formatCO2Savings(savedGrams: number): string {
  const treeDays = co2ToTreeDays(savedGrams);
  if (treeDays === 0) return "Every bit counts!";
  if (treeDays === 1) return "That's like 1 tree absorbing CO2 for a day!";
  return `That's like ${treeDays} trees absorbing CO2 for a day!`;
}

// Mock user data
export interface UserData {
  username: string;
  displayName: string;
  avatarInitials: string;
  level: number;
  totalPoints: number;
  co2SavedGrams: number;
  totalTrips: number;
  currentStreak: number;
}

export const MOCK_USER: UserData = {
  username: 'user',
  displayName: 'Alex Green',
  avatarInitials: 'AG',
  level: 12,
  totalPoints: 2450,
  co2SavedGrams: 127500, // 127.5 kg
  totalTrips: 43,
  currentStreak: 7,
};

// Recent trips mock data
export interface Trip {
  id: string;
  destination: string;
  mode: string;
  modeIcon: string;
  time: string;
  co2SavedGrams: number;
  points: number;
  date: Date;
}

export const MOCK_RECENT_TRIPS: Trip[] = [
  {
    id: '1',
    destination: 'Central Park',
    mode: 'Bike',
    modeIcon: 'bicycle',
    time: '14 min',
    co2SavedGrams: 800,
    points: 45,
    date: new Date(),
  },
  {
    id: '2',
    destination: 'Downtown Office',
    mode: 'Bus',
    modeIcon: 'bus',
    time: '22 min',
    co2SavedGrams: 500,
    points: 35,
    date: new Date(Date.now() - 86400000),
  },
  {
    id: '3',
    destination: 'University Campus',
    mode: 'Walk',
    modeIcon: 'walk',
    time: '18 min',
    co2SavedGrams: 1100,
    points: 55,
    date: new Date(Date.now() - 172800000),
  },
];

// Leaderboard mock data
export interface LeaderboardUser {
  id: string;
  rank: number;
  displayName: string;
  avatarInitials: string;
  points: number;
  co2SavedKg: number;
  isCurrentUser?: boolean;
}

export const MOCK_LEADERBOARD: LeaderboardUser[] = [
  { id: '1', rank: 1, displayName: 'Emma Wilson', avatarInitials: 'EW', points: 4820, co2SavedKg: 245 },
  { id: '2', rank: 2, displayName: 'James Chen', avatarInitials: 'JC', points: 4350, co2SavedKg: 218 },
  { id: '3', rank: 3, displayName: 'Sofia Martinez', avatarInitials: 'SM', points: 3980, co2SavedKg: 195 },
  { id: '4', rank: 4, displayName: 'Alex Green', avatarInitials: 'AG', points: 2450, co2SavedKg: 127, isCurrentUser: true },
  { id: '5', rank: 5, displayName: 'Michael Brown', avatarInitials: 'MB', points: 2280, co2SavedKg: 115 },
  { id: '6', rank: 6, displayName: 'Olivia Davis', avatarInitials: 'OD', points: 2150, co2SavedKg: 108 },
  { id: '7', rank: 7, displayName: 'Noah Garcia', avatarInitials: 'NG', points: 1920, co2SavedKg: 96 },
  { id: '8', rank: 8, displayName: 'Ava Johnson', avatarInitials: 'AJ', points: 1780, co2SavedKg: 89 },
  { id: '9', rank: 9, displayName: 'Liam Williams', avatarInitials: 'LW', points: 1650, co2SavedKg: 82 },
  { id: '10', rank: 10, displayName: 'Isabella Lee', avatarInitials: 'IL', points: 1520, co2SavedKg: 76 },
];

// League tiers (like Duolingo)
export type LeagueTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export interface League {
  tier: LeagueTier;
  name: string;
  minPoints: number;
  color: string;
  icon: string;
}

export const LEAGUES: League[] = [
  { tier: 'bronze', name: 'Bronze League', minPoints: 0, color: '#CD7F32', icon: 'shield' },
  { tier: 'silver', name: 'Silver League', minPoints: 1000, color: '#C0C0C0', icon: 'shield' },
  { tier: 'gold', name: 'Gold League', minPoints: 2500, color: '#FFD700', icon: 'shield' },
  { tier: 'platinum', name: 'Platinum League', minPoints: 5000, color: '#E5E4E2', icon: 'shield' },
  { tier: 'diamond', name: 'Diamond League', minPoints: 10000, color: '#B9F2FF', icon: 'diamond' },
];

export function getUserLeague(points: number): League {
  for (let i = LEAGUES.length - 1; i >= 0; i--) {
    if (points >= LEAGUES[i].minPoints) {
      return LEAGUES[i];
    }
  }
  return LEAGUES[0];
}
