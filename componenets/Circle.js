import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';


const circleSize = 100;

const Circle = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [idx, setIdx] = useState(0)
    const inputRange = [0, 0.001, 0.5, 0.501, 1];
    const bkgrdColor = animation.interpolate({
        inputRange,
        outputRange: ['gold', 'gold', 'gold', '#444', '#444']
    })
    const circleBkgrd = animation.interpolate({
      inputRange,
      outputRange: ["#444", "#444", "#444", "gold", "gold"]
    });
    const onPress = () => {
        const toValue = idx === 0 ? 1 : 0;
        Animated.timing(animation, {
            toValue,
            duration: 3000,
            useNativeDriver: false
        }).start();
    }
    return (
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.circleContainer,
          { backgroundColor: bkgrdColor }
        ]}
      >
        <Animated.View
          style={[
            styles.circle,
            { backgroundColor: circleBkgrd },
            {
              transform: [
                {
                  perspective: 400
                },
                {
                  rotateY: animation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ["0deg", "-90deg", "-180deg"]
                  })
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 8, 1]
                  })
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ["0%", "50%", "0%"]
                  })
                }
              ]
            }
          ]}
        >
          <TouchableOpacity onPress={onPress}>
            <View style={[styles.circle, styles.circleButton]}>
              <AntDesign name="arrowright" size={28} color={"white"} />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
}

const styles = StyleSheet.create({
    circleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8,
        paddingBottom: 100,
        // backgroundColor: 'gold'
    },
    circle: {
        // backgroundColor: '#444',
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2
    },
    circleButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Circle