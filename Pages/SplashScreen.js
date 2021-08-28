import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

function SplashScreen({navigation}) {
  // @dev on timeout change the screen to language selector
  React.useEffect(() => {
    setTimeout(() => navigation.navigate('LanguageSelection'), 3000)
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/adaptive-icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: Dimensions.get("window").width * 0.6,
    resizeMode: "contain",
  },
});
export default SplashScreen;
