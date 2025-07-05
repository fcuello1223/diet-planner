import { useContext, useEffect } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { UserContext } from "../../context/UserContext";
import HomeHeader from "../../components/HomeHeader";
import TodayProgress from "../../components/TodayProgress";

import Colors from "../../shared/Colors";
import GenerateRecipeCard from "../../components/GenerateRecipeCard";
import TodayMealPlan from "../../components/TodayMealPlan";

export default function Home() {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const insets = useSafeAreaInsets(); // 👈 get top padding

  useEffect(() => {
    if (!user?.weight) {
      router.replace("/preference");
    }
  }, [user]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.LIGHTGRAY }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 10,
          paddingHorizontal: 20,
        }}
      >
        <HomeHeader />
        <TodayProgress />
        <GenerateRecipeCard />
        <TodayMealPlan />
      </ScrollView>
    </SafeAreaView>
  );
}
