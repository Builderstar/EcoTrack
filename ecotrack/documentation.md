# EcoTrack - Technical Documentation

## Overview

EcoTrack is a gamified eco-friendly navigation app that encourages sustainable transportation choices. It tracks CO2 savings, rewards users with points, and uses Duolingo-style engagement mechanics to build lasting green habits.

---

## Achievements System

The app features **20 achievements** across **7 categories** with **4 difficulty levels**.

### Difficulty Levels

| Difficulty | Color   | Point Range |
|------------|---------|-------------|
| Easy       | Green   | 15-35 pts   |
| Medium     | Yellow  | 45-85 pts   |
| Hard       | Orange  | 125-275 pts |
| Epic       | Purple  | 225-1000 pts|

### Achievement Categories

#### 1. Getting Started (First-Time)
| Achievement | Description | Difficulty | Points |
|------------|-------------|------------|--------|
| **The First Step** | Log your very first sustainable trip | Easy | 15 |
| **Profile Polisher** | Complete your EcoTrack user profile | Easy | 20 |
| **Goal Setter** | Set your first weekly emission reduction goal | Easy | 25 |

#### 2. Consistency (Streak)
| Achievement | Description | Difficulty | Points |
|------------|-------------|------------|--------|
| **Weekend Warrior** | Log trips on both Saturday and Sunday | Medium | 45 |
| **Perfect Week** | Log at least one sustainable trip every day for 7 days | Hard | 125 |
| **Monthly Master** | Maintain a continuous 30-day logging streak | Epic | 400 |

#### 3. Transport Explorer
| Achievement | Description | Difficulty | Points |
|------------|-------------|------------|--------|
| **Pedal Pusher** | Log 5 trips using a bicycle | Medium | 60 |
| **Transit Trendsetter** | Take the bus, train, or subway 10 times | Medium | 85 |
| **Carpool Catalyst** | Share a ride with someone else 5 times | Medium | 70 |
| **Multimodal Master** | Use 3 different types of sustainable transport in one week | Hard | 125 |

#### 4. Distance Goals
| Achievement | Description | Difficulty | Points |
|------------|-------------|------------|--------|
| **Marathoner** | Walk or run a total of 42.2 km | Hard | 175 |
| **Century Ride** | Bike a total of 160 km | Epic | 225 |

#### 5. Carbon Saver (CO2)
| Achievement | Description | Difficulty | Points |
|------------|-------------|------------|--------|
| **Tree Hugger** | Save the equivalent CO2 of planting one tree (approx. 22kg) | Medium | 75 |
| **Carbon Neutralizer** | Save 100kg of CO2 emissions | Hard | 275 |
| **Ton of Good** | Reach a lifetime savings of 1 metric ton of CO2 | Epic | 1000 |

#### 6. Social
| Achievement | Description | Difficulty | Points |
|------------|-------------|------------|--------|
| **Social Butterfly** | Share a milestone to social media | Easy | 35 |
| **Eco-Influencer** | Successfully refer a friend to join EcoTrack | Medium | 125 |

#### 7. Fun & Quirky
| Achievement | Description | Difficulty | Points |
|------------|-------------|------------|--------|
| **Rain or Shine** | Log a walking or biking trip during rainy weather | Medium | 85 |
| **Early Bird** | Log a sustainable trip before 6:00 AM | Medium | 60 |
| **Night Owl** | Log a sustainable transit trip after 10:00 PM | Medium | 60 |

---

## League System

EcoTrack uses a Duolingo-style league system with **5 tiers**. Users progress through leagues by earning points.

