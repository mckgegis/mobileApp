import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
// import Login from './componenets/Login'
// import SignUp from './componenets/SignUp'
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Practice from './componenets/Practice'
// import Circle from "./componenets/Circle";
import Udemy from './componenets/Udemy';
import Header from './componenets/Header';
import GameScreen from './componenets/GameScreen';
import GameOverScreen from './componenets/GameOverScreen';
// const Stack = createStackNavigator() 
// const navigation = useNavigation()
import * as Font from 'expo-font';

import { AppLoading } from 'expo';

const fetchFonts = () => {
                          return Font.loadAsync({
                             'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
                             'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
                           });
                         }

export default function App() {
  
  const [userNumber, setUserNumber] = useState()
  const [rounds, setRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)}/>
  }

  const startNewGame = () => {
    setRounds(0);
    setUserNumber(null);

  }

  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOver = (rounds) => {
    setRounds(rounds)
  }
  let content = <Udemy startGame={startGame}/>;

  if (userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOver}/>;
  } else if (rounds > 0) {
    content = <GameOverScreen rounds={rounds} userNumber={userNumber} onRestart={startNewGame}/>
  }

  return (
    <View style={styles.container}>
      <Header text="Guess a Number"/>
      {content}
      <Button title="Start Game"/>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  }
});

 // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} options={{navigation: useNavigation}} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="Circle" component={Circle} />
    //     <Stack.Screen name="Practice" component={Practice} />
    //   </Stack.Navigator>
    // </NavigationContainer>