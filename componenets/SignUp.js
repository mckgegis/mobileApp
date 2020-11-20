import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signUpWithAuth } from "../config/firebase";
import Header from "./Header";
import Footer from "./Footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = () => {
    signUpWithAuth(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Header text="Jeopardy" />
      </View>
      <Text style={{ fontSize: 50, fontWeight: "700", paddingTop: 50 }}>
        Ready to Play
      </Text>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        scrollEnabled={true}
        enableAutomaticScroll={true}
        contentContainerStyle={{ paddingTop: 50 }}
      >
        <View style={styles.inputsContainer}>
          <Text style={styles.text}>Sign Up</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <Button title="Sign Up" style={styles.button} onPress={signup} />
        </View>
      </KeyboardAwareScrollView>
      <View>
        <Footer text="Footer" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%"
    // paddingTop: 10
  },
  header: {
    flex: 0.2,
    width: "100%"
  },
  footer: {
    flex: 0.2,
    width: "100%"
  },
  inputsContainer: {
    justifyContent: "center"
  },
  inputContainer: {},
  inputText: {
    width: 300,
    height: 40,
    borderColor: "blue",
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    textAlign: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 35,
    padding: 20
  },
  button: {
    borderRadius: 10
  }
});

export default SignUp;
