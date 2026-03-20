# EcoTrack - AI Collaborator Outputs

This file contains outputs from ChatGPT and Gemini.

Claude will review these and integrate them into the project.

---

<!-- Paste outputs below with clear headers -->

## GEMINI Output: CO2 Emission Data per Transport Type

### Carbon Emissions by Transport Type

| Transport Type | CO2e/km (grams) | Eco-rating (1-5) | Source |
| :--- | :--- | :--- | :--- |
| Walking | 0 g | 5 | Standard LCA Boundary |
| Cycling (regular bike) | 0 g | 5 | Standard LCA Boundary |
| E-bike / Electric scooter | 15 g | 5 | European Cyclists' Federation / EPA |
| Bus (city bus, average occupancy) | 105 g | 3 | UK DEFRA 2023 |
| Metro / Subway | 35 g | 4 | UK DEFRA 2023 |
| Train (regional) | 41 g | 4 | UK DEFRA 2023 |
| Car - small/efficient | 130 g | 2 | EEA / UK DEFRA 2023 |
| Car - average | 170 g | 2 | EEA / UK DEFRA 2023 |
| Car - SUV/large | 220 g | 1 | EEA / UK DEFRA 2023 |
| Rideshare/Taxi (incl. deadheading) | 255 g | 1 | UCSUSA / Transport & Environment |

### CO2 Saved Comparison Formula

A typical mature tree absorbs approximately 22 kg of CO2 per year, which equates to roughly 0.06 kg (60 grams) of CO2 per day.

**Comparison:**
`X kg of CO2 saved = (X / 0.06) trees planted and absorbing CO2 for one day`

**Example:**
Saving **1 kg of CO2** (e.g., swapping a 6km SUV trip for a bike ride) is equivalent to the carbon absorbed by **17 trees in a single day**.

### Sources & Methodology Limitations

*   **UK DEFRA (2023):** UK Department for Environment, Food & Rural Affairs Greenhouse Gas Reporting Conversion Factors. Widely recognized as a global standard for transport emission baselines per passenger-kilometer.
*   **EEA:** European Environment Agency data on average passenger vehicle emissions.
*   **UCSUSA:** Union of Concerned Scientists research on ride-hailing emissions, which identifies that "deadheading" (driving to pick up a passenger or waiting) increases average emissions by approximately 47-50% compared to a standard private car trip.
*   **European Cyclists' Federation:** Lifecycle assessment for e-bikes, accounting for electricity generation and battery manufacturing amortized over the vehicle's lifespan.

*(Note: Walking and cycling are assessed at 0 g CO2e by standard conventions, excluding the marginal increase in human food caloric requirements. Vehicle emissions represent average tailpipe (Tank-to-Wheel) outputs and fuel supply chain estimates.)*

## GEMINI Output: Achievement Ideas & Duolingo Mechanics Research

### Task 2: Achievement Ideas

| Category | Name | Description | Points | Icon Idea | Difficulty |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **First-Time** | **The First Step** | Log your very first sustainable trip. | 10-20 | A small green footprint | Easy |
| **First-Time** | **Profile Polisher** | Complete your EcoTrack user profile. | 15-25 | A customized avatar with a checkmark | Easy |
| **First-Time** | **Goal Setter** | Set your first weekly emission reduction goal. | 20-30 | A target with an arrow | Easy |
| **Streak** | **Weekend Warrior** | Log trips on both Saturday and Sunday. | 40-50 | A calendar with a sun and leaf | Medium |
| **Streak** | **Perfect Week** | Log at least one sustainable trip every day for 7 days. | 100-150 | A glowing golden calendar | Hard |
| **Streak** | **Monthly Master** | Maintain a continuous 30-day logging streak. | 300-500 | A crescent moon surrounded by stars | Epic |
| **Transport** | **Pedal Pusher** | Log 5 trips using a bicycle. | 50-75 | A dynamic bicycle wheel | Medium |
| **Transport** | **Transit Trendsetter** | Take the bus, train, or subway 10 times. | 75-100 | A sleek train car | Medium |
| **Transport** | **Carpool Catalyst** | Share a ride with someone else 5 times. | 60-80 | Two people in a stylized car | Medium |
| **Transport** | **Multimodal Master** | Use 3 different types of sustainable transport in one week. | 100-150 | A collage of a bike, bus, and walking shoes | Hard |
| **Distance** | **Marathoner** | Walk or run a total of 26.2 miles (42.2 km). | 150-200 | A running shoe with wings | Hard |
| **Distance** | **Century Ride** | Bike a total of 100 miles (160 km). | 200-250 | A speedometer maxed out | Epic |
| **CO2 Savings** | **Tree Hugger** | Save the equivalent CO2 of planting one tree (approx. 20kg). | 50-100 | A sprouting sapling | Medium |
| **CO2 Savings** | **Carbon Neutralizer** | Save 100kg of CO2 emissions. | 250-300 | A shield deflecting a grey cloud | Hard |
| **CO2 Savings** | **Ton of Good** | Reach a lifetime savings of 1 metric ton of CO2. | 1000+ | A glowing Earth | Epic |
| **Social** | **Social Butterfly** | Share a milestone to your connected social media account. | 25-50 | A paper airplane | Easy |
| **Social** | **Eco-Influencer** | Successfully refer a friend to join EcoTrack. | 100-150 | Two hands shaking | Medium |
| **Fun/Quirky** | **Rain or Shine** | Log a walking or biking trip while the weather app reports rain. | 75-100 | An umbrella deflecting raindrops | Medium |
| **Fun/Quirky** | **Early Bird** | Log a sustainable trip before 6:00 AM. | 50-75 | A rooster silhouette against a sunrise | Medium |
| **Fun/Quirky** | **Night Owl** | Log a sustainable transit trip after 10:00 PM. | 50-75 | An owl perched on a streetlamp | Medium |

