import React, { useEffect, useMemo } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, getEcoColor } from '../../constants/colors';
import { formatCO2Savings, co2ToTreeDays } from '../../constants/mockData';
import { useUserData } from '../../contexts/UserDataContext';
import { getRandomMessage, formatMessage } from '../../constants/messages';
import CelebrationAnimation from '../../components/gamification/CelebrationAnimation';

export default function TripCompleteScreen() {
  const { completeRoute } = useUserData();

  const params = useLocalSearchParams<{
    destinationName: string;
    transportLabel: string;
    transportIcon: string;
    time: string;
    distance: string;
    co2: string;
    points: string;
    ecoRating: string;
    co2Grams: string;
  }>();

  const ecoRating = parseInt(params.ecoRating || '3', 10);
  const points = parseInt(params.points || '0', 10);
  const co2Grams = parseInt(params.co2Grams || '0', 10);
  const accentColor = getEcoColor(ecoRating);

  // Calculate CO2 saved compared to driving
  const carCo2 = 170 * parseFloat(params.distance || '0'); // 170g/km for average car
  const co2Saved = Math.max(0, Math.round(carCo2 - co2Grams));
  const treeDays = co2ToTreeDays(co2Saved);

  // Get a motivational message
  const motivationalMessage = useMemo(() => {
    const msg = getRandomMessage('trip_complete');
    const co2Display = co2Saved >= 1000 ? `${(co2Saved / 1000).toFixed(1)}kg` : `${co2Saved}g`;
    return formatMessage(msg.template, { co2: co2Display, points });
  }, [co2Saved, points]);

  useEffect(() => {
    // Record the completed trip
    completeRoute(
      {
        id: params.transportLabel?.toLowerCase() || 'walk',
        type: params.transportLabel?.toLowerCase() || 'walking',
        label: params.transportLabel || 'Walk',
        icon: params.transportIcon || 'walk',
        time: params.time || '0 min',
        distance: params.distance || '0 km',
        co2: params.co2 || '0 g',
        co2Grams,
        points,
        ecoRating,
        badgeLabel: '',
      },
      params.destinationName || 'Destination'
    );
  }, []);

  const handleDone = () => {
    router.replace('/(tabs)');
  };

  const handleShare = () => {
    // In a real app, this would open a share sheet
    alert('Share functionality would open here!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.celebrationSection}>
          <CelebrationAnimation
            pointsEarned={points}
            title="Trip Complete!"
            subtitle={`You made it to ${params.destinationName}`}
          />
        </View>

        <View style={styles.statsCard}>
          <View style={styles.mainStatRow}>
            <View style={styles.mainStat}>
              <View style={[styles.statIconWrap, { backgroundColor: `${accentColor}18` }]}>
                <MaterialCommunityIcons name="molecule-co2" size={28} color={accentColor} />
              </View>
              <Text style={styles.mainStatValue}>
                {co2Saved >= 1000 ? `${(co2Saved / 1000).toFixed(1)} kg` : `${co2Saved} g`}
              </Text>
              <Text style={styles.mainStatLabel}>CO2 Saved</Text>
            </View>

            <View style={styles.mainStat}>
              <View style={[styles.statIconWrap, { backgroundColor: Colors.warningLight }]}>
                <Ionicons name="flash" size={28} color={Colors.warning} />
              </View>
              <Text style={styles.mainStatValue}>+{points}</Text>
              <Text style={styles.mainStatLabel}>Points Earned</Text>
            </View>
          </View>

          {co2Saved > 0 && (
            <View style={styles.treeComparison}>
              <Ionicons name="leaf" size={20} color={Colors.primary} />
              <Text style={styles.treeText}>
                {formatCO2Savings(co2Saved)}
              </Text>
            </View>
          )}

          <View style={styles.tripSummary}>
            <View style={styles.summaryRow}>
              <Ionicons name={params.transportIcon as any} size={18} color={Colors.textSecondary} />
              <Text style={styles.summaryText}>{params.transportLabel}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Ionicons name="time-outline" size={18} color={Colors.textSecondary} />
              <Text style={styles.summaryText}>{params.time}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Ionicons name="navigate-outline" size={18} color={Colors.textSecondary} />
              <Text style={styles.summaryText}>{params.distance}</Text>
            </View>
          </View>
        </View>

        <View style={styles.motivationalCard}>
          <Ionicons name="sparkles" size={20} color={Colors.primaryDark} />
          <Text style={styles.motivationalText}>
            {motivationalMessage}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Pressable
          style={({ pressed }) => [
            styles.shareButton,
            pressed && styles.shareButtonPressed,
          ]}
          onPress={handleShare}
        >
          <Ionicons name="share-outline" size={20} color={Colors.primary} />
          <Text style={styles.shareButtonText}>Share</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.doneButton,
            pressed && styles.doneButtonPressed,
          ]}
          onPress={handleDone}
        >
          <Text style={styles.doneButtonText}>Done</Text>
          <Ionicons name="checkmark-circle" size={20} color={Colors.surface} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  celebrationSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  statsCard: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    marginBottom: 20,
  },
  mainStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  mainStat: {
    alignItems: 'center',
  },
  statIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  mainStatValue: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  mainStatLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  treeComparison: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${Colors.primary}12`,
    borderRadius: 16,
    padding: 14,
    gap: 10,
    marginBottom: 20,
  },
  treeText: {
    fontSize: 14,
    color: Colors.primaryDark,
    fontWeight: '600',
    flex: 1,
  },
  tripSummary: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  summaryText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  motivationalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  motivationalText: {
    flex: 1,
    fontSize: 14,
    color: Colors.primaryDark,
    fontWeight: '600',
    lineHeight: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 24,
    gap: 12,
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: Colors.surface,
    borderRadius: 18,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  shareButtonPressed: {
    backgroundColor: `${Colors.primary}10`,
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.primary,
  },
  doneButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: Colors.primary,
    borderRadius: 18,
    paddingVertical: 16,
    shadowColor: Colors.primaryDark,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  doneButtonPressed: {
    backgroundColor: Colors.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.surface,
  },
});
