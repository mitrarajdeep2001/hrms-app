// app/(main)/profile.tsx
import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const user = {
    name: "Rajdeep Mitra",
    email: "rajdeep@example.com",
    position: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=12",
    stats: {
      posts: 34,
      followers: 1200,
      following: 180,
    },
  };

  const activities = [
    { id: "1", title: "Liked a post", time: "2h ago" },
    { id: "2", title: "Commented on a project", time: "5h ago" },
    { id: "3", title: "Updated profile picture", time: "1d ago" },
    { id: "4", title: "Followed John Doe", time: "2d ago" },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white items-center p-6 shadow-md">
        <Image
          source={{ uri: user.avatar }}
          className="w-28 h-28 rounded-full mb-4"
        />
        <Text className="text-2xl font-bold">{user.name}</Text>
        <Text className="text-gray-600">{user.email}</Text>
        <Text className="text-gray-500">{user.position}</Text>
      </View>

      {/* Stats */}
      <View className="flex-row justify-around bg-white py-4 shadow-sm mt-2">
        <View className="items-center">
          <Text className="text-lg font-bold">{user.stats.posts}</Text>
          <Text className="text-gray-500">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold">{user.stats.followers}</Text>
          <Text className="text-gray-500">Followers</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold">{user.stats.following}</Text>
          <Text className="text-gray-500">Following</Text>
        </View>
      </View>

      {/* Actions */}
      <View className="flex-row justify-around mt-4 px-4">
        <TouchableOpacity className="flex-row items-center bg-blue-500 px-4 py-2 rounded-lg">
          <Ionicons name="create-outline" size={20} color="white" />
          <Text className="text-white ml-2">Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center bg-gray-700 px-4 py-2 rounded-lg">
          <Ionicons name="settings-outline" size={20} color="white" />
          <Text className="text-white ml-2">Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center bg-red-500 px-4 py-2 rounded-lg">
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text className="text-white ml-2">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activities */}
      <View className="mt-6 px-4 flex-1">
        <Text className="text-lg font-semibold mb-2">Recent Activity</Text>
        <FlatList
          data={activities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-lg mb-3 shadow-sm">
              <Text className="text-gray-800">{item.title}</Text>
              <Text className="text-gray-500 text-sm">{item.time}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
