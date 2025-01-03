import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "List User" }} />
      <Stack.Screen name="[id]" options={{ title: "User" }} />
      <Stack.Screen name="create" options={{ title: "Create User" }} />
    </Stack>
  );
}
