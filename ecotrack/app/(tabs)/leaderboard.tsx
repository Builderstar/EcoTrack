import React, { useState } from 'react';
import {
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
import { MOCK_LEADERBOARD, getUserLeague } from '../../constants/mockData';
import { useUserData } from '../../contexts/UserDataContext';

type TimeRange = 'weekly' | 'monthly' | 'alltime';

export default function LeaderboardScreen() {
  const [timeRange, setTimeRange] = useState<TimeRange>('weekly');
  const { user } = useUserData();
  const currentLeague = getUserLeague(user.totalPoints);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return { icon: 'trophy', color: '#FFD700' };
    if (rank === 2) return { icon: 'medal', color: '#C0C0C0' };
    if (rank === 3) return { icon: 'medal', color: '#CD7F32' };
    return null;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Leaderboard</Text>

        <View style={styles.leagueCard}>
          <View style={[styles.leagueBadge, { backgroundColor: currentLeague.color }]}>
            <Ionicons name={currentLeague.icon as any} size={24} color={Colors.surface} />
          </View>
          <View style={styles.leagueInfo}>
            <Text style={styles.leagueName}>{currentLeague.name}</Text>
            <Text style={styles.leaguePoints}>{user.totalPoints} points</Text>
          </View>
          <View style={styles.leagueRank}>
            <Text style={styles.rankNumber}>#4</Text>
            <Text style={styles.rankLabel}>Your Rank</Text>
          </View>
        </View>

        <View style={styles.timeRangeTabs}>
          {(['weekly', 'monthly', 'alltime'] as TimeRange[]).map((range) => (
            <Pressable
              key={range}
              style={[
                styles.timeRangeTab,
                timeRange === range && styles.timeRangeTabActive,
              ]}
              onPress={() => setTimeRange(range)}
            >
              <Text
                style={[
                  styles.timeRangeText,
                  timeRange === range && styles.timeRangeTextActive,
                ]}
              >
                {range === 'weekly' ? 'Weekly' : range === 'monthly' ? 'Monthly' : 'All Time'}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.leaderboardList}>
          {MOCK_LEADERBOARD.map((entry) => {
            const rankIcon = getRankIcon(entry.rank);
            return (
              <View
                key={entry.id}
                style={[
                  styles.leaderboardItem,
                  entry.isCurrentUser && styles.leaderboardItemCurrent,
                ]}
              >
                <View style={styles.rankContainer}>
                  {rankIcon ? (
                    <Ionicons name={rankIcon.icon as any} size={22} color={rankIcon.color} />
                  ) : (
                    <Text style={styles.rankText}>{entry.rank}</Text>
                  )}
                </View>

                <View style={styles.userAvatar}>
                  <Text style={styles.avatarText}>{entry.avatarInitials}</Text>
                </View>

                <View style={styles.userInfo}>
                  <Text
                    style={[
                      styles.userName,
                      entry.isCurrentUser && styles.userNameCurrent,
                    ]}
                  >
                    {entry.displayName}
                    {entry.isCurrentUser && ' (You)'}
                  </Text>
                  <Text style={styles.userStats}>
                    {entry.co2SavedKg} kg CO2 saved
                  </Text>
                </View>

                <View style={styles.pointsContainer}>
                  <Text
                    style={[
                      styles.pointsText,
                      entry.isCurrentUser && styles.pointsTextCurrent,
                    ]}
                  >
                    {entry.points}
                  </Text>
                  <Text style={styles.pointsLabel}>pts</Text>
                </View>
              </View>
            );
          })}
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
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  leagueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryDark,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  leagueBadge: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  leagueInfo: {
    flex: 1,
  },
  leagueName: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.surface,
    marginBottom: 2,
  },
  leaguePoints: {
    fontSize: 14,
    color: '#D1FAE5',
  },
  leagueRank: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  rankNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.surface,
  },
  rankLabel: {
    fontSize: 11,
    color: '#D1FAE5',
  },
  timeRangeTabs: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 4,
    marginBottom: 20,
  },
  timeRangeTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  timeRangeTabActive: {
    backgroundColor: Colors.primary,
  },
  timeRangeText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  timeRangeTextActive: {
    color: Colors.surface,
  },
  leaderboardList: {
    gap: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  leaderboardItemCurrent: {
    backgroundColor: `${Colors.primary}10`,
    borderColor: Colors.primary,
  },
  rankContainer: {
    width: 32,
    alignItems: 'center',
    marginRight: 12,
  },
  rankText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textSecondary,
  },
  userAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  userNameCurrent: {
    color: Colors.primaryDark,
  },
  userStats: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  pointsContainer: {
    alignItems: 'flex-end',
  },
  pointsText: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  pointsTextCurrent: {
    color: Colors.primaryDark,
  },
  pointsLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
});
