import firebase from "firebase/app";
import "firebase/auth";

const authApp = firebase.initializeApp({
    apiKey: "AIzaSyB2S2N-lfd6y9hFiIqNOy6VnClsKRdmQ6g",
    authDomain: "wish-kart-app.firebaseapp.com",
    projectId: "wish-kart-app",
    storageBucket: "wish-kart-app.appspot.com",
    messagingSenderId: "677506068189",
    appId: "1:677506068189:web:ff01bdb0096e910bdc7534"
});

export default authApp;