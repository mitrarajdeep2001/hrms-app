// app/(main)/leaves.tsx
import DatePicker from "@/components/DatePicker";
import Header from "@/components/Header";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LeavesScreen() {
  const TOTAL_LEAVES = 12;
  const [leaves, setLeaves] = useState<
    { type: string; date: string; status: "Approved" | "Pending" }[]
  >([
    { type: "Sick Leave", date: "2025-08-05", status: "Approved" },
    { type: "Casual Leave", date: "2025-08-07", status: "Pending" },
  ]);

  const [leaveType, setLeaveType] = useState("Sick Leave");
  const [leaveDate, setLeaveDate] = useState<Date | null>(null);

  const approved = leaves.filter((l) => l.status === "Approved").length;
  const pending = leaves.filter((l) => l.status === "Pending").length;
  const remaining = TOTAL_LEAVES - approved;

  const handleApplyLeave = () => {
    if (!leaveDate) return;
    const formattedDate = leaveDate.toISOString().split("T")[0];
    setLeaves([
      ...leaves,
      { type: leaveType, date: formattedDate, status: "Pending" },
    ]);
    setLeaveDate(null);
    setLeaveType("Sick Leave");
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* HEADER (fixed at top) */}
      <Header
        title="Rajdeep Mitra"
        designation="Software Engineer"
        onProfilePress={() => router.push("/profile")}
      />

      <View className="px-4">
        <Text className="text-2xl font-bold mb-4">My Leaves</Text>

        {/* Leave Buckets */}
        <View className="flex-row justify-between mb-6">
          <View className="flex-1 bg-yellow-100 p-3 rounded-lg mr-2">
            <Text className="text-yellow-700 font-bold">Pending</Text>
            <Text className="text-xl">{pending}</Text>
          </View>
          <View className="flex-1 bg-green-100 p-3 rounded-lg mr-2">
            <Text className="text-green-700 font-bold">Approved</Text>
            <Text className="text-xl">{approved}</Text>
          </View>
          <View className="flex-1 bg-blue-100 p-3 rounded-lg">
            <Text className="text-blue-700 font-bold">Remaining</Text>
            <Text className="text-xl">
              {remaining}/{TOTAL_LEAVES}
            </Text>
          </View>
        </View>

        {/* Apply Leave Form */}
        <View className="bg-white p-4 rounded-lg shadow mb-6">
          <Text className="text-lg font-semibold mb-2">Apply for Leave</Text>

          <Text className="mb-1">Leave Type</Text>
          <View className="border border-gray-300 rounded-lg mb-3">
            <Picker
              selectedValue={leaveType}
              onValueChange={(val) => setLeaveType(val)}
            >
              <Picker.Item label="Sick Leave" value="Sick Leave" />
              <Picker.Item label="Casual Leave" value="Casual Leave" />
              <Picker.Item label="Earned Leave" value="Earned Leave" />
            </Picker>
          </View>

          <Text className="mb-1">Leave Date</Text>
          <DatePicker date={leaveDate as Date} setDate={setLeaveDate} />

          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-lg mt-4"
            onPress={handleApplyLeave}
          >
            <Text className="text-white text-center font-semibold">
              Submit Request
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-lg font-bold mb-2">Leave History</Text>
      </View>
      {/* FlatList handles scrolling for everything */}
      <FlatList
        data={leaves}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={
        // }
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow mb-3 flex-row justify-between items-center">
            <View>
              <Text className="text-base font-semibold text-gray-900">
                {item.type}
              </Text>
              <Text className="text-gray-500">{item.date}</Text>
            </View>
            <View
              className={`px-3 py-1 rounded-full ${item.status === "Approved" ? "bg-green-100" : "bg-yellow-100"
                }`}
            >
              <Text
                className={`font-medium ${item.status === "Approved"
                    ? "text-green-700"
                    : "text-yellow-700"
                  }`}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
