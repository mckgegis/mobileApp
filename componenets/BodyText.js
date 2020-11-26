import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = (props) => {
    return (
        <Text style={{...styles.container, ...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'open-sans'
    }
})

export default BodyText;