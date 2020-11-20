import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
    const content  = (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    )

    return content
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }, 
    text: {
        fontSize: 50,
        color: 'blue'
    }
})

export default Header;