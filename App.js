import * as React from "react";

// @packages
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// @pages
import LanguageSelector from "./Pages/LanguageSelector";
import PhoneNumberRegistration from "./Pages/PhoneNumberRegistration";

// @c0nt3xt
import DataLayer from "./Context/DataLayer";

const UnregisteredUserStack = createNativeStackNavigator();

export default function App() {
  return (
    <DataLayer>
      <NavigationContainer>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
        {/* @dev screen */}
        <UnregisteredUserStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* @dev screens */}
          {/* <UnregisteredUserStack.Screen
            name="LanguageSelection"
            component={LanguageSelector}
          /> */}
          <UnregisteredUserStack.Screen
            name="PhoneRegistration"
            component={PhoneNumberRegistration}
          />
        </UnregisteredUserStack.Navigator>
      </NavigationContainer>
    </DataLayer>
  );
}