***

### Task 3: Duolingo Gamification Mechanics

#### Key Psychological Mechanics

*   **Streak System Specifics:**
    *   **The Mechanic:** Users build a streak by completing at least one lesson daily. The streak is prominently displayed with a flame icon.
    *   **Psychology:** This leverages the "Sunk Cost Fallacy" and "Loss Aversion." Once a user builds a significant streak, the pain of losing it outweighs the effort required to maintain it.
    *   **Forgiveness:** Duolingo offers "Streak Freezes", acting as a safety net, reducing user churn.
*   **League/Leaderboard Structure:**
    *   **The Mechanic:** Users are placed in cohorts of ~30 people and ranked based on XP earned. Top performers advance tiers, while the bottom drop.
    *   **Psychology:** Taps into social comparison and competitive drive in a manageable cohort size.
*   **XP and Level Progression:**
    *   **The Mechanic:** Every completed action yields Experience Points (XP).
    *   **Psychology:** Immediate, quantifiable feedback. Provides a constant sense of progression and micro-achievements.
*   **Notification Strategies:**
    *   **The Mechanic:** Mix of push notifications, emails, and home screen widgets.
    *   **Psychology:** Employs the "Fogg Behavior Model" (Motivation + Ability + Prompt). Notifications are personalized and escalate.
*   **What Makes it "Addictive":**
    *   **Variable Rewards:** Occasional double XP boosts or surprise chest rewards mimic slot machine mechanics.
    *   **Frictionless Onboarding:** Extremely low barrier to entry.
    *   **Clear Visual Cues:** Bright colors, celebrations, and character animations provide intense positive reinforcement.

#### Recommendations for EcoTrack Demo Prioritization

1.  **The Daily Streak (Priority 1):** The single most powerful tool for habit formation. Implement a simple daily logging streak (visual flame/leaf icon).
2.  **XP and Simple Progression (Priority 2):** Award "Eco-Points" for every trip logged. Show a weekly progress bar toward a realistic goal.
3.  **Tiered Badges/Achievements (Priority 3):** Implement 3-5 of the "First-Time" and "Distance" achievements. Shows long-term engagement path without complex backend logic.
4.  **Action-Oriented Notifications (Priority 4):** A simple, daily push notification at a high-probability travel time (e.g., 8:00 AM or 5:00 PM).

*(Note: Skip the complex League/Leaderboard system for the demo as it requires a critical mass of active users and significant backend engineering.)*

## CHATGPT OUTPUT - Login Screen Component

