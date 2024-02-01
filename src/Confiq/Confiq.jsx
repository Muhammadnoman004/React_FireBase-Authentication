// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDK7ygsUEFzjYFKgSKbK_Uq9iGZmZD0yww",
    authDomain: "react-authentication-689f5.firebaseapp.com",
    projectId: "react-authentication-689f5",
    storageBucket: "react-authentication-689f5.appspot.com",
    messagingSenderId: "877360543132",
    appId: "1:877360543132:web:c461215ecca77cf4898459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword
}