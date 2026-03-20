# EcoTrack - Project Specification

## Overview
EcoTrack is a demo navigation app that tracks and gamifies CO2 emissions based on transport choices. It's a "green wrapper" for Google Maps, encouraging eco-friendly transport through points, achievements, and social competition (Duolingo-style).

**Status:** Demo/Prototype
**Platform:** Android (via Expo)
**Tech Stack:** Expo (React Native), TypeScript

---

## Core Concept

When users plan a route:
1. They see all transport options ranked by eco-friendliness
2. Routes are color-coded: **green** (eco-friendly) to **red** (high emissions)
3. Upon "arrival," users earn points based on their transport choice
4. Points feed into achievements, streaks, and leaderboards

---

## Demo Scope

| Feature | Implementation |
|---------|----------------|
| Route planning | 2-3 hardcoded demo locations with mock routes |
| Maps | Static map component or react-native-maps, no live API |
| CO2 calculations | Pre-calculated mock values |
| Transport options | Mock data, user can toggle on/off |
| Navigation | "Simulate Arrival" button (no real GPS tracking) |
| Points/Scoring | Mock system with instant feedback |
| Achievements | Pre-defined badges, some unlocked by default |
| Leaderboard | Fake users for demo purposes |
| Authentication | Dummy login (user/user) |

---

## Screen Map

### 1. Login Screen
- Simple login form
- Credentials: username `user`, password `user`
- "EcoTrack" branding with leaf logo
- Skip complex validation - just check hardcoded creds

### 2. Home/Dashboard
- **Primary action:** Large "Plan Route" button (Google Maps style - search bar at top)
- User's eco stats: Total CO2 saved, current streak, level/points
- Recent trips summary (last 2-3)
- Quick stats cards
- Bottom navigation: Home | Achievements | Leaderboard | Profile

### 3. Route Planning
- **MUST feel like Google Maps** - familiar, fast, intuitive
- Search bar for destination (autocomplete from hardcoded locations)
- Current location shown (mock)
- Transport options list:
  - Walking (greenest - leaf icon, green accent)
  - Cycling (very green)
  - Public Transit (moderate - yellow/green)
  - Car (red - danger/warning icon)
- Each option shows: Time, Distance, CO2 emission, Points you'd earn
- User can disable irrelevant transport types
- "Start Route" button

### 4. Route View / Active Navigation
- Map showing the route
- Color-coded path (green to red based on choice)
- Transport mode indicator
- ETA and distance
- **"Simulate Arrival" button** - triggers completion flow
- CO2 being "saved" counter (if applicable)

### 5. Trip Completion (Celebration Screen)
- Large, satisfying animation (confetti, checkmark, etc.)
- "You saved X kg of CO2!"
- Points earned display
- Comparison: "That's like planting X trees!"
- Achievement unlocked notification (if applicable)
- "Share" and "Done" buttons

### 6. Achievements
- Badge grid layout
- Categories: Distance, Streaks, Transport types, CO2 milestones
- Progress bars for incomplete achievements
- Locked/unlocked visual states
- Tap for details

### 7. Leaderboard
- Weekly/Monthly/All-time tabs
- League system (Bronze, Silver, Gold, Platinum, Diamond - like Duolingo)
- User avatars, names, points
- Current user highlighted
- "Friends" sub-tab (mock friends)

### 8. Profile
- User avatar and name
- Total stats: Trips, CO2 saved, Points, Level
- Transport preferences (toggle which modes to show)
- Settings (notifications, units, etc. - non-functional for demo)
- Logout button

---

## Design System

### Colors
- **Primary Green:** #22C55E (eco-friendly actions)
- **Secondary Green:** #16A34A (darker accents)
- **Warning Yellow:** #EAB308 (moderate eco-impact)
- **Danger Red:** #EF4444 (high emissions)
- **Background:** #F0FDF4 (very light green tint)
- **Surface:** #FFFFFF
- **Text Primary:** #1F2937
- **Text Secondary:** #6B7280

### Icons
- Leaf icon: Eco-friendly indicator
- Warning/Danger icon: High emissions
- Transport icons: Walking, bike, bus/train, car
- Achievement badges: Various eco-themed

### Typography
- Clean, modern sans-serif
- Large touch targets for mobile

### Feel
- Google Maps familiarity for navigation flow
- Duolingo energy for gamification screens
- Satisfying micro-interactions and celebrations

---

## Mock Data Requirements

### Demo Locations (Hardcoded)
1. "Home" → "Central Park"
2. "Home" → "Downtown Office"
3. "Home" → "University Campus"

### Transport Options Template
```
{
  type: "walking",
  label: "Walk",
  icon: "walk",
  time: "25 min",
  distance: "2.1 km",
  co2: "0 kg",
  points: 50,
  ecoRating: 5, // 1-5 scale
  color: "#22C55E"
}
```

### Mock User
```
{
  username: "user",
  displayName: "Alex Green",
  avatar: placeholder,
  level: 12,
  totalPoints: 2450,
  co2Saved: "127.5 kg",
  totalTrips: 43,
  currentStreak: 7
}
```

### Mock Leaderboard Users
8-10 fake users with varied points/levels

### Achievement Ideas (To be brainstormed)
- First steps (first trip)
- Streak achievements (3, 7, 14, 30 days)
- Transport-specific (10 bike rides, etc.)
- CO2 milestones (10kg, 50kg, 100kg saved)
- Social (share achievement, join league)

---

## File Structure (Proposed)

```
ecotrack/
├── app/                    # Expo Router screens
│   ├── (auth)/
│   │   └── login.tsx
│   ├── (tabs)/
│   │   ├── index.tsx       # Home/Dashboard
│   │   ├── achievements.tsx
│   │   ├── leaderboard.tsx
│   │   └── profile.tsx
│   ├── route/
│   │   ├── plan.tsx        # Route planning
│   │   ├── active.tsx      # Active navigation
│   │   └── complete.tsx    # Completion celebration
│   └── _layout.tsx
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── route/              # Route-specific components
│   └── gamification/       # Points, badges, etc.
├── constants/
│   ├── colors.ts
│   ├── mockData.ts
│   └── achievements.ts
├── hooks/
├── contexts/
│   ├── AuthContext.tsx
│   └── UserDataContext.tsx
└── assets/
```

---

## Technical Notes

- **Navigation:** Expo Router (file-based routing)
- **State:** React Context for demo (no backend)
- **Maps:** react-native-maps or static images for demo
- **Animations:** react-native-reanimated for celebrations
- **Icons:** @expo/vector-icons

---

## Success Criteria

A successful demo should:
1. Feel familiar to Google Maps users
2. Clearly communicate the eco-gamification concept
3. Have satisfying visual feedback (especially trip completion)
4. Look polished enough for a pitch/presentation
5. Work smoothly on Android via Expo Go

