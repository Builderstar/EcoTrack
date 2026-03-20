import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import {
  Achievement,
  ACHIEVEMENTS,
  getUnlockedAchievements,
  getTotalAchievementPoints,
  DIFFICULTY_COLORS,
  CATEGORY_LABELS,
} from '../../constants/achievements';

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getStatusInfo(achievement: Achievement): { label: string; color: string; description: string } {
  if (achievement.unlocked) {
    return {
      label: 'Unlocked',
      color: Colors.primary,
      description: achievement.unlockedAt
        ? `Completed on ${formatDate(achievement.unlockedAt)}`
        : 'Completed',
    };
  }
  if (achievement.progress !== undefined && achievement.progress > 0) {
    return {
      label: 'In Progress',
      color: Colors.warning,
      description: `${achievement.progress}% complete`,
    };
  }
  return {
    label: 'Locked',
    color: Colors.textSecondary,
    description: 'Not started yet',
  };
}

export default function AchievementsScreen() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const unlockedCount = getUnlockedAchievements().length;
  const totalPoints = getTotalAchievementPoints();

  const closeModal = () => setSelectedAchievement(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Achievements</Text>
        <Text style={styles.subtitle}>
          {unlockedCount} of {ACHIEVEMENTS.length} unlocked
        </Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Ionicons name="ribbon" size={24} color={Colors.primary} />
            <Text style={styles.summaryValue}>{unlockedCount}</Text>
            <Text style={styles.summaryLabel}>Unlocked</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Ionicons name="flash" size={24} color={Colors.warning} />
            <Text style={styles.summaryValue}>{totalPoints}</Text>
            <Text style={styles.summaryLabel}>Points Earned</Text>
          </View>
        </View>

        <View style={styles.achievementsGrid}>
          {ACHIEVEMENTS.map((achievement) => (
            <Pressable
              key={achievement.id}
              style={({ pressed }) => [
                styles.achievementCard,
                !achievement.unlocked && styles.achievementCardLocked,
                pressed && styles.achievementCardPressed,
              ]}
              onPress={() => setSelectedAchievement(achievement)}
              accessibilityRole="button"
              accessibilityLabel={`View ${achievement.name} achievement details`}
            >
              <View
                style={[
                  styles.achievementIcon,
                  {
                    backgroundColor: achievement.unlocked
                      ? `${achievement.iconColor}20`
                      : Colors.muted,
                  },
                ]}
              >
                <Ionicons
                  name={achievement.icon as any}
                  size={28}
                  color={achievement.unlocked ? achievement.iconColor : Colors.textSecondary}
                />
              </View>

              <Text
                style={[
                  styles.achievementName,
                  !achievement.unlocked && styles.achievementNameLocked,
                ]}
                numberOfLines={2}
              >
                {achievement.name}
              </Text>

              <View style={styles.achievementMeta}>
                <View
                  style={[
                    styles.difficultyBadge,
                    {
                      backgroundColor: achievement.unlocked
                        ? `${DIFFICULTY_COLORS[achievement.difficulty]}20`
                        : Colors.muted,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.difficultyText,
                      {
                        color: achievement.unlocked
                          ? DIFFICULTY_COLORS[achievement.difficulty]
                          : Colors.textSecondary,
                      },
                    ]}
                  >
                    {achievement.difficulty}
                  </Text>
                </View>
              </View>

              {!achievement.unlocked && achievement.progress !== undefined && achievement.progress > 0 && (
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${achievement.progress}%` },
                    ]}
                  />
                </View>
              )}

              {achievement.unlocked && (
                <View style={styles.unlockedBadge}>
                  <Ionicons name="checkmark-circle" size={16} color={Colors.primary} />
                </View>
              )}
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Achievement Detail Modal */}
      <Modal
        visible={selectedAchievement !== null}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
            {selectedAchievement && (() => {
              const status = getStatusInfo(selectedAchievement);
              return (
                <>
                  <View style={styles.modalHeader}>
                    <View
                      style={[
                        styles.modalIcon,
                        {
                          backgroundColor: selectedAchievement.unlocked
                            ? `${selectedAchievement.iconColor}20`
                            : Colors.muted,
                        },
                      ]}
                    >
                      <Ionicons
                        name={selectedAchievement.icon as any}
                        size={40}
                        color={
                          selectedAchievement.unlocked
                            ? selectedAchievement.iconColor
                            : Colors.textSecondary
                        }
                      />
                    </View>
                    <Pressable style={styles.modalClose} onPress={closeModal}>
                      <Ionicons name="close" size={24} color={Colors.textSecondary} />
                    </Pressable>
                  </View>

                  <Text style={styles.modalTitle}>{selectedAchievement.name}</Text>
                  <Text style={styles.modalDescription}>{selectedAchievement.description}</Text>

                  <View style={styles.modalDivider} />

                  <View style={styles.modalInfoGrid}>
                    <View style={styles.modalInfoItem}>
                      <Text style={styles.modalInfoLabel}>Category</Text>
                      <Text style={styles.modalInfoValue}>
                        {CATEGORY_LABELS[selectedAchievement.category]}
                      </Text>
                    </View>

                    <View style={styles.modalInfoItem}>
                      <Text style={styles.modalInfoLabel}>Difficulty</Text>
                      <View
                        style={[
                          styles.modalDifficultyBadge,
                          { backgroundColor: `${DIFFICULTY_COLORS[selectedAchievement.difficulty]}20` },
                        ]}
                      >
                        <Text
                          style={[
                            styles.modalDifficultyText,
                            { color: DIFFICULTY_COLORS[selectedAchievement.difficulty] },
                          ]}
                        >
                          {selectedAchievement.difficulty}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.modalInfoItem}>
                      <Text style={styles.modalInfoLabel}>Points</Text>
                      <View style={styles.modalPointsRow}>
                        <Ionicons name="flash" size={16} color={Colors.warning} />
                        <Text style={styles.modalPointsValue}>{selectedAchievement.points}</Text>
                      </View>
                    </View>

                    <View style={styles.modalInfoItem}>
                      <Text style={styles.modalInfoLabel}>Status</Text>
                      <Text style={[styles.modalStatusValue, { color: status.color }]}>
                        {status.label}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.modalDivider} />

                  <View style={styles.modalStatusSection}>
                    <Text style={styles.modalStatusDescription}>{status.description}</Text>

                    {!selectedAchievement.unlocked &&
                      selectedAchievement.progress !== undefined &&
                      selectedAchievement.progress > 0 && (
                        <View style={styles.modalProgressContainer}>
                          <View style={styles.modalProgressBar}>
                            <View
                              style={[
                                styles.modalProgressFill,
                                { width: `${selectedAchievement.progress}%` },
                              ]}
                            />
                          </View>
                          <Text style={styles.modalProgressText}>
                            {selectedAchievement.progress}%
                          </Text>
                        </View>
                      )}
                  </View>

                  <Pressable
                    style={({ pressed }) => [
                      styles.modalButton,
                      pressed && styles.modalButtonPressed,
                    ]}
                    onPress={closeModal}
                  >
                    <Text style={styles.modalButtonText}>Got it</Text>
                  </Pressable>
                </>
              );
            })()}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  summaryCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryDivider: {
    width: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 16,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 8,
  },
  summaryLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  achievementCard: {
    width: '47%',
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    position: 'relative',
  },
  achievementCardLocked: {
    opacity: 0.7,
  },
  achievementIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  achievementName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
    minHeight: 40,
  },
  achievementNameLocked: {
    color: Colors.textSecondary,
  },
  achievementMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: 2,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  unlockedBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  achievementCardPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 360,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  modalIcon: {
    width: 80,
    height: 80,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalClose: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.muted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  modalDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 16,
  },
  modalInfoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  modalInfoItem: {
    width: '45%',
  },
  modalInfoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  modalInfoValue: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  modalDifficultyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  modalDifficultyText: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  modalPointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  modalPointsValue: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  modalStatusValue: {
    fontSize: 15,
    fontWeight: '700',
  },
  modalStatusSection: {
    alignItems: 'center',
  },
  modalStatusDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 12,
  },
  modalProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  modalProgressBar: {
    flex: 1,
    height: 8,
    backgroundColor: Colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  modalProgressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  modalProgressText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
    minWidth: 40,
  },
  modalButton: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonPressed: {
    backgroundColor: Colors.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  modalButtonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '800',
  },
});
