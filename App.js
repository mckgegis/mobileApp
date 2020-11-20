import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
import Login from './componenets/Login'
import SignUp from './componenets/SignUp'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Board from './componenets/Board'
import Practice from './componenets/Practice'
import Circle from "./componenets/Circle";


const Stack = createStackNavigator() 
// const navigation = useNavigation()

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="Login" component={Login} options={{navigation: useNavigation}} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Circle" component={Circle} />
        <Stack.Screen name="Practice" component={Practice} />
      </Stack.Navigator>
    </NavigationContainer>
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
