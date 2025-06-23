import { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Link } from "expo-router";

import Input from "../../components/Input";
import Button from "../../components/Button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert(
        "Missing Fields!",
        "Enter Appropriate Values for ALL Fields!"
      );
      return;
    }
  };

  return (
    <View style={{ display: "flex", alignItems: "center", padding: 20 }}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: 150, height: 150, marginTop: 60 }}
      />
      <Text style={{ fontSize: 35, fontWeight: "bold" }}>Welcome Back!</Text>
      <View style={{ marginTop: 20, width: "100%" }}>
        <Input placeholder="E-Mail" onChangeText={setEmail} />
        <Input placeholder="Password" password={true} onChangeText={setPassword} />
        <View style={{ marginTop: 15, width: "100%" }}>
          <Button title="Sign In" onPress={() => onSignIn()} />
          <Text style={{ fontSize: 16, marginTop: 16, textAlign: "center" }}>
            Don't Have An Account?
          </Text>
          <Link href="/auth/SignUp">
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Create One!
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
