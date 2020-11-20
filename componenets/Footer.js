import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = props => {
    const content = (
        <View>
            <Text>
                {props.text}
            </Text>
        </View>
    )

    return content
}

export default Footer;