```tsx
import React, { useMemo, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Colors = {
  primary: '#22C55E',
  primaryDark: '#16A34A',
  warning: '#EAB308',
  danger: '#EF4444',
  background: '#F0FDF4',
  surface: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
};

export default function LoginScreen() {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('user');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(
    () => username.trim().length > 0 && password.trim().length > 0 && !isSubmitting,
    [username, password, isSubmitting]
  );

  const handleLogin = async () => {
    setIsSubmitting(true);
    setError('');

    const isValid = username.trim().toLowerCase() === 'user' && password === 'user';

    setTimeout(() => {
      if (isValid) {
        router.replace('/(tabs)');
      } else {
        setError('Incorrect credentials. Try username: user and password: user.');
        Alert.alert('Login failed', 'Use username "user" and password "user".');
      }

      setIsSubmitting(false);
    }, 350);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.heroCard}>
          <View style={styles.logoBadge}>
            <Ionicons name="leaf" size={28} color={Colors.surface} />
          </View>

          <Text style={styles.brand}>EcoTrack</Text>
          <Text style={styles.headline}>Welcome back</Text>
          <Text style={styles.subheadline}>
            Plan greener trips, build your streak, and save CO2 with every route.
          </Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <View style={[styles.inputWrapper, error ? styles.inputWrapperError : null]}>
              <Ionicons name="person-outline" size={18} color={Colors.textSecondary} />
              <TextInput
                accessibilityLabel="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(value) => {
                  setUsername(value);
                  if (error) setError('');
                }}
                placeholder="Enter your username"
                placeholderTextColor={Colors.textSecondary}
                style={styles.input}
                value={username}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputWrapper, error ? styles.inputWrapperError : null]}>
              <Ionicons name="lock-closed-outline" size={18} color={Colors.textSecondary} />
              <TextInput
                accessibilityLabel="Password"
                autoCapitalize="none"
                onChangeText={(value) => {
                  setPassword(value);
                  if (error) setError('');
                }}
                placeholder="Enter your password"
                placeholderTextColor={Colors.textSecondary}
                secureTextEntry
                style={styles.input}
                value={password}
              />
            </View>
          </View>

          {error ? (
            <View style={styles.errorRow}>
              <Ionicons name="alert-circle" size={16} color={Colors.danger} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : (
            <View style={styles.helperRow}>
              <Ionicons name="sparkles-outline" size={14} color={Colors.primaryDark} />
              <Text style={styles.helperText}>Demo login: user / user</Text>
            </View>
          )}

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Log in to EcoTrack"
            disabled={!canSubmit}
            onPress={handleLogin}
            style={({ pressed }) => [
              styles.button,
              !canSubmit ? styles.buttonDisabled : null,
              pressed && canSubmit ? styles.buttonPressed : null,
            ]}
          >
            <Text style={styles.buttonText}>{isSubmitting ? 'Signing in...' : 'Log In'}</Text>
            <Ionicons name="arrow-forward" size={18} color={Colors.surface} />
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          Choose cleaner journeys. Earn points for better travel choices.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  heroCard: {
    marginBottom: 24,
    alignItems: 'center',
  },
  logoBadge: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    shadowColor: Colors.primaryDark,
    shadowOpacity: 0.2,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  brand: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  headline: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  subheadline: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
    textAlign: 'center',
    maxWidth: 320,
  },
  formCard: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#DCFCE7',
    shadowColor: '#14532D',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  inputWrapper: {
    minHeight: 52,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputWrapperError: {
    borderColor: Colors.danger,
    backgroundColor: '#FEF2F2',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: Colors.textPrimary,
    paddingVertical: 14,
  },
  helperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 18,
  },
  helperText: {
    color: Colors.primaryDark,
    fontSize: 13,
    fontWeight: '600',
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 18,
  },
  errorText: {
    flex: 1,
    color: Colors.danger,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
  button: {
    minHeight: 56,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    shadowColor: Colors.primaryDark,
    shadowOpacity: 0.22,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  buttonDisabled: {
    backgroundColor: '#86EFAC',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: Colors.primaryDark,
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '800',
  },
  footerText: {
    textAlign: 'center',
    color: Colors.textSecondary,
    fontSize: 13,
    marginTop: 18,
  },
});
```

## CHATGPT OUTPUT - Home Dashboard Screen

