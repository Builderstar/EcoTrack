import { Stack } from 'expo-router';

export default function RouteLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="plan" />
      <Stack.Screen name="active" />
      <Stack.Screen name="complete" />
    </Stack>
  );
}