| League | Minimum Points | Color |
|--------|---------------|-------|
| **Bronze League** | 0 pts | Bronze (#CD7F32) |
| **Silver League** | 1,000 pts | Silver (#C0C0C0) |
| **Gold League** | 2,500 pts | Gold (#FFD700) |
| **Platinum League** | 5,000 pts | Platinum (#E5E4E2) |
| **Diamond League** | 10,000 pts | Diamond (#B9F2FF) |

### League Progression
- Users automatically move to the next league when they accumulate enough points
- The leaderboard shows your ranking within your current league
- Top performers in each league can be promoted

---

## Points & Leveling System

### How Points Are Calculated

Points are earned for each completed trip based on:

```
Points = Base Points + Eco Bonus + Distance Bonus

Where:
- Base Points = 10 (for any trip)
- Eco Bonus = Eco Rating × 10 (0-50 points based on transport choice)
- Distance Bonus = Distance in km × 2
```

### Eco Rating Scale

| Rating | Transport Types | Eco Bonus |
|--------|----------------|-----------|
| 5 (Best) | Walk, Bike, E-Bike | +50 pts |
| 4 | Metro, Train | +40 pts |
| 3 | Bus | +30 pts |
| 2 | Small Car, Average Car | +20 pts |
| 1 (Worst) | SUV, Rideshare | +10 pts |

### Example Point Calculations

| Transport | Distance | Calculation | Total Points |
|-----------|----------|-------------|--------------|
| Bike | 5 km | 10 + 50 + 10 | **70 pts** |
| Metro | 8 km | 10 + 40 + 16 | **66 pts** |
| Bus | 3 km | 10 + 30 + 6 | **46 pts** |
| Car | 10 km | 10 + 20 + 20 | **50 pts** |

### Leveling

User level is displayed as a number and represents overall progress. Level progression is tied to total accumulated points.

---

## Transport Types & CO2 Emissions

CO2 emissions data is sourced from UK DEFRA 2023, European Environment Agency (EEA), and European Cyclists' Federation.

| Transport | CO2 per km | Eco Rating | Badge Label |
|-----------|-----------|------------|-------------|
| **Walk** | 0 g | 5 | Zero emission |
| **Bike** | 0 g | 5 | Zero emission |
| **E-Bike** | 15 g | 5 | Ultra low |
| **Metro** | 35 g | 4 | Low impact |
| **Train** | 41 g | 4 | Low impact |
| **Bus** | 105 g | 3 | Shared transit |
| **Small Car** | 130 g | 2 | Moderate |
| **Car (Average)** | 170 g | 2 | Higher impact |
| **SUV** | 220 g | 1 | High emissions |
| **Rideshare** | 255 g | 1 | Highest impact |

### CO2 Savings Calculation

CO2 saved is calculated by comparing the chosen transport to driving an average car:

```
CO2 Saved = (170 g/km × distance) - (chosen transport CO2 g/km × distance)
```

### Tree Equivalency

A mature tree absorbs approximately **22 kg of CO2 per year** (~60 g per day).

The app converts CO2 savings to "tree days" for easy visualization:
```
Tree Days = CO2 Saved (grams) / 60
```

---

## Streak System

The streak system tracks consecutive days of sustainable travel.

### Streak Tiers

| Streak Days | Status | Flame Color | Label |
|-------------|--------|-------------|-------|
| 0 | Idle | Gray (#9CA3AF) | Start your streak today |
| 1-2 | Active | Yellow (#FBBF24) | Nice start! |
| 3-6 | Active | Yellow (#EAB308) | Keep it going! |
| 7-13 | On Fire | Orange (#FB923C) | Hot streak! |
| 14+ | On Fire | Deep Orange (#F97316) | Unstoppable! |

### Streak Mechanics

- Log at least one sustainable trip per day to maintain your streak
- Missing a day resets the streak to 0
- The streak indicator includes animated flame effects that intensify with longer streaks

---

## Eco Facts

The app displays rotating educational eco facts. There are **10 facts** in the database:

1. **Active Transport Efficiency** - Riding a bicycle for 5km instead of driving avoids ~1.2kg of CO2 emissions
2. **Global Transport Impact** - Transport sector is responsible for nearly 25% of direct CO2 emissions
3. **The First EV** - First electric carriage was built in the 1830s by Scottish inventor Robert Anderson
4. **Public Transit Scale** - A fully occupied electric bus can displace up to 40 passenger cars
5. **The Cold Start Penalty** - Walking 1km eliminates "cold start" emissions from car engines
6. **High-Speed Rail** - Emits up to 90% less CO2 per passenger-kilometer vs short-haul flights
7. **The Rebound Effect** - More fuel-efficient cars sometimes lead people to drive further
8. **Micromobility Potential** - 10% of urban car trips replaced by e-bikes could reduce emissions by 11%
9. **Bicycle Lifecycle** - A bicycle's carbon footprint is offset within 400-600km of use
10. **Early Electrification** - Trams have provided electrified transit since the late 19th century

Facts are displayed daily (consistent throughout each day) on the home screen.

---

## Motivational Messages

Dynamic messages are shown at various points in the app.

### Trip Completion Messages (5 variations)
- "Great choice! You just prevented {co2} of CO2 from entering the atmosphere."
- "Awesome ride! Your sustainable trip saved {co2} of carbon emissions today."
- "You're a climate champion! That trip kept {co2} of greenhouse gases out of our air."
- "Small steps, big impact. You've avoided {co2} of CO2 and earned +{points} points!"
- "Your clean commute just saved {co2} of carbon. The planet thanks you!"

### Streak Messages (5 variations)
- "{streak} days strong! Consistency is key to lowering your carbon footprint."
- "You're on fire (but not the planet)! A {streak}-day streak of sustainable choices."
- "Amazing! {streak} consecutive days of eco-friendly travel. Keep the momentum going!"
- "That's a {streak}-day streak! You're actively building sustainable habits."
- "Way to go! Your {streak}-day eco-streak is building habits that combat climate change."

### Achievement Messages (5 variations)
- "Achievement Unlocked! You've earned +{points} points for your dedication."
- "Level up! Your commitment to sustainable transit unlocked a new milestone."
- "Congratulations! You've unlocked a new eco-badge. Your emissions are shrinking!"
- "Incredible work! +{points} points for prioritizing low-carbon transport."
- "New Milestone Reached! Your consistent choices are driving real change."

---

## Demo Features

### Demo Locations
| Location | Distance |
|----------|----------|
| Central Park | 3.2 km |
| Downtown Office | 5.8 km |
| University Campus | 2.1 km |

### Demo User Account
- **Username:** user
- **Password:** user
- **Display Name:** Alex Green
- **Starting Level:** 12
- **Starting Points:** 2,450
- **CO2 Saved:** 127.5 kg
- **Total Trips:** 43
- **Current Streak:** 7 days

### Simulate Arrival
The app includes a "Simulate Arrival" button that completes trips without requiring real GPS tracking, making it perfect for demos and testing.

---

## Technical Stack

- **Framework:** Expo (React Native)
- **Language:** TypeScript
- **Navigation:** Expo Router (file-based routing)
- **State Management:** React Context
- **Animations:** react-native-reanimated
- **Icons:** @expo/vector-icons (Ionicons, MaterialCommunityIcons)

---

## File Structure

```
ecotrack/
├── app/                          # Screens (Expo Router)
│   ├── (auth)/                   # Authentication screens
│   │   └── login.tsx             # Login screen
│   ├── (tabs)/                   # Main tab screens
│   │   ├── index.tsx             # Home dashboard
│   │   ├── achievements.tsx      # Achievements grid
│   │   ├── leaderboard.tsx       # Rankings & leagues
│   │   └── profile.tsx           # User profile
│   └── route/                    # Route planning flow
│       ├── plan.tsx              # Route planning
│       ├── active.tsx            # Active navigation
│       └── complete.tsx          # Trip completion
├── components/                   # Reusable components
│   ├── gamification/
│   │   ├── CelebrationAnimation.tsx
│   │   └── StreakIndicator.tsx
│   └── route/
│       └── TransportOptionCard.tsx
├── constants/                    # App constants & data
│   ├── achievements.ts           # Achievement definitions
│   ├── colors.ts                 # Design system colors
│   ├── messages.ts               # Motivational messages & eco facts
│   └── mockData.ts               # CO2 data, leagues, demo data
└── contexts/                     # React contexts
    ├── AuthContext.tsx           # Authentication state
    └── UserDataContext.tsx       # User data & trip management
```

---

*Documentation generated for EcoTrack v1.0.0*
