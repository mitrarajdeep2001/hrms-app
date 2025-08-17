import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const metrics = [
    { title: "Present Days", value: 20, icon: "checkmark-done", bg: "bg-green-100", textColor: "#15803d" },
    { title: "Leaves Taken", value: 3, icon: "airplane", bg: "bg-yellow-100", textColor: "#a16207" },
    { title: "Total Hours", value: "160h", icon: "time", bg: "bg-blue-100", textColor: "#1d4ed8" },
    { title: "Overtime Hours", value: "12h", icon: "add-circle", bg: "bg-purple-100", textColor: "#6b21a8" },
  ];

  type Attendance = {
    date: string;
    status: "Present" | "Absent";
  };

  const attendance: Attendance[] = [
    { date: "2025-08-10", status: "Present" },
    { date: "2025-08-09", status: "Absent" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
    { date: "2025-08-08", status: "Present" },
  ]

  return (
    <View className="flex-1 bg-gray-50">
      {/* HEADER */}
      <Header
        title="Rajdeep Mitra"
        designation="Software Engineer"
        onProfilePress={() => router.push("/profile")}
      />

      {/* METRICS */}
      <View className="flex-row flex-wrap justify-between px-4">
        {metrics.map((m, i) => (
          <TouchableOpacity
            key={i}
            activeOpacity={0.8}
            className={`w-[48%] ${m.bg} p-4 rounded-xl mb-4 shadow-sm flex-row items-center`}
            style={{ minHeight: 90 }} // equal height
            onPress={() => console.log(`${m.title} clicked`)}
          >
            <Ionicons name={m.icon as any} size={28} color={m.textColor} />
            <View className="ml-3">
              <Text className="text-sm text-gray-600">{m.title}</Text>
              <Text style={{ color: m.textColor }} className="text-2xl font-bold">
                {m.value}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* RECENT ATTENDANCE */}
      <Text className="text-lg font-semibold mt-6 mb-3 px-4">
        Recent Attendance
      </Text>
      {
        attendance.length === 0 ? (
          <View className="items-center justify-center py-6 bg-gray-100 rounded-lg mx-4">
            <Text className="text-gray-500">No attendance records found</Text>
          </View>
        ) :
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 16 }}
            data={attendance}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              const dateObj = new Date(item.date);
              const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });
              const isPresent = item.status === "Present";
              return (
                <View className="flex-row justify-between items-center bg-white p-4 rounded-lg mb-3 shadow-sm">
                  <View>
                    <Text className="text-gray-700 font-medium">{item.date}</Text>
                    <Text className="text-gray-400 text-sm">{dayName}</Text>
                  </View>
                  <View
                    className={`px-3 py-1 rounded-full ${isPresent ? "bg-green-100" : "bg-red-100"
                      }`}
                  >
                    <Text
                      className={`font-semibold ${isPresent ? "text-green-700" : "text-red-700"
                        }`}
                    >
                      {item.status}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
      }
    </View>
  );
}
