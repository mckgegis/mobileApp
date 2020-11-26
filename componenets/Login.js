import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { loginWithAuth } from '../config/firebase'
import Header from './Header';
import Footer from './Footer';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = () => {
        loginWithAuth(email, password)
    }

    return (
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <Header text="Jeopardy" />
        </View>
        <Text style={{ fontSize: 50, fontWeight: "700", paddingTop: 50 }}>
          Ready to Play
        </Text>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          scrollEnabled={true}
          enableAutomaticScroll={true}
          contentContainerStyle={{ paddingTop: 50 }}
        >
          <View style={styles.inputsContainer}>
            <Text style={styles.text}>Login</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
              />
            </View>
            <View
              style={{ flexDirection: "col", justifyContent: "space-evenly" }}
            >
              <View style={styles.button} onPress={login}>
                <Button title="Login" />
              </View>
              <View
                style={{ marginTop: 15, width: "100%" }}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Button title="Create An Account" />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View>
          <Footer text="Footer" />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        // paddingTop: 10
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 6,
        shadowOpacity: .26
    },
    header: {
        flex: 0.2,
        width: '100%',
    },
    footer: {
        flex: 0.2,
        width: '100%'
    },
    inputsContainer: {
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {height: 5, width: 0},
        shadowRadius: 6,
        shadowOpacity: .5,
        width: '80%',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 50,
        alignItems:'center'
    },
    inputContainer: {
      width: 200,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputText: {
        height: 40,
        borderColor: 'blue',
        borderRadius: 10,
        borderWidth: 1,
        margin: 20,
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 35,
        padding: 20
    },
    button: {
        borderRadius: 10,
        width: '100%',
    }

});

export default Login;