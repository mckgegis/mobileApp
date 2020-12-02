import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import TitleText from './TitleText'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = props => {
    const content  = (
        <View style={{...styles.containerBase, ...Platform.select({ios: styles.containerIOS, android: styles.containerAndroid})}}>
            <TitleText style={styles.text}>
                {props.text}
            </TitleText>
        </View>
    )

    return content
}

const styles = StyleSheet.create({
    containerBase: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 90, 
        paddingTop: 36,
    }, 
    containerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    containerAndroid: {
        backgroundColor: '#f7287b'
    },
    text: {
        fontSize: 18,
        color: 'black'
    },
    title: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }
})

export default Header;