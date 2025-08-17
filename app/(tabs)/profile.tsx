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

  type Activity = {
    id: string;
    title: string;
    time: string;
  };

  const activities: Activity[] = [
    { id: "1", title: "Liked a post", time: "2h ago" },
    { id: "2", title: "Commented on a project", time: "5h ago" },
    { id: "3", title: "Updated profile picture", time: "1d ago" },
    { id: "4", title: "Followed John Doe", time: "2d ago" },
    { id: "5", title: "Followed John Doe", time: "2d ago" },
    { id: "6", title: "Followed John Doe", time: "2d ago" },
    { id: "7", title: "Followed John Doe", time: "2d ago" },
    { id: "8", title: "Followed John Doe", time: "2d ago" },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white p-6 rounded-b-3xl shadow-md items-center">
        <Image
          source={{ uri: user.avatar }}
          className="w-28 h-28 rounded-full mb-4 border-4 border-blue-500"
        />
        <Text className="text-2xl font-bold w-full text-center">{user.name}</Text>
        <Text className="text-gray-600 w-full text-center">{user.email}</Text>
        <Text className="text-gray-500 w-full text-center">{user.position}</Text>
      </View>

      {/* Stats Section */}
      <View className="flex-row justify-around bg-white py-4 mx-4 mt-4 rounded-xl shadow-sm">
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

      {/* Action Buttons */}
      <View className="flex-row justify-around mt-6 px-6">
        <TouchableOpacity className="flex-row items-center bg-blue-500 px-5 py-3 rounded-xl shadow">
          <Ionicons name="create-outline" size={20} color="white" />
          <Text className="text-white ml-2 font-medium">Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center bg-gray-700 px-5 py-3 rounded-xl shadow">
          <Ionicons name="settings-outline" size={20} color="white" />
          <Text className="text-white ml-2 font-medium">Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center bg-red-500 px-5 py-3 rounded-xl shadow">
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text className="text-white ml-2 font-medium">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <View className="mt-8 px-6 flex-1">
        <Text className="text-lg font-semibold mb-3">Recent Activity</Text>
        {activities.length === 0 ? (
          <View className="items-center justify-center py-6 bg-white rounded-lg">
            <Text className="text-gray-500 w-full text-center">No recent activity</Text>
          </View>
        ) :
          <FlatList
            data={activities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="bg-white p-4 rounded-xl mb-3 shadow-sm flex-row items-center">
                <Ionicons
                  name="time-outline"
                  size={20}
                  color="#4B5563"
                  style={{ marginRight: 10 }}
                />
                <View>
                  <Text className="text-gray-800">{item.title}</Text>
                  <Text className="text-gray-500 text-sm">{item.time}</Text>
                </View>
              </View>
            )}
          />}
      </View>
    </View>
  );
}
