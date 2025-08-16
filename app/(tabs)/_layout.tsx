// app/(main)/_layout.tsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function MainTabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2563EB", // blue-600
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          if (route.name === "home") iconName = "home-outline";
          else if (route.name === "attendance") iconName = "calendar-outline";
          else if (route.name === "leaves") iconName = "leaf-outline";
          else if (route.name === "profile") iconName = "person-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="attendance"
        options={{ title: "Attendance" }}
      />
      <Tabs.Screen
        name="leaves"
        options={{ title: "Leaves" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile" }}
      />
    </Tabs>
  );
}