```tsx
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Colors = {
  primary: '#22C55E',
  primaryDark: '#16A34A',
  warning: '#EAB308',
  danger: '#EF4444',
  background: '#F0FDF4',
  surface: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
};

const stats = [
  {
    id: 'co2',
    label: 'CO2 Saved',
    value: '127.5 kg',
    icon: 'leaf',
    iconColor: Colors.primary,
    tint: '#DCFCE7',
  },
  {
    id: 'streak',
    label: 'Current Streak',
    value: '7 days',
    icon: 'flame',
    iconColor: Colors.warning,
    tint: '#FEF3C7',
  },
  {
    id: 'level',
    label: 'Level',
    value: '12',
    icon: 'trophy',
    iconColor: Colors.primaryDark,
    tint: '#D1FAE5',
  },
] as const;

const trips = [
  {
    id: '1',
    destination: 'Central Park',
    mode: 'Bike',
    time: '14 min',
    saved: '0.8 kg saved',
    icon: 'bicycle',
    color: Colors.primary,
  },
  {
    id: '2',
    destination: 'Downtown Office',
    mode: 'Bus',
    time: '22 min',
    saved: '0.5 kg saved',
    icon: 'bus',
    color: '#84CC16',
  },
  {
    id: '3',
    destination: 'University Campus',
    mode: 'Walk',
    time: '18 min',
    saved: '1.1 kg saved',
    icon: 'walk',
    color: Colors.primaryDark,
  },
] as const;

export default function HomeDashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Good morning, Alex</Text>
            <Text style={styles.subgreeting}>Ready for a greener trip today?</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AG</Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Plan a route"
          onPress={() => router.push('/route/plan')}
          style={({ pressed }) => [styles.searchCard, pressed ? styles.searchCardPressed : null]}
        >
          <View style={styles.searchIconWrap}>
            <Ionicons name="search" size={20} color={Colors.textSecondary} />
          </View>

          <View style={styles.searchContent}>
            <Text style={styles.searchPlaceholder}>Where to?</Text>
            <Text style={styles.searchHint}>Search destination or plan an eco-friendly route</Text>
          </View>

          <View style={styles.routeActionChip}>
            <MaterialCommunityIcons name="map-marker-path" size={18} color={Colors.surface} />
          </View>
        </Pressable>

        <View style={styles.quickActionCard}>
          <View>
            <Text style={styles.quickActionEyebrow}>Suggested next step</Text>
            <Text style={styles.quickActionTitle}>Plan your lowest-CO2 route</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Start route planning"
            onPress={() => router.push('/route/plan')}
            style={({ pressed }) => [styles.planButton, pressed ? styles.planButtonPressed : null]}
          >
            <Text style={styles.planButtonText}>Plan Route</Text>
          </Pressable>
        </View>

        <View style={styles.statsGrid}>
          {stats.map((stat) => (
            <View key={stat.id} style={styles.statCard}>
              <View style={[styles.statIconWrap, { backgroundColor: stat.tint }]}>
                <Ionicons name={stat.icon} size={18} color={stat.iconColor} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Trips</Text>
          <Pressable accessibilityRole="button" accessibilityLabel="See all recent trips">
            <Text style={styles.sectionLink}>See all</Text>
          </Pressable>
        </View>

        <View style={styles.tripList}>
          {trips.map((trip) => (
            <Pressable
              key={trip.id}
              accessibilityRole="button"
              accessibilityLabel={`${trip.destination}, ${trip.mode}, ${trip.time}, ${trip.saved}`}
              style={({ pressed }) => [styles.tripCard, pressed ? styles.tripCardPressed : null]}
            >
              <View style={[styles.tripIconWrap, { backgroundColor: `${trip.color}18` }]}>
                <Ionicons name={trip.icon} size={20} color={trip.color} />
              </View>

              <View style={styles.tripContent}>
                <Text style={styles.tripDestination}>{trip.destination}</Text>
                <Text style={styles.tripMeta}>
                  {trip.mode} • {trip.time}
                </Text>
              </View>

              <View style={styles.tripSavedPill}>
                <Text style={styles.tripSavedText}>{trip.saved}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.bottomTabPlaceholder}>
          <Pressable style={styles.tabItem}>
            <Ionicons name="home" size={20} color={Colors.primaryDark} />
            <Text style={[styles.tabLabel, styles.tabLabelActive]}>Home</Text>
          </Pressable>
          <Pressable style={styles.tabItem}>
            <Ionicons name="ribbon-outline" size={20} color={Colors.textSecondary} />
            <Text style={styles.tabLabel}>Achievements</Text>
          </Pressable>
          <Pressable style={styles.tabItem}>
            <Ionicons name="trophy-outline" size={20} color={Colors.textSecondary} />
            <Text style={styles.tabLabel}>Leaderboard</Text>
          </Pressable>
          <Pressable style={styles.tabItem}>
            <Ionicons name="person-outline" size={20} color={Colors.textSecondary} />
            <Text style={styles.tabLabel}>Profile</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 28,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  greeting: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  subgreeting: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: Colors.primaryDark,
    fontWeight: '800',
  },
  searchCard: {
    minHeight: 74,
    borderRadius: 24,
    backgroundColor: Colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DCFCE7',
    shadowColor: '#111827',
    shadowOpacity: 0.1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  searchCardPressed: {
    transform: [{ scale: 0.99 }],
  },
  searchIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  searchContent: {
    flex: 1,
  },
  searchPlaceholder: {
    fontSize: 19,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  searchHint: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  routeActionChip: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionCard: {
    borderRadius: 24,
    backgroundColor: Colors.primaryDark,
    padding: 18,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quickActionEyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D1FAE5',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  quickActionTitle: {
    color: Colors.surface,
    fontSize: 18,
    fontWeight: '800',
    maxWidth: 180,
  },
  planButton: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  planButtonPressed: {
    transform: [{ scale: 0.98 }],
  },
  planButtonText: {
    color: Colors.primaryDark,
    fontWeight: '800',
    fontSize: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  sectionLink: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  tripList: {
    gap: 12,
    marginBottom: 24,
  },
  tripCard: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tripCardPressed: {
    transform: [{ scale: 0.99 }],
  },
  tripIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  tripContent: {
    flex: 1,
  },
  tripDestination: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  tripMeta: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  tripSavedPill: {
    borderRadius: 999,
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tripSavedText: {
    color: Colors.primaryDark,
    fontSize: 12,
    fontWeight: '700',
  },
  bottomTabPlaceholder: {
    marginTop: 8,
    backgroundColor: Colors.surface,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    flex: 1,
  },
  tabLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: Colors.primaryDark,
  },
});
```

