import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, ScrollView, FlatList } from 'react-native';
import NumberContainer from './NumberContainer';
import UdemyCard from './UdemyCard';
import MainButton from './MainButton';
import BodyText from './BodyText';
import { Ionicons } from  '@expo/vector-icons';


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

const renderListItems = (listLength, itemData) => {
    return(
        <View style={styles.listItem}>
            <BodyText>#{listLength - itemData.index}</BodyText>
            <BodyText>{itemData.item}</BodyText>
        </View>
    )
}

const GameScreen = (props) => {
    const initial = randomGenerator(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initial.toString());
    const [pastGuesses, setPastGuesses] = useState([initial.toString()]);
    const curLow = useRef(1);
    const curHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
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
            curLow.current = currentGuess + 1
        }
        const nextNumber = randomGenerator(curLow.current, curHigh.current, currentGuess)
        setCurrentGuess(nextNumber);
        // setRounds(rounds => rounds + 1)
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses])
    }
    return (
      <View style={styles.container}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <UdemyCard style={styles.buttonContainer}>
          <MainButton title="LOWER" onPress={nextGuest.bind(this, 'lower')}>
              <Ionicons name="md-remove-circle" size={24} color='white'/>
          </MainButton>
          <MainButton title="HIGHER" onPress={nextGuest.bind(this, 'higher')}>
              <Ionicons name="md-add-circle" size={24} color="white"/>
          </MainButton>
        </UdemyCard>
        <View style={styles.listContainer}>
            {/* <ScrollView contentContainerStyle={styles.list}>
                {pastGuesses.map((guess, index) => renderListItems(guess, pastGuesses.length))}
            </ScrollView> */}
            <FlatList keyExtractor={(item) => item} data={pastGuesses} renderItem={renderListItems.bind(this, pastGuesses.length )}/>
        </View>
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
    },
    listItem: {
        borderColor: 'black',
        padding: 15,
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    listContainer: {
        width: '60%',
        flex: 1
    },
    list: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})

export default GameScreen;