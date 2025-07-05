import { useContext, useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useConvex } from "convex/react";

import { auth } from "../services/FirebaseConfig";
import { UserContext } from "@/context/UserContext";
import { api } from "@/convex/_generated/api";

import Colors from "../shared/Colors";
import Button from "../components/Button";

export default function Index() {
  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  const convex = useConvex();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userInfo) => {
      console.log(userInfo?.email);

      const userData = await convex.query(api.Users.GetUser, {
        email: userInfo?.email,
      });

      console.log(userData);

      setUser(userData);

      router.replace("/(tabs)/Home");
    });

    return () => unsubscribe();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{
          width: "100%",
          height: Dimensions.get("screen").height,
        }}
      />
      <View
        style={{
          position: "absolute",
          height: Dimensions.get("screen").height,
          backgroundColor: "#0707075e",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image
          source={require("./../assets/images/logo.png")}
          style={{ width: 150, height: 150, marginTop: 100 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold", color: Colors.WHITE }}>
          AI Diet Planner
        </Text>
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 15,
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Craft Delicious, Healthy Meal Plans Tailored Just for You! Achieve
          your Goals with Ease!
        </Text>
      </View>
      <View
        style={{ position: "absolute", width: "100%", bottom: 25, padding: 20 }}
      >
        <Button
          title={"Get Started"}
          onPress={() => router.push("/auth/SignIn")}
        />
      </View>
    </View>
  );
}
