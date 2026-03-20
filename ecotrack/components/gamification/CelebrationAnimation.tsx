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
import { Colors } from '../../constants/colors';

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