## CHATGPT OUTPUT - Transport Option Card Component

```tsx
import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Colors = {
  primary: '#22C55E',
  primaryDark: '#16A34A',
  warning: '#EAB308',
  danger: '#EF4444',
  background: '#F0FDF4',
  surface: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
};

export type TransportMode = 'walking' | 'bike' | 'bus' | 'car';

export interface TransportOption {
  id: string;
  type: TransportMode;
  label: string;
  time: string;
  distance: string;
  co2: string;
  points: number;
  ecoRating: number;
}

interface TransportOptionCardProps {
  option: TransportOption;
  selected?: boolean;
  onPress?: (option: TransportOption) => void;
}

const modeConfig: Record<
  TransportMode,
  {
    icon: keyof typeof Ionicons.glyphMap;
    badgeLabel: string;
  }
> = {
  walking: { icon: 'walk', badgeLabel: 'Zero emission' },
  bike: { icon: 'bicycle', badgeLabel: 'Low impact' },
  bus: { icon: 'bus', badgeLabel: 'Shared transit' },
  car: { icon: 'car-sport', badgeLabel: 'Higher impact' },
};

function getEcoColor(rating: number) {
  if (rating >= 5) return Colors.primary;
  if (rating >= 4) return '#65A30D';
  if (rating >= 3) return Colors.warning;
  if (rating >= 2) return '#F97316';
  return Colors.danger;
}

export default function TransportOptionCard({
  option,
  selected = false,
  onPress,
}: TransportOptionCardProps) {
  const accentColor = useMemo(() => getEcoColor(option.ecoRating), [option.ecoRating]);
  const config = modeConfig[option.type];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={`${option.label}, ${option.time}, ${option.distance}, ${option.co2} CO2, ${option.points} points`}
      onPress={() => onPress?.(option)}
      style={({ pressed }) => [
        styles.card,
        { borderColor: selected ? accentColor : Colors.border },
        selected ? [styles.cardSelected, { backgroundColor: `${accentColor}10` }] : null,
        pressed ? styles.cardPressed : null,
      ]}
    >
      <View style={styles.topRow}>
        <View style={styles.leftCluster}>
          <View style={[styles.iconWrap, { backgroundColor: `${accentColor}18` }]}>
            <Ionicons name={config.icon} size={22} color={accentColor} />
          </View>

          <View style={styles.titleBlock}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{option.label}</Text>
              {selected ? (
                <View style={[styles.selectedPill, { backgroundColor: accentColor }]}> 
                  <Ionicons name="checkmark" size={12} color={Colors.surface} />
                  <Text style={styles.selectedPillText}>Selected</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.subtitle}>{config.badgeLabel}</Text>
          </View>
        </View>

        <View style={[styles.co2Pill, { backgroundColor: `${accentColor}18` }]}>
          <MaterialCommunityIcons name="molecule-co2" size={16} color={accentColor} />
          <Text style={[styles.co2Text, { color: accentColor }]}>{option.co2}</Text>
        </View>
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricItem}>
          <Ionicons name="time-outline" size={15} color={Colors.textSecondary} />
          <Text style={styles.metricText}>{option.time}</Text>
        </View>

        <View style={styles.metricItem}>
          <Ionicons name="navigate-outline" size={15} color={Colors.textSecondary} />
          <Text style={styles.metricText}>{option.distance}</Text>
        </View>

        <View style={styles.metricItem}>
          <Ionicons name="flash-outline" size={15} color={Colors.warning} />
          <Text style={styles.metricText}>{option.points} pts</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.ratingBlock}>
          <Text style={styles.ratingLabel}>Eco rating</Text>
          <View style={styles.leafRow}>
            {Array.from({ length: 5 }).map((_, index) => {
              const filled = index < option.ecoRating;
              return (
                <Ionicons
                  key={`${option.id}-leaf-${index}`}
                  name={filled ? 'leaf' : 'leaf-outline'}
                  size={15}
                  color={filled ? accentColor : '#D1D5DB'}
                  style={styles.leafIcon}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.indicatorWrap}>
          <View style={styles.indicatorTrack}>
            <View
              style={[
                styles.indicatorFill,
                {
                  width: `${Math.max(20, option.ecoRating * 20)}%`,
                  backgroundColor: accentColor,
                },
              ]}
            />
          </View>
          <Text style={[styles.indicatorText, { color: accentColor }]}>
            {option.ecoRating >= 4
              ? 'Eco smart'
              : option.ecoRating === 3
                ? 'Balanced'
                : 'Higher emissions'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 22,
    borderWidth: 1.5,
    padding: 16,
    shadowColor: '#111827',
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  cardSelected: {
    shadowOpacity: 0.12,
    elevation: 4,
  },
  cardPressed: {
    transform: [{ scale: 0.99 }],
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
    gap: 12,
  },
  leftCluster: {
    flexDirection: 'row',
    flex: 1,
    gap: 12,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlock: {
    flex: 1,
    paddingTop: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  selectedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  selectedPillText: {
    color: Colors.surface,
    fontSize: 11,
    fontWeight: '800',
  },
  co2Pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  co2Text: {
    fontSize: 12,
    fontWeight: '800',
  },
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  metricText: {
    fontSize: 13,
    color: Colors.textPrimary,
    fontWeight: '700',
  },
  bottomRow: {
    gap: 12,
  },
  ratingBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  leafRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leafIcon: {
    marginLeft: 4,
  },
  indicatorWrap: {
    gap: 6,
  },
  indicatorTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: '#E5E7EB',
    overflow: 'hidden',
  },
  indicatorFill: {
    height: '100%',
    borderRadius: 999,
  },
  indicatorText: {
    fontSize: 12,
    fontWeight: '700',
    alignSelf: 'flex-end',
  },
});
```

