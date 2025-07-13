import { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import {
  Dumbbell01Icon,
  FemaleSymbolIcon,
  MaleSymbolIcon,
  PlusSignSquareIcon,
  WeightScaleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useMutation } from "convex/react";
import { useRouter } from "expo-router";

import { api } from "../../convex/_generated/api";
import { UserContext } from "../../context/UserContext";
import Colors from "../../shared/Colors";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { calculateCaloriesAI } from "../../services/AiModel";
import Prompt from "../../shared/Prompt";

export default function Preference() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [goal, setGoal] = useState();

  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  const UpdateUserPreference = useMutation(api.Users.UpdateUserPreference);

  const onContinue = async () => {
    if (!height || !weight || !gender) {
      Alert.alert("Fields Missing!", "Enter All Your Information to Continue!");
      return;
    }

    const data = {
      uid: user?._id,
      height: height,
      weight: weight,
      gender: gender,
      goal: goal,
    };

    //Calculate Calories Using AI
    const prompt = JSON.stringify(data) + Prompt.CALORIES_PROMPT;

    const result = await calculateCaloriesAI(prompt);
    
    const response = result.choices[0].message.content;

    const JSONContent = JSON.parse(response.replace('```json', '').replace('```', ''));
    
    await UpdateUserPreference({
      ...data,
      ...JSONContent
    });

    setUser((prev) => ({
      ...prev,
      ...data,
    }));

    router.replace("/(tabs)/Home");
  };

  return (
    <View
      style={{ padding: 20, backgroundColor: Colors.WHITE, height: "100%" }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Tell Us About Yourself!
      </Text>
      <Text style={{ textAlign: "center", fontSize: 16, color: Colors.GRAY }}>
        This Will Help Us Create Your Personalized Meal Plan!
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            placeholder="e.g. 5.10"
            label="Height (ft)"
            onChangeText={setHeight}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Input
            placeholder="e.g. 70"
            label="Weight (kg)"
            onChangeText={setWeight}
          />
        </View>
      </View>
      <View style={{ marginTop: 18 }}>
        <Text style={{ fontWeight: "medium", fontSize: 20 }}>Gender</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setGender("male")}
            style={{
              borderColor: gender === "male" ? Colors.PRIMARY : Colors.GRAY,
              borderWidth: 1,
              padding: 15,
              flex: 1,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={MaleSymbolIcon}
              size={40}
              color={Colors.BLUE}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender("female")}
            style={{
              borderColor: gender === "female" ? Colors.PRIMARY : Colors.GRAY,
              borderWidth: 1,
              padding: 15,
              flex: 1,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={FemaleSymbolIcon}
              size={40}
              color={Colors.PINK}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: "medium", fontSize: 18 }}>
          What Is Your Goal?
        </Text>
        <TouchableOpacity
          onPress={() => setGoal("Weight Loss")}
          style={[
            styles.goalContainer,
            {
              borderColor:
                goal === "Weight Loss" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={WeightScaleIcon} />
          <View>
            <Text style={styles.goalText}>Weight Loss</Text>
            <Text style={styles.goalSubText}>Reduce Body Fat & Get Leaner</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGoal("Build Muscle")}
          style={[
            styles.goalContainer,
            {
              borderColor:
                goal === "Build Muscle" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={Dumbbell01Icon} />
          <View>
            <Text style={styles.goalText}>Muscle Gain</Text>
            <Text style={styles.goalSubText}>Build Muscle & Get Stronger</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGoal("Weight Gain")}
          style={[
            styles.goalContainer,
            {
              borderColor:
                goal === "Weight Gain" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={PlusSignSquareIcon} />
          <View>
            <Text style={styles.goalText}>Weight Gain</Text>
            <Text style={styles.goalSubText}>Increase Healthy Body Mass</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 25 }}>
        <Button onPress={onContinue} title="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    marginTop: 10,
  },
  goalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  goalSubText: {
    color: Colors.GRAY,
  },
});
