import * as React from "react";

// @packages
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// @pages
import LanguageSelector from "./Pages/LanguageSelector";

const UnregisteredUserStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <UnregisteredUserStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <UnregisteredUserStack.Screen
          name="LanguageSelection"
          component={LanguageSelector}
        />
      </UnregisteredUserStack.Navigator>
    </NavigationContainer>
  );
}
