import { View, Text, TextInput } from "react-native";

export default function Input({
  placeholder,
  password = false,
  onChangeText,
  label = "",
}) {
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontWeight: "medium", fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={password}
        onChangeText={(val) => onChangeText(val)}
        style={{
          padding: 15,
          borderWidth: 1,
          borderRadius: 10,
          fontSize: 18,
          paddingVertical: 20,
          width: "100%",
          marginTop: 8,
        }}
      />
    </View>
  );
}
