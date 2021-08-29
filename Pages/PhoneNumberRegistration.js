import React from "react";

import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,
} from "react-native";

// @packages
import { Ionicons } from "@expo/vector-icons";

export default function PhoneNumberRegistration() {
  const [userPhoneNumber, setUserPhoneNumber] = React.useState("");
  
  return (
    <SafeAreaView style={styles.container}>
      {/* section => input field */}
      <View style={{ marginTop: 15 }}>
        {/* back button */}
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.titleText}>Enter your mobile number</Text>

        {/* input */}
        <View style={styles.inputField}>
          <Image
            style={styles.textInputImage}
            source={require("../assets/Images/Nepal.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            +977
          </Text>
          <TextInput
            style={{ flex: 1, marginLeft: 8, fontSize: 16, fontWeight: "bold" }}
            placeholder="9812345678"
            value={userPhoneNumber}
            onChangeText={setUserPhoneNumber}
            keyboardType="number-pad"
          />
        </View>
      </View>

      {/* section => button */}
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.submitField}
      >
        <Text
          style={{
            color: "#797979",
            fontSize: 14,
          }}
        >
          * By continuing you may receive an SMS for verification. Message and
          data rates may apply.
        </Text>
        <TouchableOpacity
          onPress={Keyboard.dismiss}
          style={{
            ...styles.submitButton,
            backgroundColor:
              userPhoneNumber && userPhoneNumber.length === 10
                ? "#2ECC71"
                : "#D6D6D6",
          }}
          disabled={
            userPhoneNumber && userPhoneNumber.length === 10 ? false : true
          }
        >
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  titleText: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "500",
    color: "#343434",
  },

  // section => inputField
  inputField: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "#bebebe",
    width: Dimensions.get("window").width * 0.85,
    alignSelf: "center",
    paddingVertical: 10,
  },

  textInputImage: {
    height: 30,
    resizeMode: "contain",
  },

  // section => submit field
  submitField: {
    width: Dimensions.get("window").width * 0.85,
    alignSelf: "center",
  },
  submitButton: {
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
});
