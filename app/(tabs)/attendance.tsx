import Header from "@/components/Header";
import BottomSheet from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useMemo, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function AttendanceScreen() {
  const data = [
    { date: "2025-08-01", status: "Present" },
    { date: "2025-08-02", status: "Absent" },
    { date: "2025-08-03", status: "Casual Leave" },
    { date: "2025-08-04", status: "Sick Leave" },
    { date: "2025-08-05", status: "Leave Without Pay" },
  ];

  const statusColors: Record<string, string> = {
    Present: "#16a34a",
    Absent: "#dc2626",
    "Casual Leave": "#f59e0b",
    "Sick Leave": "#3b82f6",
    "Leave Without Pay": "#6b7280",
  };

  const markedDates = data.reduce((acc, item) => {
    acc[item.date] = {
      marked: true,
      dotColor: statusColors[item.status],
      customStyles: {
        container: {
          backgroundColor: `${statusColors[item.status]}20`,
          borderRadius: 8,
        },
        text: {
          color: statusColors[item.status],
          fontWeight: "bold",
        },
      },
    };
    return acc;
  }, {} as Record<string, any>);

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "40%"], []);

  const handleDayPress = (day: any) => {
    setSelectedDay(day.dateString);
    bottomSheetRef.current?.expand();
  };

  const getStatusForDate = (date: string) => {
    const record = data.find((item) => item.date === date);
    return record ? record.status : "No Record";
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* HEADER */}
      <Header
        title="Rajdeep Mitra"
        designation="Software Engineer"
        onProfilePress={() => router.push("/profile")}
      />
      <View className="px-4">
      </View>

      {/* CALENDAR */}
      <View className="px-4 mb-4">
        <Calendar
          markingType="custom"
          markedDates={markedDates}
          onDayPress={handleDayPress}
          theme={{
            todayTextColor: "#2563eb",
            arrowColor: "#2563eb",
            monthTextColor: "#111827",
            textMonthFontSize: 18,
            textDayFontWeight: "500",
            textMonthFontWeight: "bold",
          }}
        />
      </View>

      {/* LEGEND */}
      <View className="px-4 mb-4">
        <View className="flex-row flex-wrap gap-x-[6px] gap-y-[6px]">
          {Object.entries(statusColors).map(([status, color], index) => {
            // Generate a lighter shade by mixing with white
            const lighterShade = `${color}33`; // 33 hex = ~20% opacity

            return (
              <View
                key={status}
                style={{ backgroundColor: lighterShade }}
                className={`flex-row items-center p-4 rounded-lg 
            ${index < 4 ? "w-[49%]" : "w-full"}`} // ~49% ensures 2 cols with gap
              >
                <View
                  style={{ backgroundColor: color }}
                  className="w-3 h-3 rounded-full mr-2"
                />
                <Text className="text-gray-700 w-full">{status}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* LOGOUT BUTTON */}
      <View className="p-4 border-t border-gray-200">
        <TouchableOpacity
          onPress={() => router.push("/login")}
          className="bg-red-500 py-4 rounded-lg"
        >
          <Text className="text-white text-center text-2xl font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* BOTTOM SHEET */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: "#fff" }}
      >
        <View className="px-4">
          <Text className="text-lg font-bold mb-2">
            {selectedDay || "Select a Date"}
          </Text>
          <Text
            style={{
              color: statusColors[getStatusForDate(selectedDay || "")],
            }}
            className="text-base font-medium"
          >
            {getStatusForDate(selectedDay || "")}
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
}
