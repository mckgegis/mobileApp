import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCK-BvDowgtw1KGjbBJ3lJXYOEIyfd8FqI",
    authDomain: "mobileapp-d688b.firebaseapp.com",
    databaseURL: "https://mobileapp-d688b.firebaseio.com",
    projectId: "mobileapp-d688b",
    storageBucket: "mobileapp-d688b.appspot.com",
    messagingSenderId: "964223066512",
    appId: "1:964223066512:web:4edc0ad594d4c063b69315"
};

firebase.initializeApp(firebaseConfig);

export const loginWithAuth = async (email, password) => {
    try {
       await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (err) {
        console.log(err)
    }
}

export const signUpWithAuth = async(email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (err) {
        console.log(err)
    }
}