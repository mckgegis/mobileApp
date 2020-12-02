import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import BodyText from "./BodyText";
import UdemyCard from "./UdemyCard";
import colors from "../constants/colors";
import Input from "./Input";
import NumberContainer from "./NumberContainer";
import MainButton from "./MainButton";

const Udemy = props => {
  const [val, setVal] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNum, setSelectedNum] = useState();
  const animation = useRef(new Animated.Value(0)).current;
  const numInputHandler = inputText => {
    setVal(inputText.replace(/[^0-9]/g), "")};
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

  useEffect(() => {
      const updateWidth = () => {
          setButtonWidth(Dimensions.get('window').width / 4)
      };
      Dimensions.addEventListener("change", updateWidth);
      return () => {
          Dimensions.removeEventListener('change', updateWidth)
      }
  })

  const resetInput = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1
    }).start();
    setVal("");
    setConfirm(false);
  };

  const confirmInput = () => {
    const chosen = parseInt(val);
    if (isNaN(chosen) || chosen <= 0 || chosen > 99) {
      Alert.alert("Invalid number", "number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput }
      ]);
      return;
    }
    setConfirm(true);
    setVal("");
    Keyboard.dismiss();
    setSelectedNum(chosen);
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000
    }).start();
  };
  let confirmedOutput;

  if (confirm) {
    confirmedOutput = (
      <Animated.View style={{ opacity: animation, padding: 10 }}>
        <UdemyCard style={{ alignItems: "center" }}>
          <Text>You Selected</Text>
          <NumberContainer>{selectedNum}</NumberContainer>
          <MainButton
            onPress={() => {
              props.startGame(selectedNum);
            }}
          >
            START GAME
          </MainButton>
        </UdemyCard>
      </Animated.View>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text style={styles.title}>Start a new Game!</Text>
            <UdemyCard style={styles.inputContainer}>
              <BodyText>Input a Number</BodyText>
              <Input
                style={styles.input}
                keyboardType="number-pad"
                maxLength={2}
                blurOnSubmit
                value={val}
                onChangeText={numInputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={{width: buttonWidth}}>
                  <Button
                    title="Reset"
                    color={colors.accent}
                    onPress={resetInput}
                  />
                </View>
                <View style={{width: buttonWidth}}>
                  <Button
                    title="Confirm"
                    color={colors.primary}
                    onPress={confirmInput}
                  />
                </View>
              </View>
            </UdemyCard>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  button: {
    width: Dimensions.get("window").width / 4
  }
});

export default Udemy;
