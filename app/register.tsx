// app/register.tsx
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Text className="text-2xl font-bold mb-6">Register</Text>

      <TextInput
        className="border border-gray-300 p-3 rounded-lg mb-4"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="border border-gray-300 p-3 rounded-lg mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="border border-gray-300 p-3 rounded-lg mb-4"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="bg-blue-500 py-3 rounded-lg"
        onPress={() => router.replace("/(tabs)/home")}
      >
        <Text className="text-white text-center text-lg">Register</Text>
      </TouchableOpacity>
    </View>
  );
}
