import { Ionicons } from "@expo/vector-icons"; // Expo includes this
import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

type DatePickerProps = {
  date: Date | null; // allow null when no date is selected
  setDate: (date: Date) => void; // required function
};

export default function DatePicker({ date, setDate }: DatePickerProps) {
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false); // close picker
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View className="py-4">
      {/* Styled Date Picker Button */}
      <TouchableOpacity
        onPress={() => setShow(true)}
        className="flex-row items-center border border-gray-400 rounded-lg px-3 py-2"
      >
        <Ionicons name="calendar-outline" size={20} color="black" />
        <Text className="ml-2 text-base w-full">
          {date ? date.toLocaleDateString() : "Select a date"}
        </Text>
      </TouchableOpacity>

      {/* Native Date Picker */}
      {show && (
        <DateTimePicker
          value={date ?? new Date()} // fallback if date is null
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
        />
      )}
    </View>
  );
}
