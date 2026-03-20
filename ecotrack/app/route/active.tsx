import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, getEcoColor } from '../../constants/colors';

export default function ActiveRouteScreen() {
  const params = useLocalSearchParams<{
    destinationId: string;
    destinationName: string;
    transportId: string;
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
  const accentColor = getEcoColor(ecoRating);

  const handleSimulateArrival = () => {
    router.push({
      pathname: '/route/complete',
      params: {
        destinationName: params.destinationName,
        transportLabel: params.transportLabel,
        transportIcon: params.transportIcon,
        time: params.time,
        distance: params.distance,
        co2: params.co2,
        points: params.points,
        ecoRating: params.ecoRating,
        co2Grams: params.co2Grams,
      },
    });
  };

  const handleCancel = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <Pressable
          onPress={handleCancel}
          style={styles.cancelButton}
          accessibilityLabel="Cancel route"
        >
          <Ionicons name="close" size={24} color={Colors.textPrimary} />
        </Pressable>
        <Text style={styles.headerTitle}>Navigating</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.mapPlaceholder}>
          <View style={styles.mapOverlay}>
            <Ionicons name="map" size={64} color={Colors.primary} />
            <Text style={styles.mapText}>Map View</Text>
            <Text style={styles.mapSubtext}>
              Route visualization would appear here
            </Text>
          </View>

          <View style={[styles.routeLine, { backgroundColor: accentColor }]} />
        </View>

        <View style={styles.infoCard}>
          <View style={styles.destinationRow}>
            <View style={[styles.transportIconWrap, { backgroundColor: `${accentColor}18` }]}>
              <Ionicons name={params.transportIcon as any} size={24} color={accentColor} />
            </View>
            <View style={styles.destinationInfo}>
              <Text style={styles.destinationLabel}>Heading to</Text>
              <Text style={styles.destinationName}>{params.destinationName}</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={20} color={Colors.textSecondary} />
              <Text style={styles.statValue}>{params.time}</Text>
              <Text style={styles.statLabel}>remaining</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Ionicons name="navigate-outline" size={20} color={Colors.textSecondary} />
              <Text style={styles.statValue}>{params.distance}</Text>
              <Text style={styles.statLabel}>total</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <MaterialCommunityIcons name="molecule-co2" size={20} color={accentColor} />
              <Text style={[styles.statValue, { color: accentColor }]}>{params.co2}</Text>
              <Text style={styles.statLabel}>CO2</Text>
            </View>
          </View>

          <View style={styles.pointsPreview}>
            <Ionicons name="flash" size={18} color={Colors.warning} />
            <Text style={styles.pointsText}>
              You'll earn <Text style={styles.pointsValue}>+{params.points} points</Text> on arrival
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.demoNote}>
          Demo Mode: Tap below to simulate arrival
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.arriveButton,
            pressed && styles.arriveButtonPressed,
          ]}
          onPress={handleSimulateArrival}
        >
          <Ionicons name="flag" size={20} color={Colors.surface} />
          <Text style={styles.arriveButtonText}>Simulate Arrival</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cancelButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 24,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  mapOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 12,
  },
  mapSubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  routeLine: {
    position: 'absolute',
    top: '20%',
    left: '15%',
    right: '15%',
    height: 6,
    borderRadius: 3,
    transform: [{ rotate: '30deg' }],
  },
  infoCard: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  destinationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  transportIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  destinationInfo: {
    flex: 1,
  },
  destinationLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  destinationName: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.border,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 6,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  pointsPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.warningLight,
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  pointsText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
  pointsValue: {
    fontWeight: '800',
    color: Colors.warning,
  },
  bottomBar: {
    padding: 16,
    paddingBottom: 24,
  },
  demoNote: {
    textAlign: 'center',
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  arriveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 18,
    shadowColor: Colors.primaryDark,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  arriveButtonPressed: {
    backgroundColor: Colors.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  arriveButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.surface,
  },
});
