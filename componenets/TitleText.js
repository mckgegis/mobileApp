import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = props => {
  return <Text style={{...styles.container, ...props.styles}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans-bold"
  }
});

export default TitleText;
