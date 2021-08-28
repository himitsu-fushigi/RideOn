import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

function LanguageSelector() {
  const [selectedRadio, setSelectedRadio] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />

      {/* section => image container */}
      <Image
        style={styles.imageContainerImage}
        source={require("../assets/adaptive-icon.png")}
      />

      {/* section => language selector */}
      <View style={styles.languageSelector}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#202020",
            fontSize: 15,
          }}
        >
          Select Language
        </Text>

        <View style={styles.selectors}>
          <TouchableOpacity
            style={{
              ...styles.languageOptions,
              borderBottomColor: "#BEBEBE",
              borderBottomWidth: 0.7,
            }}
          >
            <Text>English</Text>
            <View
              style={{
                width: Dimensions.get("window").width * 0.045,
                height: Dimensions.get("window").width * 0.045,
                borderColor: "#bebebe",
                borderWidth: 0.7,
                borderRadius: 50,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageOptions}>
            <Text>नेपाली</Text>
            <View
              style={{
                width: Dimensions.get("window").width * 0.045,
                height: Dimensions.get("window").width * 0.045,
                borderColor: "#bebebe",
                borderWidth: 0.7,
                borderRadius: 50,
              }}
            ></View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={{
              backgroundColor: "#2ECC71",
              width: Dimensions.get("window").width * 0.8,
              borderRadius: 5,
              paddingVertical: 10,
              alignItems: "center",
              marginVertical: 15
          }}>
            <Text style={{color: "#fff"}}>Next</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 12, color: "#949494",textAlign: "center" }}>
            *You can change language later from settings.
          </Text>
        </View>
      </View>

      {/* section => footer Image */}
      <Image
        style={styles.footerImageContainer}
        source={require("../assets/Images/LanguageHero.png")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // section image container
  imageContainerImage: {
    width: Dimensions.get("window").width * 0.55,
    resizeMode: "contain",
  },

  // section language selector
  languageSelector: {
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    flexDirection: "column",
  },
  selectors: {
    borderColor: "#BEBEBE",
    borderWidth: 0.7,
    borderRadius: 5,
    width: "100%",
    marginTop: 15,
  },
  languageOptions: {
    paddingVertical: 11,
    paddingHorizontal: 13,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // section footer image
  footerImageContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.3,
    resizeMode: "contain",
  },
});

export default LanguageSelector;
