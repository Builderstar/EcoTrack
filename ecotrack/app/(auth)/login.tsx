import React, { useState } from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginScreen() {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('user');
  const [error, setError] = useState('');

  const canSubmit = username.trim().length > 0 && password.trim().length > 0 && !isLoading;

  const handleLogin = async () => {
    setError('');
    const success = await login(username, password);

    if (!success) {
      setError('Incorrect credentials. Try username: user and password: user.');
      Alert.alert('Login failed', 'Use username "user" and password "user".');
    }
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
            <Text style={styles.buttonText}>{isLoading ? 'Signing in...' : 'Log In'}</Text>
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
    borderColor: Colors.borderLight,
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
    backgroundColor: Colors.muted,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputWrapperError: {
    borderColor: Colors.danger,
    backgroundColor: Colors.dangerLight,
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
    backgroundColor: Colors.primaryLight,
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
