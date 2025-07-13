import { View, Text, Platform, Image, StyleSheet } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Fire03Icon, PlusSignSquareIcon } from "@hugeicons/core-free-icons";
import Colors from "../shared/Colors";

export default function RecipeIntro({ recipeDetails }) {
  const recipeData = recipeDetails?.jsonData;

  return (
    <View style={{ padding: 20, paddingTop: Platform.OS === "ios" ? 40 : 30 }}>
      <Image
        source={{ uri: recipeDetails?.imageUrl }}
        style={{ width: "100%", height: 200, borderRadius: 15 }}
      />
      <View
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {recipeDetails?.recipeName}
        </Text>
        <HugeiconsIcon
          icon={PlusSignSquareIcon}
          size={40}
          color={Colors.PRIMARY}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          marginTop: 6,
          color: Colors.GRAY,
          lineHeight: 25,
        }}
      >
        {recipeData?.description}
      </Text>
      <View
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10
        }}
      >
        <View style={styles.propertiesContainer}>
          <HugeiconsIcon icon={Fire03Icon} color={Colors.PRIMARY} size={27} />
          <Text style={styles.subText}>Calories</Text>
          <Text style={styles.count}>{recipeData?.calories}</Text>
        </View>
        <View style={styles.propertiesContainer}>
          <HugeiconsIcon icon={Fire03Icon} color={Colors.PRIMARY} size={27} />
          <Text style={styles.subText}>Time</Text>
          <Text style={styles.count}>{recipeData?.cookTime} min</Text>
        </View>
        <View style={styles.propertiesContainer}>
          <HugeiconsIcon icon={Fire03Icon} color={Colors.PRIMARY} size={27} />
          <Text style={styles.subText}>Serves </Text>
          <Text style={styles.count}>{recipeData?.serveTo}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBg: {
    padding: 6,
  },
  propertiesContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: '#fbf5ff',
    padding: 6,
    borderRadius: 10,
    flex: 1
  },
  subText: {
    fontSize: 18,
  },
  count: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.PRIMARY,
  },
});
