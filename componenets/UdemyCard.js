import React from 'react';
import { View, StyleSheet } from 'react-native';

const UdemyCard = (props) => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View> 
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10
  }
});

export default UdemyCard