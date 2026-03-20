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
import { Colors } from '../../constants/colors';

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
