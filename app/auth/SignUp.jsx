import { useContext, useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Link } from "expo-router";
import { useMutation } from "convex/react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/FirebaseConfig";
import { api } from "../../convex/_generated/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { UserContext } from "../../context/UserContext";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createNewUser = useMutation(api.Users.CreateNewUser);

  const { user, setUser } = useContext(UserContext);

  const onSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert(
        "Missing Fields!",
        "Enter Appropriate Values for ALL Fields!"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        if (user) {
          const newUser = await createNewUser({ name: name, email: email });

          setUser(newUser);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };

  return (
    <View style={{ display: "flex", alignItems: "center", padding: 20 }}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: 150, height: 150, marginTop: 60 }}
      />
      <Text style={{ fontSize: 35, fontWeight: "bold" }}>
        Create New Account
      </Text>
      <View style={{ marginTop: 20, width: "100%" }}>
        <Input placeholder="Full Name" onChangeText={setName} />
        <Input placeholder="E-Mail" onChangeText={setEmail} />
        <Input
          placeholder="Password"
          password={true}
          onChangeText={setPassword}
        />
        <View style={{ marginTop: 15, width: "100%" }}>
          <Button title="Create Account" onPress={() => onSignUp()} />
          <Text style={{ fontSize: 16, marginTop: 16, textAlign: "center" }}>
            Already Have An Account?
          </Text>
          <Link href="/auth/SignIn">
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Sign In!
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
