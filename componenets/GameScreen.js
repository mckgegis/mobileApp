import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import NumberContainer from './NumberContainer';
import UdemyCard from './UdemyCard';


const randomGenerator = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rando = Math.floor(Math.random() * (max- min)) + min;
    if (rando === exclude) {
        return randomGenerator(min, max, exclude);
    } else {
        return rando
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(randomGenerator(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const curLow = useRef(1);
    const curHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuest = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t Lie', 'You Know That Is Wrong', [
                {text: 'Sorry', style: 'cancel'}
            ]);
            return;
        }
        if (direction === 'lower' ) {
            curHigh.current = currentGuess
        } else {
            curLow.current = currentGuess
        }
        const nextNumber = randomGenerator(curLow.current, curHigh.current, currentGuess)
        setCurrentGuess(nextNumber);
        setRounds(rounds => rounds + 1)
    }
    return (
      <View style={styles.container}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <UdemyCard style={styles.buttonContainer}>
          <Button title="LOWER" onPress={nextGuest.bind(this, 'lower')} />
          <Button title="HIGHER" onPress={nextGuest.bind(this, 'higher')} />
        </UdemyCard>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;