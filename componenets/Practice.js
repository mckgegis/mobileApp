import React, { useState } from 'react';
import { Animated, Text, View, StyleSheet, Button } from 'react-native';

const Practice = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0))

    const fadeIn = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 3000
        }).start();
        console.log(animation)
    }

    const fadeOut = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 3000
        }).start();
        console.log(animation)
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.fadingContainer, {opacity: animation}]}>
                <Text style={styles.fadingText}>Faded</Text>
            </Animated.View>
            <View style={styles.buttons}>
                <Button title="Fade In" onPress={fadeIn} />
                <Button title="Fade Out" onPress={fadeOut} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "aqua"
    },
    fadingText: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'space-between',
        marginVertical: 16
    }
})

export default Practice