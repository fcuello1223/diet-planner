import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Home01Icon, ProfileIcon, Progress01Icon, SpoonAndForkIcon } from "@hugeicons/core-free-icons";

import Colors from '../../shared/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: Colors.PRIMARY}}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon
              icon={Home01Icon}
              size={size}
              color={color}
              strokeWidth={1.5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Meals"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon
              icon={SpoonAndForkIcon}
              size={size}
              color={color}
              strokeWidth={1.5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Progress"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon
              icon={Progress01Icon}
              size={size}
              color={color}
              strokeWidth={1.5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon
              icon={ProfileIcon}
              size={size}
              color={color}
              strokeWidth={1.5}
            />
          ),
        }}
      />
    </Tabs>
  );
}