## EcoTrack Research Specialist Output: Motivational Messages

### Trip Completion
1. "Great choice! You just prevented {co2}kg of CO2e from entering the atmosphere. Every journey counts."
2. "Awesome ride! Your sustainable trip saved {co2}kg of carbon emissions today."
3. "You're a climate champion! That trip kept {co2}kg of greenhouse gases out of our air."
4. "Small steps, big impact. You've avoided {co2}kg of CO2e and earned {points} points!"
5. "Your clean commute just saved {co2}kg of carbon. The planet thanks you!"

### Streak Maintenance
6. "{streak} days strong! Consistency is key to lowering your carbon footprint."
7. "You're on fire (but not the planet)! A {streak}-day streak of sustainable choices."
8. "Amazing! {streak} consecutive days of eco-friendly travel. Keep the momentum going!"
9. "That's a {streak}-day streak! You are actively contributing to a circular and sustainable economy."
10. "Way to go! Your {streak}-day eco-streak is building habits that combat climate change."

### Achievement Unlock
11. "Achievement Unlocked! You've earned {points} points for your dedication to reducing environmental impact."
12. "Level up! Your commitment to sustainable transit has unlocked a new milestone. Here are {points} extra points!"
13. "Congratulations! You've unlocked a new eco-badge. Your lifecycle emissions are shrinking!"
14. "Incredible work! You've earned a new achievement and {points} points for prioritizing low-carbon transport."
15. "New Milestone Reached! Your consistent sustainable choices are driving real ecological change."

## EcoTrack Research Specialist Output: Fun Eco Facts

1. **Active Transport Efficiency:** "Riding a bicycle for 5 kilometers instead of driving a typical gasoline car avoids approximately 1.2 kg of CO2e emissions—roughly equivalent to the carbon sequestered by a tree in a month."
2. **Global Transport Impact:** "According to the IEA, the global transport sector is responsible for nearly 25% of direct CO2 emissions from fuel combustion. Choosing active or public transport directly mitigates this."
3. **The First EV:** "The first electric carriage was built in the 1830s by Scottish inventor Robert Anderson, long before the mass adoption of internal combustion engines."
4. **Public Transit Scale:** "A fully occupied electric bus can displace up to 40 passenger cars from the road, significantly reducing both traffic congestion and urban particulate matter (PM2.5) pollution."
5. **The Cold Start Penalty:** "Walking 1 kilometer instead of driving a short trip not only reduces CO2 emissions to zero but also eliminates the 'cold start' emissions of a car engine, which are often the most polluting phase of a drive."
6. **High-Speed Rail:** "High-speed rail networks, common in Europe and Asia, emit up to 90% less CO2e per passenger-kilometer compared to short-haul domestic flights, according to UNEP data."
7. **The Rebound Effect:** "Sometimes, more fuel-efficient cars lead people to drive further (the 'rebound effect'). Active transport like walking and cycling avoids this by decoupling mobility from fossil fuel consumption entirely."
8. **Micromobility Potential:** "If 10% of urban car trips were replaced by e-bikes, urban transport emissions could decrease by up to 11%, demonstrating the high lifecycle efficiency of micromobility over heavy EVs."
9. **Bicycle Lifecycle:** "The carbon footprint of manufacturing a typical bicycle is amortized within just 400 to 600 kilometers of use when replacing car trips, making it an incredibly efficient circular economy asset."
10. **Early Electrification:** "Trams and streetcars have been providing electrified public transit since the late 19th century, proving that sustainable, electrified urban transport is a proven, long-standing technology."

