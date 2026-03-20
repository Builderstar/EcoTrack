import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { UserDataProvider } from '../contexts/UserDataContext';
import { useEffect } from 'react';
import { router } from 'expo-router';

function RootLayoutNav() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)');
    } else {
      router.replace('/(auth)/login');
    }
  }, [isAuthenticated]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="route" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <UserDataProvider>
        <RootLayoutNav />
      </UserDataProvider>
    </AuthProvider>
  );
}
