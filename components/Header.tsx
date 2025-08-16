import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Header({
  title,
  designation,
  onProfilePress,
}: {
  title: string;
  designation: string;
  onProfilePress: () => void;
}) {

  return (
    <View
      style={{  }}
      className="flex-row justify-between items-center mb-6 bg-gray-50 px-4"
    >
      <View>
        <Text className="text-base text-blue-500">Hello,</Text>
        <Text className="text-2xl font-bold text-gray-900">{title}</Text>
        <Text className="text-green-500">{designation}</Text>
      </View>
      <TouchableOpacity onPress={onProfilePress}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          className="w-12 h-12 rounded-full border-2 border-blue-500"
        />
      </TouchableOpacity>
    </View>
  );
}
