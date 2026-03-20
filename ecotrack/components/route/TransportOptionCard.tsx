import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, getEcoColor } from '../../constants/colors';
import { RouteOption } from '../../constants/mockData';

interface TransportOptionCardProps {
  option: RouteOption;
  selected?: boolean;
  onPress?: (option: RouteOption) => void;
}

const modeConfig: Record<string, { badgeLabel: string }> = {
  walking: { badgeLabel: 'Zero emission' },
  bike: { badgeLabel: 'Zero emission' },
  ebike: { badgeLabel: 'Ultra low' },
  metro: { badgeLabel: 'Low impact' },
  train: { badgeLabel: 'Low impact' },
  bus: { badgeLabel: 'Shared transit' },
  car_small: { badgeLabel: 'Moderate' },
  car_average: { badgeLabel: 'Higher impact' },
  car_suv: { badgeLabel: 'High emissions' },
  rideshare: { badgeLabel: 'Highest impact' },
};

export default function TransportOptionCard({
  option,
  selected = false,
  onPress,
}: TransportOptionCardProps) {
  const accentColor = getEcoColor(option.ecoRating);
  const config = modeConfig[option.type] || { badgeLabel: 'Transport' };

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
            <Ionicons name={option.icon as any} size={22} color={accentColor} />
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
    backgroundColor: Colors.muted,
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
