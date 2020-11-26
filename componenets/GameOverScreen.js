import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import BodyText from './BodyText';
import TitleText from './TitleText';
import colors from '../constants/colors';
import MainButton from './MainButton'

const GameOverScreen = props => {
    
    return (
      <View style={styles.container}>
        <TitleText>The Game Is Over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
            // source={{
            //   uri: 'https://smileytrips.com/hong-kong-island-map-jpg/'
            // }}
            resizeMode="cover"
          />
        </View>
        <BodyText style={styles.bodyText}>
          Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        borderRadius: 150,
        height: 300,
        borderWidth: 3,
        borderColor: 'black',
        overflow: "hidden",
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: colors.primary
    },
    bodyText: {
        textAlign: 'center',
        marginHorizontal: 30,
        marginVertical: 15,
        fontSize: 20
        
    }
});

export default GameOverScreen;