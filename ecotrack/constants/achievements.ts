// Achievement data based on Gemini's research

export type AchievementDifficulty = 'easy' | 'medium' | 'hard' | 'epic';
export type AchievementCategory = 'first_time' | 'streak' | 'transport' | 'distance' | 'co2' | 'social' | 'fun';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  category: AchievementCategory;
  difficulty: AchievementDifficulty;
  points: number;
  icon: string;
  iconColor: string;
  progress?: number; // 0-100, undefined = not started
  unlocked: boolean;
  unlockedAt?: Date;
}

export const ACHIEVEMENTS: Achievement[] = [
  // First-Time Achievements
  {
    id: 'first_step',
    name: 'The First Step',
    description: 'Log your very first sustainable trip',
    category: 'first_time',
    difficulty: 'easy',
    points: 15,
    icon: 'footsteps',
    iconColor: '#22C55E',
    unlocked: true,
    unlockedAt: new Date(Date.now() - 30 * 86400000),
  },
  {
    id: 'profile_polisher',
    name: 'Profile Polisher',
    description: 'Complete your EcoTrack user profile',
    category: 'first_time',
    difficulty: 'easy',
    points: 20,
    icon: 'person-circle',
    iconColor: '#22C55E',
    unlocked: true,
    unlockedAt: new Date(Date.now() - 29 * 86400000),
  },
  {
    id: 'goal_setter',
    name: 'Goal Setter',
    description: 'Set your first weekly emission reduction goal',
    category: 'first_time',
    difficulty: 'easy',
    points: 25,
    icon: 'flag',
    iconColor: '#22C55E',
    progress: 0,
    unlocked: false,
  },

  // Streak Achievements
  {
    id: 'weekend_warrior',
    name: 'Weekend Warrior',
    description: 'Log trips on both Saturday and Sunday',
    category: 'streak',
    difficulty: 'medium',
    points: 45,
    icon: 'sunny',
    iconColor: '#EAB308',
    unlocked: true,
    unlockedAt: new Date(Date.now() - 14 * 86400000),
  },
  {
    id: 'perfect_week',
    name: 'Perfect Week',
    description: 'Log at least one sustainable trip every day for 7 days',
    category: 'streak',
    difficulty: 'hard',
    points: 125,
    icon: 'calendar',
    iconColor: '#F97316',
    progress: 100,
    unlocked: true,
    unlockedAt: new Date(Date.now() - 3 * 86400000),
  },
  {
    id: 'monthly_master',
    name: 'Monthly Master',
    description: 'Maintain a continuous 30-day logging streak',
    category: 'streak',
    difficulty: 'epic',
    points: 400,
    icon: 'moon',
    iconColor: '#8B5CF6',
    progress: 23,
    unlocked: false,
  },

  // Transport-Specific Achievements
  {
    id: 'pedal_pusher',
    name: 'Pedal Pusher',
    description: 'Log 5 trips using a bicycle',
    category: 'transport',
    difficulty: 'medium',
    points: 60,
    icon: 'bicycle',
    iconColor: '#22C55E',
    progress: 80,
    unlocked: false,
  },
  {
    id: 'transit_trendsetter',
    name: 'Transit Trendsetter',
    description: 'Take the bus, train, or subway 10 times',
    category: 'transport',
    difficulty: 'medium',
    points: 85,
    icon: 'train',
    iconColor: '#3B82F6',
    progress: 60,
    unlocked: false,
  },
  {
    id: 'carpool_catalyst',
    name: 'Carpool Catalyst',
    description: 'Share a ride with someone else 5 times',
    category: 'transport',
    difficulty: 'medium',
    points: 70,
    icon: 'people',
    iconColor: '#22C55E',
    progress: 20,
    unlocked: false,
  },
  {
    id: 'multimodal_master',
    name: 'Multimodal Master',
    description: 'Use 3 different types of sustainable transport in one week',
    category: 'transport',
    difficulty: 'hard',
    points: 125,
    icon: 'shuffle',
    iconColor: '#8B5CF6',
    unlocked: true,
    unlockedAt: new Date(Date.now() - 7 * 86400000),
  },

  // Distance Milestones
  {
    id: 'marathoner',
    name: 'Marathoner',
    description: 'Walk or run a total of 42.2 km',
    category: 'distance',
    difficulty: 'hard',
    points: 175,
    icon: 'walk',
    iconColor: '#F97316',
    progress: 65,
    unlocked: false,
  },
  {
    id: 'century_ride',
    name: 'Century Ride',
    description: 'Bike a total of 160 km',
    category: 'distance',
    difficulty: 'epic',
    points: 225,
    icon: 'speedometer',
    iconColor: '#EF4444',
    progress: 35,
    unlocked: false,
  },

  // CO2 Savings Milestones
  {
    id: 'tree_hugger',
    name: 'Tree Hugger',
    description: 'Save the equivalent CO2 of planting one tree (approx. 22kg)',
    category: 'co2',
    difficulty: 'medium',
    points: 75,
    icon: 'leaf',
    iconColor: '#22C55E',
    unlocked: true,
    unlockedAt: new Date(Date.now() - 20 * 86400000),
  },
  {
    id: 'carbon_neutralizer',
    name: 'Carbon Neutralizer',
    description: 'Save 100kg of CO2 emissions',
    category: 'co2',
    difficulty: 'hard',
    points: 275,
    icon: 'shield-checkmark',
    iconColor: '#3B82F6',
    unlocked: true,
    unlockedAt: new Date(Date.now() - 5 * 86400000),
  },
  {
    id: 'ton_of_good',
    name: 'Ton of Good',
    description: 'Reach a lifetime savings of 1 metric ton of CO2',
    category: 'co2',
    difficulty: 'epic',
    points: 1000,
    icon: 'earth',
    iconColor: '#22C55E',
    progress: 12,
    unlocked: false,
  },

  // Social Achievements
  {
    id: 'social_butterfly',
    name: 'Social Butterfly',
    description: 'Share a milestone to social media',
    category: 'social',
    difficulty: 'easy',
    points: 35,
    icon: 'share-social',
    iconColor: '#3B82F6',
    progress: 0,
    unlocked: false,
  },
  {
    id: 'eco_influencer',
    name: 'Eco-Influencer',
    description: 'Successfully refer a friend to join EcoTrack',
    category: 'social',
    difficulty: 'medium',
    points: 125,
    icon: 'heart',
    iconColor: '#EF4444',
    progress: 0,
    unlocked: false,
  },

  // Fun/Quirky Achievements
  {
    id: 'rain_or_shine',
    name: 'Rain or Shine',
    description: 'Log a walking or biking trip during rainy weather',
    category: 'fun',
    difficulty: 'medium',
    points: 85,
    icon: 'umbrella',
    iconColor: '#3B82F6',
    progress: 0,
    unlocked: false,
  },
  {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'Log a sustainable trip before 6:00 AM',
    category: 'fun',
    difficulty: 'medium',
    points: 60,
    icon: 'sunny',
    iconColor: '#EAB308',
    unlocked: true,
    unlockedAt: new Date(Date.now() - 10 * 86400000),
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Log a sustainable transit trip after 10:00 PM',
    category: 'fun',
    difficulty: 'medium',
    points: 60,
    icon: 'moon',
    iconColor: '#8B5CF6',
    progress: 0,
    unlocked: false,
  },
];

export function getUnlockedAchievements(): Achievement[] {
  return ACHIEVEMENTS.filter(a => a.unlocked);
}

export function getInProgressAchievements(): Achievement[] {
  return ACHIEVEMENTS.filter(a => !a.unlocked && a.progress !== undefined && a.progress > 0);
}

export function getLockedAchievements(): Achievement[] {
  return ACHIEVEMENTS.filter(a => !a.unlocked && (a.progress === undefined || a.progress === 0));
}

export function getTotalAchievementPoints(): number {
  return ACHIEVEMENTS.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);
}

export function getAchievementsByCategory(category: AchievementCategory): Achievement[] {
  return ACHIEVEMENTS.filter(a => a.category === category);
}

export const CATEGORY_LABELS: Record<AchievementCategory, string> = {
  first_time: 'Getting Started',
  streak: 'Consistency',
  transport: 'Transport Explorer',
  distance: 'Distance Goals',
  co2: 'Carbon Saver',
  social: 'Social',
  fun: 'Fun & Quirky',
};

export const DIFFICULTY_COLORS: Record<AchievementDifficulty, string> = {
  easy: '#22C55E',
  medium: '#EAB308',
  hard: '#F97316',
  epic: '#8B5CF6',
};
