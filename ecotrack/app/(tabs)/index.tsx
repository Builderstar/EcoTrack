import React, { useMemo } from 'react';
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
import { Colors } from '../../constants/colors';
import { useUserData } from '../../contexts/UserDataContext';
import { getDailyFact } from '../../constants/messages';
import StreakIndicator from '../../components/gamification/StreakIndicator';

export default function HomeDashboardScreen() {
  const { user, recentTrips } = useUserData();

  const stats = [
    {
      id: 'co2',
      label: 'CO2 Saved',
      value: user.co2SavedGrams >= 1000
        ? `${(user.co2SavedGrams / 1000).toFixed(1)} kg`
        : `${user.co2SavedGrams} g`,
      icon: 'leaf' as const,
      iconColor: Colors.primary,
      tint: '#DCFCE7',
    },
    {
      id: 'streak',
      label: 'Current Streak',
      value: `${user.currentStreak} days`,
      icon: 'flame' as const,
      iconColor: Colors.warning,
      tint: Colors.warningLight,
    },
    {
      id: 'level',
      label: 'Level',
      value: `${user.level}`,
      icon: 'trophy' as const,
      iconColor: Colors.primaryDark,
      tint: '#D1FAE5',
    },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const dailyFact = useMemo(() => getDailyFact(), []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>{getGreeting()}, {user.displayName.split(' ')[0]}</Text>
            <Text style={styles.subgreeting}>Ready for a greener trip today?</Text>
          </View>

          <Pressable
            style={({ pressed }) => [styles.avatar, pressed && styles.avatarPressed]}
            onPress={() => router.push('/(tabs)/profile')}
            accessibilityRole="button"
            accessibilityLabel="Go to profile"
          >
            <Text style={styles.avatarText}>{user.avatarInitials}</Text>
          </Pressable>
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

        <View style={styles.streakSection}>
          <StreakIndicator streak={user.currentStreak} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Trips</Text>
          <Pressable accessibilityRole="button" accessibilityLabel="See all recent trips">
            <Text style={styles.sectionLink}>See all</Text>
          </Pressable>
        </View>

        <View style={styles.tripList}>
          {recentTrips.slice(0, 3).map((trip) => (
            <Pressable
              key={trip.id}
              accessibilityRole="button"
              accessibilityLabel={`${trip.destination}, ${trip.mode}, ${trip.time}`}
              style={({ pressed }) => [styles.tripCard, pressed ? styles.tripCardPressed : null]}
            >
              <View style={[styles.tripIconWrap, { backgroundColor: `${Colors.primary}18` }]}>
                <Ionicons name={trip.modeIcon as any} size={20} color={Colors.primary} />
              </View>

              <View style={styles.tripContent}>
                <Text style={styles.tripDestination}>{trip.destination}</Text>
                <Text style={styles.tripMeta}>
                  {trip.mode} {'\u2022'} {trip.time}
                </Text>
              </View>

              <View style={styles.tripSavedPill}>
                <Text style={styles.tripSavedText}>
                  {trip.co2SavedGrams >= 1000
                    ? `${(trip.co2SavedGrams / 1000).toFixed(1)} kg saved`
                    : `${trip.co2SavedGrams} g saved`}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.ecoFactCard}>
          <View style={styles.ecoFactHeader}>
            <Ionicons name="bulb" size={18} color={Colors.warning} />
            <Text style={styles.ecoFactLabel}>Did you know?</Text>
          </View>
          <Text style={styles.ecoFactTitle}>{dailyFact.title}</Text>
          <Text style={styles.ecoFactText}>{dailyFact.fact}</Text>
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
  avatarPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
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
    borderColor: Colors.borderLight,
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
  streakSection: {
    marginBottom: 24,
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
  ecoFactCard: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.warningLight,
  },
  ecoFactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  ecoFactLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.warning,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ecoFactTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  ecoFactText: {
    fontSize: 13,
    lineHeight: 20,
    color: Colors.textSecondary,
  },
});