## CHATGPT OUTPUT - Celebration Animation Component

```tsx
import React, { memo, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Colors = {
  primary: '#22C55E',
  primaryDark: '#16A34A',
  warning: '#EAB308',
  danger: '#EF4444',
  background: '#F0FDF4',
  surface: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
};

interface CelebrationAnimationProps {
  pointsEarned?: number;
  title?: string;
  subtitle?: string;
  size?: number;
}

interface ConfettiPieceProps {
  index: number;
  total: number;
  color: string;
  size: number;
}

const CONFETTI_COLORS = [
  Colors.primary,
  Colors.primaryDark,
  Colors.warning,
  '#84CC16',
  '#34D399',
  '#FACC15',
];

const ConfettiPiece = memo(function ConfettiPiece({
  index,
  total,
  color,
  size,
}: ConfettiPieceProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      index * 35,
      withTiming(1, {
        duration: 1200,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, [index, progress]);

  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const distance = size * (0.3 + (index % 4) * 0.06);
  const offsetX = Math.cos(angle) * distance;
  const offsetY = Math.sin(angle) * distance;

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, 220]);
    return {
      opacity: interpolate(progress.value, [0, 0.08, 1], [0, 1, 0]),
      transform: [
        { translateX: interpolate(progress.value, [0, 1], [0, offsetX]) },
        { translateY: interpolate(progress.value, [0, 1], [0, offsetY]) },
        { rotate: `${rotate}deg` },
        { scale: interpolate(progress.value, [0, 0.2, 1], [0.5, 1, 0.85]) },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.confettiPiece,
        {
          backgroundColor: color,
          width: 8 + (index % 3) * 2,
          height: 14 + (index % 2) * 2,
          borderRadius: 4,
          left: size / 2 - 5,
          top: size / 2 - 5,
        },
        animatedStyle,
      ]}
    />
  );
});

export default function CelebrationAnimation({
  pointsEarned = 50,
  title = 'Trip Complete!',
  subtitle = 'You chose the greener way to go.',
  size = 220,
}: CelebrationAnimationProps) {
  const checkScale = useSharedValue(0.7);
  const checkPulse = useSharedValue(0);
  const ringProgress = useSharedValue(0);
  const pointsProgress = useSharedValue(0);

  useEffect(() => {
    checkScale.value = withSpring(1, {
      damping: 10,
      stiffness: 180,
      mass: 0.7,
    });

    checkPulse.value = withDelay(
      400,
      withRepeat(withTiming(1, { duration: 700 }), -1, true)
    );

    ringProgress.value = withTiming(1, {
      duration: 900,
      easing: Easing.out(Easing.cubic),
    });

    pointsProgress.value = withDelay(
      220,
      withTiming(1, {
        duration: 650,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, [checkPulse, checkScale, pointsProgress, ringProgress]);

  const checkAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: checkScale.value + checkPulse.value * 0.05 }],
  }));

  const ringAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(ringProgress.value, [0, 1], [0.5, 0]),
    transform: [{ scale: interpolate(ringProgress.value, [0, 1], [0.6, 1.35]) }],
  }));

  const pointsAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pointsProgress.value, [0, 0.15, 1], [0, 1, 1]),
    transform: [
      {
        translateY: interpolate(pointsProgress.value, [0, 1], [18, -10]),
      },
      {
        scale: interpolate(pointsProgress.value, [0, 1], [0.9, 1]),
      },
    ],
  }));

  return (
    <View style={styles.wrapper} accessible accessibilityLabel={`${title}. ${pointsEarned} points earned.`}>
      <View style={[styles.animationStage, { width: size, height: size }]}> 
        {Array.from({ length: 12 }).map((_, index) => (
          <ConfettiPiece
            key={`confetti-${index}`}
            index={index}
            total={12}
            color={CONFETTI_COLORS[index % CONFETTI_COLORS.length]}
            size={size}
          />
        ))}

        <Animated.View
          style={[
            styles.ring,
            {
              width: size * 0.62,
              height: size * 0.62,
              borderRadius: size * 0.31,
            },
            ringAnimatedStyle,
          ]}
        />

        <Animated.View
          style={[
            styles.pointsBadge,
            {
              top: size * 0.14,
            },
            pointsAnimatedStyle,
          ]}
        >
          <Ionicons name="flash" size={14} color={Colors.warning} />
          <Text style={styles.pointsText}>+{pointsEarned} pts</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.checkContainer,
            {
              width: size * 0.42,
              height: size * 0.42,
              borderRadius: size * 0.21,
            },
            checkAnimatedStyle,
          ]}
        >
          <Ionicons
            name="checkmark"
            size={size * 0.18}
            color={Colors.surface}
          />
        </Animated.View>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationStage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  confettiPiece: {
    position: 'absolute',
  },
  ring: {
    position: 'absolute',
    borderWidth: 8,
    borderColor: '#BBF7D0',
    backgroundColor: 'transparent',
  },
  checkContainer: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOpacity: 0.24,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  pointsBadge: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.surface,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#DCFCE7',
    shadowColor: '#14532D',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  pointsText: {
    color: Colors.textPrimary,
    fontSize: 13,
    fontWeight: '800',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textSecondary,
    textAlign: 'center',
    maxWidth: 280,
  },
});
```

