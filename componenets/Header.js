import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from './TitleText'

const Header = props => {
    const content  = (
        <View style={styles.container}>
            <TitleText style={styles.text}>
                {props.text}
            </TitleText>
        </View>
    )

    return content
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 90, 
        paddingTop: 36
    }, 
    text: {
        fontSize: 18,
        color: 'black'
    }
})

export default Header;