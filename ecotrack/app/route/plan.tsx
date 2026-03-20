import React, { useState, useMemo } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { DEMO_LOCATIONS, calculateRouteOptions, RouteOption } from '../../constants/mockData';
import TransportOptionCard from '../../components/route/TransportOptionCard';

export default function RoutePlanScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<typeof DEMO_LOCATIONS[0] | null>(null);
  const [selectedTransport, setSelectedTransport] = useState<RouteOption | null>(null);

  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return DEMO_LOCATIONS;
    const query = searchQuery.toLowerCase();
    return DEMO_LOCATIONS.filter(loc =>
      loc.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const routeOptions = useMemo(() => {
    if (!selectedDestination) return [];
    return calculateRouteOptions(selectedDestination.distance);
  }, [selectedDestination]);

  const handleStartRoute = () => {
    if (selectedDestination && selectedTransport) {
      router.push({
        pathname: '/route/active',
        params: {
          destinationId: selectedDestination.id,
          destinationName: selectedDestination.name,
          transportId: selectedTransport.id,
          transportLabel: selectedTransport.label,
          transportIcon: selectedTransport.icon,
          time: selectedTransport.time,
          distance: selectedTransport.distance,
          co2: selectedTransport.co2,
          points: selectedTransport.points.toString(),
          ecoRating: selectedTransport.ecoRating.toString(),
          co2Grams: selectedTransport.co2Grams.toString(),
        },
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </Pressable>
        <Text style={styles.headerTitle}>Plan Route</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.searchSection}>
          <View style={styles.locationRow}>
            <View style={styles.locationDot}>
              <View style={styles.dotBlue} />
            </View>
            <View style={styles.locationInputWrap}>
              <Text style={styles.locationLabel}>Current location</Text>
              <Text style={styles.locationValue}>Your location</Text>
            </View>
          </View>

          <View style={styles.locationConnector} />

          <View style={styles.locationRow}>
            <View style={styles.locationDot}>
              <View style={styles.dotGreen} />
            </View>
            <View style={styles.searchInputWrap}>
              <Ionicons name="search" size={18} color={Colors.textSecondary} />
              <TextInput
                style={styles.searchInput}
                placeholder="Where to?"
                placeholderTextColor={Colors.textSecondary}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
              {searchQuery.length > 0 && (
                <Pressable onPress={() => setSearchQuery('')}>
                  <Ionicons name="close-circle" size={20} color={Colors.textSecondary} />
                </Pressable>
              )}
            </View>
          </View>
        </View>

        {!selectedDestination && (
          <View style={styles.suggestionsSection}>
            <Text style={styles.sectionTitle}>
              {searchQuery ? 'Search Results' : 'Suggested Destinations'}
            </Text>
            {filteredLocations.map((location) => (
              <Pressable
                key={location.id}
                style={({ pressed }) => [
                  styles.suggestionCard,
                  pressed && styles.suggestionCardPressed,
                ]}
                onPress={() => {
                  setSelectedDestination(location);
                  setSearchQuery(location.name);
                }}
              >
                <View style={styles.suggestionIcon}>
                  <Ionicons name="location" size={20} color={Colors.primary} />
                </View>
                <View style={styles.suggestionContent}>
                  <Text style={styles.suggestionName}>{location.name}</Text>
                  <Text style={styles.suggestionDistance}>{location.distance} km away</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
              </Pressable>
            ))}
          </View>
        )}

        {selectedDestination && (
          <>
            <View style={styles.selectedDestCard}>
              <View style={styles.selectedDestIcon}>
                <Ionicons name="flag" size={20} color={Colors.surface} />
              </View>
              <View style={styles.selectedDestContent}>
                <Text style={styles.selectedDestName}>{selectedDestination.name}</Text>
                <Text style={styles.selectedDestDistance}>
                  {selectedDestination.distance} km from your location
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  setSelectedDestination(null);
                  setSelectedTransport(null);
                  setSearchQuery('');
                }}
              >
                <Ionicons name="close-circle" size={24} color={Colors.textSecondary} />
              </Pressable>
            </View>

            <View style={styles.transportSection}>
              <Text style={styles.sectionTitle}>Choose Transport</Text>
              <Text style={styles.sectionSubtitle}>
                Options sorted by eco-friendliness
              </Text>

              <View style={styles.transportList}>
                {routeOptions.map((option) => (
                  <TransportOptionCard
                    key={option.id}
                    option={option}
                    selected={selectedTransport?.id === option.id}
                    onPress={setSelectedTransport}
                  />
                ))}
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {selectedDestination && selectedTransport && (
        <View style={styles.bottomBar}>
          <View style={styles.bottomSummary}>
            <Text style={styles.bottomLabel}>
              {selectedTransport.label} to {selectedDestination.name}
            </Text>
            <Text style={styles.bottomMeta}>
              {selectedTransport.time} {'\u2022'} {selectedTransport.co2} CO2 {'\u2022'} +{selectedTransport.points} pts
            </Text>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.startButton,
              pressed && styles.startButtonPressed,
            ]}
            onPress={handleStartRoute}
          >
            <Text style={styles.startButtonText}>Start Route</Text>
            <Ionicons name="navigate" size={18} color={Colors.surface} />
          </Pressable>
        </View>
      )}
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
  backButton: {
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
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  searchSection: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  locationDot: {
    width: 24,
    alignItems: 'center',
  },
  dotBlue: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
  },
  dotGreen: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  locationConnector: {
    width: 2,
    height: 20,
    backgroundColor: Colors.border,
    marginLeft: 11,
    marginVertical: 4,
  },
  locationInputWrap: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  locationValue: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  searchInputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.muted,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: Colors.textPrimary,
  },
  suggestionsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: -8,
    marginBottom: 16,
  },
  suggestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  suggestionCardPressed: {
    backgroundColor: Colors.muted,
  },
  suggestionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: `${Colors.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  suggestionDistance: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  selectedDestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryDark,
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
  },
  selectedDestIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  selectedDestContent: {
    flex: 1,
  },
  selectedDestName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.surface,
    marginBottom: 2,
  },
  selectedDestDistance: {
    fontSize: 13,
    color: '#D1FAE5',
  },
  transportSection: {
    marginBottom: 20,
  },
  transportList: {
    gap: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  bottomSummary: {
    flex: 1,
  },
  bottomLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  bottomMeta: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  startButtonPressed: {
    backgroundColor: Colors.primaryDark,
  },
  startButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.surface,
  },
});
