// Motivational messages and eco facts from Gemini research

export interface MotivationalMessage {
  id: string;
  template: string;
  category: 'trip_complete' | 'streak' | 'achievement';
}

export const MOTIVATIONAL_MESSAGES: MotivationalMessage[] = [
  // Trip Completion
  {
    id: 'trip_1',
    template: "Great choice! You just prevented {co2} of CO2 from entering the atmosphere.",
    category: 'trip_complete',
  },
  {
    id: 'trip_2',
    template: "Awesome ride! Your sustainable trip saved {co2} of carbon emissions today.",
    category: 'trip_complete',
  },
  {
    id: 'trip_3',
    template: "You're a climate champion! That trip kept {co2} of greenhouse gases out of our air.",
    category: 'trip_complete',
  },
  {
    id: 'trip_4',
    template: "Small steps, big impact. You've avoided {co2} of CO2 and earned +{points} points!",
    category: 'trip_complete',
  },
  {
    id: 'trip_5',
    template: "Your clean commute just saved {co2} of carbon. The planet thanks you!",
    category: 'trip_complete',
  },

  // Streak Maintenance
  {
    id: 'streak_1',
    template: "{streak} days strong! Consistency is key to lowering your carbon footprint.",
    category: 'streak',
  },
  {
    id: 'streak_2',
    template: "You're on fire (but not the planet)! A {streak}-day streak of sustainable choices.",
    category: 'streak',
  },
  {
    id: 'streak_3',
    template: "Amazing! {streak} consecutive days of eco-friendly travel. Keep the momentum going!",
    category: 'streak',
  },
  {
    id: 'streak_4',
    template: "That's a {streak}-day streak! You're actively building sustainable habits.",
    category: 'streak',
  },
  {
    id: 'streak_5',
    template: "Way to go! Your {streak}-day eco-streak is building habits that combat climate change.",
    category: 'streak',
  },

  // Achievement Unlock
  {
    id: 'achievement_1',
    template: "Achievement Unlocked! You've earned +{points} points for your dedication.",
    category: 'achievement',
  },
  {
    id: 'achievement_2',
    template: "Level up! Your commitment to sustainable transit unlocked a new milestone.",
    category: 'achievement',
  },
  {
    id: 'achievement_3',
    template: "Congratulations! You've unlocked a new eco-badge. Your emissions are shrinking!",
    category: 'achievement',
  },
  {
    id: 'achievement_4',
    template: "Incredible work! +{points} points for prioritizing low-carbon transport.",
    category: 'achievement',
  },
  {
    id: 'achievement_5',
    template: "New Milestone Reached! Your consistent choices are driving real change.",
    category: 'achievement',
  },
];

export function getRandomMessage(category: MotivationalMessage['category']): MotivationalMessage {
  const messages = MOTIVATIONAL_MESSAGES.filter(m => m.category === category);
  return messages[Math.floor(Math.random() * messages.length)];
}

export function formatMessage(
  template: string,
  values: { co2?: string; points?: number; streak?: number }
): string {
  let result = template;
  if (values.co2) result = result.replace('{co2}', values.co2);
  if (values.points !== undefined) result = result.replace('{points}', values.points.toString());
  if (values.streak !== undefined) result = result.replace('{streak}', values.streak.toString());
  return result;
}

// Fun Eco Facts
export interface EcoFact {
  id: string;
  title: string;
  fact: string;
}

export const ECO_FACTS: EcoFact[] = [
  {
    id: 'fact_1',
    title: 'Active Transport Efficiency',
    fact: 'Riding a bicycle for 5km instead of driving avoids ~1.2kg of CO2 emissions—roughly equivalent to the carbon sequestered by a tree in a month.',
  },
  {
    id: 'fact_2',
    title: 'Global Transport Impact',
    fact: 'The global transport sector is responsible for nearly 25% of direct CO2 emissions. Choosing active or public transport directly mitigates this.',
  },
  {
    id: 'fact_3',
    title: 'The First EV',
    fact: 'The first electric carriage was built in the 1830s by Scottish inventor Robert Anderson, long before mass adoption of internal combustion engines.',
  },
  {
    id: 'fact_4',
    title: 'Public Transit Scale',
    fact: 'A fully occupied electric bus can displace up to 40 passenger cars from the road, significantly reducing both traffic and urban air pollution.',
  },
  {
    id: 'fact_5',
    title: 'The Cold Start Penalty',
    fact: 'Walking 1km instead of driving eliminates "cold start" emissions—often the most polluting phase of a car engine\'s operation.',
  },
  {
    id: 'fact_6',
    title: 'High-Speed Rail',
    fact: 'High-speed rail emits up to 90% less CO2 per passenger-kilometer compared to short-haul domestic flights.',
  },
  {
    id: 'fact_7',
    title: 'The Rebound Effect',
    fact: 'More fuel-efficient cars sometimes lead people to drive further. Active transport like walking and cycling avoids this entirely.',
  },
  {
    id: 'fact_8',
    title: 'Micromobility Potential',
    fact: 'If 10% of urban car trips were replaced by e-bikes, urban transport emissions could decrease by up to 11%.',
  },
  {
    id: 'fact_9',
    title: 'Bicycle Lifecycle',
    fact: 'The carbon footprint of manufacturing a bicycle is offset within just 400-600km of use when replacing car trips.',
  },
  {
    id: 'fact_10',
    title: 'Early Electrification',
    fact: 'Trams and streetcars have provided electrified public transit since the late 19th century—sustainable urban transport is proven technology.',
  },
];

export function getRandomFact(): EcoFact {
  return ECO_FACTS[Math.floor(Math.random() * ECO_FACTS.length)];
}

export function getDailyFact(): EcoFact {
  // Returns a consistent fact for the day based on date
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return ECO_FACTS[dayOfYear % ECO_FACTS.length];
}