## CHATGPT OUTPUT - Streak Indicator Component

```tsx
import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const Colors = {
  primary: '#22C55E',
  primaryDark: '#16A34A',
  warning: '#EAB308',
  danger: '#EF4444',
  background: '#F0FDF4',
  surface: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
};

interface StreakIndicatorProps {
  streak: number;
  helperText?: string;
}

function getStreakTheme(streak: number) {
  if (streak >= 14) {
    return {
      flameColor: '#F97316',
      glowColor: '#FED7AA',
      badgeTint: '#FFF7ED',
      label: 'Unstoppable!',
      intensity: 1,
    };
  }

  if (streak >= 7) {
    return {
      flameColor: '#FB923C',
      glowColor: '#FDE68A',
      badgeTint: '#FFFBEB',
      label: 'Hot streak!',
      intensity: 0.8,
    };
  }

  if (streak >= 3) {
    return {
      flameColor: Colors.warning,
      glowColor: '#FEF3C7',
      badgeTint: '#FFFBEB',
      label: 'Keep it going!',
      intensity: 0.55,
    };
  }

  if (streak >= 1) {
    return {
      flameColor: '#FBBF24',
      glowColor: '#FEF3C7',
      badgeTint: '#FFFDF4',
      label: 'Nice start!',
      intensity: 0.35,
    };
  }

  return {
    flameColor: '#9CA3AF',
    glowColor: '#E5E7EB',
    badgeTint: '#F9FAFB',
    label: 'Start your streak today',
    intensity: 0,
  };
}

export default function StreakIndicator({
  streak,
  helperText,
}: StreakIndicatorProps) {
  const theme = useMemo(() => getStreakTheme(streak), [streak]);
  const pulse = useSharedValue(streak > 0 ? 1 : 0);

  useEffect(() => {
    if (streak > 0) {
      pulse.value = withRepeat(withTiming(0.2, { duration: 900 }), -1, true);
    } else {
      pulse.value = 0;
    }
  }, [pulse, streak]);

  const glowAnimatedStyle = useAnimatedStyle(() => ({
    opacity: theme.intensity === 0 ? 0.18 : 0.18 + pulse.value * 0.35,
    transform: [
      {
        scale: interpolate(pulse.value, [0.2, 1], [1, 1.14 + theme.intensity * 0.08]),
      },
    ],
  }));

  const flameAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: theme.intensity === 0
          ? 1
          : interpolate(pulse.value, [0.2, 1], [1, 1.04 + theme.intensity * 0.06]),
      },
    ],
  }));

  const resolvedHelperText = helperText ?? theme.label;

  return (
    <View
      style={[styles.card, { backgroundColor: theme.badgeTint }]}
      accessible
      accessibilityLabel={`Current streak ${streak} days. ${resolvedHelperText}`}
    >
      <View style={styles.leftSection}>
        <View style={styles.iconShell}>
          <Animated.View
            style={[
              styles.glow,
              { backgroundColor: theme.glowColor },
              glowAnimatedStyle,
            ]}
          />
          <Animated.View style={flameAnimatedStyle}>
            <Ionicons name="flame" size={30} color={theme.flameColor} />
          </Animated.View>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.eyebrow}>Current Streak</Text>
          <View style={styles.valueRow}>
            <Text style={styles.value}>{streak}</Text>
            <Text style={styles.unit}>day{streak === 1 ? '' : 's'}</Text>
          </View>
          <Text style={styles.helper}>{resolvedHelperText}</Text>
        </View>
      </View>

      <View style={[styles.statusChip, { backgroundColor: `${theme.flameColor}18` }]}>
        <Text style={[styles.statusChipText, { color: theme.flameColor }]}>
          {streak >= 7 ? 'On fire' : streak > 0 ? 'Active' : 'Idle'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#111827',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconShell: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    overflow: 'visible',
  },
  glow: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  textBlock: {
    flex: 1,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    marginBottom: 2,
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textPrimary,
    lineHeight: 32,
  },
  unit: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  helper: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  statusChip: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 12,
  },
  statusChipText: {
    fontSize: 12,
    fontWeight: '800',
  },
});
```
